---
title: 'Cara Cek Dioda Zener pada Power Supply SMPS'
description: 'Dioda Zener adalah jenis dioda khusus yang berfungsi menjaga tegangan tetap stabil pada nilai tertentu.'
pubDate: 'Sep 04 2025'
heroImage: '/dioda-zener.png'
---

Dioda Zener adalah jenis dioda khusus yang berfungsi menjaga tegangan tetap stabil pada nilai tertentu. Berbeda dengan dioda biasa, komponen ini justru dirancang agar bisa bekerja dengan baik pada kondisi reverse bias (tegangan terbalik) tanpa mengalami kerusakan.

Setiap dioda Zener punya nilai tegangan kerja yang sudah ditentukan pabrikan. Nilai ini biasanya ditandai di badan komponennya. Bentuknya kecil, sering kali berwarna merah dengan garis hitam di salah satu sisi.

## Cara Mengecek Dioda Zener
Pemeriksaan dioda Zener mirip dengan dioda biasa, hanya ada sedikit perbedaan saat pembacaan. Kamu bisa menggunakan multimeter analog atau multimeter digital.
### 1. Menggunakan Multimeter Analog
- Atur multimeter di skala x1 atau x10 lalu kalibrasi jarum ke angka nol.
- Uji 1: Tempelkan probe merah ke katoda dan probe hitam ke anoda. Jarum harus bergerak, tapi tidak sampai mentok ke kanan. Kalau jarum tidak bergerak sama sekali atau justru mentok penuh, dioda kemungkinan rusak.
- Uji 2 (dibalik): Tukar posisi probe. Jarum seharusnya tidak bergerak. Kalau jarum ikut bergerak, berarti dioda bermasalah.

### 2. Menggunakan Multimeter Digital
- Atur multimeter ke mode dioda atau buzzer.
- Uji 1: Tempelkan probe merah ke katoda dan probe hitam ke anoda. Layar harus menampilkan OL (Open Line). Jika malah muncul angka, berarti dioda rusak.
- Uji 2 (dibalik): Balik posisi probe. Layar harus menunjukkan nilai antara 0,3 - 0,6 V. Kalau terbaca 0, buzzer berbunyi, atau lampu indikator menyala, itu tanda dioda sudah rusak.

## Cara Mengetahui Tegangan Zener
Untuk mengetahui kapasitas voltase dioda Zener secara akurat, gunakan alat khusus seperti backlight tester. Alat ini bisa langsung membaca dan menampilkan tegangan kerja dari dioda yang sedang diuji.

## Tanda-Tanda Dioda Zener Rusak
Kerusakan bisa terlihat secara fisik misalnya gosong, pecah, atau retak. Tapi sering juga rusaknya tidak terlihat, biasanya berupa short (hubung singkat) di antara kakinya.
Kalau sudah rusak, gantilah dengan dioda Zener yang punya tegangan sama atau sedikit lebih tinggi. Misalnya, jika aslinya 3V, bisa diganti dengan 3,5V; atau jika 5V, bisa diganti dengan 5,1V.
