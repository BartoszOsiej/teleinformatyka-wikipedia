---
sidebar_position: 3
---

# OTDR Testing

Optical Time-Domain Reflectometer — the primary tool for fiber characterization and troubleshooting.

---

## What is an OTDR?

An OTDR sends short light pulses into a fiber and measures backscattered/reflected light to map the fiber's characteristics.

```
OTDR ──light pulse──► [fiber] ──backscatter──► OTDR
                              ──reflection───►
```

---

## What OTDR Measures

| Measurement | Description |
|-------------|-------------|
| **Attenuation** | Signal loss per km (dB/km) |
| **Events** | Splices, connectors, bends |
| **Distance** | Location of events |
| **Reflectance** | Fresnel reflections at interfaces |
| **Total loss** | End-to-end link loss |

---

## OTDR Trace Interpretation

```
Power (dB)
│
│ ╲
│  ╲___          ← Launch cable (dead zone)
│      ╲
│       ╲──●    ← Event (splice/connector)
│          ╲
│           ╲___← Another event
│               ╲
│                ╲___← End of fiber / reflection
│                    │
└──────────────────────── Distance (km)
```

| Feature | What It Shows |
|---------|--------------|
| **Downward slope** | Fiber attenuation (dB/km) |
| **Upward spike** | Reflection (connector, break) |
| **Step down** | Non-reflective event (splice, bend) |
| **Noise floor** | End of dynamic range |

---

## Dead Zones

| Type | Length | Description |
|------|--------|-------------|
| **Event dead zone** | 0.8-1 m | Can't see two events closer than this |
| **Attenuation dead zone** | 5-25 m | Can't measure loss within this distance |

**Solution:** Use launch cable (500m-1km) to move dead zone away from first connector.

---

## OTDR Specifications

| Parameter | Description |
|-----------|-------------|
| **Dynamic range** | Maximum measurable loss (dB) |
| **Resolution** | Distance accuracy (m) |
| **Pulse width** | Short = high resolution, long = more range |
| **Wavelength** | 1310 nm, 1550 nm, or both |

---

## Testing Best Practices

1. Use **launch cable** (≥500m) at both ends
2. Test at **both 1310 nm and 1550 nm**
3. Set **pulse width** appropriately for fiber length
4. Compare traces from **bidirectional** testing
5. Save traces for **baseline comparison**

---

## OTDR vs Power Meter

| Feature | OTDR | Power Meter |
|---------|------|-------------|
| Shows events | Yes (location + loss) | No (total loss only) |
| Speed | Slow | Fast |
| Accuracy | ±0.1 dB | ±0.01 dB |
| Cost | High ($2,000-$20,000) | Low ($100-$1,000) |
| Use | Troubleshooting, characterization | Acceptance testing |

---

## Common OTDR Events

| Event | Trace Shape | Cause |
|-------|-------------|-------|
| **Good splice** | Small step down | &lt;0.05 dB loss |
| **Bad splice** | Large step down | &gt;0.1 dB loss |
| **Connector** | Step + reflection | Normal if &lt;0.5 dB |
| **Break** | Large reflection + noise | Fiber cut |
| **Macro-bend** | Step down (1550nm worse) | Tight bend radius |

---

## Related Topics

- [Fiber Fundamentals](/fiber-optics/fundamentals)
- [Cables & Connectors](/fiber-optics/cables-connectors)
- [Fusion Splicing](/fiber-optics/fusion-splicing)
