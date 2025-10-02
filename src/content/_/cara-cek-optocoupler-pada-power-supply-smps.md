---
title: 'Cara Cek Optocoupler pada Power Supply SMPS'
description: 'Fungsi dari komponen optocoupler bisa bermacam-macam diantaranya sebagai switch atau saklar untuk kontrol tegangan yang menjadi penghubung bagian primer dan sekunder power supply.'
pubDate: 'Sep 05 2025'
heroImage: '/cek-optocoupler.png'
---

Optocoupler adalah jenis IC yang berfungsi sebagai penghubung antara bagian primer dan bagian sekunder pada power supply.

Jika optocoupler rusak, akan muncul hal-hal berikut:
- **Tegangan turun:** Tegangan output di bagian sekunder akan menurun secara drastis (misalnya dari 12V menjadi 7V).
- **Lampu berkedip:** Lampu indikator power akan berkedip-kedip atau tidak menyala normal.
- **Hidup-mati:** Perangkat bisa hidup sebentar lalu mati, atau bahkan mati total.

Fungsi dari komponen optocoupler bisa bermacam-macam diantaranya sebagai switch atau saklar untuk kontrol tegangan yang menjadi penghubung bagian primer dan sekunder power supply.

Umumnya, optocoupler memiliki 4 atau 6 kaki. Pada modul power supply modern, komponen ini biasa digunakan, sementara pada model lama tidak. Posisinya selalu membelah garis batas antara bagian primer dan sekunder. Misalnya, pada optocoupler PC817, kaki 1 dan 2 berada di bagian sekunder, sementara kaki 3 dan 4 berada di bagian primer.

### Cara Memeriksa Optocoupler
Untuk hasil yang paling akurat, optocoupler sebaiknya dilepas dari rangkaian sebelum diukur.
#### Menggunakan Multimeter Analog
1. **Pengaturan:** Atur multimeter pada nilai x1 dan kalibrasi jarum hingga menunjuk angka nol.
2. **Sisi Sekunder (Kaki 1 & 2):**
    - Sentuhkan probe hitam ke kaki 1 dan probe merah ke kaki 2. Jarum harus bergerak ke kanan, tetapi jangan sampai mentok.
    - Jika jarum tidak bergerak atau bergerak sampai mentok, optocoupler rusak.
    - Balik posisi probe; jarum tidak boleh bergerak sama sekali. Jika bergerak, optocoupler rusak.
3. **Sisi Primer (Kaki 3 & 4):**
    - Sentuhkan probe pada kaki 3 dan 4. Jarum tidak boleh bergerak sama sekali. Jika bergerak sedikit pun, optocoupler rusak.

#### Menggunakan Multimeter Digital
1. **Pengaturan:** Atur multimeter ke mode dioda atau buzzer.
2. **Sisi Sekunder (Kaki 1 & 2):**
    - Sentuhkan probe merah ke kaki 1 dan probe hitam ke kaki 2. Layar harus menampilkan nilai angka. Jika terbaca nol atau tidak ada nilai, optocoupler rusak.
    - Balik posisi probe; multimeter tidak boleh menampilkan nilai apa pun.
3. **Sisi Primer (Kaki 3 & 4):**
    - Uji kedua kaki ini dengan probe. Multimeter tidak boleh menampilkan nilai atau mengeluarkan suara. Jika ada nilai yang terbaca, optocoupler rusak.

Kerusakan optocoupler jarang berupa korsleting, tetapi lebih sering berupa kerusakan fisik seperti retak atau terbakar.
