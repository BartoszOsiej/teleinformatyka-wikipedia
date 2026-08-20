---
sidebar_position: 4
---

# Sieci dla pracy zdalnej

Infrastructure and security for distributed workforce.

---

## Rozwiązania dostępu zdalnego

| Solution | Description | Security |
|----------|-------------|----------|
| **VPN** | Encrypted tunnel to corporate network | High |
| **Zero Trust** | Verify every access request | Very High |
| **VDI** | Virtual desktop in data center | Very High |
| **SD-WAN** | Software-defined WAN | High |
| **SASE** | Secure Access Service Edge | Very High |

---

## VPN dla pracowników zdalnych

### Deployment Options

| Option | Description |
|--------|-------------|
| **Client VPN** | Software on each device |
| **SSL VPN** | Browser-based (no client) |
| **Always-on VPN** | Auto-connects on boot |
| **Split tunnel** | Only corporate traffic through VPN |
| **Full tunnel** | All traffic through VPN |

### Bandwidth Planning

| User Type | Bandwidth Required |
|-----------|-------------------|
| Email/web browsing | 1-5 Mbps |
| Video calls (HD) | 5-10 Mbps |
| VPN tunnel overhead | 10-20% additional |
| File transfers | 10-50 Mbps |

---

## Wideo-konferencje Requirements

| Metric | Requirement |
|--------|-------------|
| **Bandwidth** | 1.5-4 Mbps up/down (HD) |
| **Latency** | &lt;150 ms one-way |
| **Jitter** | &lt;30 ms |
| **Packet loss** | &lt;1% |

### QoS for Video

```
# Prioritize video traffic
DSCP: AF41 (34) for video
DSCP: EF (46) for audio
```

---

## Split DNS

Route DNS queries to internal servers for corporate domains:

```
*.company.com → internal DNS (10.0.0.53)
*             → public DNS (8.8.8.8)
```

---

## BYOD vs Corporate Devices

| Aspect | BYOD | Corporate |
|--------|------|-----------|
| Cost | Lower | Higher |
| Control | Limited | Full |
| Security | MDM required | Built-in |
| Updates | User-managed | IT-managed |

---

## Monitorowanie użytkowników zdalnych

| Metric | Tool |
|--------|------|
| VPN connection status | VPN server logs |
| Bandwidth usage | NetFlow/sFlow |
| Application usage | Proxy logs |
| Security events | SIEM |

---

## Related Topics

- [VPN](/security/vpn)
- [Zero Trust](/security/zero-trust)
- [Network Design](/scenarios/network-design)
