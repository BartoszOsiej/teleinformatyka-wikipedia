---
sidebar_position: 2
---

# Kable i złączki światłowodowe

Types of fiber optic cables, connectors, and installation best practices.

---

## Typy kabli

| Type | Description | Use Case |
|------|-------------|----------|
| **Loose tube** | Buffer tubes around fiber | Outdoor, long-haul |
| **Tight buffer** | 900μm coating directly on fiber | Indoor, patch cables |
| **Ribbon** | Fibers in flat array | High-density, data centers |
| **Armored** | Steel or aluminum armor | Rodent-prone areas |
| **ADSS** | All-Dielectric Self-Supporting | Aerial installation |
| **OPGW** | Optical Ground Wire | Power utility towers |

---

## Fiber Counts

| Count | Typical Use |
|-------|-------------|
| 2-12 | Building-to-building |
| 24-48 | Campus backbone |
| 96-288 | Metro distribution |
| 432-1728 | Long-haul trunk |

---

## Connectors

| Connector | Polish | End Face | Insertion Loss | Use |
|-----------|--------|----------|----------------|-----|
| **LC** | UPC/APC | 1.25mm ceramic | 0.10-0.25 dB | Data center, SFP |
| **SC** | UPC/APC | 2.5mm ceramic | 0.10-0.25 dB | Telecom, patch panels |
| **ST** | UPC | 2.5mm bayonet | 0.25-0.50 dB | Legacy, military |
| **FC** | UPC/APC | 2.5mm threaded | 0.10-0.25 dB | Test equipment |
| **MTP/MPO** | UPC/APC | Multi-fiber | 0.35-0.75 dB | 40G/100G parallel |
| **E2000** | UPC/APC | Spring-loaded | 0.10-0.25 dB | European telecom |

---

## Polish Types

| Polish | Color | Return Loss | Application |
|--------|-------|-------------|-------------|
| **UPC** | Blue | -50 dB | Data networks |
| **APC** | Green | -60 dB | Telecom, PON, video |

**Critical:** Never mate UPC with APC — physical damage and high loss.

---

## Kody kolorów kabli

| Color | Fiber Type | Wavelength |
|-------|-----------|------------|
| Yellow | OS2 Single-mode | 1310/1550 nm |
| Orange | OM1/OM2 Multi-mode | 850/1300 nm |
| Aqua | OM3/OM4 Multi-mode | 850 nm |
| Lime green | OM5 Wideband | 850-953 nm |
| Blue | SMF (per-fiber in trunk) | — |

---

## Cable Ratings

| Rating | Description |
|--------|-------------|
| **OFNR** | Non riser — vertical runs between floors |
| **OFNP** | Plenum — air handling spaces |
| **LSZH** | Low Smoke Zero Halogen — Europe |

---

## Related Topics

- [Fiber Fundamentals](/fiber-optics/fundamentals)
- [OTDR Testing](/fiber-optics/testing-otdr)
- [Fusion Splicing](/fiber-optics/fusion-splicing)
