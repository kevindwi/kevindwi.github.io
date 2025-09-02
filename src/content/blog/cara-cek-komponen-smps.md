---
title: 'Cara Cek Komponen Power Supply SMPS'
description: 'Pemeriksaan komponen pada modul power supply PSU SMPS dapat dilakukan melalui tiga cara utama: pemeriksaan fisik, pemeriksaan tanpa tegangan, dan pemeriksaan dengan tegangan. '
pubDate: 'Sep 02 2025'
heroImage: '/check-component-smps.png'
---

Pemeriksaan komponen pada modul power supply PSU SMPS dapat dilakukan melalui tiga cara utama: pemeriksaan fisik, pemeriksaan tanpa tegangan, dan pemeriksaan dengan tegangan.
### 1. Pemeriksaan Fisik
Ini adalah cara paling mudah dan cepat untuk mendeteksi kerusakan. Cukup periksa secara visual seluruh modul PSU untuk mencari tanda-tanda kerusakan. Carilah:
- Komponen yang gosong, terbakar, atau pecah.
- Kapasitor yang kembung atau bocor.
- Jalur PCB yang putus atau retak.
- Komponen yang posisinya berubah.
- Bau terbakar yang menyengat.

Jika ada tanda-tanda ini, ganti komponen yang rusak. Seringkali, ini sudah cukup untuk memperbaiki PSU, asalkan kerusakannya tidak merembet ke komponen lain.

### 2. Pemeriksaan Tanpa Tegangan
Metode ini melibatkan penggunaan alat ukur seperti multimeter untuk memeriksa kondisi komponen saat PSU tidak terhubung ke listrik.
- Melepas komponen dari papan PCB. Ini adalah cara paling akurat karena menghindari feedback atau pengaruh dari komponen lain yang masih terhubung.
- Mengukur komponen saat masih menempel pada PCB. Metode ini lebih cepat, tetapi hasilnya mungkin kurang akurat karena pengaruh jalur sirkuit lain.

Cara lain yaitu lepaskan satu kaki komponen yang akan diuji dari PCB untuk mendapatkan hasil yang lebih valid.

### 3. Pemeriksaan dengan Tegangan
Metode ini dilakukan saat PSU terhubung ke listrik dan hidup. Menggunakan multimeter, kita bisa mengukur tegangan yang mengalir pada titik-titik tertentu, seperti pada **dioda** dan **kapasitor (Elco)**. Dengan membandingkan hasil pengukuran dengan nilai tegangan yang seharusnya, kita bisa mendiagnosis masalah. Jika tegangannya kurang dari nilai normal atau bahkan hilang, itu menandakan adanya kerusakan pada komponen atau jalur yang terkait.
