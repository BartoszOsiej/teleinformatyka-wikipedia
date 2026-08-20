---
sidebar_position: 1
---

# 🎯 Network Design — Projektowanie sieci

> **PL:** Praktyczne scenariusze projektowania sieci w firmach.
> **EN:** Practical network design scenarios for enterprises.

---

## 🇬🇧 Enterprise Network Architecture

### Three-Tier Architecture

```
┌─────────────────────────────────────────────┐
│                 Core Layer                    │
│  (High-speed switching, redundancy)          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Core SW1 │══│ Core SW2 │══│ Core SW3 │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
│       │              │              │         │
├───────┼──────────────┼──────────────┼─────────┤
│       │     Distribution Layer      │         │
│  ┌────┴─────┐  ┌────┴─────┐  ┌────┴─────┐  │
│  │ Dist SW1 │  │ Dist SW2 │  │ Dist SW3 │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
│       │              │              │         │
├───────┼──────────────┼──────────────┼─────────┤
│       │       Access Layer          │         │
│  ┌────┴─────┐  ┌────┴─────┐  ┌────┴─────┐  │
│  │ Access 1 │  │ Access 2 │  │ Access 3 │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│  (Users, printers, phones)                   │
└─────────────────────────────────────────────┘
```

### Two-Tier (Collapsed Core)

For smaller networks (< 200 devices):

```
┌──────────────────────┐
│   Core/Distribution  │
│  ┌────────────────┐  │
│  │  Core Switch   │  │
│  └───────┬────────┘  │
├──────────┼────────────┤
│   Access Layer        │
│  ┌──────┐ ┌──────┐   │
│  │ SW1  │ │ SW2  │   │
│  └──────┘ └──────┘   │
└──────────────────────┘
```

---

## 🇬🇧 VLAN Design

### Standard VLAN Layout

| VLAN | Name | Purpose |
|------|------|---------|
| 1 | Default | **Unused** (security) |
| 10 | Management | Switches, APs, routers |
| 20 | Servers | DMZ, internal servers |
| 30 | Users | Employee workstations |
| 40 | Voice | IP phones |
| 50 | Printers | Printers, scanners |
| 60 | IoT | Cameras, sensors |
| 99 | Native | Trunk native VLAN |
| 100 | Guest | Guest WiFi |
| 999 | Blackhole | Unused ports |

### IP Scheme Example

```
Management:  10.0.10.0/24  (VLAN 10)
Servers:     10.0.20.0/24  (VLAN 20)
Users:       10.0.30.0/24  (VLAN 30)
Voice:       10.0.40.0/24  (VLAN 40)
Printers:    10.0.50.0/24  (VLAN 50)
IoT:         10.0.60.0/24  (VLAN 60)
Guest:       192.168.100.0/24 (VLAN 100)
```

---

## 🇬🇧 Redundancy Design

### Link Redundancy

| Technology | Description |
|------------|-------------|
| **LACP** | Link aggregation (802.3ad) |
| **MLAG** | Multi-chassis link aggregation |
| **vPC** | Virtual Port Channel (Nexus) |

### Device Redundancy

| Technology | Description |
|------------|-------------|
| **HSRP** | Hot Standby Router Protocol (Cisco) |
| **VRRP** | Virtual Router Redundancy Protocol (open) |
| **GLBP** | Gateway Load Balancing Protocol (Cisco) |
| **STP/RSTP** | Spanning Tree for switch redundancy |

### HSRP Example

```
Router 1 (Active):
  interface GigabitEthernet0/0
    ip address 10.0.30.2 255.255.255.0
    standby 1 ip 10.0.30.1
    standby 1 priority 110
    standby 1 preempt

Router 2 (Standby):
  interface GigabitEthernet0/0
    ip address 10.0.30.3 255.255.255.0
    standby 1 ip 10.0.30.1
    standby 1 priority 100
    standby 1 preempt
```

---

## 🇬🇧 Security Design

### Defense in Depth

```
┌─────────────────────────────────┐
│  Perimeter (Firewall, IPS)      │
│  ┌─────────────────────────────┐│
│  │  DMZ (Web, Mail, DNS)      ││
│  ┌─────────────────────────────┐│
│  │  Internal (LAN, Servers)   ││
│  ┌─────────────────────────────┐│
│  │  Core (Databases, Backups) ││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
```

### Network Segmentation

| Zone | Access | Security Level |
|------|--------|---------------|
| Internet | Public | Untrusted |
| DMZ | Limited | Semi-trusted |
| Internal LAN | User access | Trusted |
| Server VLAN | Admin access | Highly trusted |
| Management | SSH/HTTPS only | Most trusted |

---

## 🇬🇧 Design Checklist

- [ ] **Scalability** — Can the network grow 2-3x?
- [ ] **Redundancy** — No single point of failure
- [ ] **Security** — Defense in depth, segmentation
- [ ] **Performance** — Adequate bandwidth and QoS
- [ ] **Manageability** — SNMP, logging, monitoring
- [ ] **Documentation** — IP plan, VLAN map, diagrams
- [ ] **Budget** — Balance cost vs. requirements
- [ ] **Compliance** — GDPR, PCI-DSS, HIPAA requirements

---

## 🔗 Related Topics

- [Routing](/networking/routing)
- [Switching](/networking/switching)
- [Firewalls](/security/firewalls)
- [Troubleshooting](/scenarios/troubleshooting)

---

> 🤖 Generated with [Codebuff](https://codebuff.com) · [Portfolio](https://bartoszosiej.github.io/Portfolio/)
