# Technical datasheet

- 8 Analog or NTC inputs (selectable)
- 6 digital inputs
- Support for external trigger and external control through digital inputs
- Log frequencies: once per hour, once per 10 minutes, once per 5 minutes, once per minute, once per 10 seconds, 1 Hz, 2 Hz, 5 Hz, 10 Hz, 25 Hz, 50 Hz, 100 Hz, 250 Hz
- ADC resolution 12-bit or 16-bit
- Range of +/-10V or +/-60V (selectable)
- Works via USB-C powered port (300 mA max.)
- 2.4GHz Wi-Fi connection modes
  - Access point
  - Client mode (connect to access point)
  - Both modes can be active simultaneously
- Web interface
  - 1 Hz live data view of the channels
  - Start / stop logging
  - Configure settings
- Two physical buttons: one for starting and stopping logging, one to reset
- LEDs: log status (green) and error state (red)
- API control for configuring and controlling the logger and retrieving data
- RTC clock to keep track of time which is also stored in the CSV as UTC time (no time zone supported)
  - Time will be synced to your PCs time through the web interface
  - A lithium cell is included in the board to keep time running when power is off.
- 1x USB-C cable and 8x NTCs included
- Firmware upgradable for new features

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
