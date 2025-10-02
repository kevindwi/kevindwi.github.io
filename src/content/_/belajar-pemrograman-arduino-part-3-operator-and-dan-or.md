---
title: 'Belajar Pemrograman Arduino - Part 3 Operator AND & OR'
description: 'Operator AND (`&&`) mengevaluasi apakah kedua kondisi yang bandingkan bernilai `true` (benar). Jika salah satu atau kedua kondisi bernilai `false` (salah), maka seluruh ekspresi akan menjadi `false`.'
pubDate: 'Aug 30 2025'
heroImage: '/arduino-and-or.png'
---

Operator aritmatika merupakan suatu simbol yang digunakan untuk melakukan operasi tertentu. Ada banyak jenis operator aritmatika, namun kali ini kita akan membahas dua saja yaitu operator **AND** (`&&`) dan **OR** (`||`).

## Operator Logika AND (`&&`)

Operator **AND** (`&&`) mengevaluasi apakah **kedua** kondisi yang bandingkan bernilai `true` (benar). Jika salah satu atau kedua kondisi bernilai `false` (salah), maka seluruh ekspresi akan menjadi `false`.

**Contoh Penggunaan:**
![](/arduino-and-or.png)
Hubungkan komponen seperti gambar di atas, lalu buat program seperti kode di bawah.
```cpp
int ledPinRed = 8;
int buttonPin1 = 2;
int buttonPin2 = 3;

void setup() {
  Serial.begin(9600);
  pinMode(ledPinRed, OUTPUT);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
}

void loop() {
  int btn1 = digitalRead(buttonPin1);
  int btn2 = digitalRead(buttonPin2);

  if (btn1 == HIGH && btn2 == HIGH) {
    digitalWrite(ledPinRed, HIGH);
  } else {
    digitalWrite(ledPinRed, LOW);
  }
}
```

Dalam contoh ini, LED di pin 8 akan menyala jika `btn1` dan `btn2` bernilai HIGH (1). Yang artinya kedua button ditekan secara bersamaan. Jika hanya satu button saja yang ditekan, LED tidak akan menyala.

## Operator Logika OR (`||`)
Operator **OR** (`||`) mengevaluasi apakah salah satu dari kedua kondisi yang bandingkan bernilai `true` (benar). Jika salah satu atau kedua kondisi bernilai `true` (benar), maka seluruh ekspresi akan menjadi `benar`.

**Contoh Penggunaan:**
```cpp
int ledPinRed = 8;
int buttonPin1 = 2;
int buttonPin2 = 3;

void setup() {
  Serial.begin(9600);
  pinMode(ledPinRed, OUTPUT);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
}

void loop() {
  int btn1 = digitalRead(buttonPin1);
  int btn2 = digitalRead(buttonPin2);

  if (btn1 == HIGH || btn2 == HIGH) {
    digitalWrite(ledPinRed, HIGH);
  } else {
    digitalWrite(ledPinRed, LOW);
  }
}
```

Dalam contoh ini, LED di pin 8 akan menyala jika **salah satu** dari `btn1` dan `btn2` bernilai HIGH (1). Yang artinya **salah satu** button ditekan maka LED akan menyala.
