# 📡 Teleinformatyka Wikipedia

![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10-FF6B35?style=flat-square&logo=docusaurus)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)
![PL](https://img.shields.io/badge/Język-Polski-DC143C?style=flat-square)
![EN](https://img.shields.io/badge/Language-English-00247D?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-GHCR-2496ED?style=flat-square&logo=docker)

**Kompleksowa encyklopedia wiedzy teleinformatycznej — po polsku i angielsku.**

> *Kompletny przewodnik po wszystkim, co może wymagać zawód teleinformatyka w pracy — od podstaw sieci po zaawansowaną architekturę 5G.*

**Live:** [bartoszosiej.github.io/teleinformatyka-wikipedia/](https://bartoszosiej.github.io/teleinformatyka-wikipedia/)

---

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

---

## 🚀 Quick Start

```bash
# Local dev
npm install
npm start

# Build
npm run build

# Docker
docker build -t teleinformatyka-wikipedia .
docker run -p 3000:80 teleinformatyka-wikipedia
```

---

## 🇬🇧 English

**Comprehensive teleinformatics knowledge encyclopedia — in Polish and English.**

A complete guide to everything a telecommunications engineer might need in their work — from networking basics to advanced 5G architecture.

---

## 📚 Documentation Structure

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

---

## 🏗️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Docusaurus 3.10 |
| Language | TypeScript |
| Deployment | GitHub Pages + Docker/GHCR |
| i18n | Polish (default) + English |

---

## License

MIT

---
