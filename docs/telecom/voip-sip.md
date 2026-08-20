---
sidebar_position: 2
---

# 📞 VoIP & SIP — Voice over IP


---

## 🇬🇧 VoIP Fundamentals

### How VoIP Works

```
Analog Voice → Codec → RTP Packets → IP Network → RTP Packets → Codec → Analog Voice
                  ↑                                              ↑
            (sampling,                                  (reconstruction,
             encoding)                                   decoding)
```

### Codecs

| Codec | Bit Rate | Bandwidth | Quality | Use Case |
|-------|----------|-----------|---------|----------|
| G.711 (μ-law/A-law) | 64 kbps | 64 kbps | Toll quality | PSTN, IP-PBX |
| G.722 | 64 kbps | 64 kbps | HD voice | Wideband VoIP |
| G.726 | 32 kbps | 32 kbps | Good | Compression |
| G.729 | 8 kbps | 30 kbps | Good | WAN links |
| Opus | 6-510 kbps | Variable | Excellent | WebRTC, modern |
| GSM | 13 kbps | 13 kbps | Mobile quality | Mobile networks |

### RTP — Real-time Transport Protocol

| Component | Protocol | Port |
|-----------|----------|------|
| Signaling | SIP | 5060 (UDP/TCP) / 5061 (TLS) |
| Media | RTP | 16384-32767 (UDP) |
| RTCP | RTCP | RTP port + 1 |

---

## 🇬🇧 SIP — Session Initiation Protocol

### SIP Methods

| Method | Purpose |
|--------|---------|
| **INVITE** | Initiate a session |
| **ACK** | Confirm INVITE |
| **BYE** | Terminate a session |
| **CANCEL** | Cancel pending INVITE |
| **REGISTER** | Register user agent |
| **OPTIONS** | Query capabilities |
| **SUBSCRIBE** | Subscribe to events |
| **NOTIFY** | Notify of events |
| **MESSAGE** | Instant message |
| **PUBLISH** | Publish presence |

### SIP Response Codes

| Code | Meaning |
|------|---------|
| 100 | Trying |
| 180 | Ringing |
| 183 | Session Progress |
| 200 | OK |
| 403 | Forbidden |
| 404 | Not Found |
| 408 | Request Timeout |
| 486 | Busy Here |
| 487 | Request Terminated |
| 500 | Server Error |

### SIP Call Flow (Simplified)

```
Caller (Alice)          SIP Proxy           Callee (Bob)
    |--- INVITE ---------->|                    |
    |<-- 100 Trying -------|                    |
    |                       |--- INVITE ------->|
    |<-- 180 Ringing ------|<-- 180 Ringing ---|
    |                       |--- 200 OK ------->|
    |<-- 200 OK -----------|                    |
    |--- ACK ------------->|--- ACK ----------->|
    |<================== RTP MEDIA ============>|
    |--- BYE ------------->|--- BYE ----------->|
    |<-- 200 OK -----------|<-- 200 OK ---------|
```

### SIP Components

| Component | Description |
|-----------|-------------|
| **UAC** | User Agent Client (initiates) |
| **UAS** | User Agent Server (responds) |
| **Proxy** | Routes SIP messages |
| **Registrar** | Handles REGISTER requests |
| **B2BUA** | Back-to-Back UA (full call control) |
| **SBC** | Session Border Controller (security, NAT) |

---

## 🇬🇧 SIP Trunking

Replaces traditional PRI/T1 lines with IP-based connectivity.

| Feature | PRI (T1) | SIP Trunk |
|---------|----------|-----------|
| Channels | 23 per T1 | Unlimited |
| Cost | Per-channel | Per-minute or flat |
| Setup | Physical | Logical (IP) |
| Redundancy | Hardware | IP failover |
| Features | Limited | Advanced (DID, CNAM) |

---

## 🇬🇧 QoS for VoIP

| Parameter | Recommended |
|-----------|-------------|
| Latency | &lt; 150ms one-way |
| Jitter | &lt; 30ms |
| Packet Loss | &lt; 1% |
| MOS Score | ≥ 4.0 |

### DSCP Markings

| Traffic | DSCP Value | Per-Hop Behavior |
|---------|-----------|------------------|
| Voice (RTP) | EF (46) | Expedited Forwarding |
| Signaling | CS3 (24) | Assured Forwarding |
| Video | AF41 (34) | Assured Forwarding |

---

## 🇬🇧 Common VoIP Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **One-way audio** | Can hear but not be heard | Check NAT/firewall, RTP ports |
| **Jitter** | Choppy audio | QoS, dedicated VLAN |
| **Codec mismatch** | No audio or degraded | Match codecs on both ends |
| **Registration failure** | Can't make/receive calls | Check SIP credentials, firewall |
| **Dead air** | Silence after pickup | Check RTP flow, NAT traversal |

---

- 
- 
- 

---
