---
sidebar_position: 2
---

# SDH & SONET

Synchronous Digital Hierarchy and Synchronous Optical Networking — the backbone of telecommunications transport networks.

---

## What is SDH/SONET?

SDH/SONET are standardized protocols that transfer multiple digital bit streams over optical fiber using lasers or highly coherent light from LEDs.

| Standard | Region | Organization |
|----------|--------|-------------|
| **SONET** | North America, Japan | ANSI |
| **SDH** | Rest of world | ITU-T |

---

## SONET Hierarchy

| SONET Level | Optical Signal | Data Rate | Voice Channels |
|-------------|---------------|-----------|----------------|
| **STS-1 / OC-1** | OC-1 | 51.84 Mbps | 672 |
| **STS-3 / OC-3** | OC-3 | 155.52 Mbps | 2,016 |
| **STS-12 / OC-12** | OC-12 | 622.08 Mbps | 8,064 |
| **STS-48 / OC-48** | OC-48 | 2.488 Gbps | 32,256 |
| **STS-192 / OC-192** | OC-192 | 9.953 Gbps | 129,024 |
| **STS-768 / OC-768** | OC-768 | 39.813 Gbps | 516,096 |

## SDH Hierarchy

| SDH Level | Data Rate | Voice Channels | SONET Equivalent |
|-----------|-----------|----------------|------------------|
| **STM-1** | 155.52 Mbps | 2,016 | OC-3 |
| **STM-4** | 622.08 Mbps | 8,064 | OC-12 |
| **STM-16** | 2.488 Gbps | 32,256 | OC-48 |
| **STM-64** | 9.953 Gbps | 129,024 | OC-192 |
| **STM-256** | 39.813 Gbps | 516,096 | OC-768 |

---

## SONET/SDH Frame Structure

### SONET STS-1 Frame

```
9 rows × 90 bytes = 810 bytes per frame
Frame rate: 8,000 frames/second
Total: 810 × 8,000 = 51.84 Mbps

┌──────────────────────────────────────────┐
│ Transport Overhead (3 bytes × 9 rows)   │
│ ┌─────┬────────────────────────────────┐ │
│ │ SOH │ Synchronous Payload Envelope   │ │
│ │     │ (87 bytes × 9 rows = 783 B)    │ │
│ └─────┴────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

### Overhead Functions

| Overhead | Purpose |
|----------|---------|
| **Section Overhead (SOH)** | Error monitoring, framing, orderwire |
| **Line Overhead (LOH)** | Protection switching, pointer |
| **Path Overhead (POH)** | End-to-end path monitoring |

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Synchronous** | All clocks derived from primary reference clock |
| **Pointer mechanism** | Handles frequency/phase differences |
| **Protection switching** | Automatic failover in &lt;50ms |
| **OAM&P** | Operations, Administration, Maintenance & Provisioning |
| **Concatenation** | Combine multiple containers for higher bandwidth |

---

## Protection Mechanisms

| Type | Description | Failover Time |
|------|-------------|---------------|
| **1+1** | Duplicate signal on two paths, receiver selects best | &lt;50 ms |
| **1:1** | Backup path reserved, switched on failure | &lt;50 ms |
| **UPSR** | Unidirectional Path Switched Ring | &lt;50 ms |
| **BLSR/MS-SPRING** | Bidirectional Line Switched Ring | &lt;50 ms |

### UPSR (Unidirectional Path Switched Ring)

```
    ┌──────┐         ┌──────┐
    │ Node │─────────│ Node │
    │  A   │ working  │  B   │
    └──┬───┘         └───┬──┘
       │                  │
       │    protection    │
       │                  │
    ┌──┴───┐         ┌───┴──┐
    │ Node │─────────│ Node │
    │  D   │         │  C   │
    └──────┘         └──────┘
```

---

## SDH/SONET vs WDM/DWDM

| Feature | SDH/SONET | WDM/DWDM |
|---------|-----------|----------|
| Approach | Time-division multiplexing | Wavelength multiplexing |
| Channels | Single wavelength | Multiple wavelengths |
| Capacity | Up to 40 Gbps | Terabits per second |
| Usage | Legacy transport | Modern long-haul |

---

## Related Topics

- [VoIP & SIP](/telecom/voip-sip)
- [Fiber Optics](/fiber-optics/fundamentals)
- [Multiplexing](/telecom/multiplexing)
