---
sidebar_position: 3
---

# 5G NR — New Radio

Fifth-generation mobile technology — higher speed, lower latency, massive device density.

---

## 5G vs LTE

| Feature | LTE | 5G NR |
|---------|-----|-------|
| Peak download | 1 Gbps | 20 Gbps |
| Peak upload | 150 Mbps | 10 Gbps |
| Latency | 10-50 ms | 1-10 ms |
| Device density | 100,000/km² | 1,000,000/km² |
| Spectrum | &lt;6 GHz | &lt;6 GHz + mmWave |
| Channel bandwidth | 20 MHz | 100-400 MHz |

---

## 5G Frequency Bands

| Band Type | Range | Bands | Characteristics |
|-----------|-------|-------|----------------|
| **Low-band** | &lt;1 GHz | n5, n8, n28 | Wide coverage, lower speed |
| **Mid-band** | 1-6 GHz | n41, n77, n78 | Balance of speed and coverage |
| **High-band (mmWave)** | 24-100 GHz | n257, n258, n260, n261 | Ultra-fast, short range |

---

## 5G Architecture

| Component | Function |
|-----------|----------|
| **gNodeB** | 5G base station |
| **AMF** | Access and Mobility Management Function |
| **SMF** | Session Management Function |
| **UPF** | User Plane Function |
| **AUSF** | Authentication Server Function |
| **NSSF** | Network Slice Selection Function |

---

## 5G Key Features

### Network Slicing

Create multiple virtual networks on one physical infrastructure:

```
Physical Network
├── Slice 1: eMBB (enhanced Mobile Broadband)
│   └── High bandwidth, streaming, VR
├── Slice 2: URLLC (Ultra-Reliable Low-Latency)
│   └── Industrial automation, autonomous vehicles
└── Slice 3: mMTC (massive Machine-Type Communications)
    └── IoT sensors, smart cities
```

### Beamforming

Focus signal toward specific users instead of broadcasting in all directions:

```
Traditional:  ████████████████████  (broadcast)
Beamforming:           ████           (focused)
                      ████
                    ████████
```

### Massive MIMO

| Feature | LTE | 5G |
|---------|-----|-----|
| Antenna elements | 2-8 | 64-256 |
| Simultaneous users | 4-8 | 16-32 |
| Capacity | Baseline | 5-10× improvement |

---

## 5G NR Air Interface

| Parameter | Value |
|-----------|-------|
| **Subcarrier spacing** | 15, 30, 60, 120, 240 kHz |
| **FFT size** | 2048-4096 |
| **Modulation** | QPSK, 16QAM, 64QAM, 256QAM |
| **Frame duration** | 10 ms |
| **Slot** | 0.5-125 μs (depending on SCS) |

---

## 5G Deployment Modes

| Mode | Description |
|------|-------------|
| **NSA** (Non-Standalone) | 5G radio + 4G core |
| **SA** (Standalone) | 5G radio + 5G core |

---

## 5G Use Cases

| Use Case | Latency | Bandwidth | Reliability |
|----------|---------|-----------|-------------|
| **eMBB** | &lt;10 ms | &gt;100 Mbps | 99.9% |
| **URLLC** | &lt;1 ms | &gt;10 Mbps | 99.999% |
| **mMTC** | N/A | &gt;10 kbps | 99.9% |

---

## Related Topics

- [LTE/4G](/wireless/lte-4g)
- [WiFi Standards](/wireless/wifi-standards)
- [Antennas](/wireless/antennas)
