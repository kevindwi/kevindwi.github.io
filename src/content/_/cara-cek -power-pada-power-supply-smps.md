---
title: 'Cara Cek IC Power pada Power Supply SMPS'
description: 'IC Power atau IC PWM adalah komponen yang sangat penting dalam sebuah power supply modern. Fungsinya adalah untuk mengatur dan mengendalikan semua tegangan yang keluar dari PSU.'
pubDate: 'Sep 05 2025'
heroImage: '/cek-ic-power.png'
---

IC Power atau IC PWM adalah komponen yang sangat penting dalam sebuah power supply modern. Fungsinya adalah untuk mengatur dan mengendalikan semua tegangan yang keluar dari PSU. Karena perannya yang sentral, jika IC ini rusak, perangkat elektronik akan mati total. Kerusakan pada IC power bisa disebabkan oleh beban kerja yang tinggi.

### Cara Memeriksa IC Power
#### 1. Pemeriksaan Fisik
Ini adalah cara tercepat untuk mendeteksi kerusakan. Amati IC secara cermat untuk mencari tanda-tanda kerusakan seperti:
- Retak, pecah, atau gosong.
- Bekas terbakar atau anomali fisik lainnya.
Jika ada tanda-tanda ini, dapat dipastikan IC tersebut sudah rusak.

#### 2. Pemeriksaan Tanpa Tegangan
Cara ini memerlukan data pinout IC power (datasheet). Ikuti langkah-langkah berikut:
1. Cari datasheet: Temukan datasheet IC power Anda (misalnya, LD7552) secara online.
2. Identifikasi Pin: Cari tahu letak pin Ground (GND) dan VCC (tegangan).
3. Lepas Elco: Lepaskan Elco kecil yang terhubung ke pin VCC dan GND. Elco ini harus dilepas untuk menghindari pembacaan yang tidak akurat.
4. Ukur dengan Multimeter: Atur multimeter digital ke mode dioda atau buzzer.
    - Sentuhkan probe hitam ke pin Ground dan probe merah ke pin VCC.
    - Normal: Multimeter tidak boleh berbunyi atau menyalakan lampu.
    - Rusak: Jika multimeter berbunyi atau lampu menyala, berarti IC power mengalami korsleting dan rusak.
#### 3. Pemeriksaan dengan Tegangan
Lakukan dengan sangat hati-hati dan jangan menyentuh komponen di area primer power supply saat tercolok.
1. Ukur Tegangan Input: Pastikan Elco kecil sudah terpasang kembali. Colokkan PSU ke listrik. Atur multimeter ke mode DC 1000V. Ukur tegangan pada Elco besar; seharusnya terbaca minimal 300V DC. Jika tegangan kurang atau tidak ada, periksa komponen di jalur input.
2. Ukur Tegangan VCC: Atur multimeter ke mode DC 20V. Ukur tegangan pada Elco kecil yang terhubung ke IC power.
    - Normal: Harus terukur tegangan, misalnya 10V DC, sesuai dengan yang dibutuhkan IC. Tegangan VCC tidak boleh melebihi batas maksimal yang tertera di datasheet (misalnya 36V DC).
    - Rusak: Jika tidak ada tegangan atau tegangannya terlalu rendah/tinggi, IC power mungkin rusak.

Jika setelah memeriksa semua komponen dan tidak menemukan kerusakan fisik, namun perangkat masih mati total, Anda bisa mencoba mengganti IC power dengan yang baru. Kadang-kadang, IC bisa mengalami breakdown, yaitu kondisinya terlihat normal saat diukur tanpa tegangan, tetapi tidak berfungsi saat dialiri listrik.
