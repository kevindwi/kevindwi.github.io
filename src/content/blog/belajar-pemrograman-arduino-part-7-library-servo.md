---
title: 'Belajar Pemrograman Arduino - Part 7 Library Servo'
description: 'Library adalah kumpulan fungsi atau perintah yang sudah dibuat sebelumnya untuk melakukan tugas-tugas tertentu. '
pubDate: 'Sep 04 2025'
heroImage: '/Screenshot from 2025-09-07 23-00-04.png'
---

**Library** adalah kumpulan fungsi atau perintah yang sudah dibuat sebelumnya untuk melakukan tugas-tugas tertentu. Anggap saja library itu seperti buku panduan atau kamus yang berisi semua instruksi yang dibutuhkan Arduino untuk berkomunikasi dengan perangkat keras tertentu, seperti servo, sensor suhu, atau sensor suara.

## Cara Menggunakan Library Servo
Pertama tama kita harus mengetahui pinout dari servo.

Modul servo punya tiga kabel utama:
- **Coklat:** Kabel Ground (GND)
- **Merah:** Kabel Power (5V)
- **Jingga/Oranye:** Kabel Sinyal (dihubungkan ke pin digital Arduino)

### **1. Memanggil Library**
Langkah pertama adalah "memasukkan" library yang kita butuhkan ke dalam program. Untuk servo, kita pakai library bawaan Arduino.

Tulis kode berikut di bagian paling atas sketsa Arduino:
```cpp
#include <Servo.h>
```

- `#include` adalah perintah untuk memasukkan library.
- `<Servo.h>` adalah nama file header dari library servo.

### **2. Membuat Objek Servo**
Setelah library dipanggil, kita perlu membuat "objek". Objek ini adalah perwakilan dari servo kita di dalam program. Analogi sederhananya, objek ini seperti "petugas toko" yang akan kita beri perintah untuk mengambil barang (fungsi) dari "rak buku" (library).

Kamu bisa memberi nama objek ini sesukamu, misalnya `servoMotor` atau `servoKanan`. Contoh di sini kita pakai `myservo`.

```cpp
Servo myservo;
```

### **3. Menghubungkan Objek ke Pin Arduino**
Sekarang, kita harus memberitahu Arduino di mana servo kita terhubung. Kita lakukan ini di fungsi `setup()`.

Kita akan gunakan fungsi `attach()` yang ada di dalam objek `myservo`.
```cpp
void setup() {
  myservo.attach(9); // Hubungkan servo ke pin digital 9
}
```

- `myservo.attach()` adalah fungsi untuk "melampirkan" objek servo ke pin Arduino.
- `9` adalah nomor pin digital tempat kabel sinyal servo terpasang. Kamu bisa ganti nomor ini sesuai kebutuhanmu.

### **4. Memberi Perintah pada Servo**
Setelah semua terpasang, kita bisa mulai memberi perintah pada servo. Perintah ini biasanya diletakkan di dalam fungsi `loop()`, agar servo bergerak berulang-ulang.

Fungsi utama untuk menggerakkan servo adalah `write()`. Fungsi ini menerima nilai derajat sudut (dari 0 hingga 180).

Contoh kode untuk membuat servo bergerak dari 0° ke 90° secara bergantian:

```cpp
#include <Servo.h>

Servo myservo; // Membuat objek servo

void setup() {
  myservo.attach(9); // Hubungkan objek ke pin digital 9
}

void loop() {
  myservo.write(0);  // Putar ke 0 derajat
  delay(500);        // Tunggu sebentar
  myservo.write(90); // Putar ke 90 derajat
  delay(500);
}
```
