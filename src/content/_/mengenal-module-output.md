---
title: 'Mengenal Module Output'
description: 'Module output adalah komponen yang mengubah sinyal listrik dari mikrokontroler (seperti Arduino atau ESP32) menjadi gerakan fisik atau display visual yang bisa kita lihat, suara yang bisa kita dengar, atau bahkan yang bisa kita rasakan.'
pubDate: 'Aug 30 2025'
heroImage: 'https://i0.wp.com/wasiswa.com/wp-content/uploads/2020/09/relay.png'
---

Module output adalah komponen yang mengubah sinyal listrik dari mikrokontroler (seperti Arduino atau ESP32) menjadi gerakan fisik atau display visual yang bisa kita lihat, suara yang bisa kita dengar, atau bahkan yang bisa kita rasakan.

## Apa Itu Module Output?
Secara sederhana, **module output** adalah komponen yang menerima sinyal (digital atau analog) dari sebuah mikrokontroler dan mengubahnya menjadi bentuk energi lain seperti cahaya, suara, gerak, atau panas.

## Jenis-Jenis Module Output Dasar

### 1. **Relay Module**
![](https://i0.wp.com/wasiswa.com/wp-content/uploads/2020/09/relay.png)
 Secara sederhana, relay adalah saklar elektronik yang memungkinkan mikrokontroler dengan tegangan rendah (biasanya 5V) untuk mengontrol perangkat yang membutuhkan tegangan atau arus tinggi (misalnya, lampu rumah 220V AC).

### 2. **Motor Driver Module**
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWn9b95sS3BTNARWLtYC89qH-Ak0Ugy_gVcik5LjVJJ4TF2RRN2OqROFeg0B7h-6bdnfeDRrDCJn6VsTjgdj1a2-ZPIPAh8bS8iq-yxu_Mjlqc5v8SbZBihg-gbNeURbKaf3fhqAOvs2IMCClXz9kmwLyPVJd76IJriNLgkBkIlPI3H3tz3fnrdRsozUC7/s276/motor-driver-dc.PNG)
Motor driver module adalah sirkuit khusus yang dirancang untuk mengendalikan motor DC. Mikrokontroler tidak bisa langsung menggerakkan motor karena motor membutuhkan arus yang jauh lebih besar daripada yang bisa disediakan oleh pin output mikrokontroler.

### 3. **Servo Motor**
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYB2ZESmr5b-K3_NzMJpsPRUOrpRySyHW3n1xmXUBWe1WAWRYDA0sBLYOY_ebz7C3c0eNAch4Q_X7PmdTRlxyWLmDFOJ6ZglwKTRHvOhblVB580v30azQM9Yg9As6pnt0GYb2s2cx4aZeC7twjKiWdBDbZsMWzno15v7ORFB4bL-7l1RJtK59Ag9fr/s550/motor%20servo.jpg)
Berbeda dengan motor DC yang berputar bebas, **servo motor** dirancang untuk bergerak ke sudut yang sangat spesifik dan terkontrol. Servo motor menerima sinyal PWM (Pulse Width Modulation) dari mikrokontroler. Sinyal ini menentukan sudut rotasi motor, biasanya antara 0 hingga 180 derajat.
### 4. **LED dan Display Module**
![](https://static.wixstatic.com/media/a5ba95_001e54ff976a4d96bf197740c6fdf1f8~mv2.png/v1/fill/w_560,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a5ba95_001e54ff976a4d96bf197740c6fdf1f8~mv2.png)
LED (Light Emitting Diode) adalah module output visual paling dasar. Ia mengubah sinyal listrik menjadi cahaya. Dengan mengendalikan durasi dan intensitas sinyal, kita bisa membuat LED berkedip, menyala, atau memancarkan cahaya dengan tingkat kecerahan yang berbeda.
