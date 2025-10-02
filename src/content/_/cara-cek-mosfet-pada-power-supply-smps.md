---
title: 'Cara Cek MOSFET pada Power Supply SMPS'
description: 'Transistor MOSFET adalah komponen elektronika yang sangat penting, terutama pada modul power supply. Sering disebut Power MOSFET, komponen ini berperan vital dan paling sering mengalami kerusakan karena bebannya yang sangat tinggi. '
pubDate: 'Sep 05 2025'
heroImage: '/cek-mosfet.png'
---

Transistor **MOSFET** adalah komponen elektronika yang sangat penting, terutama pada modul power supply. Sering disebut Power MOSFET, komponen ini berperan vital dan paling sering mengalami kerusakan karena bebannya yang sangat tinggi. MOSFET bertugas sebagai saklar elektronik yang mengendalikan aliran arus. Maka dari itu,MOSFET sering kali menjadi penyebab utama kerusakan "mati total" pada perangkat. Oleh karena itu, jika ada perangkat elektronik yang mati total, MOSFET menjadi komponen pertama yang diperiksa.

Ada dua tipe MOSFET, yaitu N-channel (yang paling umum) dan P-channel. Setiap MOSFET memiliki tiga kaki utama: Gate (G), Drain (D), dan Source (S).

Kadang-kadang, Anda tidak akan menemukan MOSFET yang terpasang. Ini karena MOSFET sudah menyatu di dalam IC power. Untuk mengetahuinya, cek datasheet-nya di internet.
## Cara Memeriksa MOSFET
Untuk memastikan akurasi, idealnya MOSFET harus dilepas dari rangkaian saat diuji.
### 1. Pemeriksaan MOSFET Tipe N-Channel
**Menggunakan Multimeter Analog:**
- Pengaturan: Atur multimeter pada nilai x1 atau x10.
- Pengujian 1: Sentuhkan probe merah ke Drain dan probe hitam ke Source. Jarum harus bergerak ke kanan, tetapi tidak sampai mentok ke angka nol. Jika jarum tidak bergerak atau mentok ke nol, MOSFET rusak.
- Pengujian 2: Pindahkan probe hitam ke Gate. Jarum tidak boleh bergerak sama sekali. Jika jarum bergerak sedikit pun, MOSFET rusak.

**Menggunakan Multimeter Digital:**
- Pengaturan: Atur multimeter ke mode dioda atau buzzer.
- Pengujian 1: Sentuhkan probe hitam ke Drain dan probe merah ke Source. Multimeter harus menampilkan nilai antara 0,4 hingga 0,5. Jika terbaca nol, lampu indikator menyala, dan buzzer berbunyi, MOSFET rusak.
- Pengujian 2: Pindahkan probe merah ke Gate. Multimeter tidak boleh menampilkan nilai apa pun. Jika ada nilai yang terbaca, MOSFET rusak.
### 2. Pemeriksaan MOSFET Tipe P-Channel
**Menggunakan Multimeter Analog:**
- Pengaturan: Atur multimeter pada nilai x1 atau x10.
- Pengujian 1: Sentuhkan probe hitam ke Drain dan probe merah ke Source. Jarum harus bergerak ke kanan, tetapi tidak sampai mentok ke angka nol. Jika tidak bergerak atau mentok ke nol, MOSFET rusak.
- Pengujian 2: Pindahkan probe merah ke Gate. Jarum tidak boleh bergerak sama sekali. Jika jarum bergerak sedikit pun, MOSFET rusak.

**Menggunakan Multimeter Digital:**
- Pengaturan: Atur multimeter ke mode dioda atau buzzer.
- Pengujian 1: Sentuhkan probe merah ke Drain dan probe hitam ke Source. Multimeter harus menampilkan nilai. Jika terbaca nol, buzzer berbunyi, dan lampu indikator menyala, MOSFET rusak.
- Pengujian 2: Pindahkan probe hitam ke Gate. Multimeter tidak boleh menampilkan nilai apa pun. Jika ada nilai yang terbaca, MOSFET rusak.
