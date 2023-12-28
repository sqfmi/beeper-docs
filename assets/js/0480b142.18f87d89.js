"use strict";(self.webpackChunkbeepy=self.webpackChunkbeepy||[]).push([[836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,y=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:6},i="FAQ",s={unversionedId:"faq",id:"faq",title:"FAQ",description:"What's a Beepy?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/sqfmi/beepy-docs/blob/main/docs/faq.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Case Designs & 3D Models",permalink:"/docs/3D"}},l={},p=[{value:"What&#39;s a Beepy?",id:"whats-a-beepy",level:3},{value:"What is Beeper?",id:"what-is-beeper",level:3},{value:"Does it have LTE/4G/5G/LoRA/Zigbee/GPS/etc. connectivity?",id:"does-it-have-lte4g5glorazigbeegpsetc-connectivity",level:3},{value:"Does Beepy come with a case?",id:"does-beepy-come-with-a-case",level:3},{value:"My Beepy LED is always on",id:"my-beepy-led-is-always-on",level:3},{value:"I just opened the box and have no idea what to do",id:"i-just-opened-the-box-and-have-no-idea-what-to-do",level:3},{value:"Help, the screen is stuck displaying a very striking static pattern, even after I&#39;ve flashed the SD card",id:"help-the-screen-is-stuck-displaying-a-very-striking-static-pattern-even-after-ive-flashed-the-sd-card",level:3},{value:"I set my WiFi SSID and password in the Pi imager but it can&#39;t seem to connect",id:"i-set-my-wifi-ssid-and-password-in-the-pi-imager-but-it-cant-seem-to-connect",level:3},{value:"I prefer a white background with black text",id:"i-prefer-a-white-background-with-black-text",level:3},{value:"My display contrast is too low",id:"my-display-contrast-is-too-low",level:3},{value:"How can I found the IP address of Beepy on my network?",id:"how-can-i-found-the-ip-address-of-beepy-on-my-network",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"whats-a-beepy"},"What's a Beepy?"),(0,o.kt)("p",null,"Beepy is a portable computing device, with a beautiful high contrast, high resolution display, and a tactile keyboard + touchpad, it is the ultimate everyday hacking gadget."),(0,o.kt)("p",null,"Powered by the Raspberry Pi Zero W (or any other compatible SBCs), you can use it as a chat device (supporting all chat networks on Beeper e.g. iMessage/WhatsApp/Signal/etc. ), or use it as a hackable handheld cyberdeck, running any Linux application that runs on the Pi."),(0,o.kt)("h3",{id:"what-is-beeper"},"What is Beeper?"),(0,o.kt)("p",null,"Beeper is a universal chat app. It\u2019s a single app to chat with friends on 15 different chat networks."),(0,o.kt)("p",null,"Learn more at ",(0,o.kt)("a",{parentName:"p",href:"https://www.beeper.com"},"https://www.beeper.com")),(0,o.kt)("h3",{id:"does-it-have-lte4g5glorazigbeegpsetc-connectivity"},"Does it have LTE/4G/5G/LoRA/Zigbee/GPS/etc. connectivity?"),(0,o.kt)("p",null,"Additional connectivity can be expanded via USB or GPIO ports."),(0,o.kt)("h3",{id:"does-beepy-come-with-a-case"},"Does Beepy come with a case?"),(0,o.kt)("p",null,"No, but you can ",(0,o.kt)("a",{parentName:"p",href:"/docs/3D"},"3D print your own case"),". We'll be offering a case soon. Beepy can also be used as is (with the addition of a rubber band)."),(0,o.kt)("h3",{id:"my-beepy-led-is-always-on"},"My Beepy LED is always on"),(0,o.kt)("p",null,"You may be running an older version of the firmware, follow the firmware flashing instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#software-setup"},(0,o.kt)("strong",{parentName:"a"},"update the firmware")),"."),(0,o.kt)("h3",{id:"i-just-opened-the-box-and-have-no-idea-what-to-do"},"I just opened the box and have no idea what to do"),(0,o.kt)("p",null,"First you need to follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started"},"flash an SD card with the OS"),", then make sure the battery is charged by plugging in the USB C port and flipping the power switch. "),(0,o.kt)("h3",{id:"help-the-screen-is-stuck-displaying-a-very-striking-static-pattern-even-after-ive-flashed-the-sd-card"},"Help, the screen is stuck displaying a very striking static pattern, even after I've flashed the SD card"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#software-setup"},"Getting Started")," guide and run the install script before the screen can display anything."),(0,o.kt)("h3",{id:"i-set-my-wifi-ssid-and-password-in-the-pi-imager-but-it-cant-seem-to-connect"},"I set my WiFi SSID and password in the Pi imager but it can't seem to connect"),(0,o.kt)("p",null,"The Pi Zero W only supports 2.4GHz WiFi networks. Make sure you're not trying to connect to a 5GHz network."),(0,o.kt)("h3",{id:"i-prefer-a-white-background-with-black-text"},"I prefer a white background with black text"),(0,o.kt)("p",null,"You can invert the display mode by running ",(0,o.kt)("inlineCode",{parentName:"p"},"echo 1 | sudo tee /sys/module/sharp_drm/parameters/mono_invert")),(0,o.kt)("h3",{id:"my-display-contrast-is-too-low"},"My display contrast is too low"),(0,o.kt)("p",null,"You can modify the display constrast by changing the value in ",(0,o.kt)("inlineCode",{parentName:"p"},"/sys/module/sharp_drm/parameters/mono_cutoff")," - the default is 32."),(0,o.kt)("p",null,"If this is your first time booting up and you see a mostly blank screen with a vague raspberry shape in the top left and some scattered patches of black towards the middle then your image is probably set to boot into the desktop environment. You can make the desktop more legible by setting a ",(0,o.kt)("inlineCode",{parentName:"p"},"mono_cutoff")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"195")," or disable it through ",(0,o.kt)("inlineCode",{parentName:"p"},"raspi-config"),"."),(0,o.kt)("h3",{id:"how-can-i-found-the-ip-address-of-beepy-on-my-network"},"How can I found the IP address of Beepy on my network?"),(0,o.kt)("p",null,"You can check your router's config page for the list of connected device and look for the IP address"),(0,o.kt)("p",null,"-or-"),(0,o.kt)("p",null,"Run a network scan using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo arp-scan --localnet"),". This will list IP addresses of all devices in your local network"))}h.isMDXComponent=!0}}]);