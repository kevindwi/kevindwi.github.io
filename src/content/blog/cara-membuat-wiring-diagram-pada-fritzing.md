---
title: 'Cara membuat Wiring Diagram pada Fritzing'
description: 'Fritzing adalah software desain elektronik open source yang digunakan oleh desainer, dan penghobi untuk membuat prototipe, merancang rangkaian elektronik, mendokumentasikan proyek, serta menghasilkan layout untuk PCB.'
pubDate: 'Sep 05 2025'
heroImage: '/Screenshot from 2025-09-07 14-26-11.png'
---

Fritzing adalah software desain elektronik open source yang digunakan oleh desainer, dan penghobi untuk membuat prototipe, merancang rangkaian elektronik, mendokumentasikan proyek, serta menghasilkan layout untuk PCB.

## Tampilan Fritzing
Sebelum memulai kita perlu mengetahui beberapa tab utama pada fritzing.
- **Breadboard:** Tampilan ini mensimulasikan tata letak komponen di atas breadboard. Ini sangat berguna untuk merencanakan prototipe.
- **Schematic:** Ini adalah tampilan diagram skematik. Di sini, Anda akan melihat simbol-simbol komponen dan garis-garis yang mewakili koneksi listrik.
- **PCB (Printed Circuit Board):** Tampilan ini memungkinkan Anda merancang tata letak sirkuit untuk pembuatan PCB.
- **Code:** Disini kita bisa membuat, menyimpan, dan upload program untuk microcontroller seperti Arduino dll.

## Membuat Wiring Diagram
1. **Buka fritzing**
2. **Pilih tab Breadboard**
	- Klik pada tab **Breadboard** di bagian atas jendela. Anda akan melihat workspace kosong yang siap untuk diisi.
3. **Menambahkan Komponen**
	- **Cari Komponen:** Di panel **Parts** di sisi kanan, ketik nama komponen yang Anda butuhkan, misalnya "Arduino Uno," "Servo".![](/Screenshot%20from%202025-09-07%2014-21-26.png)
	- **Seret dan Lepaskan:** Setelah menemukan komponen, **klik dan seret** komponen tersebut ke workspace **Breadboard**.![](/Screenshot%20from%202025-09-07%2014-21-35.png)
	- **Atur Posisi:** Atur posisi komponen agar rapi dan mudah dibaca. Kita dapat memutarnya dengan menekan tombol `R` atau mengklik kanan dan memilih "Rotate."![](/Screenshot%20from%202025-09-07%2014-23-21.png)
4. **Membuat Koneksi (Wiring)**
	- **Hubungkan Pin:** Arahkan kursor mouse ke kaki komponen. Kursor akan berubah menjadi titik kecil.
	- **Klik dan Seret:** Klik pada pin pertama, lalu **seret garis** ke pin komponen kedua yang ingin dihubungkan.
	- **Atur Garis:** Garis koneksi akan secara otomatis dibuat. Klik pada garis untuk membuat titik-titik jangkar (bends) yang bisa Anda seret untuk membuat garis lebih rapi.![](/Screenshot%20from%202025-09-07%2014-26-11.png)
5. **Menyimpan dan Mengekspor Diagram**
	- **Simpan Proyek:** Klik menu **File > Save** atau gunakan `Ctrl + S` untuk menyimpan proyek Fritzing Anda sebagai file `.fzz`.![](/Screenshot%20from%202025-09-07%2014-27-18.png)
	- **Ekspor Diagram:** Untuk berbagi, Anda bisa mengekspor diagram dalam berbagai format gambar. Klik menu **File > Export**, lalu pilih format yang diinginkan.![](/Screenshot%20from%202025-09-07%2014-27-36.png)

## Referensi:
1. https://troybaverstock.com/learn/fritzing-circuit-diagrams
2. https://www.arifsusilo.com/fritzing-tools-canggih-untuk-developer-iot
