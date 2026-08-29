<img src="https://capsule-render.vercel.app/api?type=soft&color=0:0d1117,50:da3633,100:a3d6ff&height=140&section=header&text=TeleWiedza&fontSize=32&fontColor=fff&desc=kompleksowa%20encyklopedia%20teleinformatyczna%20%C2%B7%20PL%20%2B%20EN&descSize=15&descAlignY=72" width="100%" />

<div align="center">

[![GHCR](https://img.shields.io/badge/GHCR-image-2496ED?style=for-the-badge&logo=docker)](https://github.com/BartoszOsiej/TeleWiedza/pkgs/container/teleinformatyka-wikipedia)
[![Live](https://img.shields.io/badge/live-GitHub_Pages-2ea043?style=for-the-badge&logo=githubpages)](https://bartoszosiej.github.io/teleinformatyka-wikipedia/)
![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10-FF6B35?style=for-the-badge&logo=docusaurus)
![i18n](https://img.shields.io/badge/i18n-PL_%2F_EN-DC143C?style=for-the-badge)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/BartoszOsiej/TeleWiedza/badge)](https://scorecard.dev/viewer/?uri=github.com/BartoszOsiej/TeleWiedza)

**Kompleksowa encyklopedia wiedzy teleinformatycznej — po polsku i angielsku.**

> *Kompletny przewodnik po wszystkim, co może wymagać zawód teleinformatyka —
> od podstaw sieci po zaawansowaną architekturę 5G.*

**→ [bartoszosiej.github.io/teleinformatyka-wikipedia](https://bartoszosiej.github.io/teleinformatyka-wikipedia/)**

</div>

## 📺 Demo



<!-- VHS auto-rendered — run: vhs demos/teleinfo.tape -->



![Teleinformatyka Demo](assets/teleinfo-demo.gif)




## 📖 Co znajdziesz w tej encyklopedii

| Sekcja | Tematy |
|--------|--------|
| 🌐 **Sieci komputerowe** | Model OSI, TCP/IP, adresowanie, routing, switching, DNS/DHCP |
| 📡 **Telekomunikacja** | PSTN, ISDN, VoIP, SIP, SDH/SONET, multipleksacja, QoS |
| 💡 **Światłowody** | Podstawy, kable, testowanie OTDR, WDM/DWDM, spajanie |
| 📶 **Bezprzewodowe** | WiFi (802.11a/b/g/n/ac/ax), LTE/4G, 5G NR, mikrofale |
| 🔐 **Bezpieczeństwo** | Firewalls, VPN, szyfrowanie, IDS/IPS, zero trust |
| 📋 **Protokoły** | HTTP/HTTPS, BGP/OSPF, SNMP/NETCONF, MPLS/VPN |
| 🛠️ **Narzędzia** | Wireshark, Nmap, pfSense, monitoring |
| 🎓 **Certyfikaty** | Cisco (CCNA/CCNP/CCIE), CompTIA, Juniper, cloud |
| 🎯 **Scenariusze** | Projektowanie, troubleshooting, migracja, remote work |

<details>
<summary><b>🇬🇧 English summary</b></summary>

**Comprehensive teleinformatics knowledge encyclopedia — in Polish and English.**

A complete guide to everything a telecommunications engineer might need in
their work — from networking basics to advanced 5G architecture.

Documentation structure:

```
docs/
├── networking/          # OSI, TCP/IP, routing, switching
├── telecom/             # VoIP, SIP, SDH, QoS
├── fiber-optics/        # OTDR, WDM, splicing
├── wireless/            # WiFi, LTE, 5G, antennas
├── security/            # Firewalls, VPN, encryption
├── protocols/           # BGP, OSPF, SNMP, MPLS
├── tools/               # Wireshark, Nmap, pfSense
├── certifications/      # Cisco, CompTIA, Juniper
└── scenarios/           # Design, troubleshooting, migration
```

</details>

<details>
<summary><b>🚀 Quick start & tech stack</b></summary>

```bash
# Local dev
npm install && npm start

# Build
npm run build

# Docker
docker build -t teleinformatyka-wikipedia .
docker run -p 3000:80 teleinformatyka-wikipedia
```

| Layer | Tech |
|-------|------|
| Framework | Docusaurus 3.10 |
| Language | TypeScript |
| Deployment | GitHub Pages + Docker/GHCR |
| i18n | Polish (default) + English |

</details>

---

<div align="center">

**Part of [BartoszOsiej](https://github.com/BartoszOsiej)'s portfolio**

MIT © 2026 Bartosz Osiej

</div>
