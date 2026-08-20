---
sidebar_position: 3
---

# pfSense

Open-source firewall/router distribution based on FreeBSD.

---

## What is pfSense?

Complete firewall and router solution for networks of all sizes — from home to enterprise.

---

## Główne funkcje

| Feature | Description |
|---------|-------------|
| **Stateful firewall** | Tracks connection state |
| **NAT** | Network address translation |
| **VPN** | IPsec, OpenVPN, WireGuard |
| **DHCP** | Server and relay |
| **DNS** | Resolver (Unbound), forwarder |
| **Traffic shaping** | QoS with DSCP marking |
| **VLAN** | 802.1Q support |
| **HA** | CARP for failover |

---

## Installation

1. Download ISO from pfsense.org
2. Write to USB or boot from ISO
3. Follow installer prompts
4. Configure WAN and LAN interfaces
5. Access web GUI at `https://<LAN_IP>`

---

## Reguły zapory

### Rule Order

Rules evaluated top-to-bottom. First match wins.

### Rule Components

| Field | Description |
|-------|-------------|
| **Action** | Pass / Block / Reject |
| **Interface** | WAN, LAN, VLAN |
| **Direction** | In / Out |
| **Source** | IP, subnet, alias |
| **Destination** | IP, subnet, alias |
| **Protocol** | TCP, UDP, ICMP, any |
| **Port** | Specific or range |

### Example Rules

```
# Allow HTTPS outbound
Action: Pass | Interface: LAN | Source: LAN net | Dest: any | Port: 443

# Block P2P
Action: Block | Interface: LAN | Source: LAN net | Dest: any | Port: 6881-6889

# Allow VPN
Action: Pass | Interface: WAN | Source: any | Dest: WAN address | Port: 1194
```

---

## Konfiguracja NAT

### Outbound NAT Modes

| Mode | Description |
|------|-------------|
| **Automatic** | Auto-generates rules for internal subnets |
| **Hybrid** | Auto + manual rules |
| **Manual** | Full manual control |

### Port Forwarding

```
# Forward external port 80 to internal web server
Interface: WAN | Protocol: TCP | External Port: 80
Redirect Target: 10.0.0.10 | Destination Port: 80
```

---

## Konfiguracja VPN

### OpenVPN Server

1. **VPN → OpenVPN → Servers → Add**
2. Set protocol (UDP), port (1194)
3. Choose authentication (local, RADIUS, LDAP)
4. Generate certificates
5. Create firewall rule to allow OpenVPN port

### IPsec Site-to-Site

1. **VPN → IPsec → Tunnels → Add P1**
2. Configure Phase 1 (IKE parameters)
3. Add Phase 2 (IPsec proposal)
4. Create firewall rules on IPsec interface

---

## Monitoring

| Tool | Description |
|------|-------------|
| **Dashboard** | Real-time stats |
| **Traffic graphs** | Bandwidth usage |
| **_logs** | Firewall, system, VPN logs |
| **Diagnostics** | Packet capture, traceroute |

---

## High Availability — CARP

| Component | Description |
|-----------|-------------|
| **CARP** | Common Address Redundancy Protocol |
| **pfsync** | Synchronizes states between nodes |
| **XMLRPC** | Syncs configuration |

---

## Related Topics

- [Firewalls](/security/firewalls)
- [VPN](/security/vpn)
- [Monitoring](/tools/monitoring)
