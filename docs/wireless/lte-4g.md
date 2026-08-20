---
sidebar_position: 2
---

# LTE & 4G

Long Term Evolution — fourth-generation mobile broadband technology.

---

## LTE Overview

| Feature | Specification |
|---------|--------------|
| **Peak download** | 150 Mbps (Cat 4) to 1 Gbps (Cat 16) |
| **Peak upload** | 50 Mbps (Cat 4) to 150 Mbps (Cat 6) |
| **Latency** | 10-50 ms |
| **Frequency bands** | 700 MHz - 2.6 GHz |
| **Channel bandwidth** | 1.4 - 20 MHz |
| **Duplex** | FDD or TDD |

---

## LTE Architecture

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  eNodeB  │─────│   EPC    │─────│Internet  │
│ (Tower)  │     │          │     │          │
└────┬─────┘     │ ┌──────┐ │     └──────────┘
     │           │ │ MME  │ │
┌────┴─────┐     │ ├──────┤ │
│  UE      │     │ │ SGW  │ │
│ (Phone)  │     │ ├──────┤ │
└──────────┘     │ │ PGW  │ │
                 │ └──────┘ │
                 └──────────┘
```

| Component | Function |
|-----------|----------|
| **UE** | User Equipment (phone, modem) |
| **eNodeB** | Base station (Evolved Node B) |
| **MME** | Mobility Management Entity (signaling) |
| **SGW** | Serving Gateway (user plane) |
| **PGW** | PDN Gateway (IP address allocation) |

---

## LTE Frequency Bands

| Band | Uplink (MHz) | Downlink (MHz) | Region |
|------|-------------|----------------|--------|
| 1 | 1920-1980 | 2110-2170 | Europe, Asia |
| 3 | 1710-1785 | 1805-1880 | Europe, Asia |
| 7 | 2500-2570 | 2620-2690 | Europe, Asia |
| 12 | 699-716 | 729-746 | US (AT&T) |
| 20 | 830-862 | 791-821 | Europe (low band) |
| 28 | 703-748 | 758-803 | Asia Pacific |
| 40 | 2300-2400 | 2300-2400 | TDD (Asia) |

---

## LTE Categories

| Category | Download | Upload | MIMO |
|----------|---------|--------|------|
| Cat 1 | 10 Mbps | 5 Mbps | 1×1 |
| Cat 3 | 100 Mbps | 50 Mbps | 2×2 |
| Cat 4 | 150 Mbps | 50 Mbps | 2×2 |
| Cat 6 | 300 Mbps | 50 Mbps | 2×2 |
| Cat 12 | 600 Mbps | 100 Mbps | 4×4 |
| Cat 16 | 1 Gbps | 150 Mbps | 4×4 |

---

## LTE Air Interface

| Parameter | Value |
|-----------|-------|
| **Access scheme** | SC-FDMA (uplink), OFDMA (downlink) |
| **Subcarrier spacing** | 15 kHz |
| **FFT size** | 128-2048 (based on bandwidth) |
| **Modulation** | QPSK, 16QAM, 64QAM |
| **Frame duration** | 10 ms |
| **Subframe** | 1 ms |
| **Slot** | 0.5 ms |

---

## LTE Handover

| Phase | Description |
|-------|-------------|
| 1. Measurement | UE measures neighbor cells (RSRP, RSRQ) |
| 2. Report | UE sends measurement report to eNodeB |
| 3. Decision | Source eNodeB decides to handover |
| 4. Preparation | Target eNodeB reserves resources |
| 5. Execution | UE switches to target cell |
| 6. Completion | Path switch in core network |

---

## LTE Advanced (4G+)

| Feature | Description |
|---------|-------------|
| **Carrier Aggregation** | Combine up to 5 carriers (100 MHz total) |
| **Enhanced MIMO** | Up to 8×8 downlink, 4×4 uplink |
| **Relay nodes** | Extend coverage |
| **CoMP** | Coordinated Multipoint transmission |

---

## VoLTE — Voice over LTE

| Feature | Description |
|---------|-------------|
| **Codec** | AMR-WB (HD voice) |
| **Signaling** | SIP/IMS |
| **Quality** | HD voice, lower latency |
| **Fallback** | CSFB to 2G/3G if VoLTE unavailable |

---

## Related Topics

- [5G NR](/wireless/5g-nr)
- [WiFi Standards](/wireless/wifi-standards)
- [Antennas](/wireless/antennas)
