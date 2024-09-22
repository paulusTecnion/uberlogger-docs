"use strict";(self.webpackChunkmy_website_2=self.webpackChunkmy_website_2||[]).push([[140],{6718:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=n(4848),s=n(8453);const o={},i="Throubleshooting",a={id:"Manual/Throubleshooting/index",title:"Throubleshooting",description:"Measurements giving wrong values",source:"@site/docs/Manual/08-Throubleshooting/index.md",sourceDirName:"Manual/08-Throubleshooting",slug:"/Manual/Throubleshooting/",permalink:"/Manual/Throubleshooting/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Manual/08-Throubleshooting/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technical datasheet",permalink:"/Manual/Technical-datasheet/"}},l={},h=[{value:"Measurements giving wrong values",id:"measurements-giving-wrong-values",level:2},{value:"Analog zero offset is very high (in volts range)",id:"analog-zero-offset-is-very-high-in-volts-range",level:3},{value:"Analog zero offset deviates small, but significant",id:"analog-zero-offset-deviates-small-but-significant",level:3},{value:"I have 2 temperature sensors in open air, but the temperatures are not equal",id:"i-have-2-temperature-sensors-in-open-air-but-the-temperatures-are-not-equal",level:3},{value:"Digital inputs are not triggering",id:"digital-inputs-are-not-triggering",level:3},{value:"After zero calibration, I get values that seem to be very off.",id:"after-zero-calibration-i-get-values-that-seem-to-be-very-off",level:2},{value:"Wi-Fi problems",id:"wi-fi-problems",level:2},{value:"When Unable to Connect to the Uberlogger Configured as a Hotspot:",id:"when-unable-to-connect-to-the-uberlogger-configured-as-a-hotspot",level:3},{value:"When Unable to Connect the Uberlogger to a Local Access Point:",id:"when-unable-to-connect-the-uberlogger-to-a-local-access-point",level:3},{value:"Red LED flashing &amp; Error codes",id:"red-led-flashing--error-codes",level:2},{value:"Customer support",id:"customer-support",level:2}];function c(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"throubleshooting",children:"Throubleshooting"})}),"\n",(0,t.jsx)(r.h2,{id:"measurements-giving-wrong-values",children:"Measurements giving wrong values"}),"\n",(0,t.jsx)(r.h3,{id:"analog-zero-offset-is-very-high-in-volts-range",children:"Analog zero offset is very high (in volts range)"}),"\n",(0,t.jsxs)(r.p,{children:["Check that the red DIP-switches positions correspond with the settings\r\non the ",(0,t.jsx)(r.a,{href:"Configuration#analog--digital-channels",children:"Configuration page"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"analog-zero-offset-deviates-small-but-significant",children:"Analog zero offset deviates small, but significant"}),"\n",(0,t.jsx)(r.p,{children:"If analog inputs are not 0V, then calibrate the Uberlogger using the\r\nCalibration button. Please note that the values will always fluctuate\r\nabout \xb10.02V for 12 bits and \xb10.01V for 16 bits."}),"\n",(0,t.jsx)(r.h3,{id:"i-have-2-temperature-sensors-in-open-air-but-the-temperatures-are-not-equal",children:"I have 2 temperature sensors in open air, but the temperatures are not equal"}),"\n",(0,t.jsx)(r.p,{children:"Having a temperature difference between sensors in open air can quickly\r\nhappen."}),"\n",(0,t.jsx)(r.h3,{id:"digital-inputs-are-not-triggering",children:"Digital inputs are not triggering"}),"\n",(0,t.jsx)(r.p,{children:"Digital inputs require a minimum of 2.0V for triggering to go up."}),"\n",(0,t.jsxs)(r.p,{children:["If you are still experiencing measurement issues, please contact support\r\nvia\r\n",(0,t.jsx)(r.a,{href:"https://www.uberlogger.com/support",children:"www.uberlogger.com"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"after-zero-calibration-i-get-values-that-seem-to-be-very-off",children:"After zero calibration, I get values that seem to be very off."}),"\n",(0,t.jsx)(r.p,{children:"Please make sure that you disconnected all NTCs and disconnected all analog wires. Set all analog inputs to analog inputs and set the range to -10V / +10V and try to recalibrate the Uberlogger. If the issue persists, contact support."}),"\n",(0,t.jsx)(r.h2,{id:"wi-fi-problems",children:"Wi-Fi problems"}),"\n",(0,t.jsx)(r.h3,{id:"when-unable-to-connect-to-the-uberlogger-configured-as-a-hotspot",children:"When Unable to Connect to the Uberlogger Configured as a Hotspot:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Check Proximity:"})," Ensure that you are within range of the\r\nUberlogger's hotspot signal. Walls or other obstacles can degrade\r\nthe signal quality."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Reboot the Uberlogger:"})," Power-cycle or reset the Uberlogger to\r\nrefresh its settings and try connecting again."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Check for Interference:"})," If you are in an area with multiple\r\nWi-Fi networks, check if the Wi-Fi channel of the Uberlogger hotspot\r\nchannel is not interfering with another network. You can change the\r\nnetwork channel of the hotspot as described ",(0,t.jsx)(r.a,{href:"Configuration#hotspot-wi-fi-channel",children:"in this section"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"when-unable-to-connect-the-uberlogger-to-a-local-access-point",children:"When Unable to Connect the Uberlogger to a Local Access Point:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Check your access point frequency:"})," currently only 2.4 GHz\r\nnetworks are supported."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Check RSSI Signal:"})," Verify that the RSSI (Received Signal\r\nStrength Indicator) signal of the local access point is strong\r\nenough for the Uberlogger to connect. It should have an RSSI of\r\nminimum -80 dB."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Confirm Password:"})," Make sure that you've entered the correct\r\npassword for the local access point."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Change Wi-Fi Channel:"})," Ensure that the Wi-Fi channel set on the\r\nlocal access point is compatible with the Uberlogger. You may need\r\nto change either device setting."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Reboot Both Devices:"})," Try power-cycling both the Uberlogger and\r\nthe local access point. Wait for a minute or two before powering\r\nthem back on."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Guest networks and enterprise networks:"})," currently the Uberlogger\r\ndoes not support guest networks which require acceptance of network\r\naccess conditions. Also, networks with certificates are not\r\nsupported."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Check for MAC Filtering:"})," Ensure that your local access point\r\ndoesn't have MAC address filtering enabled. If it does, add the\r\nUberlogger's MAC address to the allowed list."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"red-led-flashing--error-codes",children:"Red LED flashing & Error codes"}),"\n",(0,t.jsx)(r.p,{children:"In case an error occurs, the red LED on the Uberlogger will be flashing\r\nand you can see the error code on the configuration page. Each error\r\ncode is described in the table below."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Error"}),(0,t.jsx)(r.th,{children:"Meaning"}),(0,t.jsx)(r.th,{children:"Solution"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"Unable to open log file."}),(0,t.jsx)(r.td,{children:"- Please check the SD card for errors on your PC or if the SD card is full."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4, 8, 32, 256"}),(0,t.jsx)(r.td,{children:"Internal hardware error"}),(0,t.jsxs)(r.td,{children:["- Please contact ",(0,t.jsx)(r.a,{href:"https://www.uberlogger.com/support",children:"customer support"})," and report the corresponding error code."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"16"}),(0,t.jsx)(r.td,{children:"Unable to write on SD card."}),(0,t.jsxs)(r.td,{children:["- Check the free disk space of the SD card. ",(0,t.jsx)("br",{}),"- Check if you read/write the card on another device. ",(0,t.jsx)("br",{}),"- If you still get this error, contact Uberlogger support."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"32"}),(0,t.jsx)(r.td,{children:"Sync error"}),(0,t.jsxs)(r.td,{children:["- Unable to synchronize with support chip. ",(0,t.jsx)("br",{}),"- Contact Uberlogger ",(0,t.jsx)(r.a,{href:"https://www.uberlogger.com/support",children:"customer support"})," ."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"128"}),(0,t.jsx)(r.td,{children:"Unable to mount SD card"}),(0,t.jsxs)(r.td,{children:["- Try reading the SD card on a PC and then putting the SD card back into the Uberlogger; it may solve the issue. ",(0,t.jsx)("br",{}),"- If not, try another SD card."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"512"}),(0,t.jsx)(r.td,{children:"No free space"}),(0,t.jsx)(r.td,{children:"You need at least 200 kB of free space on the SD card. Try removing files to free up space on the SD card."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"4096"}),(0,t.jsx)(r.td,{children:"Max file size reached"}),(0,t.jsx)(r.td,{children:"The maximum file size has been exceeded. Currently limited to 4000000000 bytes."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"customer-support",children:"Customer support"}),"\n",(0,t.jsxs)(r.p,{children:["You can contact customer support at Uberlogger by going to\r\n",(0,t.jsx)(r.a,{href:"http://www.uberlogger.com/support",children:"www.uberlogger.com/support"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(6540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);