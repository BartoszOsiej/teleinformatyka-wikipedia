---
sidebar_position: 1
---

# PSTN & ISDN

Public Switched Telephone Network and Integrated Services Digital Network — the foundation of telecommunications.

---

## PSTN — Public Switched Telephone Network

### What is PSTN?

The traditional circuit-switched telephone network that has been in use since the late 1800s. It uses copper wires to transmit analog voice signals.

### How PSTN Works

```
Caller → Local Exchange → Trunk Line → Remote Exchange → Receiver
   |                                                    |
   └──── Circuit established for duration of call ───────┘
```

### PSTN Architecture

| Component | Description |
|-----------|-------------|
| **Subscriber loop** | Copper pair from subscriber to exchange (last mile) |
| **Local exchange** | Switch serving a geographic area (CO — Central Office) |
| **Tandem exchange** | Connects local exchanges |
| **Trunk lines** | High-capacity links between exchanges |
| **SS7 network** | Signaling network for call setup/teardown |

### Signaling Systems

| System | Type | Use |
|--------|------|-----|
| **SS5** | In-band | Legacy, deprecated |
| **SS7** | Out-of-band | Modern PSTN signaling |
| **ISUP** | SS7 application | Call setup, teardown, management |
| **TCAP** | SS7 application | Database queries (HLR, VLR) |

### PSTN Frequency Range

```
Voice band: 300 Hz — 3400 Hz
Sampling rate: 8000 Hz (Nyquist theorem)
Bit depth: 8 bits (μ-law in North America, A-law in Europe)
Channel bandwidth: 64 kbps per voice channel
```

---

## ISDN — Integrated Services Digital Network

### What is ISDN?

Digital telephony standard that transmits voice and data over copper lines. Replaces analog PSTN with digital signaling.

### ISDN Components

| Component | Description |
|-----------|-------------|
| **NT1** | Network Termination 1 — physical layer interface |
| **NT2** | Network Termination 2 — intelligent device (PBX) |
| **TE1** | Terminal Equipment 1 — ISDN-native device |
| **TE2** | Terminal Equipment 2 — non-ISDN device (needs TA) |
| **TA** | Terminal Adapter — converts non-ISDN to ISDN |

### ISDN Interfaces

| Interface | Name | Channels | Bandwidth |
|-----------|------|----------|-----------|
| **BRI** | Basic Rate Interface | 2B+D | 144 kbps (128 kbps data) |
| **PRI** | Primary Rate Interface (E1) | 30B+D | 2.048 Mbps (1.92 Mbps data) |
| **PRI** | Primary Rate Interface (T1) | 23B+D | 1.544 Mbps (1.472 Mbps data) |

### Channel Types

| Channel | Rate | Purpose |
|---------|------|---------|
| **B** (Bearer) | 64 kbps | Voice or data |
| **D** (Data) | 16 kbps (BRI) / 64 kbps (PRI) | Signaling & control |

### ISDN Signaling

| Protocol | Layer | Purpose |
|----------|-------|---------|
| **Q.921** | L2 | Data link (LAPD) |
| **Q.931** | L3 | Call setup/teardown |
| **Q.932** | L3 | Supplementary services |

### ISDN vs PSTN

| Feature | PSTN | ISDN |
|---------|------|------|
| Signal type | Analog | Digital |
| Voice quality | Good | Excellent |
| Data rate | 56 kbps (dial-up) | 128 kbps (BRI) |
| Call setup | Slow (seconds) | Fast (sub-second) |
| Features | Basic | Caller ID, 3-way calling, etc. |

### ISDN Call Setup (Q.931)

```
TE1                    Network
 |--- SETUP ----------->|
 |<--- CALL PROCEEDING --|
 |<--- ALERTING ---------|
 |<--- CONNECT ----------|
 |--- CONNECT ACK ------>|
 |      (call active)    |
 |--- DISCONNECT ------->|
 |<--- RELEASE ----------|
 |--- RELEASE COMPLETE-->|
```

---

## Modern Replacements

| Technology | Replaces | Advantage |
|------------|----------|-----------|
| **VoIP** | PSTN/ISDN | Cost, features, convergence |
| **SIP trunking** | ISDN PRI | Flexibility, no hardware |
| **LTE/VoLTE** | Mobile PSTN | Wireless, better quality |
| **WebRTC** | Traditional telephony | Browser-based, no plugins |

---

## Related Topics

- [VoIP & SIP](/telecom/voip-sip)
- [SDH/SONET](/telecom/sdh-sonet)
- [QoS](/telecom/qos)
