---
sidebar_position: 2
---

# 🌐 TCP/IP — Transmission Control Protocol / Internet Protocol


---

## 🇬🇧 TCP/IP vs OSI Model

| OSI Layer | TCP/IP Layer | TCP/IP Protocols |
|-----------|--------------|------------------|
| 7 Application | Application | HTTP, DNS, SMTP, FTP, SSH, SNMP, DHCP |
| 6 Presentation | ↑ | TLS/SSL, JPEG, ASCII |
| 5 Session | ↑ | NetBIOS, RPC |
| 4 Transport | Transport | TCP, UDP, SCTP |
| 3 Network | Internet | IPv4, IPv6, ICMP, IGMP, ARP |
| 2 Data Link | Network Access | Ethernet, WiFi, PPP |
| 1 Physical | ↑ | Cables, Hubs, NICs |

---

## 🇬🇧 IPv4 Addressing

### Address Classes

| Class | Range | Default Mask | Networks | Hosts/Network |
|-------|-------|-------------|----------|---------------|
| A | 1.0.0.0 – 126.255.255.255 | /8 (255.0.0.0) | 126 | 16M+ |
| B | 128.0.0.0 – 191.255.255.255 | /16 (255.255.0.0) | 16,384 | 65,534 |
| C | 192.0.0.0 – 223.255.255.255 | /24 (255.255.255.0) | 2M+ | 254 |
| D | 224.0.0.0 – 239.255.255.255 | Multicast | — | — |
| E | 240.0.0.0 – 255.255.255.255 | Reserved | — | — |

### Private Address Ranges (RFC 1918)

| Range | CIDR | Addresses |
|-------|------|-----------|
| 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 | 16,777,216 |
| 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 | 1,048,576 |
| 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 | 65,536 |

### Subnetting

```
Network:   192.168.1.0
Mask:      /26 (255.255.255.192)
Subnets:   4 (each with 62 usable hosts)

Subnet 1: 192.168.1.0/26    (hosts: .1 – .62,   broadcast: .63)
Subnet 2: 192.168.1.64/26   (hosts: .65 – .126, broadcast: .127)
Subnet 3: 192.168.1.128/26  (hosts: .129 – .190, broadcast: .191)
Subnet 4: 192.168.1.192/26  (hosts: .193 – .254, broadcast: .255)
```

### Common Subnet Masks

| CIDR | Mask | Hosts | Wildcard |
|------|------|-------|----------|
| /8 | 255.0.0.0 | 16,777,214 | 0.255.255.255 |
| /16 | 255.255.0.0 | 65,534 | 0.0.255.255 |
| /24 | 255.255.255.0 | 254 | 0.0.0.255 |
| /25 | 255.255.255.128 | 126 | 0.0.0.127 |
| /26 | 255.255.255.192 | 62 | 0.0.0.63 |
| /27 | 255.255.255.224 | 30 | 0.0.0.31 |
| /28 | 255.255.255.240 | 14 | 0.0.0.15 |
| /29 | 255.255.255.248 | 6 | 0.0.0.7 |
| /30 | 255.255.255.252 | 2 | 0.0.0.3 |

---

## 🇬🇧 IPv6

### Why IPv6?
- **Address exhaustion** — IPv4 has ~4.3 billion addresses; IPv6 has 3.4×10³⁸
- **No NAT needed** — every device gets a global address
- **Built-in IPsec** — mandatory security support
- **Simplified header** — faster routing
- **Auto-configuration** — SLAAC (Stateless Address Autoconfiguration)

### IPv6 Address Types

| Type | Scope | Example |
|------|-------|---------|
| **Unicast** | Global | `2001:db8:1::1` |
| **Link-local** | Interface only | `fe80::1` |
| **Loopback** | Host | `::1` |
| **Multicast** | Group | `ff02::1` (all nodes) |
| **Unique Local** | Private | `fd00::/8` |

### IPv6 Notation
```
Full:     2001:0db8:0000:0000:0000:0000:0000:0001
Compressed: 2001:db8::1  (consecutive zero groups → ::)

Link-local: fe80::1
Loopback:   ::1
All zeros:  ::
```

---

## 🇬🇧 ARP — Address Resolution Protocol

Resolves IP addresses to MAC addresses within a local network.

```
ARP Request (broadcast):  "Who has 192.168.1.10? Tell 192.168.1.1"
ARP Reply (unicast):      "192.168.1.10 is at aa:bb:cc:dd:ee:ff"
```

**ARP Table:** `arp -a` (Windows/Linux)

**Security concern:** ARP spoofing/poisoning — attacker sends fake ARP replies to intercept traffic.

---

## 🇬🇧 DHCP — Dynamic Host Configuration Protocol

Automatically assigns IP configuration to hosts.

### DHCP DORA Process

| Step | Name | Description |
|------|------|-------------|
| 1 | **D**iscover | Client broadcasts: "Any DHCP server?" |
| 2 | **O**ffer | Server responds with offered IP |
| 3 | **R**equest | Client requests the offered IP |
| 4 | **A**cknowledge | Server confirms, lease begins |

### DHCP Options

| Option | Description |
|--------|-------------|
| 3 | Default Gateway |
| 6 | DNS Servers |
| 15 | Domain Name |
| 51 | Lease Time |
| 53 | Message Type |
| 66 | TFTP Server (for PXE boot) |

---

## 🇬🇧 DNS — Domain Name System

### Record Types

| Record | Purpose | Example |
|--------|---------|---------|
| **A** | IPv4 address | `example.com → 93.184.216.34` |
| **AAAA** | IPv6 address | `example.com → 2606:2800:220:1:...` |
| **CNAME** | Alias | `www.example.com → example.com` |
| **MX** | Mail exchange | `example.com → mail.example.com (pri 10)` |
| **NS** | Name server | `example.com → ns1.example.com` |
| **TXT** | Text data | SPF, DKIM, verification |
| **PTR** | Reverse lookup | `34.216.184.93 → example.com` |
| **SRV** | Service location | `_sip._tcp.example.com → sip.example.com:5060` |
| **SOA** | Start of Authority | Zone metadata |

### DNS Hierarchy

```
. (root)
├── .com (TLD)
│   ├── example.com (domain)
│   │   ├── www.example.com (hostname)
│   │   ├── mail.example.com (hostname)
│   │   └── api.example.com (hostname)
├── .org (TLD)
├── .pl (ccTLD)
└── .net (TLD)
```

### DNS Resolution Process

1. Client queries local resolver (ISP or configured DNS)
2. Resolver checks cache → if miss, queries root server
3. Root server → points to TLD server (.com)
4. TLD server → points to authoritative server
5. Authoritative server → returns IP
6. Resolver caches result (TTL) and returns to client

---

## 🇬🇧 NAT — Network Address Translation

| Type | Description | Use Case |
|------|-------------|----------|
| **Static NAT** | 1:1 mapping | Servers with public IPs |
| **Dynamic NAT** | Pool of public IPs | Small offices |
| **PAT (NAPT)** | Many:1 with port numbers | Most home/SOHO routers |

**PAT Example:**
```
Internal: 192.168.1.10:5000 → External: 203.0.113.1:40001
Internal: 192.168.1.11:5000 → External: 203.0.113.1:40002
```

---

- [OSI Model](/networking/osi-model)
- [Routing](/networking/routing)
- [Switching](/networking/switching)
- 
- 

---
