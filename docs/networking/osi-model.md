---
sidebar_position: 1
---

# 🌐 Model OSI — Open Systems Interconnection


---

## The 7 Layers

| Layer | Name | PDU | Protocols | Device |
|-------|------|-----|-----------|--------|
| **7** | Application | Data | HTTP, FTP, SMTP, DNS, SNMP | Firewall (L7), Proxy |
| **6** | Presentation | Data | SSL/TLS, JPEG, MPEG, ASCII | — |
| **5** | Session | Data | NetBIOS, RPC, PPTP | — |
| **4** | Transport | Segment/Datagram | TCP, UDP, SCTP | Load Balancer (L4) |
| **3** | Network | Packet | IP, ICMP, OSPF, BGP, RIP | Router |
| **2** | Data Link | Frame | Ethernet, PPP, ARP, STP | Switch, Bridge |
| **1** | Physical | Bit | USB, Bluetooth, DSL, fiber | Hub, Repeater, Cable |


**PDU:** Segment (TCP) / Datagram (UDP)

**Devices:** Load balancers (L4), firewalls (stateful)

---

### Layer 3 — Network

Handles logical addressing and routing.

**Key protocols:**
- **IPv4** — 32-bit addresses (e.g., 192.168.1.0/24)
- **IPv6** — 128-bit addresses (e.g., 2001:db8::/32)
- **ICMP** — ping, traceroute
- **OSPF** — link-state routing (interior gateway protocol)
- **BGP** — path-vector routing (exterior gateway protocol)
- **RIP** — distance-vector routing (older, limited)
- **EIGRP** — Cisco proprietary (advanced distance-vector)

**PDU:** Packet

**Devices:** Routers, Layer 3 switches

---

### Layer 2 — Data Link

Handles node-to-node data transfer and error detection on the physical link.

**Key protocols:**
- **Ethernet (IEEE 802.3)** — most common LAN technology
- **PPP** — point-to-point links
- **ARP** — IP to MAC address resolution
- **STP/RSTP** — loop prevention in switched networks
- **VLAN (802.1Q)** — virtual LAN segmentation

**Ethernet Frame:**
```
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────┐
│ Preamble │ Dest MAC │ Src MAC  │ 802.1Q   │  Type/   │ FCS  │
│  7 bytes │  6 bytes │  6 bytes │ (opt)    │ Length   │ 4 B  │
│          │          │          │ 4 bytes  │  2 bytes │      │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────┘
```

**PDU:** Frame

**Devices:** Switches, bridges, NICs

---

### Layer 1 — Physical

Handles transmission of raw bits over a physical medium.

**Media types:**
- **Copper** — Cat5e/Cat6/Cat6a/Cat7 Ethernet cables
- **Fiber** — Single-mode (OS2), Multi-mode (OM3/OM4/OM5)
- **Wireless** — Radio waves (WiFi, cellular, microwave)
- **Serial** — T1/E1, DSL, ISDN

**PDU:** Bit (1s and 0s)

**Devices:** Hubs, repeaters, cables, connectors (RJ45, LC, SC), patch panels

---

## Mnemonics

**Layer order (top-down):** **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing

**Layer order (bottom-up):** **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way

**PDU order (bottom-up):** **B**ig **F**at **P**eople **S**ometimes **D**rink **B**eer

**Devices by layer:**
- L1: Hub, Repeater, Cable
- L2: Switch, Bridge, NIC
- L3: Router, L3 Switch
- L4: Load Balancer, Firewall (stateful)
- L7: Proxy, WAF, Load Balancer (L7)

---

## Common Exam Questions

1. **What happens when you type a URL in a browser?** — Full stack traversal from L7 (DNS, HTTP) through L4 (TCP handshake), L3 (routing), L2 (switching), to L1 (physical transmission).

2. **Difference between hub and switch?** — Hub broadcasts to all ports (L1), switch forwards based on MAC address (L2).

3. **What is ARP?** — Resolves IP addresses to MAC addresses (L3 → L2).

4. **TCP vs UDP?** — TCP: reliable, ordered, connection-oriented. UDP: fast, connectionless, no guarantees.

5. **What is a VLAN?** — Logical network segmentation at L2, separating broadcast domains without physical separation.

---

- [TCP/IP Stack](/networking/tcp-ip)
- [Routing](/networking/routing)
- [Switching](/networking/switching)
- [Firewalls](/security/firewalls)

---
