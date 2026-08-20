---
sidebar_position: 3
---

# Juniper Certifications

Juniper Networks certification program — strong in routing, switching, and security.

---

## Certification Path

```
JNCIA ──► JNCIS ──► JNCIP ──► JNCIE
  │         │         │
  └──► JNCIA-SEC    └──► JNCIP-SEC
```

---

## JNCIA-Junos

| Detail | Info |
|--------|------|
| **Exam** | JN0-105 |
| **Focus** | Junos OS basics, routing, switching |
| **Cost** | $200 |
| **Validity** | 3 years |
| **Prerequisites** | None |

### Topics

- Junos OS fundamentals
- Routing fundamentals (static, OSPF)
- Switching fundamentals (VLANs, STP)
- Operational monitoring
- Configuration management

---

## JNCIS-ENT

| Detail | Info |
|--------|------|
| **Exam** | JN0-412 (Enterprise Routing & Switching) |
| **Focus** | Advanced routing, switching, MPLS |
| **Cost** | $200 |
| **Prerequisites** | JNCIA |

---

## JNCIS-SEC

| Detail | Info |
|--------|------|
| **Exam** | JN0-335 |
| **Focus** | SRX firewall, security policies, VPN |
| **Cost** | $200 |
| **Prerequisites** | JNCIA |

---

## JNCIP-ENT

| Detail | Info |
|--------|------|
| **Exam** | JN0-649 |
| **Focus** | Advanced enterprise routing/switching |
| **Cost** | $300 |
| **Prerequisites** | JNCIS |

---

## Junos CLI Basics

```
# Enter configuration mode
configure

# Show commands
show configuration          # Full config
show interfaces             # Interface status
show route                  # Routing table
show ospf neighbor          # OSPF neighbors
show bgp summary            # BGP summary

# Commit and exit
commit and-quit
```

---

## Junos vs Cisco IOS

| Feature | Junos | Cisco IOS |
|---------|-------|-----------|
| Config mode | `configure` | `configure terminal` |
| Commit | `commit` (explicit) | Auto (per command) |
| Rollback | `rollback 0` | `configure replace` |
| Hierarchy | Structured | Flat |
| Multiple sessions | Yes | Limited |

---

## Study Resources

| Resource | Type |
|----------|------|
| **Juniper Learning Portal** | Official |
| **Junosphere** | Virtual lab |
| **Day One Guides** | Free books from Juniper |

---

## Related Topics

- [Cisco Certifications](/certifications/cisco)
- [CompTIA Certifications](/certifications/comptia)
- [Cloud Certifications](/certifications/cloud)
