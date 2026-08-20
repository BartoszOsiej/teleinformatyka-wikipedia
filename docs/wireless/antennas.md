---
sidebar_position: 5
---

# Antennas

Devices that convert electrical signals into electromagnetic waves and vice versa.

---

## Antenna Parameters

| Parameter | Description |
|-----------|-------------|
| **Gain** | Directivity relative to isotropic (dBi) |
| **Bandwidth** | Frequency range of operation |
| **Polarization** | Orientation of E-field (vertical, horizontal, circular) |
| **Beamwidth** | Angular width of main lobe (degrees) |
| **VSWR** | Voltage Standing Wave Ratio (&lt;2:1 is good) |

---

## Antenna Types

| Type | Gain | Beamwidth | Use |
|------|------|-----------|-----|
| **Dipole** | 2.15 dBi | 78° | Basic, WiFi |
| **Yagi** | 6-14 dBi | 30-60° | TV, point-to-point |
| **Parabolic dish** | 20-45 dBi | 1-10° | Microwave, satellite |
| **Panel** | 10-20 dBi | 30-90° | Cellular, WiFi |
| **Omnidirectional** | 2-8 dBi | 360° (horizontal) | Mobile, IoT |
| **Sector** | 10-18 dBi | 60-120° | Cell sites |

---

## Dipole Radiation Pattern

```
        Top view:
           ╱│╲
          ╱ │ ╲
         ╱  │  ╲
        ╱   │   ╲     Maximum radiation
       ╱    │    ╲    perpendicular to antenna
      ──────┼──────
       ╲    │    ╱
        ╲   │   ╱
         ╲  │  ╱
          ╲ │ ╱
           ╲│╱
```

---

## Gain and Beamwidth Trade-off

```
High gain (narrow beam):     Low gain (wide beam):
        │││                      ╲  │  ╱
        │││                       ╲ │ ╱
        │││                        ╲│╱
    ────┼┼┼────                 ────┼────
        │││                        ╱│╲
        │││                       ╱ │ ╲
        │││                      ╱  │  ╲
```

---

## Polarization Types

| Type | Description | Use |
|------|-------------|-----|
| **Linear (Vertical)** | E-field vertical | Mobile, omni |
| **Linear (Horizontal)** | E-field horizontal | TV, point-to-point |
| **Circular (LHCP)** | Rotates counter-clockwise | Satellite, RFID |
| **Circular (RHCP)** | Rotates clockwise | GPS, satellite |
| **Dual** | Both polarizations | MIMO, diversity |

---

## Link Budget Example

```
Transmitter:
  Tx Power:           +20 dBm
  Tx Cable Loss:      -2 dB
  Tx Antenna Gain:    +12 dBi
                      ──────
  EIRP:               +30 dBm

Receiver:
  Rx Antenna Gain:    +12 dBi
  Rx Cable Loss:      -2 dB
                      ──────
  Gain to Receiver:   +10 dBi

Path:
  Free Space Loss:    -100 dB (10 km, 5 GHz)
                      ──────
  Received Power:     -60 dBm

  Receiver Sensitivity: -75 dBm
  Fade Margin:         15 dB ✓
```

---

## VSWR — Voltage Standing Wave Ratio

| VSWR | Return Loss | Reflection | Quality |
|------|-------------|------------|---------|
| 1.0:1 | ∞ dB | 0% | Perfect |
| 1.2:1 | 21 dB | 1% | Excellent |
| 1.5:1 | 14 dB | 4% | Good |
| 2.0:1 | 10 dB | 11% | Acceptable |
| 3.0:1 | 6 dB | 25% | Poor |

---

## Related Topics

- [WiFi Standards](/wireless/wifi-standards)
- [LTE/4G](/wireless/lte-4g)
- [Microwave Links](/wireless/microwave-links)
