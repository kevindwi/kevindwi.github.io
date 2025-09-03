---
title: 'Cara Kerja Power Supply SMPS'
description: 'Saat listrik PLN masuk, tegangan AC (arus bolak-balik) akan masuk ke dioda _bridge_ melalui dua kaki tengahnya. Dioda ini punya tugas penting: mengubah tegangan AC menjadi tegangan DC (arus searah) yang stabil.'
pubDate: 'Sep 02 2025'
heroImage: '/cara-kerja-smps.png'
---

## Penurunan dan Penyearah Tegangan
Saat listrik PLN masuk, tegangan AC (arus bolak-balik) akan masuk ke dioda bridge melalui dua kaki tengahnya. Dioda ini punya tugas penting: mengubah tegangan AC menjadi tegangan DC (arus searah) yang stabil. Tegangan ini awalnya sekitar 300 volt DC.

Selanjutnya, tegangan 300 volt DC ini akan disaring melalui dua buah kapasitor besar yang sering disebut **Elco** agar tegangannya lebih "halus" dan "bersih", sehingga tidak ada fluktuasi yang bisa merusak komponen lain.

Tegangan DC 300 volt yang sudah disaring kemudian mengalir melalui sebuah komponen yang disebut resistor start-up. Ketika melewati beberapa resistor ini tegangan akan diturunkan, misalnya dari 300 volt menjadi 5 volt. Tegangan 5 volt yang sudah diturunkan ini lalu dialirkan ke kaki VCC IC power, atau dikenal juga sebagai IC PWM.

Ketika IC power menerima tegangan, ia akan menghasilkan sebuah sinyal. Sinyal inilah yang akan mengaktifkan transistor MOSFET. Setelah transistor MOSFET aktif, ia akan menciptakan medan magnetik pada kaki adaptor, yang kemudian akan menghidupkan PSU.

Beberapa PSU tidak memiliki transistor mosfet, melainkan mereka sudah terintegrasi dengan IC Power.

## Cek Kode IC dan Datasheet
Cara paling gampang adalah dengan mencatat kode IC power yang ada pada PCB dan mencarinya di Google.
- Cari huruf 'D' (Drain) pada kode PIN. Misalnya, pada IC dengan kode TOP258PN, huruf 'D' pada lembar data (datasheet) adalah singkatan dari Drain. Artinya transistor MOSFET sudah menyatu dengan IC tersebut.
- Sebaliknya, jika kamu menemukan IC dengan kode seperti LD7552DPS dan tidak ada huruf 'D' pada kode PIN-nya, kemungkinan besar IC tersebut adalah IC power tanpa transistor MOSFET terintegrasi.
