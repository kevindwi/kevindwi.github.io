---
title: 'Belajar Pemrograman Arduino - Part 1 Fungsi Utama & Tipe Data'
description: 'Kode di dalam fungsi `setup()` akan dipanggil satu kali saja saat pada awal program. Biasanya fungsi ini digunakan untuk inisialisasi, seperti menetapkan mode pin, memulai komunikasi serial, koneksi ke wifi, dll.'
date: 'Nov 08 2025'
thumbnail: '/arduino-blink.gif'
---

Struktur pemrograman arduino mirip sekali dengan c++, dari mulai sintaks dan tipe data. Hanya beberapa fungsi tambahan yang berbeda.
## Fungsi Utama
Saat pertama kali kalian membuat *new sketch*, kalian akan mendapati kode seperti dibawah ini:
```c++
void setup() {
	// put your setup code here, to run once:
}

void loop() {
	// put your main code here, to run repeatedly:
}
```

Kode di dalam fungsi `setup()` akan dipanggil satu kali saja saat pada awal program. Biasanya fungsi ini digunakan untuk inisialisasi, seperti menetapkan mode pin, memulai komunikasi serial, koneksi ke wifi, dll.

Sedangkan fungsi `loop()` dipanggil berulang-ulang sampai board dimatikan. Disini menjadi tempat sebagian besar program kita. Fungsi ini dieksekusi setelah fungsi setup () selesai.
## Variable dan Tipe Data
Variable digunakan untuk menyimpan nilai-nilai yang digunakan selama program dijalankan. Contohnya kita bisa menyimpan nilai dari pembacaan sebuah sensor atau menyimpan hasil dari sebuah perhitungan.

Tipe data adalah jenis data yang akan disimpan di dalam variable. Tipe data di arduino hampir sama dengan c++, meliputi:

| Nama Tipe Data       | Ukuran dalam Memori | Rentang Nilai                       |
| -------------------- | ------------------- | ----------------------------------- |
| `char`               | 1byte               | -127 sampai 127 atau 0 sampai 255   |
| `unsigned char`      | 1byte               | 0 sampai 255                        |
| `signed char`        | 1byte               | -127 sampai 127                     |
| `int`                | 4bytes              | -2147483648 sampai 2147483647       |
| `unsigned int`       | 4bytes              | 0 sampai 4294967295                 |
| `signed int`         | 4bytes              | -2147483648 sampai 2147483647       |
| `short int`          | 2bytes              | -32768 sampai 32767                 |
| `unsigned short int` | Range               | 0 sampai 65,535                     |
| `signed short int`   | Range               | -32768 sampai 32767                 |
| `long int`           | 4bytes              | -2,147,483,648 sampai 2,147,483,647 |
| `signed long int`    | 4bytes              | same as long int                    |
| `unsigned long int`  | 4bytes              | 0 sampai 4,294,967,295              |
| `float`              | 4bytes              | +/- 3.4e +/- 38 (~7 digits)         |
| `double`             | 8bytes              | +/- 1.7e +/- 308 (~15 digits)       |
| `long double`        | 8bytes              | +/- 1.7e +/- 308 (~15 digits)       |
| `wchar_t`            | 2 or 4 bytes        | 1 wide character                    |
| `boolean`            | 4bytes              | `true` atau `false`                 |

```c++
int ledPin = 13; // variable dengan nilai
int nilaiSensor; // variable tanpa nilai
float suhu = 32.0; // variable untuk bertipe desimal (float)
```

Di atas merupakan contoh penulisan sebuah variabel. Tipe data ditulis terlebih dahulu lalu diikuti dengan nama variabel.

## Set Pin Mode
Untuk set mode pada pin di arduino, kita akan menggunakan fungsi `pinMode()`. `pinMode` digunakan untuk menginisialisasi setiap pin yang kita gunakan sebagai input atau output.

```cpp title="main.cpp"
int ledPin = 13;

void setup() {
	pinMode(ledPin, OUTPUT);
}
```

Kode di atas akan mendefinisikan pin ke-13 menjadi output. Dalam contoh maka pin 13 akan dapat mengirimkan data ke LED berupa state **HIGH** (1) atau **LOW** (0) berupa tegangan listrik.

## Serial Monitor
Kita akan menggunakan serial monitor untuk menampilkan teks.
```cpp title="main.cpp"
void setup() {
	Serial.begin(9600);
	Serial.println("Hello World"); // menampilkan string pada serial monitor
}
```

`Serial.begin()` memulai komunikasi serial pada arduino. Sedangkan `Serial.println()` akan menampilkan teks ke serial monitor dengan tambahan baris baru.

## Membuat Program Blink LED

```cpp title="main.cpp"
int ledPin = 13;

void setup() {
	Serial.begin(9600);
	pinMode(ledPin, OUTPUT);

	Serial.println("Hello World"); // menampilkan string pada serial monitor
}

void loop() {
	digitalWrite(ledPin, HIGH); // menyalakan LED
	Serial.println("LED menyala");
	delay(1000); // delay 1000 ms atau 1 detik

	digitalWrite(ledPin, LOW); // mematikan LED
	Serial.println("LED mati");
	delay(1000); // delay 1000 ms atau 1 detik
}
```

Pada `void loop()` fungsi `digitalWrite(ledPin, HIGH)` digunakan untuk mengirim sinyal **HIGH** ke pin 13, yang dimana ini akan menyalakan LED.

Sedangkan fungsi `digitalWrite(ledPin, LOW)` akan mengirimkan sinya **LOW** pada pin 13, yang akan mematikan LED.

Fungsi `delay()` akan menjeda program dengan rentang waktu dalam milisecond.

![](/arduino-blink.gif)

Jika kode kalian benar, maka board arduino kalian akan berkedip seperti di atas.


## Referensi:
1. https://www.petanikode.com/cpp-variabel
2. https://indobot.co.id/memahami-dasar-pemrograman-arduino
