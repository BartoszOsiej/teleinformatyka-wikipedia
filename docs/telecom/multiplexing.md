---
sidebar_position: 3
---

# Multiplexing

Combining multiple signals into one shared medium to maximize utilization.

---

## Types of Multiplexing

| Type | Abbreviation | How It Works |
|------|-------------|--------------|
| **Frequency Division** | FDM | Different frequencies for each signal |
| **Wavelength Division** | WDM | Different wavelengths (colors) of light |
| **Time Division** | TDM | Different time slots for each signal |
| **Statistical TDM** | STDM | Dynamic time slot allocation |
| **Code Division** | CDM/CDMA | Unique codes for each signal |

---

## FDM — Frequency Division Multiplexing

Divides the bandwidth into non-overlapping frequency bands.

```
Channel 1: |████|        |        |        |
Channel 2: |    |████████|        |        |
Channel 3: |    |        |████████|        |
Channel 4: |    |        |        |████████|
           ────────────────────────────────► Frequency
```

**Used in:** Radio/TV broadcasting, ADSL, cable modem

---

## WDM — Wavelength Division Multiplexing

Multiple optical signals on different wavelengths through one fiber.

| Type | Channels | Channel Spacing | Example |
|------|----------|-----------------|---------|
| **CWDM** | 4-18 | 20 nm | Metro networks |
| **DWDM** | 40-160+ | 0.8 nm (100 GHz) | Long-haul |

---

## TDM — Time Division Multiplexing

Each signal gets a fixed time slot in a repeating frame.

```
Frame: [Slot 1][Slot 2][Slot 3][Slot 4]
       ↑ Chan A  ↑ Chan B  ↑ Chan C  ↑ Chan D
       repeats every 125 μs (8000 Hz)
```

### Synchronous TDM (STDMA)

- Fixed time slots regardless of data
- Simple but wasteful if channel is idle

### Statistical TDM (STDM)

- Dynamic allocation — only active channels get slots
- More efficient but requires addressing

---

## CDMA — Code Division Multiple Access

Each signal is encoded with a unique spreading code.

```
Signal A: × code_a = encoded_A
Signal B: × code_b = encoded_B
All signals transmitted simultaneously on same frequency
Receiver uses matching code to extract signal
```

**Used in:** 3G mobile (CDMA2000, WCDMA), GPS

---

## Comparison

| Method | Efficiency | Complexity | Use Case |
|--------|-----------|------------|----------|
| FDM | Medium | Low | Radio, ADSL |
| WDM | High | High | Fiber optics |
| TDM | Medium | Low | PSTN, SDH/SONET |
| STDM | High | Medium | Packet networks |
| CDMA | Medium | High | 3G cellular |

---

## Related Topics

- [SDH/SONET](/telecom/sdh-sonet)
- [WDM/DWDM](/fiber-optics/wdm-dwdm)
- [QoS](/telecom/qos)
