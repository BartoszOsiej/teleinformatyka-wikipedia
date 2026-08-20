---
sidebar_position: 4
---

# Microwave Links

Point-to-point wireless transmission using microwave frequencies for backhaul and long-distance communication.

---

## Microwave Frequencies

| Band | Frequency | Range | Capacity |
|------|-----------|-------|----------|
| **L** | 1-2 GHz | 50+ km | Low |
| **S** | 2-4 GHz | 40+ km | Low-Medium |
| **C** | 4-8 GHz | 30+ km | Medium |
| **X** | 8-12 GHz | 20+ km | Medium-High |
| **Ku** | 12-18 GHz | 15+ km | High |
| **Ka** | 26-40 GHz | 5-10 km | Very High |
| **E-band** | 70-80 GHz | 1-5 km | Ultra-High |

---

## Link Budget

```
Received Power = Tx Power + Tx Gain - Path Loss + Rx Gain - Other Losses

Path Loss (Free Space) = 20×log₁₀(d) + 20×log₁₀(f) + 32.45
  d = distance (km)
  f = frequency (MHz)
```

### Example (Ku-band, 10 km)

```
Tx Power:        +20 dBm
Tx Antenna Gain: +33 dBi
Path Loss:       -128 dB (Ku-band, 10 km)
Rx Antenna Gain: +33 dBi
Receiver:        -42 dBm
Required:        -50 dBm (for 99.999% availability)
Margin:          8 dB ✓
```

---

## Rain Fade

| Band | Rain Attenuation (100 mm/hr) |
|------|------------------------------|
| C (6 GHz) | 0.5 dB/km |
| Ku (15 GHz) | 5 dB/km |
| Ka (30 GHz) | 15 dB/km |
| E-band (75 GHz) | 30 dB/km |

**Mitigation:** Increase antenna size, shorter hops, adaptive coding.

---

## Antenna Requirements

| Link Distance | Recommended Dish Size |
|---------------|----------------------|
| &lt;5 km | 30-60 cm |
| 5-15 km | 60-120 cm |
| 15-30 km | 120-180 cm |
| 30-50 km | 180-300 cm |
| &gt;50 km | 300+ cm |

---

## Capacity Planning

| Modulation | Bits/Symbol | Required C/N |
|-----------|-------------|--------------|
| QPSK | 2 | 12 dB |
| 16QAM | 4 | 18 dB |
| 64QAM | 6 | 24 dB |
| 256QAM | 8 | 30 dB |

Higher modulation = more capacity but requires better signal quality.

---

## Common Applications

| Application | Band | Distance |
|-------------|------|----------|
| Cellular backhaul | E-band | 1-5 km |
| Rural connectivity | C/Ku | 20-50 km |
| Enterprise WAN | E-band | 1-3 km |
| Emergency services | L/S | 10-30 km |

---

## Related Topics

- [Antennas](/wireless/antennas)
- [LTE/4G](/wireless/lte-4g)
- [5G NR](/wireless/5g-nr)
