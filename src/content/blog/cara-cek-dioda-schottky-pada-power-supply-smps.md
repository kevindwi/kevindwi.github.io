---
title: 'Cara Cek Dioda Schottky pada Power Supply SMPS'
description: 'Dioda Schottky sebenarnya merupakan dua buah dioda yang digabungkan menjadi satu komponen. Dioda Schottky memiliki bentuk fisik yang mirip dengan transistor, yaitu memiliki tiga kaki.'
pubDate: 'Sep 06 2025'
heroImage: '/cek-dioda-schottky.png'
---

Dioda Schottky sebenarnya merupakan dua buah dioda yang digabungkan menjadi satu komponen. Dioda Schottky memiliki bentuk fisik yang mirip dengan transistor, yaitu memiliki tiga kaki.

Kaki-kaki dioda Schottky:
- **Kaki 1**: Anoda
- **Kaki 2 (tengah)**: Katoda
- **Kaki 3**: Anoda

## Cara Mengukur Dioda Schottky
### Menggunakan Multimeter Analog
1. Pengaturan: Atur multimeter pada nilai x1 atau x10 dan kalibrasi jarum hingga menunjuk angka nol.
2. Letakkan probe merah di kaki 2 (katoda) dan probe hitam di kaki 1 (anoda). Jarum harus bergerak, tetapi tidak sampai mentok ke kanan. Pindahkan probe hitam ke kaki 3 (anoda); hasilnya harus sama.
    - Hasil tidak normal: Jika salah satu pengukuran tidak menunjukkan pergerakan jarum atau jarum bergerak sampai mentok ke kanan, dioda rusak.
3. Balik probe: Letakkan probe hitam di kaki 2 (katoda) dan probe merah di kaki 1 (anoda). Jarum tidak boleh bergerak sama sekali. Pindahkan probe merah ke kaki 3 (anoda); hasilnya harus sama, tidak ada pergerakan jarum.
    - Hasil tidak normal: Jika salah satu pengukuran menyebabkan jarum bergerak, dioda rusak.

### Menggunakan Multimeter Digital
1. Pengaturan: Atur multimeter ke mode dioda atau buzzer.
2. Pemeriksaan 1: Letakkan probe merah di kaki 2 (katoda) dan probe hitam di kaki 1 dan 3 (anoda) secara bergantian.
    - Hasil normal: Multimeter harus menunjukkan simbol OL (Open Line) dan tidak mengeluarkan suara.
    - Hasil tidak normal: Jika multimeter mengeluarkan suara atau menunjukkan angka selain OL, dioda rusak.
3. Probe dibalik: Letakkan probe hitam di kaki 2 (katoda) dan probe merah di kaki 1 dan 3 (anoda) secara bergantian.
    - Hasil normal: Multimeter harus menunjukkan angka antara 0,2 sampai 0,4.
    - Hasil tidak normal: Jika multimeter menunjukkan angka nol dan berbunyi, dioda rusak.
