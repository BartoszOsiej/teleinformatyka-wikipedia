---
sidebar_position: 4
---

# WDM & DWDM

Wavelength Division Multiplexing — sending multiple optical signals through one fiber using different wavelengths.

---

## How WDM Works

```
λ1 (1310nm) ──┐
λ2 (1330nm) ──┤ MUX ──[ Single Fiber ]── DEMUX ──┤ λ1
λ3 (1350nm) ──┤                                    ├── λ2
λ4 (1370nm) ──┘                                    └── λ3
```

---

## CWDM vs DWDM

| Feature | CWDM | DWDM |
|---------|------|------|
| Channels | 4-18 | 40-160+ |
| Spacing | 20 nm | 0.8 nm (100 GHz) |
| Distance | Up to 80 km | Up to 3,000+ km |
| Cost | Lower | Higher |
| Amplification | No | Yes (EDFA) |
| Use | Metro/access | Long-haul/core |

---

## DWDM Channel Plan

| Channel | Frequency (THz) | Wavelength (nm) |
|---------|----------------|-----------------|
| 1 | 191.3 | 1563.86 |
| 10 | 192.1 | 1560.61 |
| 20 | 192.9 | 1557.36 |
| 30 | 193.7 | 1554.13 |
| 40 | 194.5 | 1550.92 |
| 50 | 195.3 | 1547.72 |
| 60 | 196.1 | 1544.53 |

---

## Components

| Component | Function |
|-----------|----------|
| **Mux/Demux** | Combine/separate wavelengths |
| **Transponder** | Converts client signal to WDM wavelength |
| **EDFA** | Erbium-Doped Fiber Amplifier — boosts all channels |
| **OADM** | Optical Add-Drop Multiplexer — insert/extract channels |
| **DCM** | Dispersion Compensation Module |
| **Filter** | Select specific wavelengths |

---

## Power Budget

```
Total Loss = Fiber Loss + Splice Loss + Connector Loss + Mux/Demux Loss + Margin

Example (100 km DWDM link):
Fiber:     100 km × 0.2 dB/km  = 20.0 dB
Splices:   10 × 0.1 dB         =  1.0 dB
Connectors: 4 × 0.3 dB         =  1.2 dB
Mux/Demux:                     =  4.0 dB
EDFA gain:                     = -20.0 dB
Margin:                        =  3.0 dB
────────────────────────────────────────
Total:                          =  9.2 dB (within budget)
```

---

## Amplification

| Amplifier | Gain Band | Use |
|-----------|-----------|-----|
| **EDFA** | C-band (1530-1565 nm) | Most DWDM |
| **EDFA L-band** | L-band (1565-1625 nm) | Extended DWDM |
| **Raman** | Any band | Distributed amplification |
| **SOA** | Various | Metro networks |

---

## Related Topics

- [Fiber Fundamentals](/fiber-optics/fundamentals)
- [SDH/SONET](/telecom/sdh-sonet)
- [Multiplexing](/telecom/multiplexing)
