# FAQ

## Measurements & calibration issues

<details>
  <summary><strong>Measurements Giving Wrong Values</strong></summary>

  <h3>High Analog Zero Offset (in volts range)</h3>
  <p>Ensure that the red DIP-switch positions correspond to the settings on the <a href="Configuration#analog--digital-channels">Configuration page</a>.</p>

  <h3>Small, Significant Analog Zero Offset</h3>
  <p>If analog inputs are not 0V, calibrate the Uberlogger using the Calibration button. Please note that the values will always fluctuate around ±0.02V for 12-bit resolution and ±0.01V for 16-bit resolution.</p>

</details>

<details>
  <summary><strong>Temperature Sensor Discrepancies</strong></summary>

  <h3>Unequal Readings Between Two Open-Air Temperature Sensors</h3>
  <p>A temperature difference between sensors in open air can occur due to environmental factors.</p>

</details>

<details>
  <summary><strong>Digital Input Issues</strong></summary>

  <h3>Digital Inputs Not Triggering</h3>
  <p>Digital inputs require a minimum of 2.0V to trigger a state change.</p>

</details>

<details>
  <summary><strong>Calibration Issues After Zero Calibration</strong></summary>

  <h3>Zero Calibration Results Seem Off</h3>
  <p>Make sure all NTCs and analog wires are disconnected. Set all analog inputs to the analog input mode and select a range of -10V / +10V. Then, recalibrate the Uberlogger. If the issue persists, please contact support.</p>

</details>

## Wi-Fi issues

<details>
  <summary><strong>Unable to Connect to Uberlogger in Hotspot Mode</strong></summary>

  <ul>
    <li><strong>Check Proximity:</strong> Ensure you are within range of the Uberlogger's hotspot signal. Walls or obstacles can degrade signal quality.</li>
    <li><strong>Reboot the Uberlogger:</strong> Power-cycle or reset the Uberlogger to refresh its settings and try connecting again.</li>
    <li><strong>Check for Interference:</strong> If you are in an area with multiple Wi-Fi networks, check if the Uberlogger hotspot channel is not interfering with another network. You can change the network channel as described <a href="Configuration#hotspot-wi-fi-channel">here</a>.</li>
  </ul>

</details>

<details>
  <summary><strong>Unable to Connect the Uberlogger to a Local Access Point</strong></summary>

  <ul>
    <li><strong>Check Access Point Frequency:</strong> Ensure the access point is operating on the 2.4 GHz band, as 5 GHz networks are not supported.</li>
    <li><strong>Check RSSI Signal:</strong> Verify that the RSSI (Received Signal Strength Indicator) of the access point is strong enough. The signal strength should be better than -80 dB.</li>
    <li><strong>Confirm Password:</strong> Ensure the correct password is entered for the local access point.</li>
    <li><strong>Change Wi-Fi Channel:</strong> Ensure the Wi-Fi channel set on the access point is compatible with the Uberlogger.</li>
    <li><strong>Reboot Both Devices:</strong> Power-cycle both the Uberlogger and the local access point, and try reconnecting after a minute.</li>
    <li><strong>Guest and Enterprise Networks:</strong> Uberlogger does not support guest networks that require login portals or networks with enterprise-level certificates.</li>
    <li><strong>Check for MAC Filtering:</strong> If the local access point has MAC address filtering enabled, add the Uberlogger's MAC address to the whitelist.</li>
  </ul>

</details>

<details>
  <summary><strong>Browser keeps asking for a login</strong></summary>

  <p>If the web interface login is enabled, the browser shows a native dialog asking for a username and password. The username is fixed as <code>admin</code> &mdash; only the password is user-configurable. Make sure the caps lock is off and that you are typing the password exactly as configured (passwords are case-sensitive).</p>

  <p>If you have forgotten the web interface password, press and hold the "mode" button for 5 seconds. This clears all credentials (web interface password, hotspot password and Wi-Fi client password) and restores the open hotspot defaults; the status LED blinks to confirm. If the login still persists, power-cycle the device, restore default settings via the Configuration page (only possible if you can still log in), or contact <a href="https://www.uberlogger.com/contact.html">customer support</a>.</p>

</details>

<details>
  <summary><strong>Forgot the Wi-Fi hotspot password</strong></summary>

  <p>If you configured a WPA2/WPA3 password for the Uberlogger hotspot and can no longer connect, press and hold the "mode" button for 5 seconds. This resets the Wi-Fi configuration back to defaults (open hotspot, channel 1, no client mode) so you can rejoin and reconfigure the password.</p>

</details>

## Red LED flashing & error codes

<details>
  <summary><strong>Overview of codes</strong></summary>

  <p>In case of an error, the red LED on the Uberlogger will flash, and you can see the error code on the configuration page. Below is the list of error codes and their meanings.</p>

  <table>
    <tr>
      <th>Error Code</th>
      <th>Meaning</th>
      <th>Solution</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Unable to open log file.</td>
      <td>Check the SD card for errors on your PC or if the SD card is full.</td>
    </tr>
    <tr>
      <td>4, 8, 32, 256</td>
      <td>Internal hardware error</td>
      <td>Contact <a href="https://www.uberlogger.com/contact.html">customer support</a> and report the error code.</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Unable to write on SD card.</td>
      <td>Check free disk space. If the issue persists, contact support.</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Sync error</td>
      <td>Unable to synchronize with support chip. Contact <a href="https://www.uberlogger.com/contact.html">customer support</a>.</td>
    </tr>
    <tr>
      <td>128</td>
      <td>Unable to mount SD card</td>
      <td>Try reading the SD card on a PC and reinsert it into the Uberlogger. If it fails, try another SD card.</td>
    </tr>
    <tr>
      <td>512</td>
      <td>No free space</td>
      <td>You need at least 200 kB of free space. Remove files from the SD card to free up space.</td>
    </tr>
    <tr>
      <td>4096</td>
      <td>Max file size reached</td>
      <td>The maximum file size of 4 GB has been exceeded.</td>
    </tr>
  </table>

</details>

## Customer Support

<p>If you cannot solve the issue using the above FAQ, you can contact customer support by visiting <a href="https://www.uberlogger.com/contact.html">www.uberlogger.com/contact</a>.</p>
