---
title: 'Apa itu Varistor dan Bagaimana Cara Kerjanya?'
description: 'Varistor adalah komponen yang berfungsi untuk melindungi perangkat elektronik dari lonjakan tegangan listrik tiba-tiba yang dapat merusak rangkaian. Komponen ini sering dilambangkan dengan huruf V, VR, Z, RV, atau ZNR.'
pubDate: 'Sep 02 2025'
heroImage: 'https://playwithcircuit.com/wp-content/uploads/2023/05/Varistor.jpg'
---

Varistor adalah komponen yang berfungsi untuk melindungi perangkat elektronik dari lonjakan tegangan listrik tiba-tiba yang dapat merusak rangkaian. Komponen ini sering dilambangkan dengan huruf V, VR, Z, RV, atau ZNR.

Memiliki bentuk yang mirip dengan kapasitor keramik, namun memiliki cara kerjanya sangat berbeda. Varistor memiliki resistansi yang sangat tinggi pada tegangan normal, sehingga tidak ada arus yang melewatinya. Namun, ketika terjadi lonjakan tegangan yang melebihi batas yang ditentukan, resistansinya akan **turun drastis**. Hal ini memungkinkan arus lonjakan tersebut mengalir melalui varistor ke ground, bukan ke komponen lain yang sensitif, sehingga melindungi seluruh rangkaian.

Penting untuk dicatat bahwa tidak semua power supply menggunakan varistor.
## Cara Memeriksa Varistor
Pemeriksaan varistor cukup mudah dan bisa dilakukan saat komponen masih terpasang pada papan sirkuit.
### Menggunakan Multimeter Analog
1. **Kalibrasi**: Atur multimeter ke nilai Ohm (Ω) atau kali (x) 10. Satukan kedua probe (merah dan hitam) dan kalibrasi hingga jarum menunjuk angka nol.
2. **Pengujian**: Sentuhkan kedua probe pada masing-masing kaki varistor.
    - **Normal**: Jarum harus tidak bergerak sama sekali. Ini menunjukkan bahwa resistansi varistor sangat tinggi, yang berarti komponen dalam kondisi baik.
    - **Rusak**: Jarum bergerak jauh ke kanan. Ini menandakan resistansi varistor turun secara signifikan, yang berarti komponen rusak. Hasil akan sama jika probe dibalik atau komponen dilepas dari rangkaian.

### Menggunakan Multimeter Digital
1. **Mode Pengujian**: Posisikan selektor pada mode dioda atau buzzer.
2. **Pengujian**: Sentuhkan kedua probe pada masing-masing kaki varistor.
    - **Normal**: Lampu indikator tidak menyala dan multimeter tidak mengeluarkan suara buzzer.
    - **Rusak**: Lampu indikator menyala dan multimeter mengeluarkan suara buzzer.

Kerusakan pada varistor seringkali terlihat secara fisik, seperti gosong, terbakar, pecah, kembung, atau retak. Jika kamu melihat tanda-tanda ini, ganti varistor tersebut.
