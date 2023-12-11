---
id: manual
slug: /
---

# Introduction

Welcome to the Uberlogger User Manual. The Uberlogger allows you to
measure and record voltage, temperature, and digital inputs. With its
ability to log and store data directly to an SD card in the universally
readable CSV (Comma Separated Values) format, Uberlogger is a simple,
yet powerful measurement device.

Designed with both precision and ease-of-use in mind, Uberlogger
integrates effortlessly into a range of applications such as industrial
control, environmental monitoring, research, and development, and much
more. Whether you are monitoring temperature and voltage fluctuations in
a factory setting or capturing data for scientific research, Uberlogger
can meet and exceed your data acquisition requirements.

This manual will guide you through all aspects of the Uberlogger: from
setup, operation, data retrieval, troubleshooting, to maintenance. If
you encounter any issues or have questions while using the Uberlogger,
our dedicated support team is available to assist you. You can find our
contact information at the end of this manual.

Thank you for choosing the Uberlogger for your data-acquisition needs.
We are confident that this device will prove to be an indispensable tool
in your projects, research, and data analysis projects.

Happy logging!

## Safety Precautions

### Voltage Limitations

The Uberlogger is designed to operate with a 5V power supply only. Do
not attempt to power the device with a voltage higher than 5V, as it may
cause permanent damage to the device and void the warranty. The maximum
voltage that the device can handle on the inputs is +/- 60V. Exceeding
this voltage range may lead to unsafe situations to the user and may
break the Uberlogger.

### Temperature Range

The Uberlogger is suitable for use in environments with temperatures
ranging from 10 °C to +50°C. Operating the device outside this
temperature range may lead to inaccurate measurements or damage to
internal components.

### Storage Temperature

When not in use, store the Uberlogger in a dry, cool environment within
the temperature range of 10°C to +40°C.

### USB-C Connector

Use only the provided USB-C cable or compatible accessories to connect
the Uberlogger to a USB-C port or a 5V power supply. Using non-certified
cables may lead to electrical issues or malfunction.

### Power Supply Current

Ensure the power supply used to power the Uberlogger provides a minimum
current of 300mA. Using a power supply with lower current may result in
unreliable performance or data loss.

### Avoid Water Exposure

The Uberlogger is not water-resistant, so keep it away from liquids and
moisture to prevent damage.

### Secure Mounting

When using the Uberlogger, ensure it is securely mounted or positioned
in a stable manner to prevent accidental falls or damage during
operation.

### Environmental Conditions

Operate the Uberlogger within the specified temperature range (15°C to
+50°C) and avoid exposing it to extreme temperatures or environmental
conditions that could affect its performance.

### Proper Power Down

Always power off the Uberlogger properly before disconnecting it from
the power source or USB-C port to prevent data corruption and ensure a
safe shutdown.

### Adherence to Local Regulations:

Comply with all relevant safety regulations, codes, and standards
applicable in your area when using the Uberlogger.

By following these safety precautions, you can ensure the safe and
reliable operation of the Uberlogger while utilizing its capabilities
for precise voltage and temperature data acquisition in a wide range of
environments and applications.

# Package content

The Uberlogger contains the following items:

- 1x Uberlogger

- 8x NTC (Negative Temperature Coefficient) sensors

- 1x USB-C cable

- 1x 32 GB SD card

Verify that all these items are present in the package. If something is
missing, please contact Uberlogger or the supplier.

# API endpoints

To control your Uberlogger via Wi-Fi, you can make use of its endpoints
which are described below. With this you can retrieve live data, the
current settings, start and stop the logger and more.

**Limitation**: **don't call the endpoints more than twice per second**.
There is no throttling implemented, so calling them too often may
overload the Uberlogger and could lead to unstable behaviour.

# Problem solving

## Measurements giving wrong values

### Analog zero offset is very high (in volts range)

Check that the red DIP-switches positions correspond with the settings
on the Configuration page. See also chapter 5.5.3.

### Analog zero offset deviates small, but significant

If analog inputs are not 0V, then calibrate the Uberlogger using the
Calibration button. Please note that the values will always fluctuate
about ±0.02V for 12 bits and ±0.01V for 16 bits.

### I have 2 temperature sensors in open air, but the temperatures are not equal

Having a temperature difference between sensors in open air can quickly
happen.

### Digital inputs are not triggering

Digital inputs require a minimum of 2.0V for triggering to go up.

If you are still experiencing measurement issues, please contact support
via
[www.uberlogger.com](https://tecnionnl.sharepoint.com/sites/uberlogger/Shared%20Documents/Design/Documentation/Manual/www.uberlogger.com).

## Wi-Fi problems

### When Unable to Connect to the Uberlogger Configured as a Hotspot:

- **Check Proximity:** Ensure that you are within range of the
  Uberlogger\'s hotspot signal. Walls or other obstacles can degrade
  the signal quality.

- **Reboot the Uberlogger:** Power-cycle or reset the Uberlogger to
  refresh its settings and try connecting again.

- **Check for Interference:** If you are in an area with multiple
  Wi-Fi networks, check if the Wi-Fi channel of the Uberlogger hotspot
  channel is not interfering with another network. You can change the
  network channel of the hotspot as described in section 5.8.2.

### When Unable to Connect the Uberlogger to a Local Access Point:

- **Check your access point frequency:** currently only 2.4 GHz
  networks are supported.

- **Check RSSI Signal:** Verify that the RSSI (Received Signal
  Strength Indicator) signal of the local access point is strong
  enough for the Uberlogger to connect. It should have an RSSI of
  minimum -80 dB.

- **Confirm Password:** Make sure that you\'ve entered the correct
  password for the local access point.

- **Change Wi-Fi Channel:** Ensure that the Wi-Fi channel set on the
  local access point is compatible with the Uberlogger. You may need
  to change either device setting.

- **Reboot Both Devices:** Try power-cycling both the Uberlogger and
  the local access point. Wait for a minute or two before powering
  them back on.

- **Guest networks and enterprise networks:** currently the Uberlogger
  does not support guest networks which require acceptance of network
  access conditions. Also, networks with certificates are not
  supported.

- **Check for MAC Filtering:** Ensure that your local access point
  doesn't have MAC address filtering enabled. If it does, add the
  Uberlogger\'s MAC address to the allowed list.

## Red LED flashing & Error codes

In case an error occurs, the red LED on the Uberlogger will be flashing
and you can see the error code on the configuration page. Each error
code is described in Table 1.

+----------+------------------------------+---------------------------+
| **Error | **Meaning** | **Solution** |
| code** | | |
+==========+==============================+===========================+
| 1 | Unable to open log file. | Please check the SD card |
| | | for errors on your PC or |
| | | if the SD card is full. |
+----------+------------------------------+---------------------------+
| 4, 8, | Internal hardware error | Please contact customer |
| 32, 256 | | support and report the |
| | | corresponding error code |
+----------+------------------------------+---------------------------+
| 16 | Unable to write on SD card. | - Check the free disk |
| | | space of the SD card. |
| | | |
| | | - Check if you |
| | | read/write the card |
| | | on another device. |
| | | |
| | | - If you still get this |
| | | error, contact |
| | | Uberlogger support |
+----------+------------------------------+---------------------------+
| 32 | Sync error | Unable to synchronize |
| | | with support chip. |
| | | Contact Uberlogger |
| | | support |
+----------+------------------------------+---------------------------+
| 128 | Unable to mount SD card | Try reading the SD card |
| | | on a PC and then putting |
| | | the SD card back into the |
| | | Uberlogger may solve the |
| | | issue. If not, try |
| | | another SD card. |
+----------+------------------------------+---------------------------+
| 512 | No free space | You need at least 200 kB |
| | | of free space on the SD |
| | | card. Try remove files to |
| | | free up space on the SD |
| | | card |
+----------+------------------------------+---------------------------+
| 4096 | Max file size reached | The maximum file size has |
| | | been exceeded. Currently |
| | | limited to 4000000000 |
| | | bytes. |
+----------+------------------------------+---------------------------+

# Customer support

You can contact customer support at Uberlogger by going to
[www.uberlogger.com/support](http://www.uberlogger.com/support).

# Electrical /mechanical specifications

+------------------------+---------------------------+----------------+
| **Parameter** | **Description** | **Value** |
+========================+===========================+================+
| **_Electrical | | |
| characteristics_** | | |
+------------------------+---------------------------+----------------+
| Supply voltage | | 4.75 V \... |
| | | 5.25 V |
+------------------------+---------------------------+----------------+
| Supply current | | 300 mA (max) |
+------------------------+---------------------------+----------------+
| **_Analog input | | |
| characteristics_** | | |
+------------------------+---------------------------+----------------+
| Input voltage range | Selectable | -10 V \... +10 |
| | | V\ |
| | | -60 V \... +60 |
| | | V |
+------------------------+---------------------------+----------------+
| Input impedance | | 100 kOhm |
+------------------------+---------------------------+----------------+
| Input accuracy | | +/-0.5% |
+------------------------+---------------------------+----------------+
| ADC resolution | Selectable | 12-bit\ |
| | | 16-bit |
+------------------------+---------------------------+----------------+
| Analog filter | Analog anti-aliasing | 5 kHz |
| | filter cut-off frequency | |
| | (1st order) | |
+------------------------+---------------------------+----------------+
| Digital filter on | Digital anti-aliasing | f~sample~/2 |
| analog inputs | filter cut-off frequency | |
| | (1st order)\ | |
| | Active in 16-bit mode | |
| | only | |
+------------------------+---------------------------+----------------+
| Input protection | Over-voltage protection | clamped |
+------------------------+---------------------------+----------------+
| **_Digital input | | |
| characteristics_** | | |
+------------------------+---------------------------+----------------+
| Input voltage range | | -60 V \... +60 |
| | | V |
+------------------------+---------------------------+----------------+
| Input impedance | | 100 kOhm |
+------------------------+---------------------------+----------------+
| Analog filter | Analog de-bounce filter | 100 kHz |
| | cut-off frequency (1st | |
| | order) | |
+------------------------+---------------------------+----------------+
| Input LOW | Voltage to read digital | 1.0 V |
| | read LOW (false) | |
+------------------------+---------------------------+----------------+
| Input HIGH | Voltage to read digital | 2.0 V |
| | read HIGH (true) | |
+------------------------+---------------------------+----------------+
| Input protection | Over-voltage protection | Clamped |
+------------------------+---------------------------+----------------+
| **Connectivity** | | |
+------------------------+---------------------------+----------------+
| NTC type | | 10 kOhm @ 25 |
| | | ⁰C, beta=3950 |
+------------------------+---------------------------+----------------+
| NTC connector | | JST-XH |
+------------------------+---------------------------+----------------+
| Wi-Fi security | | WPA2 personal |
+------------------------+---------------------------+----------------+
| USB-Port-C | | Only used for |
| | | power |
+------------------------+---------------------------+----------------+
| SD-Card | | MicroSD |
| | | |
| | | Up to 32GB |
| | | |
| | | FAT only |
| | | |
| | | Max file size |
| | | 4GB |
+------------------------+---------------------------+----------------+
| **Mechanical** | | |
+------------------------+---------------------------+----------------+
| Dimensions (outer) | | 148x77x23 mm |
| | | ( |
| | | approximately) |
+------------------------+---------------------------+----------------+
| Enclosure type | | PCB stacked |
+------------------------+---------------------------+----------------+
