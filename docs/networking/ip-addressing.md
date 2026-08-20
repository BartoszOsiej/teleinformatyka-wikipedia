---
sidebar_position: 2
---

# 📍 IP Addressing — Adresowanie IP

> **PL:** Schemat adresowania urządzeń w sieciach IP.
> **EN:** Device addressing scheme in IP networks.

---

## 🇬🇧 IPv4

### Address Format
```
192.168.1.100
│   │   │   │
│   │   │   └─ Host (8 bits)
│   │   └───── Host (8 bits)
│   └───────── Network (8 bits)
└───────────── Network (8 bits)

Binary: 11000000.10101000.00000001.01100100
```

### Subnetting Cheat Sheet

| CIDR | Subnet Mask | # Subnets (from /24) | Hosts/Subnet | Wildcard |
|------|-------------|---------------------|--------------|----------|
| /24 | 255.255.255.0 | 1 | 254 | 0.0.0.255 |
| /25 | 255.255.255.128 | 2 | 126 | 0.0.0.127 |
| /26 | 255.255.255.192 | 4 | 62 | 0.0.0.63 |
| /27 | 255.255.255.224 | 8 | 30 | 0.0.0.31 |
| /28 | 255.255.255.240 | 16 | 14 | 0.0.0.15 |
| /29 | 255.255.255.248 | 32 | 6 | 0.0.0.7 |
| /30 | 255.255.255.252 | 64 | 2 | 0.0.0.3 |
| /31 | 255.255.255.254 | 128 | 2 (P2P) | 0.0.0.1 |
| /32 | 255.255.255.255 | 256 | 1 (host) | 0.0.0.0 |

### VLSM — Variable Length Subnet Masking

```
Network: 192.168.1.0/24

Requirement: 100 hosts, 50 hosts, 25 hosts, 2 hosts (P2P)

Step 1: 192.168.1.0/25    → 126 hosts (100 needed) ✓
Step 2: 192.168.1.128/26  → 62 hosts  (50 needed)  ✓
Step 3: 192.168.1.192/27  → 30 hosts  (25 needed)  ✓
Step 4: 192.168.1.224/30  → 2 hosts   (2 needed)   ✓
```

---

## 🇬🇧 IPv6

### Address Types

| Type | Prefix | Scope | Example |
|------|--------|-------|---------|
| Global Unicast | 2000::/3 | Internet | `2001:db8:1::1` |
| Link-Local | fe80::/10 | Interface | `fe80::1` |
| Unique Local | fc00::/7 | Private | `fd00::1` |
| Loopback | ::1/128 | Host | `::1` |
| Multicast | ff00::/8 | Group | `ff02::1` |
| Unspecified | ::/128 | — | `::` |

### SLAAC — Stateless Address Autoconfiguration

```
1. Router sends RA (Router Advertisement) with prefix
2. Host generates address: prefix + interface ID (EUI-64 or random)
3. DAD (Duplicate Address Detection) verifies uniqueness
4. Address is ready to use
```

---

## 🇬🇧 Special Addresses

### IPv4

| Range | Purpose |
|-------|---------|
| 127.0.0.0/8 | Loopback |
| 169.254.0.0/16 | APIPA (link-local) |
| 224.0.0.0/4 | Multicast |
| 240.0.0.0/4 | Reserved |
| 255.255.255.255 | Limited broadcast |
| 0.0.0.0/8 | "This" network |

### IPv6

| Address | Purpose |
|---------|---------|
| `::1` | Loopback |
| `::` | Unspecified |
| `fe80::/10` | Link-local |
| `ff02::1` | All nodes (link-local) |
| `ff02::2` | All routers (link-local) |
| `ff02::fb` | mDNS (link-local) |

---

## 🇬🇧 CIDR — Classless Inter-Domain Routing

CIDR replaces classful addressing with arbitrary prefix lengths.

```
Classful:    192.168.1.0    → /24 (254 hosts)
CIDR:        192.168.0.0/22 → 1022 hosts
             (192.168.0.0 – 192.168.3.255)
```

**CIDR Notation:** `IP/prefix-length`
**Example:** `10.0.0.0/8` means first 8 bits are network

---

## 🔗 Related Topics

- [TCP/IP](/networking/tcp-ip)
- [Routing](/networking/routing)
- [NAT/PAT](/networking/tcp-ip#nat)

---

> 🤖 Generated with [Codebuff](https://codebuff.com) · [Portfolio](https://bartoszosiej.github.io/Portfolio/)
