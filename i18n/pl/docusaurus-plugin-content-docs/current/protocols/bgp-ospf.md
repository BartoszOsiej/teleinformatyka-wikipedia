---
sidebar_position: 2
---

# BGP i OSPF

The two most important routing protocols in modern networks.

---

## OSPF — Open Shortest Path First

### Przegląd

| Feature | Value |
|---------|-------|
| Type | Link-state |
| Algorithm | Dijkstra SPF |
| Metric | Cost (bandwidth-based) |
| AD | 110 |
| Hello interval | 10 seconds (broadcast) |
| Dead interval | 40 seconds |

### Obszary OSPF

| Area | Description |
|------|-------------|
| **Backbone (0)** | Required — connects all areas |
| **Standard** | Regular area with LSAs |
| **Stub** | No external routes |
| **Totally Stubby** | Only default route |
| **NSSA** | Limited external routes |

### OSPF LSA Types

| Type | Name | Origin |
|------|------|--------|
| 1 | Router | Each router |
| 2 | Network | DR on multi-access |
| 3 | Summary | ABR (inter-area) |
| 4 | ASBR Summary | Path to ASBR |
| 5 | External | ASBR (redistribution) |
| 7 | NSSA External | NSSA external routes |

### Konfiguracja OSPF (Cisco)

```
router ospf 1
  router-id 1.1.1.1
  network 10.0.0.0 0.0.0.255 area 0
  network 192.168.1.0 0.0.0.255 area 1
  passive-interface GigabitEthernet0/2
  default-information originate
```

### Weryfikacja OSPF

```
show ip ospf neighbor          # Neighbor table
show ip ospf interface         # Interface state
show ip ospf database          # LSA database
show ip route ospf             # OSPF routes
debug ip ospf adj              # Neighbor events
```

---

## BGP — Border Gateway Protocol

### Przegląd

| Feature | Value |
|---------|-------|
| Type | Path-vector |
| AD | 20 (eBGP), 200 (iBGP) |
| Port | 179 (TCP) |
| Keepalive | 60 seconds |
| Hold time | 180 seconds |

### Wybór ścieżki BGP

| Order | Attribute | Description |
|-------|-----------|-------------|
| 1 | Weight | Local preference (Cisco) |
| 2 | LOCAL_PREF | Higher = better |
| 3 | Locally originated | Prefer self |
| 4 | AS-PATH | Shorter = better |
| 5 | Origin | IGP &gt; EGP &gt; Incomplete |
| 6 | MED | Lower = better |
| 7 | eBGP &gt; iBGP | External preferred |
| 8 | IGP metric | Closest next-hop |

### Konfiguracja BGP

```
router bgp 65001
  bgp router-id 1.1.1.1
  neighbor 203.0.113.1 remote-as 65002
  address-family ipv4 unicast
    network 10.0.0.0 mask 255.0.0.0
    neighbor 203.0.113.1 activate
    neighbor 203.0.113.1 route-map SET-PATH in
```

### Weryfikacja BGP

```
show bgp summary               # BGP summary
show bgp ipv4 unicast           # BGP table
show bgp neighbors              # Neighbor details
show bgp neighbors x.x.x.x advertised-routes  # Advertised
```

---

## OSPF vs BGP

| Feature | OSPF | BGP |
|---------|------|-----|
| Scope | Interior (within AS) | Exterior (between ASes) |
| Convergence | Fast (seconds) | Slow (minutes) |
| Scale | Hundreds of routers | Tens of thousands |
| Use | Enterprise, ISP core | ISP peering, internet |

---

## Related Topics

- [Routing](/networking/routing)
- [TCP/IP](/networking/tcp-ip)
- [SNMP/NETCONF](/protocols/snmp-netconf)
