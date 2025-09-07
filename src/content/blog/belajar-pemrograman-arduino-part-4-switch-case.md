---
title: 'Belajar Pemrograman Arduino - Part 4 Switch Case'
description: 'Switch Case adalah salah satu percabangan untuk memanipulasi jalanya aliran program berdasarkan conditional expression, Mengendalikan aliran program agar dapat berjalan secara fleksibel atas keadaan program dan keinginan pengguna'
pubDate: 'Sep 03 2025'
heroImage: '/Screenshot from 2025-09-07 15-49-04.png'
---

Switch Case adalah salah satu percabangan untuk memanipulasi jalanya aliran program berdasarkan conditional expression, Mengendalikan aliran program agar dapat berjalan secara fleksibel atas keadaan program dan keinginan pengguna. Pernyataan ini akan memilih pilihan yang sesuai dengan ekspresi kondisi.

Cara kerja switch tidak jauh berbeda dengan percabangan if hanya saja pada switch dikhususkan untuk penyeleksian berdasarkan nilai dari ekspresi. Dalam pernyataan switch, penyeleksian dilakukan dengan memeriksa kondisi nilai dari suatu variabel bertipe integer, char atau enum.

```cpp
switch (kondisi)
{
	case konstanta-1 :
		… perintah;
	   break;
   case konstanta-2 :
		… perintah;
	   break;
   default :
	   … perintah;
	   break;
}
```

Kode di atas merupakan struktur dari switch.

```cpp
int ledPin = 8;
int buttonPin = 2;

int buttonState = 0;
int ledMode = 0;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  int reading = digitalRead(buttonPin);

  if (reading == LOW && buttonState == HIGH) {
    ledMode++; // Ganti mode LED
    if (ledMode > 3) ledMode = 0; // Kembali ke mode 0 setelah mode 3
  }

  buttonState = reading;
  Serial.println(ledMode);

  switch (ledMode) {
	case 1:
      // Nyalakan LED
      digitalWrite(ledPin, HIGH);
      break;
    case 2:
      // LED berkedip cepat
      digitalWrite(ledPin, HIGH);
      delay(200);
      digitalWrite(ledPin, LOW);
      delay(200);
      break;
    case 3:
      // LED berkedip lambat
      digitalWrite(ledPin, HIGH);
      delay(500);
      digitalWrite(ledPin, LOW);
      delay(500);
      break;
    default:
      digitalWrite(ledPin, LOW);
      break;
  }
}
```
![](/Screencastfrom2025-09-0715-40-53-ezgif.com-video-to-gif-converter.gif)
Kode di atas merupakan contoh pengaplikasian switch case pada arduino. Program ini menggunakan push button untuk mengganti mode LED. Setiap kali tombol ditekan, mode LED berubah.
- Mode 0: Masuk ke default: LED mati.
- Mode 1: LED menyala terus.
- Mode 2: LED berkedip cepat.
- Mode 3: LED berkedip lambat.
