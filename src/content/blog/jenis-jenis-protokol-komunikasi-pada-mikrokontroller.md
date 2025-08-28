---
title: 'Jenis-Jenis Protokol Komunikasi pada Mikrokontroller'
description: 'Agar mikrokontroler dapat berinteraksi dengan sensor/aktuator atau mikrokontroller lain, mereka membutuhkan protokol komunikasi khusus. Beberapa protokol komunikasi yang sering dijumpai adalah UART, I2C, SPI.'
pubDate: 'Aug 27 2025'
heroImage: '/uart-communication.png'
---

Agar mikrokontroler dapat berinteraksi dengan sensor/aktuator atau mikrokontroller lain, mereka membutuhkan protokol komunikasi khusus. Beberapa protokol komunikasi yang sering dijumpai adalah UART, I2C, SPI.

## UART (*Universal Asynchronous Receiver-Transmitter*)
Protokol komunikasi UART adalah protokol komunikasi perangkat keras yang menggunakan komunikasi serial asinkron dengan kecepatan yang dapat dikonfigurasi.
![UART Communication](/uart-communication.png)

Dua sinyal dari setiap perangkat UART diberi nama:
- Transmitter (Tx)
- Receiver (Rx)

Jalur UART berfungsi sebagai media komunikasi untuk mengirim dan menerima satu data ke data lainnya.

Pada UART dan sebagian besar komunikasi serial, laju baud harus diatur sama pada perangkat pengirim dan penerima. Laju baud adalah laju transfer informasi ke kanal komunikasi. Laju baud dapat bervariasi diantaranya: 9600, 19200, 38400, 57600, 115200, 230400, 460800, 921600, 1000000, 1500000.

## I2C (Inter-Integrated Circuit)
I2C (Inter-Integrated Circuit) adalah protokol komunikasi serial yang digunakan untuk mentransfer data antara mikrokontroler dan perangkat lainnya secara sinkron dan bi-directional.

Protokol komunikasi ini menggunakan dua kawat yang memungkinkan beberapa perangkat berkecepatan rendah terhubung ke mikrokontroler menggunakan jalur data (SDA) dan jalur clock (SCL) bersama, serta VCC dan GND.

![I2C Communication](/i2c-communication.png)

Beberapa pengaplikasian komunikasi I2C ini adalah pada display LCD dengan modul I2C, dan AHT10 sebagai module sensor temperatur.

## SPI (Serial Peripheral Interface)
SPI (Serial Peripheral Interface) merupakan protokol komunikasi serial yang dipakai untuk pertukaran data cepat antara mikrokontroler dengan periferal kecil seperti sensor, memori, dan lain-lain. SPI memakai empat jalur yaitu SCLK (Serial Clock), MOSI (Master Out Slave In), MISO (Master In Slave Out), dan SS (Slave Select).

![SPI Communication](/spi-communication.png)

SPI menggunakan jalur komunikasi full-duplex, yang berarti data dapat dikirim dan diterima secara bersamaan, meningkatkan efisiensi komunikasi. Kecepatan transfer data SPI dapat diatur oleh master, membuatnya sangat fleksibel untuk berbagai aplikasi di mana kecepatan dan efisiensi komunikasi adalah prioritas.

## Kesimpulan
Protokol komunikasi seperti **UART, I2C, dan SPI** merupakan fondasi penting agar mikrokontroler dapat berinteraksi dengan sensor, aktuator, maupun perangkat lain. Masing-masing protokol memiliki karakteristik yang membuatnya sesuai untuk kebutuhan tertentu. Dengan memahami perbedaan dan cara kerjanya, kita dapat memilih protokol yang tepat sehingga sistem yang dibangun menjadi lebih efisien, andal, dan sesuai dengan tujuan aplikasi.

## Referensi:
1. https://www.analog.com/en/resources/analog-dialogue/articles/uart-a-hardware-communication-protocol.html
2. https://www.analog.com/en/resources/technical-articles/i2c-primer-what-is-i2c-part-1.html
3. https://www.analog.com/en/resources/analog-dialogue/articles/introduction-to-spi-interface.html
