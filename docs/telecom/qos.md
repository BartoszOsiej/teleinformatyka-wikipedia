---
sidebar_position: 4
---

# QoS — Quality of Service

Mechanisms to manage network traffic and ensure performance for critical applications.

---

## Why QoS?

Without QoS, all traffic is treated equally — a large file download can starve a VoIP call. QoS prioritizes critical traffic.

---

## QoS Parameters

| Parameter | Description | VoIP Requirement |
|-----------|-------------|------------------|
| **Bandwidth** | Available throughput | 64-100 kbps per call |
| **Latency** | One-way delay | &lt;150 ms |
| **Jitter** | Variation in latency | &lt;30 ms |
| **Packet Loss** | Dropped packets | &lt;1% |

---

## DSCP Markings

Differentiated Services Code Point — 6-bit field in IP header for traffic classification.

| DSCP Value | Name | Use Case |
|-----------|------|----------|
| **EF (46)** | Expedited Forwarding | Voice (RTP) |
| **AF41 (34)** | Assured Forwarding 4.1 | Video conferencing |
| **AF31 (26)** | Assured Forwarding 3.1 | Business-critical apps |
| **AF21 (18)** | Assured Forwarding 2.1 |Transactional data |
| **CS3 (24)** | Class Selector 3 | Signaling (SIP) |
| **CS0 (0)** | Best Effort | Default, non-critical |
| **CS6 (48)** | Class Selector 6 | Network control (OSPF, BGP) |

---

## QoS Models

### Best Effort (Default)

- No guarantees
- All packets treated equally
- Simple but unpredictable

### IntServ (Integrated Services)

- Reserves bandwidth per-flow (RSVP)
- Guarantees but high overhead
- Rarely used at scale

### DiffServ (Differentiated Services)

- Classifies traffic into classes
- Applies policies per class
- Scalable, most common today

---

## QoS Mechanisms

| Mechanism | Description |
|-----------|-------------|
| **Classification** | Identify traffic type (DSCP, ACL, NBAR) |
| **Marking** | Set DSCP/CoS values |
| **Queuing** | Prioritize traffic in queues |
| **Scheduling** | Determine which queue gets serviced |
| **Shaping** | Smooth bursty traffic |
| **Policing** | Drop/exceed traffic above rate limit |

---

## Queuing Algorithms

| Algorithm | Description |
|-----------|-------------|
| **FIFO** | First In First Out — no priority |
| **PQ** | Priority Queue — strict priority for high-class |
| **CQ** | Custom Queue — round-robin with bandwidth allocation |
| **WFQ** | Weighted Fair Queuing — automatic fairness |
| **CBWFQ** | Class-Based WFQ — manual class configuration |
| **LLQ** | Low Latency Queuing — strict priority + CBWFQ |

---

## Cisco QoS Configuration

```cisco
! Classify voice traffic
class-map match-any VOICE
 match dscp ef
 match protocol rtp

! Classify video traffic
class-map match-any VIDEO
 match dscp af41

! Policy map
policy-map QOS_POLICY
 class VOICE
  priority percent 30
 class VIDEO
  bandwidth percent 40
 class class-default
  fair-queue

! Apply to interface
interface GigabitEthernet0/0
 service-policy output QOS_POLICY
```

---

## Traffic Shaping vs Policing

| Feature | Shaping | Policing |
|---------|---------|----------|
| Action | Buffers excess traffic | Drops excess traffic |
| Burst | Smooths bursts | Hard limit |
| Queue | Yes | No |
| Use Case | WAN edge | Ingress control |

---

## Related Topics

- [VoIP & SIP](/telecom/voip-sip)
- [TCP/IP](/networking/tcp-ip)
- [Firewalls](/security/firewalls)
