---
sidebar_position: 4
---

# MPLS i VPN

Multi-Protocol Label Switching — high-performance backbone technology for service providers.

---

## Przegląd MPLS

| Feature | Description |
|---------|-------------|
| **Operation** | Data-forwarding technique (not routing protocol) |
| **Speed** | Label-based forwarding (faster than IP lookup) |
| **Use** | ISP backbone, VPN, traffic engineering |
| **Labels** | 4-byte label inserted between L2 and L3 headers |

---

## Komponenty MPLS

| Component | Description |
|-----------|-------------|
| **LER** | Label Edge Router — pushes/pops labels |
| **LSR** | Label Switch Router — forwards based on labels |
| **LSP** | Label Switched Path — path through MPLS cloud |
| **FIB** | Forwarding Information Base |
| **LFIB** | Label Forwarding Information Base |

---

## MPLS Packet Structure

```
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│ L2 Header│ MPLS Label│ IP Header│ Payload  │ L2 FCS   │
│          │ (4 bytes)│          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘

MPLS Label:
┌───────────┬────────┬───┐
│ Label (20)│ TC (3) │S  │ TTL (8)
└───────────┴────────┴───┘
```

---

## Label Operations

| Operation | Description |
|-----------|-------------|
| **PUSH** | Add label to packet |
| **SWAP** | Replace label with new one |
| **POP** | Remove label |
| **PHP** | Penultimate Hop Popping (pop one hop before destination) |

---

## MPLS VPN (L3VPN)

### Komponenty

| Component | Description |
|-----------|-------------|
| **PE** | Provider Edge — connects to customer |
| **P** | Provider — core router |
| **CE** | Customer Edge — customer router |
| **VRF** | Virtual Routing and Forwarding (per-customer table) |
| **RD** | Route Distinguisher (makes overlapping routes unique) |
| **RT** | Route Target (controls import/export of routes) |

### VRF Concept

```
Customer A VRF                    Customer B VRF
┌──────────────────┐              ┌──────────────────┐
│ 10.0.0.0/24 ─────│──── PE ────│──── 10.0.0.0/24  │
│ (routing table A)│             │  (routing table B)│
└──────────────────┘              └──────────────────┘
     Same IP space, separate routing tables
```

---

## L2VPN — VPLS

Virtual Private LAN Service — emulates Ethernet LAN across MPLS:

| Feature | L3VPN | VPLS |
|---------|-------|------|
| Layer | Layer 3 | Layer 2 |
| Routing | PE routes between sites | Transparent LAN service |
| Use | Enterprise WAN | Data center interconnect |

---

## Traffic Engineering

MPLS TE optimizes path selection:

| Feature | Description |
|---------|-------------|
| **CSPF** | Constrained Shortest Path First |
| **RSVP-TE** | Signaling protocol for TE tunnels |
| **FRR** | Fast Reroute — backup paths |
| **Affinity** | Include/exclude link attributes |

---

## Zalety MPLS

| Benefit | Description |
|---------|-------------|
| **Speed** | Hardware-based label switching |
| **Scalability** | Hierarchical labels |
| **VPN** | Customer isolation (VRF) |
| **TE** | Optimize bandwidth usage |
| **QoS** | MPLS EXP field for priority |

---

## Related Topics

- [Routing](/networking/routing)
- [BGP/OSPF](/protocols/bgp-ospf)
- [QoS](/telecom/qos)
