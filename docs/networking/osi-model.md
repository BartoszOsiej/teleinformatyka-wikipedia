---
sidebar_position: 1
---

# 🌐 Model OSI — Open Systems Interconnection

> **PL:** Model referencyjny opisujący komunikację w sieciach komputerowych w 7 warstwach.
> **EN:** Reference model describing computer network communication in 7 layers.

---

## 🇬🇧 The 7 Layers

| Layer | Name | PDU | Protocols | Device |
|-------|------|-----|-----------|--------|
| **7** | Application | Data | HTTP, FTP, SMTP, DNS, SNMP | Firewall (L7), Proxy |
| **6** | Presentation | Data | SSL/TLS, JPEG, MPEG, ASCII | — |
| **5** | Session | Data | NetBIOS, RPC, PPTP | — |
| **4** | Transport | Segment/Datagram | TCP, UDP, SCTP | Load Balancer (L4) |
| **3** | Network | Packet | IP, ICMP, OSPF, BGP, RIP | Router |
| **2** | Data Link | Frame | Ethernet, PPP, ARP, STP | Switch, Bridge |
| **1** | Physical | Bit | USB, Bluetooth, DSL, fiber | Hub, Repeater, Cable |

---

## 🇵🇱 7 Warstw Modelu OSI

| Warstwa | Nazwa | PDU | Protokoły | Urządzenie |
|---------|-------|-----|-----------|------------|
| **7** | Aplikacji | Dane | HTTP, FTP, SMTP, DNS, SNMP | Firewall (L7), Proxy |
| **6** | Prezentacji | Dane | SSL/TLS, JPEG, MPEG, ASCII | — |
| **5** | Sesji | Dane | NetBIOS, RPC, PPTP | — |
| **4** | Transportu | Segment/Datagram | TCP, UDP, SCTP | Balanser obciążenia (L4) |
| **3** | Sieciowa | Pakiet | IP, ICMP, OSPF, BGP, RIP | Router |
| **2** | Łączności danych | Ramka | Ethernet, PPP, ARP, STP | Switch, Bridge |
| **1** | Fizyczna | Bit | USB, Bluetooth, DSL, światłowód | Hub, Repeater, Kabel |

---

## 🇬🇧 Layer Details

### Layer 7 — Application

The layer closest to the end user. Applications communicate with the network through this layer.

**Key protocols:**
- **HTTP/HTTPS** — web browsing (ports 80/443)
- **DNS** — domain name resolution (port 53)
- **SMTP/IMAP/POP3** — email (ports 25/143/110)
- **FTP/SFTP** — file transfer (ports 21/22)
- **SNMP** — network management (ports 161/162)
- **SSH** — secure remote access (port 22)
- **Telnet** — remote access (port 23) — **insecure, avoid**

**PDU:** Data (message)

**Devices:** Application-level firewalls, proxies, load balancers (L7)

---

### Layer 6 — Presentation

Handles data translation, encryption, and compression.

**Functions:**
- **Translation** — character encoding (ASCII, UTF-8, EBCDIC)
- **Encryption/Decryption** — SSL/TLS, AES, RSA
- **Compression** — gzip, JPEG, MPEG

**Key protocols:** SSL/TLS (handshake happens here, data transfer in L4)

---

### Layer 5 — Session

Manages sessions between applications.

**Functions:**
- Session establishment, maintenance, termination
- Synchronization and checkpointing
- Dialog control (half-duplex, full-duplex)

**Key protocols:** NetBIOS, RPC, PPTP, L2TP (session phase)

---

### Layer 4 — Transport

Provides end-to-end communication, flow control, and error recovery.

#### TCP (Transmission Control Protocol)

| Feature | Value |
|---|---|
| Connection | 3-way handshake (SYN → SYN-ACK → ACK) |
| Reliability | Guaranteed delivery, retransmission |
| Ordering | Sequence numbers, acknowledgments |
| Flow control | Sliding window |
| Congestion control | Slow start, AIMD, fast retransmit |
| Header | 20-60 bytes |
| Use cases | Web, email, file transfer, SSH |

**TCP 3-Way Handshake:**
```
Client                    Server
  |---- SYN (seq=x) ------->|
  |<--- SYN-ACK (seq=y, ack=x+1) ---|
  |---- ACK (ack=y+1) ------>|
  |       Connection established      |
```

#### UDP (User Datagram Protocol)

| Feature | Value |
|---|---|
| Connection | Connectionless |
| Reliability | Best-effort (no guarantee) |
| Ordering | No ordering |
| Flow control | None |
| Header | 8 bytes |
| Use cases | DNS, VoIP, gaming, streaming, DHCP |

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

## 🇬🇧 Mnemonics

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

## 🇬🇧 Common Exam Questions

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
