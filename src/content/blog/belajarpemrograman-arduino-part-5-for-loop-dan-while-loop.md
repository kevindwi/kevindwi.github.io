---
title: 'Belajar Pemrograman Arduino - Part 5 For Loop dan While Loop'
description: 'Perulangan adalah struktur kontrol dalam pemrograman yang memungkinkan kode untuk diulang beberapa kali berdasarkan kondisi tertentu.'
pubDate: 'Sep 03 2025'
heroImage: '/Screenshot from 2025-09-07 16-21-56.png'
---

Perulangan adalah struktur kontrol dalam pemrograman yang memungkinkan kode untuk diulang beberapa kali berdasarkan kondisi tertentu. Perulangan digunakan untuk mengotomatisasi tugas yang berulang, menghemat waktu, dan meningkatkan efisiensi kode.
## For Loop
for loop adalah jenis perulangan yang digunakan untuk mengulang kode sejumlah tertentu kali. Struktur dasar for loop adalah:
```cpp
for (init-statement; condition-expression; end-expression){
   // kode yang akan diulang
}
```

Contoh penggunaan for loop:
```cpp
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  //LED berkedip 5 kali dengan interval 200ms
  for (int i = 0; i < 5; i++) {
    digitalWrite(ledPin, HIGH); // Nyalakan LED
    delay(200);                // Tunggu 200ms
    digitalWrite(ledPin, LOW);  // Matikan LED
    delay(200);                // Tunggu 200ms
  }

  delay(1000);

  // LED berkedip dengan interval yang semakin lama
  for (int i = 100; i <= 500; i += 100) {
    digitalWrite(ledPin, HIGH); // Nyalakan LED
    delay(i);                  // Tunggu sesuai dengan nilai i
    digitalWrite(ledPin, LOW);  // Matikan LED
    delay(i);                  // Tunggu sesuai dengan nilai i
  }

  delay(1000); // Tunggu 1 detik sebelum mengulangi loop
}
```

Kode di atas merupakan contoh pengaplikasian switch case pada arduino.
<video controls autoplay loop>
  <source src="/Screencast%20from%202025-09-07%2016-20-37.webm" type="video/mp4" autoplay>
</video>
Program ini menggunakan dua contoh `for` loop:
- **For 1**: LED berkedip 5 kali dengan interval tetap 200ms.
- **For 2**: LED berkedip dengan interval yang semakin lama (100ms, 200ms, 300ms, 400ms, 500ms).
- `for` loop digunakan untuk mengulangi blok kode beberapa kali berdasarkan kondisi yang ditentukan.

## While Loop
while loop adalah jenis perulangan yang digunakan untuk mengulang kode selama kondisi tertentu masih benar. Struktur dasar while loop adalah:
```cpp
while(kondisi){
 pernyataan;
 …
}
```

Contoh penggunaan while loop:
```cpp
const int ledPin = 13;
int i = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // LED berkedip 5 kali dengan interval 200ms
  i = 0;
  while (i < 5) {
    digitalWrite(ledPin, HIGH); // Nyalakan LED
    delay(200);                // Tunggu 200ms
    digitalWrite(ledPin, LOW);  // Matikan LED
    delay(200);                // Tunggu 200ms
    i++;                       // Increment variabel i
  }

  delay(1000); // Tunggu 1 detik sebelum pola berikutnya

  // LED berkedip dengan interval yang semakin lama
  int interval = 100; // Variabel untuk interval
  while (interval <= 500) {
    digitalWrite(ledPin, HIGH); // Nyalakan LED
    delay(interval);           // Tunggu sesuai dengan interval
    digitalWrite(ledPin, LOW);  // Matikan LED
    delay(interval);           // Tunggu sesuai dengan interval
    interval += 100;           // Tambah interval
  }

  delay(1000); // Tunggu 1 detik sebelum mengulangi loop
}
```

Kode di atas akan menghasilkan hasil yang sama seperti for loop.

<video controls autoplay loop>
  <source src="/Screencast%20from%202025-09-07%2016-20-37.webm" type="video/mp4" autoplay>
</video>
