---
sidebar_position: 3
---

# 🌐 Routing


---

## 🇬🇧 Types of Routing

### Static Routing

Manually configured routes — no protocol overhead.

```bash
# Cisco IOS
ip route 10.0.0.0 255.0.0.0 192.168.1.1       # via next-hop
ip route 10.0.0.0 255.0.0.0 GigabitEthernet0/1  # via exit interface

# Linux
ip route add 10.0.0.0/8 via 192.168.1.1
ip route add default via 192.168.1.1
ip route show
```

**Pros:** No CPU overhead, no bandwidth used, deterministic
**Cons:** Does not adapt to topology changes, management overhead

### Default Route

```bash
# "Gateway of last resort"
ip route 0.0.0.0 0.0.0.0 192.168.1.1
```

---

## 🇬🇧 Dynamic Routing Protocols

### Classification

| Type | Protocols | Algorithm | Metric |
|------|-----------|-----------|--------|
| **Distance Vector** | RIP, EIGRP | Bellman-Ford | Hop count / composite |
| **Link-State** | OSPF, IS-IS | Dijkstra SPF | Cost (bandwidth) |
| **Path Vector** | BGP | Best path selection | AS-path, attributes |

### Administrative Distance (AD)

| Source | AD |
|--------|----|
| Directly connected | 0 |
| Static route | 1 |
| EIGRP (summary) | 5 |
| OSPF | 110 |
| IS-IS | 115 |
| RIP | 120 |
| EIGRP (external) | 170 |
| BGP | 20 (iBGP) / 200 (eBGP) |

---

## 🇬🇧 OSPF — Open Shortest Path First

**Type:** Link-state, Interior Gateway Protocol (IGP)
**Metric:** Cost (based on bandwidth)
**Algorithm:** Dijkstra Shortest Path First
**RFC:** 2328

### OSPF Area Types

| Area | Description |
|------|-------------|
| **Backbone (Area 0)** | Required, connects all other areas |
| **Standard** | Regular area with LSAs |
| **Stub** | No external routes (default route only) |
| **Totally Stubby** | Only default route (Cisco) |
| **NSSA** | Not-So-Stubby, can have limited external routes |

### OSPF LSA Types

| Type | Name | Description |
|------|------|-------------|
| 1 | Router | From each router in area |
| 2 | Network | From DR on multi-access networks |
| 3 | Summary | Inter-area routes (from ABR) |
| 4 | ASBR Summary | Path to ASBR |
| 5 | External | External routes (from ASBR) |
| 7 | NSSA External | External routes in NSSA |

### OSPF Neighbor States

```
Down → Init → 2-Way → ExStart → Exchange → Loading → Full
```

### OSPF Configuration Example (Cisco)

```
router ospf 1
  router-id 1.1.1.1
  network 10.0.0.0 0.0.0.255 area 0
  network 192.168.1.0 0.0.0.255 area 1
  passive-interface GigabitEthernet0/2
```

---

## 🇬🇧 BGP — Border Gateway Protocol

**Type:** Path-vector, Exterior Gateway Protocol (EGP)
**Metric:** Path attributes (AS-path, LOCAL_PREF, MED, weight)
**Use:** Inter-domain routing (between ISPs/ASes)
**RFC:** 4271

### BGP Types

| Type | Description |
|------|-------------|
| **eBGP** | Between different ASes (AD=20) |
| **iBGP** | Within the same AS (AD=200) |

### BGP Path Selection (simplified)

1. **Weight** (Cisco, local)
2. **LOCAL_PREF** (higher = better)
3. **Locally originated** (prefer originated)
4. **AS-Path** (shorter = better)
5. **Origin** (IGP > EGP > Incomplete)
6. **MED** (lower = better)
7. **eBGP > iBGP**
8. **Closest IGP next-hop**
9. **Router ID** (lowest = winner)

### BGP Configuration Example

```
router bgp 65001
  bgp router-id 1.1.1.1
  neighbor 203.0.113.1 remote-as 65002
  address-family ipv4 unicast
    network 10.0.0.0 mask 255.0.0.0
    neighbor 203.0.113.1 activate
```

---

## 🇬🇧 EIGRP — Enhanced Interior Gateway Routing Protocol

**Type:** Advanced distance-vector (hybrid)
**Metric:** Composite (bandwidth, delay, reliability, load)
**Algorithm:** DUAL (Diffusing Update Algorithm)
**Status:** RFC 7868 (formerly Cisco proprietary)

### EIGRP Key Concepts

- **Neighbors** — discovered via Hello packets
- **Feasible Successor** — backup path (loop-free)
- **Active/Passive** — stable (passive) vs recomputing (active)
- **Stub routing** — limits query scope

---

## 🇬🇧 RIP — Routing Information Protocol

**Type:** Distance-vector
**Metric:** Hop count (max 15, 16 = unreachable)
**Updates:** Every 30 seconds (broadcast)
**Algorithm:** Bellman-Ford

**Versions:**
- RIPv1 — classful, no subnet mask
- RIPv2 — classful with subnet masks, authentication
- RIPng — IPv6

**Mostly deprecated** in favor of OSPF for enterprise.

---

## 🇬🇧 Route Redistribution

Combining routes from different routing protocols:

```
router ospf 1
  redistribute eigrp 100 subnets
  redistribute rip subnets

router eigrp 100
  redistribute ospf 1 metric 10000 100 255 1 1500
```

**Warning:** Redistribution can cause loops and suboptimal routing. Use route tags, distribute lists, or route maps.

---

- [TCP/IP](/networking/tcp-ip)
- [Switching](/networking/switching)
- 
- 

---
