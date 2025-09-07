---
title: 'Belajar Pemrograman Arduino - Part 6 Fungsi'
description: ' Function adalah sebuah struktur, Pengelompokan yang mengandung sekelompok pernyataan yang akan dilaksanakan oleh CPU jika nama function tersebut dipanggil untuk dieksekusi, kecuali untuk function utama yaitu int main() yang akan dieksekusi secara otomatis.'
pubDate: 'Sep 03 2025'
heroImage: '/Screenshot from 2025-09-07 16-50-50.png'
---

Function adalah sebuah struktur, Pengelompokan yang mengandung sekelompok pernyataan yang akan dilaksanakan oleh CPU jika nama function tersebut dipanggil untuk dieksekusi, kecuali untuk function utama yaitu int main() yang akan dieksekusi secara otomatis.

Struktur dasar fungsi dalam pemrograman adalah:
```cpp
tipe_data nama_fungsi(parameter) {
  // kode yang akan dijalankan
  return nilai; // jika fungsi memiliki tipe data selain void
}
```

Contoh penggunaan fungsi:
```cpp
int ledPinRed = 8;
int ledPinBlue = 9;

void setup() {
  Serial.begin(9600);
  pinMode(ledPinRed, OUTPUT);
  pinMode(ledPinBlue, OUTPUT);
}

void loop() {
  // Nyalakan LED Merah selama 1 detik
  nyalakanLedMerah(1000);
  // Nyalakan LED Biru selama 1 detik
  nyalakanLedBiru(1000);
}

// Fungsi untuk menyalakan LED Merah
void nyalakanLedMerah(int durasi) {
  digitalWrite(ledPinRed, HIGH);
  delay(durasi);
  digitalWrite(ledPinRed, LOW);
}

// Fungsi untuk mematikan LED Biru
void nyalakanLedBiru(int durasi) {
  digitalWrite(ledPinBlue, HIGH);
  delay(durasi);
  digitalWrite(ledPinBlue, LOW);
}
```

Kode di atas merupakan contoh pengaplikasian fungsi pada arduino.
![](/Screencastfrom2025-09-0716-38-43-ezgif.com-video-to-gif-converter.gif)
Program ini menggunakan tiga fungsi:
- **nyalakanLedMerah(int durasi)**: Fungsi untuk menyalakan LED Merah selama durasi tertentu.
- **nyalakanLedBiru(int durasi)**: Fungsi untuk menyalakan LED Biru selama durasi tertentu.
- Fungsi-fungsi ini dipanggil dalam `loop()` untuk mengontrol LED sesuai dengan kebutuhan.
