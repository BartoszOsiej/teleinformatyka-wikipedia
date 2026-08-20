---
sidebar_position: 1
---

# 📶 WiFi Standards — IEEE 802.11

> **PL:** Standardy bezprzewodowej sieci lokalnej.
> **EN:** Wireless local area network standards.

---

## 🇬🇧 WiFi Generation Comparison

| Standard | Name | Year | Freq | Max Speed | MIMO | Range (indoor) |
|----------|------|------|------|-----------|------|----------------|
| 802.11b | — | 1999 | 2.4 GHz | 11 Mbps | 1×1 | ~35m |
| 802.11a | — | 1999 | 5 GHz | 54 Mbps | 1×1 | ~25m |
| 802.11g | — | 2003 | 2.4 GHz | 54 Mbps | 1×1 | ~38m |
| 802.11n | **WiFi 4** | 2009 | 2.4/5 GHz | 600 Mbps | 4×4 | ~70m |
| 802.11ac | **WiFi 5** | 2014 | 5 GHz | 6.9 Gbps | 8×8 | ~35m |
| 802.11ax | **WiFi 6/6E** | 2020 | 2.4/5/6 GHz | 9.6 Gbps | 8×8 | ~30m |
| 802.11be | **WiFi 7** | 2024 | 2.4/5/6 GHz | 46 Gbps | 16×16 | ~30m |

---

## 🇬🇧 Key Technologies

### MIMO — Multiple Input Multiple Output

| Type | Description |
|------|-------------|
| **SU-MIMO** | Single user, multiple streams |
| **MU-MIMO** | Multiple users simultaneously |
| **Beamforming** | Focus signal toward specific client |
| **MU-MIMO + Beamforming** | WiFi 5/6: simultaneous multi-user focused beams |

### OFDM — Orthogonal Frequency Division Multiplexing

Divides the channel into multiple sub-carriers for parallel data transmission.

### OFDMA — Orthogonal Frequency Division Multiple Access (WiFi 6)

Assigns sub-carriers to different users simultaneously — reduces latency and improves efficiency in dense environments.

### BSS Coloring (WiFi 6)

Identifies overlapping BSS (Basic Service Sets) to reduce co-channel interference and improve spatial reuse.

---

## 🇬🇧 Frequency Bands

### 2.4 GHz

| Channel | Center Freq | Overlap with |
|---------|-------------|--------------|
| 1 | 2412 MHz | 2, 3, 4, 5 |
| 6 | 2437 MHz | 4, 5, 7, 8, 9, 10, 11 |
| 11 | 2462 MHz | 9, 10 |

**Non-overlapping channels:** 1, 6, 11 (in North America)
**Pros:** Better range, wall penetration
**Cons:** Crowded (microwaves, Bluetooth, Zigbee)

### 5 GHz

| Band | Channels | DFS Required |
|------|----------|-------------|
| UNII-1 | 36-48 | No |
| UNII-2 | 52-64 | Yes |
| UNII-2 Extended | 100-144 | Yes |
| UNII-3 | 149-165 | No |

**Pros:** More channels, less interference, higher speeds
**Cons:** Shorter range, wall attenuation

### 6 GHz (WiFi 6E)

- **New spectrum:** 5925-7125 MHz (1200 MHz)
- **14 new 20 MHz channels** (or 59 × 20 MHz)
- **No legacy devices** — clean spectrum
- **Requires WiFi 6E capable clients**

---

## 🇬🇧 WiFi 6/6E Features

| Feature | Description |
|---------|-------------|
| **OFDMA** | Multi-user sub-carrier allocation |
| **MU-MIMO** | Downlink + Uplink multi-user MIMO |
| **BSS Coloring** | Spatial reuse in dense environments |
| **TWT** | Target Wake Time — battery savings for IoT |
| **1024-QAM** | Higher modulation density |
| **160 MHz channels** | Wider channels for higher throughput |

---

## 🇬🇧 WiFi 7 (802.11be) Features

| Feature | Description |
|---------|-------------|
| **MLO** | Multi-Link Operation (simultaneous multi-band) |
| **4096-QAM** | Even higher modulation |
| **320 MHz channels** | Widest channels |
| **Preamble Puncturing** | Dynamic channel utilization |
| **Multi-RU** | Multiple Resource Units per user |

---

## 🇬🇧 WiFi Security

| Standard | Year | Encryption | Status |
|----------|------|-----------|--------|
| WEP | 1999 | RC4 (40/104-bit) | **Deprecated** — crackable in minutes |
| WPA | 2003 | TKIP/RC4 | **Deprecated** — vulnerable |
| WPA2 | 2004 | AES-CCMP | **Current minimum** |
| WPA3 | 2018 | AES-GCMP/CCMP | **Recommended** |

### WPA3 Improvements

| Feature | Description |
|---------|-------------|
| **SAE** | Simultaneous Authentication of Equals (replaces PSK) |
| **Forward Secrecy** | Past sessions can't be decrypted |
| **Protected Management Frames** | Prevents deauthentication attacks |
| **192-bit security** | For enterprise deployments |

---

## 🇬🇧 Site Survey

### Survey Types

| Type | Purpose |
|------|---------|
| **Passive** | Listen for existing APs, measure signal |
| **Active** | Connect to APs, measure throughput/roaming |
| **Predictive** | Software simulation before deployment |

### Key Metrics

| Metric | Good | Acceptable | Poor |
|--------|------|-----------|------|
| RSSI | > -65 dBm | -65 to -75 dBm | < -75 dBm |
| SNR | > 40 dB | 25-40 dB | < 25 dB |
| Channel overlap | 0 APs | 1 AP | > 2 APs |
| Retry rate | < 5% | 5-15% | > 15% |

---

- 
- 
- 
- 

---
