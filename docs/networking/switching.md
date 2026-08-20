---
sidebar_position: 4
---

# 🔌 Switching — Przełączanie

> **PL:** Warstwa 2 — przełączanie ramek Ethernet w sieci lokalnej.
> **EN:** Layer 2 — forwarding Ethernet frames within a LAN.

---

## 🇬🇧 Layer 2 Switching

| Feature | Description |
|---------|-------------|
| MAC Learning | Switch builds MAC address table from source MACs |
| Forwarding | Frames forwarded based on destination MAC |
| Filtering | Frames not forwarded if destination is on same port |
| Flooding | Unknown unicast, broadcast, multicast flooded to all ports |

### MAC Address Table

```
MAC Address          VLAN    Port
aa:bb:cc:dd:ee:01    10     Gi0/1
aa:bb:cc:dd:ee:02    10     Gi0/2
bb:cc:dd:ee:ff:01    20     Gi0/3
```

---

## 🇬🇧 VLAN — Virtual LAN

| VLAN Type | Range | Description |
|-----------|-------|-------------|
| Normal | 1–1005 | Standard VLANs |
| Extended | 1006–4094 | Available on modern switches |
| Native | — | Untagged VLAN on trunk port |

### VLAN Configuration (Cisco)

```
vlan 10
  name SALES
vlan 20
  name ENGINEERING

interface GigabitEthernet0/1
  switchport mode access
  switchport access vlan 10

interface GigabitEthernet0/24
  switchport mode trunk
  switchport trunk allowed vlan 10,20,30
  switchport trunk native vlan 999
```

### Trunk Ports

Carry traffic for multiple VLANs between switches.

| Protocol | Description |
|----------|-------------|
| **802.1Q** | Industry standard, inserts 4-byte tag |
| **ISL** | Cisco proprietary (deprecated) |

**802.1Q Frame Tag:**
```
┌──────────┬────────┬──────────┬──────────┬──────────┬──────┐
│ Dest MAC │ Src MAC │ TPID     │ TCI      │ Type/    │ FCS  │
│  6 bytes │  6 bytes│ 0x8100   │ PCP+VID  │ Length   │ 4 B  │
│          │         │  2 bytes │ 2 bytes  │  2 bytes │      │
└──────────┴────────┴──────────┴──────────┴──────────┴──────┘
```

---

## 🇬🇧 STP — Spanning Tree Protocol

Prevents Layer 2 loops in redundant topologies.

| Standard | Description |
|----------|-------------|
| **STP (802.1D)** | Original, slow convergence (~30-50s) |
| **RSTP (802.1w)** | Rapid, sub-second convergence |
| **MSTP (802.1s)** | Multiple STP instances for load balancing |
| **PVST+** | Per-VLAN STP (Cisco proprietary) |

### STP Port Roles

| Role | Description |
|------|-------------|
| **Root Port** | Best path to root bridge |
| **Designated Port** | Best path from segment to root |
| **Alternate Port** | Backup to root port (RSTP) |
| **Backup Port** | Backup to designated port (RSTP) |
| **Disabled** | Administratively down |

### STP States (802.1D)

```
Blocking → Listening → Learning → Forwarding
(20s)      (15s)       (15s)       (active)
```

### STP Port States (RSTP/802.1w)

```
Discarding → Learning → Forwarding
(discards)  (learns)   (forwards)
```

### PortFast & BPDU Guard

| Feature | Purpose |
|---------|---------|
| **PortFast** | Skip to forwarding immediately (access ports only) |
| **BPDU Guard** | Errdisable port if BPDU received (with PortFast) |
| **Root Guard** | Prevent superior BPDUs on designated ports |
| **Loop Guard** | Detect unidirectional link failures |

---

## 🇬🇧 Link Aggregation — LACP

Bonds multiple physical links into one logical link.

```
interface Port-channel1
  switchport mode trunk
  switchport trunk allowed vlan 10,20

interface GigabitEthernet0/1
  channel-group 1 mode active    # LACP
interface GigabitEthernet0/2
  channel-group 1 mode active    # LACP
```

| Protocol | Standard | Description |
|----------|----------|-------------|
| **LACP** | 802.3ad | Open standard |
| **PAgP** | Cisco | Cisco proprietary |
| **Static** | — | Manual, no negotiation |

---

## 🇬🇧 Port Security

Limit MAC addresses per port:

```
interface GigabitEthernet0/1
  switchport port-security
  switchport port-security maximum 2
  switchport port-security violation shutdown
  switchport port-security mac-address sticky
```

---

- [OSI Model](/networking/osi-model)
- [Routing](/networking/routing)
- [Firewalls](/security/firewalls)

---
