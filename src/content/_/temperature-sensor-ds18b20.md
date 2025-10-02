---
title: 'Temperature Sensor DS18B20'
description: 'Sensor DS18B20 adalah sensor suhu digital yang populer dan banyak digunakan dalam berbagai aplikasi elektronika maupun IoT. Sensor ini memiliki kemampuan untuk mengukur suhu dengan ketelitian 9 hingga 12-bit, rentang -55°C hingga 125°C dengan ketelitian (+/-0.5°C ).'
pubDate: 'Aug 28 2025'
heroImage: '/sensor-ds18b20.png'
---

Sensor **DS18B20** adalah sensor suhu digital yang populer dan banyak digunakan dalam berbagai aplikasi elektronika maupun IoT. Sensor ini memiliki kemampuan untuk mengukur suhu dengan ketelitian 9 hingga 12-bit, rentang -55°C hingga 125°C dengan ketelitian (+/-0.5°C ).

Setiap sensor yang diproduksi memiliki kode unik sebesar 64-Bit yang disematkan pada masing-masing chip, ini memungkinkan penggunaan sensor dalam jumlah besar hanya melalui satu kabel saja.

## Fitur dari sensor suhu DS18B20
Sebagai acuan dan informasi pendukung, sensor ini memiliki fitur utama sebagai berikut:
1. Mampu mengukur suhu dari -55°C hingga +125°C.
2. Memiliki akurasi $\pm$ 0.5 °C pada rentang -10 °C hingga +85 °C
3. Pengguna dapat memilih resolusi pengukuran antara 9 hingga 12 bit
4. Setiap sensor memiliki ID 64-bit yang unik, memungkinkan penggunaan banyak sensor dalam satu jalur data

## Kelebihan Sensor DS18B20
1. **Kemudahan komunikasi** – hanya membutuhkan satu pin mikrokontroler.
2. **Multi-drop capability** – beberapa sensor dapat dipasang pada satu jalur data yang sama, masing-masing dengan alamat unik.
3. **Akurasi tinggi**
## Pinout
![](/sensor-ds18b20.png)

Sensor **DS18B20** memiliki dua jenis, jenis biasa dan jenis yang memiliki casing anti air.

## Penggunaan
Untuk contoh rangkaian sensor dengan esp32 seperti gambar dibawah ini.
![](/sensor-ds18b20-esp32.png)

Untuk programmnya kita membutuhkan dua library, yaitu **OneWire** library by Paul Stoffregen dan  **DallasTemperature** library by Miles Burton.

```c
#include <OneWire.h>
#include <DallasTemperature.h>

// GPIO where the DS18B20 is connected to
const int oneWireBus = 4;

// Setup a oneWire instance to communicate with any OneWire devices
OneWire oneWire(oneWireBus);

// Pass our oneWire reference to Dallas Temperature sensor
DallasTemperature sensors(&oneWire);

void setup() {
  // Start the Serial Monitor
  Serial.begin(115200);
  // Start the DS18B20 sensor
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
  float temperatureC = sensors.getTempCByIndex(0);
  float temperatureF = sensors.getTempFByIndex(0);
  Serial.print(temperatureC);
  Serial.println("ºC");
  Serial.print(temperatureF);
  Serial.println("ºF");
  delay(5000);
}
```

## Referensi:
1. https://repository.unikom.ac.id/68723/1/Implementation%20%20DS18B20%201-Wire%20Digital%20Temperature%20Sensor%20with%20NodeMCU%20IDEAL%20TEMPERATURE%20FOR%20BREWING%20COFFEE.pdf
2. https://randomnerdtutorials.com/esp32-ds18b20-temperature-arduino-ide
