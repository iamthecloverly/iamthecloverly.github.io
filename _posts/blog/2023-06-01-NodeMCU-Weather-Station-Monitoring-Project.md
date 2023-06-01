---
title: " IoT Live Weather Station Monitoring Using NodeMCU ESP8266 "
date: 2023-06-01 14:26:00 +/-0530
categories: [College Project, IoT, NodeMCU, ESP8266, Weather Station]
pin : false
tags: [NodeMCU, IoT, ESP8266, Weather Station]
img_path: /assets/img/screenshots/NodeMCU/

image:
  path: 01.png
  width: 1000   # in pixels
  height: 400   # in pixels
  alt: NodeMCU Weather Station
---

# NodeMCU Weather Station Monitoring Project

Table of Contents

1. [IOT Live Weather Station Monitoring Using NodeMCU ESP8266](#iot-live-weather-station-monitoring-using-nodemcu-esp8266)
2. [What is a Weather Station?](#what-is-a-weather-station)
3. [Components Required](#components-required)
   - [DHT11 Humidity & Temperature Sensor](#dht11-humidity--temperature-sensor)
     - [About DHT11](#about-dht11)
     - [Features of DHT11](#features-of-dht11)
   - [BMP180 Barometric Pressure Sensor](#bmp180-barometric-pressure-sensor)
     - [About BMP180](#about-bmp180)
     - [Features of BMP180](#features-of-bmp180)
   - [Rain Sensor](#rain-sensor)
4. [Circuit Diagram & Connections](#circuit-diagram--connections)
5. [Source Code/Programs](#source-codeprograms)
   - [index.h Code](#indexh-code)
   - [Weather Station Main Code](#weather-station-main-code)

## IOT Live Weather Station Monitoring Using NodeMCU ESP8266

This project involves building a live weather station using NodeMCU ESP8266. The NodeMCU ESP8266 is a popular Wi-Fi microcontroller board that allows you to connect to the internet and communicate with other devices. With the help of various sensors, we can collect data on temperature, humidity, barometric pressure, and rainfall, and transmit it to a web server for real-time monitoring.

## What is a Weather Station?

A weather station is a device or system that collects data on various atmospheric conditions such as temperature, humidity, barometric pressure, wind speed, and precipitation. It is used to monitor and predict weather patterns, which can be valuable for agriculture, meteorology, and other applications.

## Components Required

To build the NodeMCU weather station, the following components are required:

- NodeMCU ESP8266 microcontroller board
- DHT11 humidity and temperature sensor
- BMP180 barometric pressure sensor
- Rain sensor
- Jumper wires
- Breadboard or PCB for circuit connections

### DHT11 Humidity & Temperature Sensor

#### About DHT11

The DHT11 sensor is a digital temperature and humidity sensor. It can measure temperature from 0°C to 50°C with an accuracy of ±2°C, and relative humidity from 20% to 90% with an accuracy of ±5%. The sensor provides data in a digital format, making it easy to interface with microcontrollers like NodeMCU.

#### Features of DHT11

- Low-cost and widely available
- Single-bus digital signal output
- 3 to 5V power supply range
- Good long-term stability

### BMP180 Barometric Pressure Sensor

#### About BMP180

The BMP180 sensor is a high-precision digital barometric pressure sensor. It can measure atmospheric pressure from 300 hPa to 1100 hPa with an accuracy of ±0.12 hPa. The sensor also provides temperature measurements, which can be used to compensate for pressure variations due to temperature changes.

#### Features of BMP180

- Wide pressure measurement range
- High accuracy and resolution
- Low power consumption
- I2C interface for easy communication

### Rain Sensor

The rain sensor is used to detect rainfall. It can sense the presence of water droplets and provide a signal indicating whether it is raining or not.

## Circuit Diagram & Connections

The circuit diagram for the NodeMCU weather station is shown below:
![Circuit Diagram](/Circuit-Diagram.jpg)

## Source Code/Programs

### index.h Code

```html
const char MAIN_page[] PROGMEM = R"=====(
<!DOCTYPE html>
<html>
<head>
<title>www.sribalaji.eu.org</title>
</head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: url('https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80') no-repeat center center fixed;
  background-size: cover;
  font-family: Montserrat, Arial, sans-serif;
}

h2{
  font-size:14px;
}
.widget{
  box-shadow:0 40px 10px 5px rgba(0,0,0,0.4);
  margin:100px auto;
  height: 330px;
  position: relative;
  width: 500px;
}
 
.upper{
  border-radius:5px 5px 0 0;
  background: linear-gradient(to bottom, #f5f5f5, #e1e1e1);
  height:200px;
  padding:20px;
}
 
.date{
  font-size:40px;
}
.year{
  font-size:30px;
  color:#c1c1c1;
}
.place{
  color:#222;
  font-size:40px;
}
.lower{
  background:#00A8A9;
  border-radius:0 0 5px 5px;
  font-family:'Advent Pro';
  font-weight:200;
  height:130px;
  width:100%;
}
.clock{
  background:#00A8A9;
  border-radius:100%;
  box-shadow:0 0 0 15px #f5f5f5,0 10px 10px 5px rgba(0,0,0,0.3);
  height:150px;
  position:absolute;
  right:25px;
  top:-35px;
  width:150px;
}
 
.hour{
  background:#f5f5f5;
  height:50px;
  left:50%;  
  position: absolute;
  top:25px;
  width:4px;
}
 
.min{
  background:#f5f5f5;
  height:65px;
  left:50%;  
  position: absolute;
  top:10px;
  transform:rotate(100deg);
  width:4px;
}
 
.min,.hour{
  border-radius:5px;
  transform-origin:bottom center;
  transition:all .5s linear;
}
 
.infos{
  list-style:none;
}
.info{
  color:#fff;
  float:left;
  height:100%;
  padding-top:10px;
  text-align:center;
  width:25%;
}
.info span{
  display: inline-block;
  font-size:40px;
  margin-top:20px;
}
.weather p {
  font-size:20px;padding:10px 0;
}
.anim{animation:fade .8s linear;}
 
@keyframes fade{
  0%{opacity:0;}
  100%{opacity:1;}
}
 
a{
 text-align: center;
 text-decoration: none;
 color: white;
 font-size: 15px;
 font-weight: 500;
}

/* Floating Letters Animation */
.floating-letters {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.floating-letters span {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  opacity: 0;
  animation-name: floating-letters;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating-letters {
  0% {
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -60%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
<body>
 
<div class="widget"> 
  <div class="clock">
    <div class="min" id="min"></div>
    <div class="hour" id="hour"></div>
  </div>
  <div class="upper">
    <div class="date" id="date">21 March</div>
    <div class="year">Temperature</div>
    <div class="place update" id="temperature">23 &deg;C</div>
  </div>
  <div style="text-align: center;"><a href="https://www.sribalaji.eu.org" style="align:center">www.sribalaji.eu.org</a></div>
  <div class="lower">    
    <ul class="infos">
      <li class="info temp">
        <h2 class="title">TEMPERATURE</h2>
        <span class='update' id="temp">21 &deg;C</span>
      </li>
      <li class="info weather">
        <h2 class="title">PRESSURE</h2>
        <span class="update" id="pressure">0 mb</span>
      </li>
      <li class="info wind">
        <h2 class="title">RAIN</h2>
        <span class='update' id="rain">0%</span>
      </li>
      <li class="info humidity">
        <h2 class="title">HUMIDITY</h2>
        <span class='update' id="humidity">23%</span>
      </li>
    </ul>
  </div>
</div>
 
<script>
setInterval(drawClock, 2000);

function drawClock() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  // Date
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var today = new Date();
  document.getElementById("date").innerHTML = today.toLocaleDateString("en-US", options);

  // Hour
  var hourAngle = (360 * (hour / 12)) + ((360 / 12) * (minute / 60));
  var minAngle = 360 * (minute / 60);
  document.getElementById("hour").style.transform = "rotate(" + hourAngle + "deg)";
  // Minute
  document.getElementById("min").style.transform = "rotate(" + minAngle + "deg)";

  // Get Temperature, Humidity, and Pressure Data
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var temperature = data.temperature;
      var humidity = data.humidity;
      var pressure = data.pressure;

      // Update temperature, humidity, and pressure values
      document.getElementById("temp").innerHTML = temperature + " &deg;C";
      document.getElementById("humidity").innerHTML = humidity + "%";
      document.getElementById("pressure").innerHTML = pressure + " mb";

      // Additional functionality
      if (temperature > 30) {
        document.getElementById("temp").style.color = "red";
      } else if (temperature < 10) {
        document.getElementById("temp").style.color = "blue";
      } else {
        document.getElementById("temp").style.color = "white";
      }

      if (humidity > 70) {
        document.getElementById("humidity").style.color = "blue";
      } else {
        document.getElementById("humidity").style.color = "white";
      }
    }
  };
  xhttp.open("GET", "readBMP", true);
  xhttp.send();
  
  // Function to map a value from one range to another
  function mapRange(value, minInput, maxInput, minOutput, maxOutput) {
  return (value - minInput) * (maxOutput - minOutput) / (maxInput - minInput) + minOutput;
}

}
</script>
</body>
</html>
)=====";
```

### Weather Station Main Code

```c++
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP280.h>


#include "index.h" //Our HTML webpage contents with javascripts
#include "DHTesp.h" //DHT11 Library for ESP

#define LED 2 //On board LED

#define RAIN_SENSOR_PIN A0 // Rain sensor analog pin
#define DHTPIN D5          // DHT11 sensor pin
#define DHTTYPE DHT11     // DHT11 sensor type
 
#define ALTITUDE 1655.0 // Altitude in meters
 
DHTesp dht;

Adafruit_BMP280 bmp; // Create an instance of the BMP280 sensor

const char* ssid = "FROSTY";
const char* password = "12345678";

ESP8266WebServer server(80);

void handleRoot() {
String s = MAIN_page; //Read HTML contents
server.send(200, "text/html", s); //Send web page
}

float humidity, temperature;
 
void handleADC() {
char status;
double T,P,p0,a;
double Tdeg, Tfar, phg, pmb;
 
int rain = analogRead(A0);
 
float pressure = bmp.readPressure() / 100.0; // Read pressure in Pa and convert to hPa

float altitude = bmp.readAltitude(ALTITUDE); // Read altitude in meters

//Create JSON data
String data = "{\"Rain\":\"" + String(rain) + "\",\"Pressuremb\":\"" + String(pressure) + "\",\"Pressurehg\":\"" + String(pressure / 33.8639) + "\", \"Temperature\":\"" + String(temperature) + "\", \"Humidity\":\"" + String(humidity) + "\", \"Altitude\":\"" + String(altitude) + "\"}"; 
digitalWrite(LED,!digitalRead(LED)); //Toggle LED on data request ajax
server.send(200, "text/plane", data); //Send ADC value, temperature and humidity JSON to client ajax request
 
delay(dht.getMinimumSamplingPeriod());
 
humidity = dht.getHumidity();
temperature = dht.getTemperature();

Serial.print("H:");
Serial.println(humidity);
Serial.print("T:");
Serial.println(temperature); //dht.toFahrenheit(temperature));
Serial.print("R:");
Serial.println(rain);
}
 
void setup()
{
Serial.begin(115200);
Serial.println();
 
// dht11 Sensor
 
dht.setup(DHTPIN, DHTesp::DHT11); //for DHT11 Connect DHT sensor to GPIO 17
pinMode(LED,OUTPUT);

WiFi.begin(ssid, password); //Connect to your WiFi router
Serial.println("");
 
// Wait for connection
while (WiFi.status() != WL_CONNECTED) {
delay(500);
Serial.print("Connecting");
Serial.print(".");
}
 
if (!bmp.begin(0x76)) {
  Serial.println("Could not find a valid BMP280 sensor, check wiring!");
  while (1);
}

//If connection successful show IP address in serial monitor

Serial.println("");
  Serial.println(" * File: weather.ino");
  Serial.println(" * Author: SriBalaji");
  Serial.println(" * Date: May 31, 2023");
  Serial.println(" * Description: Arduino program for temperature and weather display");
  Serial.println(" * Website: www.sribalaji.eu.org");
  Serial.println(" *");
  Serial.println(" * MIT License");
  Serial.println(" *");
  Serial.println(" * Copyright (c) 2023 SriBalaji");
  Serial.println(" *");
  Serial.println(" * Permission is hereby granted, free of charge, to any person obtaining a copy");
  Serial.println(" * of this software and associated documentation files (the \"Software\"), to deal");
  Serial.println(" * in the Software without restriction, including without limitation the rights");
  Serial.println(" * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell");
  Serial.println(" * copies of the Software, and to permit persons to whom the Software is");
  Serial.println(" * furnished to do so, subject to the following conditions:");
  Serial.println(" *");
  Serial.println(" * The above copyright notice and this permission notice shall be included in all");
  Serial.println(" * copies or substantial portions of the Software.");
  Serial.println(" *");
  Serial.println(" * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR");
  Serial.println(" * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,");
  Serial.println(" * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE");
  Serial.println(" * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER");
  Serial.println(" * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,");
  Serial.println(" * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE");
  Serial.println(" * SOFTWARE.");
Serial.println("");
Serial.print("Connected to ");
Serial.println(ssid);
Serial.print("IP address: ");
Serial.println(WiFi.localIP()); //IP address assigned to your ESP
 
server.on("/", handleRoot); //Which routine to handle at root location. This is display page
server.on("/readADC", handleADC); //This page is called by java Script AJAX
 
server.begin(); //Start server
Serial.println("HTTP server started");
}

void loop()
{
server.handleClient(); //Handle client requests
}
```

