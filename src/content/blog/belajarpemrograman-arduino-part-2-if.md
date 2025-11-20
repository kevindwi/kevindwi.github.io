---
title: 'Belajar Pemrograman Arduino - Part 2 Percabangan IF dengan Push Button'
description: 'Percabangan if memungkinkan program mengambil keputusan dan menjalankan kode tertentu berdasarkan suatu kondisi. Tanpa percabangan, program akan berjalan secara linear, dari baris pertama hingga terakhir, tanpa ada fleksibilitas untuk merespons input atau situasi yang berbeda.'
date: 'Aug 30 2025'
thumbnail: '/arduino-push-button.png'
---

Percabangan **if** memungkinkan program mengambil keputusan dan menjalankan kode tertentu berdasarkan suatu kondisi. Tanpa percabangan, program akan berjalan secara linear, dari baris pertama hingga terakhir, tanpa ada fleksibilitas untuk merespons input atau situasi yang berbeda. Jadi, bagaimana **if** bekerja dan mengapa ia sangat penting?

## Apa Itu Percabangan If?

Pada dasarnya, percabangan **if** (jika) adalah sebuah struktur kontrol yang mengevaluasi sebuah **kondisi Boolean** (kondisi yang hanya bisa bernilai **benar** atau **salah**). Jika kondisi tersebut **benar**, blok kode di dalam struktur **if** akan dieksekusi. Sebaliknya, jika kondisi tersebut **salah**, blok kode tersebut akan dilewati dan program akan melanjutkan eksekusi ke baris berikutnya.

```cpp
if(kondisi){
	// kode dijalankan jika kondisi true
}
```

Kode di atas merupakan struktur kode if. Ada beberapa percabangan if seperti:

### Percabangan If...Else
```cpp
if(kondisi){
	// kode dijalankan jika kondisi true
} else {

}
```

`else` akan dijalankan jika kondisi `if` tidak terpenuhi.

### Percabangan If...Elif...Else
```cpp
if(kondisi){

} else if(kondisi) {

} else {

}
```

`else if` akan dijalankan jika kondisi `if` di atasnya tidak terpenuhi.

## Contoh Program Menggunakan Push Button

Sebelum masuk ke kode kita akan membuat rangkaiannya terlebih dahulu. Kita akan menggunakan software simulasi bernama [Tinkercad](https://www.tinkercad.com).

![](/arduino-push-button.png)

Lalu kode programnya akan seperti di bawah.

```cpp
int ledPin = 13;
int buttonPin = 2;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  int reading = digitalRead(buttonPin);

  if (reading == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

Contoh kode di atas, jika tombol ditekan maka program akan mengirimkan sinyal HIGH ke pin 13. Hal itu akan membuat LED build in pada arduino menyala.

Jika rangkaian dan kode benar maka hasilnya akan seperti ini.
![](/arduino-push-button-animation.gif)


## Referensi:
1. https://www.petanikode.com/cpp-percabangan
2. https://docs.arduino.cc/built-in-examples/digital/Button
