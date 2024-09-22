# Throubleshooting

## Measurements giving wrong values

### Analog zero offset is very high (in volts range)

Check that the red DIP-switches positions correspond with the settings
on the [Configuration page](Configuration#analog--digital-channels).

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
[www.uberlogger.com](https://www.uberlogger.com/support).

## After zero calibration, I get values that seem to be very off.

Please make sure that you disconnected all NTCs and disconnected all analog wires. Set all analog inputs to analog inputs and set the range to -10V / +10V and try to recalibrate the Uberlogger. If the issue persists, contact support.

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
  network channel of the hotspot as described [in this section](Configuration#hotspot-wi-fi-channel).

### When Unable to Connect the Uberlogger to a Local Access Point:

- **Check your access point frequency:** currently only 2.4 GHz
  networks are supported.

- **Check RSSI Signal:** Verify that the RSSI (Received Signal
  Strength Indicator) signal of the local access point is strong
  enough for the Uberlogger to connect. It should have an RSSI of
  minimum -80 dB.

- **Confirm Password:** Make sure that you've entered the correct
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
  Uberlogger's MAC address to the allowed list.

## Red LED flashing & Error codes

In case an error occurs, the red LED on the Uberlogger will be flashing
and you can see the error code on the configuration page. Each error
code is described in the table below.

| Error         | Meaning                     | Solution                                                                                                                                                               |
| ------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1             | Unable to open log file.    | - Please check the SD card for errors on your PC or if the SD card is full.                                                                                            |
| 4, 8, 32, 256 | Internal hardware error     | - Please contact [customer support](https://www.uberlogger.com/support) and report the corresponding error code.                                                       |
| 16            | Unable to write on SD card. | - Check the free disk space of the SD card. <br/>- Check if you read/write the card on another device. <br/>- If you still get this error, contact Uberlogger support. |
| 32            | Sync error                  | - Unable to synchronize with support chip. <br/>- Contact Uberlogger [customer support](https://www.uberlogger.com/support) .                                          |
| 128           | Unable to mount SD card     | - Try reading the SD card on a PC and then putting the SD card back into the Uberlogger; it may solve the issue. <br/>- If not, try another SD card.                   |
| 512           | No free space               | You need at least 200 kB of free space on the SD card. Try removing files to free up space on the SD card.                                                             |
| 4096          | Max file size reached       | The maximum file size has been exceeded. Currently limited to 4000000000 bytes.                                                                                        |

## Customer support

You can contact customer support at Uberlogger by going to
[www.uberlogger.com/support](http://www.uberlogger.com/support).
