---
title: 'Optical Character Recognition'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jun 07 2025'
heroImage: '/Portable_scanner_and_OCR.jpg'
---

# Introduction

## Importing Library


```python
import os
# import csv
# import numpy as np
from tqdm import tqdm
from PIL import Image
import matplotlib.pyplot as plt

import torch
from torch.utils.data import Dataset, DataLoader
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import torchvision.transforms as transforms

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Using device: {device}")
```

    Using device: cpu


## Dataset
Untuk dataset saya menggunakan [OCR-Dataset](https://www.kaggle.com/datasets/harieh/ocr-dataset) yang memiliki lebih dari 200000 gambar dengan 62 class yang berisikan gambar alfanumerik baik lowercase maupun uppercase. Dataset dibuat menggunakan 3475 gaya font yang tersedia di Google Fonts. Setiap karakter alfanumerik (huruf besar, huruf kecil, dan angka) dibuat dalam setiap gaya font dan disimpan dalam direktori.


```python
!curl -L -o ocr-dataset.zip https://www.kaggle.com/api/v1/datasets/download/harieh/ocr-dataset
!unzip ocr-dataset.zip
```


```python

# def load_label_from_csv(file_path):
# 	label = []
# 	with open(file_path, 'r', newline='') as csvfile:
# 		reader = csv.DictReader(csvfile)
# 		for row in reader:
# 			label.append(row)
# 	return label

# csv_file_path = 'labels.csv'
# label_data = load_label_from_csv(csv_file_path)
# print(label_data)
```

    [{'0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', 'a': '10', 'b': '11', 'c': '12', 'd': '13', 'e': '14', 'f': '15', 'g': '16', 'h': '17', 'i': '18', 'j': '19', 'k': '20', 'l': '21', 'm': '22', 'n': '23', 'o': '24', 'p': '25', 'q': '26', 'r': '27', 's': '28', 't': '29', 'u': '30', 'v': '31', 'w': '32', 'x': '33', 'y': '34', 'z': '35', 'A': '36', 'B': '37', 'C': '38', 'D': '39', 'E': '40', 'F': '41', 'G': '42', 'H': '43', 'I': '44', 'J': '45', 'K': '46', 'L': '47', 'M': '48', 'N': '49', 'O': '50', 'P': '51', 'Q': '52', 'R': '53', 'S': '54', 'T': '55', 'U': '56', 'V': '57', 'W': '58', 'X': '59', 'Y': '60', 'Z': '61'}]


## Preparing Dataset

Sebelum ke langkah selanjutnya, kita perlu menyiapkan dataset kita menjadi pytorch Dataset.

Struktur dataset kita:
```txt
dataset/
├── 0/
│   ├── 1.png
│   ├── 2.png
├── A_U/
│   ├── A_U_1.png
│   ├── A_U_2.png
├── a_L/
│   ├── A_L_1.png
│   ├── A_L_2.png
```


```python
class OCRDataset(Dataset):
	def __init__(self, dataset_path, transform=None):
		self.transform = transform
		self.samples = []

		for label_dir in os.listdir(dataset_path):
			label_path = os.path.join(dataset_path, label_dir)
			if os.path.isdir(label_path):
				label = label_dir.split("_")[0]
				for img_name in os.listdir(label_path):
					img_path = os.path.join(label_path, img_name)
					self.samples.append((img_path, label))

		self.classes = sorted(set(label for _, label in self.samples))
		self.class_to_idx = {char: idx for idx, char in enumerate(self.classes)}

	def __len__(self):
		return len(self.samples)

	def __getitem__(self, idx):
		img_path, label_char = self.samples[idx]

		image = Image.open(img_path).convert("L")
		label = self.class_to_idx[label_char]

		if self.transform:
			image = self.transform(image)
		return image, label


# Hyperparameters
batch_size = 16
learning_rate = 0.001

transform = transforms.Compose([
	transforms.Resize((32, 32)),
	transforms.ToTensor(),
])

dataset = OCRDataset("dataset/", transform=transform)

train_dataset, test_dataset = torch.utils.data.random_split(dataset, [0.8, 0.2])

train_loader = DataLoader(train_dataset,
                          batch_size=batch_size,
						  shuffle=True,
						  num_workers=2,
						  pin_memory=True)
test_loader = DataLoader(test_dataset,
                         batch_size=batch_size,
						 num_workers=2,
                         pin_memory=True)
```

```py
self.samples = []
for label_dir in os.listdir(dataset_path):
	label_path = os.path.join(dataset_path, label_dir)
	if os.path.isdir(label_path):
		label = label_dir.split("_")[0]
		for img_name in os.listdir(label_path):
			img_path = os.path.join(label_path, img_name)
			self.samples.append((img_path, label))
```
Kode ini membaca direktori dataset dan mengumpulkan padanan image path dan label pada list `self.samples`.

`transforms.Resize((32, 32))` melakukan resize pada gambar agar menyesuaikan dengan input model (32, 32).

Sedangkan `transforms.ToTensor()` mengubah gambar menjadi torch tensor.


```python
# Checking the shape of loader
for idx, data in enumerate(train_loader):
    datas = data[0]
    labels = data[1]
    print("Datas shape:", datas[0].shape)
    print("Labels shape:", labels.shape)
    break
```

    /media/kevin/external/dev/python/OCR/ocr-sentence/.venv/lib/python3.12/site-packages/torch/utils/data/dataloader.py:665: UserWarning: 'pin_memory' argument is set as true but no accelerator is found, then device pinned memory won't be used.
      warnings.warn(warn_msg)


    Datas shape: torch.Size([1, 32, 32])
    Labels shape: torch.Size([16])



```python
# Ambil satu batch dari dataloader
images, labels = next(iter(train_loader))

# Ambil satu gambar dan label
img = images[0]
label_idx = labels[0].item()

# Tampilkan label asli (jika kamu pakai mapping karakter)
idx_to_class = {v: k for k, v in dataset.class_to_idx.items()}
label_char = idx_to_class[label_idx]

# Tampilkan gambar
plt.imshow(img.squeeze())
plt.title(f"Label: {label_char}")
plt.axis('off')
plt.show()
```



![png](/ocr-sentence_files/ocr-sentence_10_0.png)



## Create Model


```python
class OCRModel(nn.Module):
    def __init__(self, num_classes=62):
        super(OCRModel, self).__init__()
        self.net = nn.Sequential(
            nn.Conv2d(1, 16, 3, padding=1),   # (B, 1, 32, 32) -> (B, 16, 32, 32)
            nn.ReLU(),
            nn.MaxPool2d(2),                  # -> (B, 16, 16, 16)
            nn.Conv2d(16, 32, 3, padding=1),  # -> (B, 32, 16, 16)
            nn.ReLU(),
            nn.MaxPool2d(2),                  # -> (B, 32, 8, 8)
            nn.Flatten(),                     # -> (B, 32*8*8)
            nn.Linear(32*8*8, 128),
            nn.ReLU(),
            nn.Linear(128, num_classes)
        )

    def forward(self, x):
        return self.net(x)

```


```python
num_classes = 62  # 62 class
# model = CNN(num_classes=num_classes).to(device)
model = OCRModel().to(device)

criterion = nn.CrossEntropyLoss()  # cocok untuk output logits + label int
optimizer = optim.AdamW(model.parameters(), lr=learning_rate, weight_decay=0.01)
```


```python
%pip install torchsummary
```


```python
from torchsummary import summary

summary(model, input_size=(1, 32, 32))
```

    ----------------------------------------------------------------
            Layer (type)               Output Shape         Param #
    ================================================================
                Conv2d-1           [-1, 16, 32, 32]             160
                  ReLU-2           [-1, 16, 32, 32]               0
             MaxPool2d-3           [-1, 16, 16, 16]               0
                Conv2d-4           [-1, 32, 16, 16]           4,640
                  ReLU-5           [-1, 32, 16, 16]               0
             MaxPool2d-6             [-1, 32, 8, 8]               0
               Flatten-7                 [-1, 2048]               0
                Linear-8                  [-1, 128]         262,272
                  ReLU-9                  [-1, 128]               0
               Linear-10                   [-1, 62]           7,998
    ================================================================
    Total params: 275,070
    Trainable params: 275,070
    Non-trainable params: 0
    ----------------------------------------------------------------
    Input size (MB): 0.00
    Forward/backward pass size (MB): 0.44
    Params size (MB): 1.05
    Estimated Total Size (MB): 1.49
    ----------------------------------------------------------------


## Training


```python
num_epochs = 10

scaler = torch.amp.GradScaler('cpu')
scheduler = optim.lr_scheduler.OneCycleLR(optimizer,
                                        max_lr=0.01,
                                        total_steps=len(train_loader) * num_epochs)
```


```python
def train(model, train_loader, val_loader, optimizer, criterion, device, epochs=10):
    model.to(device)
    train_loss_history = []
    train_acc_history = []
    val_acc_history = []

    for epoch in range(epochs):
        model.train()
        running_loss = 0.0
        correct = 0
        total = 0

        loop = tqdm(train_loader, desc=f"Epoch [{epoch+1}/{epochs}]", leave=False)

        for images, labels in loop:
            images, labels = images.to(device), labels.to(device)

            # Forward
            outputs = model(images)
            loss = criterion(outputs, labels)

            # Backward
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            # Statistik
            running_loss += loss.item()
            _, predicted = outputs.max(1)
            total += labels.size(0)
            correct += predicted.eq(labels).sum().item()

            loop.set_postfix(loss=loss.item(), acc=100.*correct/total)

        train_loss = running_loss / len(train_loader)
        train_acc = 100. * correct / total
        val_acc = evaluate(model, val_loader, device)

        train_loss_history.append(train_loss)
        train_acc_history.append(train_acc)
        val_acc_history.append(val_acc)

        print(f"Epoch [{epoch+1}/{epochs}] → Train Acc: {train_acc:.2f}%, Val Acc: {val_acc:.2f}%")

    # Plot hasil training
    plot_training(train_loss_history, train_acc_history, val_acc_history)

def evaluate(model, dataloader, device):
    model.eval()
    correct = 0
    total = 0
    with torch.no_grad():
        for images, labels in dataloader:
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            _, predicted = outputs.max(1)
            total += labels.size(0)
            correct += predicted.eq(labels).sum().item()
    return 100. * correct / total

def plot_training(losses, train_accs, val_accs):
    epochs = range(1, len(losses)+1)

    plt.figure(figsize=(12, 5))

    plt.subplot(1, 2, 1)
    plt.plot(epochs, losses, marker='o')
    plt.title("Training Loss")
    plt.xlabel("Epoch")
    plt.ylabel("Loss")

    plt.subplot(1, 2, 2)
    plt.plot(epochs, train_accs, label="Train Acc", marker='o')
    plt.plot(epochs, val_accs, label="Val Acc", marker='o')
    plt.title("Accuracy")
    plt.xlabel("Epoch")
    plt.ylabel("Accuracy (%)")
    plt.legend()

    plt.tight_layout()
    plt.show()

```


```python
train(model, train_loader, test_loader, optimizer, criterion, device, epochs=10)
torch.save({
    'model_state_dict': model.state_dict(),
    'optimizer_state_dict': optimizer.state_dict(),
}, 'ocr_model.pth')
```



    Epoch [1/10] → Train Acc: 73.90%, Val Acc: 83.29%
    Epoch [2/10] → Train Acc: 85.03%, Val Acc: 86.07%
    Epoch [3/10] → Train Acc: 86.91%, Val Acc: 87.15%
    Epoch [4/10] → Train Acc: 87.97%, Val Acc: 88.23%
    Epoch [5/10] → Train Acc: 88.72%, Val Acc: 88.37%
    Epoch [6/10] → Train Acc: 89.28%, Val Acc: 88.85%
    Epoch [7/10] → Train Acc: 89.77%, Val Acc: 88.83%
    Epoch [8/10] → Train Acc: 90.18%, Val Acc: 89.19%
    Epoch [9/10] → Train Acc: 90.49%, Val Acc: 89.49%
    Epoch [10/10] → Train Acc: 90.77%, Val Acc: 89.54%




![png](/ocr-sentence_files/ocr-sentence_19_20.png)



# Predict


```python
model2 = OCRModel().to(device)

checkpoint = torch.load("ocr_model.pth", weights_only=True)
model2.load_state_dict(checkpoint['model_state_dict'])
optimizer.load_state_dict(checkpoint['optimizer_state_dict'])

model2.eval()
```




    OCRModel(
      (net): Sequential(
        (0): Conv2d(1, 16, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
        (1): ReLU()
        (2): MaxPool2d(kernel_size=2, stride=2, padding=0, dilation=1, ceil_mode=False)
        (3): Conv2d(16, 32, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1))
        (4): ReLU()
        (5): MaxPool2d(kernel_size=2, stride=2, padding=0, dilation=1, ceil_mode=False)
        (6): Flatten(start_dim=1, end_dim=-1)
        (7): Linear(in_features=2048, out_features=128, bias=True)
        (8): ReLU()
        (9): Linear(in_features=128, out_features=62, bias=True)
      )
    )




```python

idx_to_class = {v: k for k, v in dataset.class_to_idx.items()}

def predict_image(model, image_path, transform, device, idx_to_class):
    # Load gambar dan transform
    image = Image.open(image_path).convert("L")  # grayscale
    image = transform(image).unsqueeze(0).to(device)  # tambah batch dimensi

    model.eval()
    with torch.no_grad():
        output = model(image)
        _, predicted = output.max(1)
        predicted_idx = predicted.item()
        predicted_label = idx_to_class[predicted_idx]

    return predicted_label

```


```python
# Gunakan transformasi yang sama seperti saat training
transform = transforms.Compose([
    transforms.Resize((32, 32)),
    transforms.ToTensor()
])

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
idx_to_class = {v: k for k, v in dataset.class_to_idx.items()}

img_path = "dataset/K_U/K_U_500.png"

predicted = predict_image(model2, img_path, transform, device, idx_to_class)
print("Predicted label:", predicted)

img = Image.open(img_path)
# Tampilkan gambar
plt.imshow(img)
plt.title(f"Label: {predicted}")
plt.axis('off')
plt.show()

```

    [W607 14:49:22.221945559 NNPACK.cpp:57] Could not initialize NNPACK! Reason: Unsupported hardware.
    [W607 14:49:22.228477968 NNPACK.cpp:57] Could not initialize NNPACK! Reason: Unsupported hardware.


    Predicted label: K




![png](/ocr-sentence_files/ocr-sentence_23_2.png)
