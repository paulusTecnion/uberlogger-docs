# Technical datasheet

## Key Features

<ul>
  <li><strong>Analog & NTC Inputs:</strong> 8 channels (selectable between analog and NTC)</li>
  <li><strong>Digital Inputs:</strong> 6 channels</li>
  <li><strong>External Control:</strong> Supports external trigger and control through digital inputs</li>
  <li><strong>Logging Frequencies:</strong> </li>
    <ul>
      <li>Once per hour, once per 10 minutes, once per 5 minutes, once per minute</li>
      <li>High-speed options: 10 seconds, 1 Hz, 2 Hz, 5 Hz, 10 Hz, 25 Hz, 50 Hz, 100 Hz, 250 Hz</li>
    </ul>
  
  <li><strong>ADC Resolution:</strong> Selectable between 12-bit or 16-bit</li>
  <li><strong>Voltage Range:</strong> +/-10V or +/-60V (selectable)</li>
  <li><strong>Power Supply:</strong> USB-C powered (300 mA max.)</li>
  <li><strong>Wi-Fi:</strong> 2.4GHz with modes: </li>
    <ul>
      <li>Access point</li>
      <li>Client mode (connect to access point)</li>
      <li>Both modes can be active simultaneously</li>
    </ul>
  
  <li><strong>Web Interface Features:</strong></li>
    <ul>
      <li>1 Hz live data view of the channels</li>
      <li>Start / stop logging</li>
      <li>Configure settings</li>
    </ul>
  
  <li><strong>Buttons:</strong> 2 physical buttons for start/stop logging and reset</li>
  <li><strong>LEDs:</strong> Log status (green), error state (red)</li>
  <li><strong>API Control:</strong> Configure, control the logger, and retrieve data</li>
  <li><strong>RTC Clock:</strong></li>
    <ul>
      <li>Tracks time and stores it as UTC in the CSV (no time zone support)</li>
      <li>Time is synced to your PC through the web interface</li>
      <li>Includes a lithium cell to keep time running when power is off</li>
    </ul>
  
  <li><strong>Included Accessories:</strong> 1x USB-C cable, 1x32 GB micro SD-card and 8x NTCs</li>
  <li><strong>Firmware:</strong> Upgradable for new features</li>
</ul>

## Electrical specifications

| **Parameter**                       | **Description**                                            | **Value**                                         |
| ----------------------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| **_Electrical characteristics_**    |                                                            |                                                   |
| Supply voltage                      |                                                            | Range: 4.75 V to 5.25 V                           |
| Supply current (max)                |                                                            | 300 mA                                            |
| **_Analog input characteristics_**  |                                                            |                                                   |
| Input voltage range                 | Selectable                                                 | -10 V to +10 V or -60 V to +60 V                  |
| Input impedance                     |                                                            | 100 kOhm                                          |
| Input accuracy                      |                                                            | +/-0.5%                                           |
| ADC resolution                      | Selectable: 12-bit or 16-bit                               |                                                   |
| Analog filter                       | Analog anti-aliasing filter cut-off frequency (1st order)  | 5 kHz                                             |
| Digital filter on analog inputs     | Digital anti-aliasing filter cut-off frequency (1st order) | f_sample/2 (Active in 16-bit mode only)           |
| Averaging                           | Averaging values over time using IIR filter                | Only for f_sample < 1 Hz                          |
| Input protection                    | Over-voltage protection clamped                            |                                                   |
| **_Digital input characteristics_** |                                                            |                                                   |
| Input voltage range                 |                                                            | -60 V to +60 V                                    |
| Input impedance                     | 100 kOhm                                                   |                                                   |
| Analog filter                       | Analog de-bounce filter cut-off frequency (1st order)      | 100 kHz                                           |
| Input LOW                           | Voltage to read digital LOW (false)                        | 1.0V                                              |
| Input HIGH                          | Voltage to read digital HIGH (true)                        | 2.0V                                              |
| Input protection                    | Over-voltage protection clamped                            |                                                   |
| **Connectivity**                    |                                                            |                                                   |
| NTC type                            |                                                            | 10 kOhm @ 25⁰C, beta=3950                         |
| NTC connector                       |                                                            | JST-XH 2.5 2p                                     |
| Wi-Fi                               |                                                            | 802.11 b/g/n                                      |
| Wi-Fi supported frequencies         |                                                            | 2.4 GHz                                           |
| Wi-Fi security                      |                                                            | WPA2/WPA3 personal                                |
| USB-Port-C                          | Only used for power                                        |                                                   |
| SD-Card                             |                                                            | MicroSD, Up to 32GB, FAT only, Max file size: 4GB |
| **Mechanical**                      |                                                            |                                                   |
| Outer dimensions UL01               |                                                            | 148x77x23 mm (approximately)                      |
| Outer dimensions UL01B              |                                                            | 189x77x21.5 mm (approximately)                    |
| Enclosure type UL01                 |                                                            | Board stack with descriptive silkscreen           |
| Enclosure type UL01B                |                                                            | Black resin                                       |
