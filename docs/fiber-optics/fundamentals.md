---
sidebar_position: 1
---

# 💡 Fiber Optics — Światłowody

> **PL:** Podstawy transmisji danych za pomocą światła w włóknach szklanych.
> **EN:** Fundamentals of data transmission using light in glass fibers.

---

## 🇬🇧 Fiber Types

### Single-Mode Fiber (SMF)

| Property | Value |
|----------|-------|
| Core diameter | 8-10 μm |
| Cladding | 125 μm |
| Wavelength | 1310 nm / 1550 nm |
| Bandwidth | Very high (`>10` Gbps over 100km) |
| Distance | Up to 80+ km without amplification |
| Cost | Higher (lasers, tighter tolerances) |
| Use | WAN, telecom, data centers |

### Multi-Mode Fiber (MMF)

| Type | Core | Color | Bandwidth | Distance (1GbE) | Distance (10GbE) |
|------|------|-------|-----------|-----------------|-------------------|
| OM1 | 62.5 μm | Orange | 200 MHz·km | 275m | 33m |
| OM2 | 50 μm | Orange | 500 MHz·km | 550m | 82m |
| OM3 | 50 μm | Aqua | 2000 MHz·km | 800m | 300m |
| OM4 | 50 μm | Aqua/Violet | 4700 MHz·km | 1000m | 400m |
| OM5 | 50 μm | Lime | 28000 MHz·km | 1000m | 400m |

### Comparison

| Feature | Single-Mode | Multi-Mode |
|---------|-------------|------------|
| Core size | 9 μm | 50-62.5 μm |
| Light source | Laser (VCSEL/Fabry-Perot) | LED/VCSEL |
| Distance | Long (`>1` km) | Short (`<2` km) |
| Cost | Higher | Lower |
| Alignment | Tighter | Easier |
| Application | WAN, carrier | LAN, data center |

---

## 🇬🇧 Fiber Cable Construction

```
┌─────────────────────────────────────────┐
│  Jacket (outermost protection)           │
│  ┌─────────────────────────────────────┐ │
│  │  Aramid yarn (strength member)      │ │
│  │  ┌───────────────────────────────┐  │ │
│  │  │  Tight buffer (0.9 mm)        │  │ │
│  │  │  ┌─────────────────────────┐  │  │ │
│  │  │  │  Cladding (125 μm)      │  │  │ │
│  │  │  │  ┌───────────────────┐  │  │  │ │
│  │  │  │  │  Core (9/50 μm)   │  │  │  │ │
│  │  │  │  │  (light travels)  │  │  │  │ │
│  │  │  │  └───────────────────┘  │  │  │ │
│  │  │  └─────────────────────────┘  │  │ │
│  │  └───────────────────────────────┘  │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## 🇬🇧 Connectors

| Connector | Polish | Use | Insertion Loss |
|-----------|--------|-----|----------------|
| **LC** | UPC/APC | Data center, SFP | 0.10-0.25 dB |
| **SC** | UPC/APC | Telecom, patch panels | 0.10-0.25 dB |
| **ST** | UPC | Legacy, military | 0.25-0.50 dB |
| **MTP/MPO** | UPC/APC | 40G/100G parallel | 0.35-0.75 dB |
| **FC** | UPC/APC | Test equipment | 0.10-0.25 dB |

### Polish Types

| Polish | Color | Return Loss | Use |
|--------|-------|-------------|-----|
| **UPC** (Ultra Physical Contact) | Blue | -50 dB | Data |
| **APC** (Angled Physical Contact) | Green | -60 dB | Telecom, PON, video |

**Never mix UPC and APC connectors** — can damage both!

---

## 🇬🇧 Light Propagation

### Total Internal Reflection

Light travels through the core because the core has a higher refractive index
than the cladding, causing total internal reflection at the boundary.

```
Incident angle \> critical angle (must exceed critical angle) → Total Internal Reflection

Critical angle = arcsin(n₂/n₁)

For SMF: n₁ = 1.4675 (core), n₂ = 1.4500 (cladding)
Critical angle ≈ 81.5°
```

### Wavelength Windows

| Window | Wavelength | Use |
|--------|-----------|-----|
| O-band | 1260-1360 nm | SMF, original |
| E-band | 1360-1460 nm | SMF, water peak |
| S-band | 1460-1530 nm | CWDM |
| C-band | 1530-1565 nm | DWDM, amplifiers |
| L-band | 1565-1625 nm | DWDM, extended |

---

## 🇬🇧 Attenuation

| Factor | Typical Loss | Description |
|--------|-------------|-------------|
| Fiber intrinsic | 0.2 dB/km (SMF @1550nm) | Material absorption |
| Splice (fusion) | 0.02-0.05 dB | Permanent connection |
| Splice (mechanical) | 0.1-0.5 dB | Temporary connection |
| Connector | 0.1-0.5 dB | Mated pair |
| Bending (macro) | 0.1-1.0 dB | Sharp curves |
| Bending (micro) | Variable | Micro-bends in cable |

### Loss Budget Calculation

```
Total Loss = (fiber length × loss/km) + (splices × splice loss) + (connectors × connector loss) + margin

Example (10 km link):
= (10 × 0.35) + (2 × 0.1) + (4 × 0.3) + 3
= 3.5 + 0.2 + 1.2 + 3
= 7.9 dB total loss
```

---

- 
- 
- 
- 

---
