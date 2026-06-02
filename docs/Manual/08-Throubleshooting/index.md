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

  <p>The Uberlogger reads the supplied NTC thermistors (10&nbsp;kΩ at 25&nbsp;°C, β&nbsp;=&nbsp;3950) through a fixed on-board voltage divider and converts the measured resistance to a temperature using a single nominal NTC curve. The same curve is applied to every channel and each individual sensor is <strong>not</strong> calibrated. As a result, some difference between channels is normal and expected rather than a fault.</p>

  <h3>Unequal readings between two sensors at the same temperature</h3>
  <p>Two NTCs held at the same temperature can legitimately read slightly differently because of the sensors' own manufacturing tolerance (both the 25&nbsp;°C resistance and the β value vary part-to-part). Because the Uberlogger does not calibrate each sensor individually, this tolerance shows up directly as a small offset between channels &mdash; typically a fraction of a degree near room temperature, and more towards the ends of the measuring range.</p>
  <p>If you need channels to agree closely, characterise each one in a stable, well-stirred reference (for example a stirred ice-water bath at 0&nbsp;°C) and subtract the per-channel offset in your analysis.</p>

  <h3>Accuracy is worse far from room temperature</h3>
  <p>The conversion uses a single β value, which matches the sensor best around 25&nbsp;°C and drifts further from the true value towards the extremes of the supported range (roughly &minus;40&nbsp;°C to +120&nbsp;°C). In addition, NTC channels always sample at 12-bit resolution and the thermistor is highly non-linear, so the effective resolution (°C per measurement step) is finest in the middle of the range and coarsens at the very hot and very cold ends. Larger differences between sensors at temperature extremes are therefore expected.</p>

  <h3>Unequal readings between two open-air sensors</h3>
  <p>Open-air beads each measure their own micro-climate. Draughts, sunlight or other radiation, and nearby warm objects (including the user's hand or the Uberlogger itself) easily create real differences of a degree or more between two sensors only centimetres apart. The small bead also has thermal mass, so give the readings time to settle after a change before comparing them. A slight self-heating offset can also occur in completely still air because a small current flows through the sensor.</p>

  <h3>Check the basics first</h3>
  <ul>
    <li>Confirm the channel is set to <strong>NTC</strong> mode in the configuration <em>and</em> that the matching left DIP switch is set UP (see <a href="Configuration#setting-the-channel-type-and-voltage-range-switches">Configuration</a>).</li>
    <li>Keep the NTC leads short and avoid extending or splicing them &mdash; extra lead resistance is read as extra sensor resistance and biases the reading slightly colder.</li>
    <li>Make sure the connector is fully seated in the socket.</li>
    <li>For an absolute accuracy check, compare against a reference thermometer in the same well-stirred medium rather than in open air.</li>
  </ul>

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
    <li><strong>Check RSSI Signal:</strong> Verify that the RSSI (Received Signal Strength Indicator) of the access point is strong enough. The signal strength should be better than -80 dBm.</li>
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

  <p>The codes are bit values, so when more than one error is active at the same time the reported number is the <strong>sum</strong> of the individual codes (for example <code>12</code> means errors <code>4</code> and <code>8</code> are both active).</p>

  <table>
    <tr>
      <th>Error Code</th>
      <th>Meaning</th>
      <th>Solution</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Unable to open the log file.</td>
      <td>Check the SD card for errors on your PC and that it is not full.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Data overrun &mdash; samples were produced faster than they could be stored.</td>
      <td>Use a lower sample rate or a faster SD card. If it persists, contact support.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>No response from the internal support chip.</td>
      <td>Power-cycle the device. If it persists, contact <a href="https://www.uberlogger.com/contact.html">customer support</a> and report the code.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Faulty data received from the internal support chip.</td>
      <td>Power-cycle the device. If it persists, contact <a href="https://www.uberlogger.com/contact.html">customer support</a> and report the code.</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Unable to write to the SD card.</td>
      <td>Check free disk space and the card. If it persists, reformat or try another card.</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Synchronization error with the internal support chip.</td>
      <td>Power-cycle the device. If it persists, contact <a href="https://www.uberlogger.com/contact.html">customer support</a>.</td>
    </tr>
    <tr>
      <td>64</td>
      <td>Internal SPI communication error.</td>
      <td>Power-cycle the device. If it persists, contact <a href="https://www.uberlogger.com/contact.html">customer support</a>.</td>
    </tr>
    <tr>
      <td>128</td>
      <td>Unable to mount the SD card.</td>
      <td>Try reading the SD card on a PC and reinsert it into the Uberlogger. If it fails, try another SD card.</td>
    </tr>
    <tr>
      <td>256</td>
      <td>Timeout waiting for the internal support chip.</td>
      <td>Power-cycle the device. If it persists, contact <a href="https://www.uberlogger.com/contact.html">customer support</a>.</td>
    </tr>
    <tr>
      <td>512</td>
      <td>No free space on the SD card.</td>
      <td>You need at least 200 kB of free space. Remove files from the SD card to free up space.</td>
    </tr>
    <tr>
      <td>1024</td>
      <td>Unable to open a file on the SD card.</td>
      <td>Check the SD card for errors and reinsert it, or try another card.</td>
    </tr>
    <tr>
      <td>2048</td>
      <td>Unable to close a file on the SD card.</td>
      <td>Check the SD card for errors and reinsert it, or try another card.</td>
    </tr>
    <tr>
      <td>4096</td>
      <td>Maximum file size reached.</td>
      <td>The maximum file size of 4 GB has been exceeded. Use a smaller file split size so files are rotated before reaching the limit.</td>
    </tr>
  </table>

</details>

## Customer Support

<p>If you cannot solve the issue using the above FAQ, you can contact customer support by visiting <a href="https://www.uberlogger.com/contact.html">www.uberlogger.com/contact</a>.</p>
