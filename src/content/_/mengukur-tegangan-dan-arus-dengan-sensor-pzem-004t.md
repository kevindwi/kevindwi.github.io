---
title: 'Mengukur Tegangan dan Arus dengan Sensor PZEM-004T'
description: 'Dalam sistem monitoring listrik, pengukuran tegangan dan arus sangat penting untuk mengetahui konsumsi daya dan mencegah gangguan kelistrikan. Salah satu modul yang populer digunakan untuk kebutuhan ini adalah sensor PZEM-004T. '
pubDate: 'Aug 28 2025'
heroImage: '/PZEM-004-module-600x600.jpg'
---

Dalam sistem monitoring listrik, pengukuran tegangan dan arus sangat penting untuk mengetahui konsumsi daya dan mencegah gangguan kelistrikan. Salah satu modul yang populer digunakan untuk kebutuhan ini adalah **sensor PZEM-004T**.

Modul ini sering dipakai dalam proyek IoT, smart home, hingga penelitian karena praktis, akurat, dan mudah diintegrasikan dengan mikrokontroler seperti Arduino maupun ESP32.

## Apa itu PZEM-004T
PZEM-004T adalah sensor yang memiliki fungsi untuk memonitor energi listrik. Beberapa besaran yang dapat diukur antara lain:
- Tegangan (Volt)
- Arus (Ampere)
- Daya aktif (Watt)
- Energi (kWh)
- Frekuensi (Hz)
- Power factor (cos φ)

## Kelebihan & Kekurangan
### Kelebihan
- Fungsi lengkap: Mampu mengukur tegangan, arus, faktor daya, dan daya aktif dalam satu modul.
- Harga yang ekonomis
- Memiliki ukuran yang kecil.
- Dapat diintegrasikan dengan mikrokontroler seperti Arduino UNO, NodeMCU, dll.

### Kekurangan
- Akurasi arus rendah
- Diperlukan kalibrasi secara manual

## Pinout
Modul PZEM-004T V3 memiliki beberapa pin:
- 5V
- Tx
- Rx
- GND
## Cara Penggunaan yang benar
![PZEM-004T Arduino](/PZEM-004T-Arduino-2-600x324.jpg)

Modul PZEM-004T V3 memiliki komunikasi serial pasif untuk menghubungkan Arduino Uno. Pin RX dan TX-nya membutuhkan catu daya eksternal.

Hubungkan pin 5V ke pin 5V Arduino, pin Rx ke pin D11 Arduino, dan pin Tx ke pin D12 Arduino, serta GND ke GND.

Kode Arduino pzem004t dengan library  _[PZEM-004t V30](https://github.com/mandulaj/PZEM-004T-v30)_ ini memungkinkan untuk mengukur tegangan AC, arus AC, daya, energi, frekuensi, dan faktor daya dengan mikrokontroler Arduino.

```c++
#include <PZEM004Tv30.h>

PZEM004Tv30 pzem(11, 12);

void setup() {
  Serial.begin(115200);
}

void loop() {
  float voltage = pzem.voltage();
  if (voltage != NAN) {
    Serial.print(“Voltage : “);
    Serial.print(voltage);
    Serial.println(“V”);
  } else {
    Serial.println(“Error reading voltage”);
  }

  float current = pzem.current();
  if (current != NAN) {
    Serial.print(“Current : “);
    Serial.print(current);
    Serial.println(“A”);
  } else {
    Serial.println(“Error reading current”);
  }

  float power = pzem.power();
  if (current != NAN) {
    Serial.print(“Power : “);
    Serial.print(power);
    Serial.println(“W”);
  } else {
    Serial.println(“Error reading power”);
  }

  float energy = pzem.energy();
  if (current != NAN) {
    Serial.print(“Energy : “);
    Serial.print(energy, 3);
    Serial.println(“kWh”);
  } else {
    Serial.println(“Error reading energy”);
  }

  float frequency = pzem.frequency();
  if (current != NAN) {
    Serial.print(“Frequency : “);
    Serial.print(frequency, 1);
    Serial.println(“Hz”);
  } else {
    Serial.println(“Error reading frequency”);
  }

  float pf = pzem.pf();
  if (current != NAN) {
    Serial.print(“PF : “);
    Serial.println(pf);
  } else {
    Serial.println(“Error reading power factor”);
  }

  Serial.println();
  delay(2000);
}
```


## Referensi:
1. https://innovatorsguru.com/pzem-004t-v3
