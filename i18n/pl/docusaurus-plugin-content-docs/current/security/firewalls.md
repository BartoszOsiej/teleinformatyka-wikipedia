---
sidebar_position: 1
---

# 🔥 Firewalls — Zapory sieciowe


---

## 🇬🇧 Firewall Types

| Type | Layer | Description |
|------|-------|-------------|
| **Packet Filtering** | L3/L4 | Stateless, rule-based (ACLs) |
| **Stateful** | L3-L4 | Tracks connection state |
| **Application (Proxy)** | L7 | Deep packet inspection |
| **Next-Gen (NGFW)** | L7 | IPS, app control, SSL inspection |
| **WAF** | L7 | Web Application Firewall |
| **Host-based** | OS | Software on individual hosts |
| **Cloud-based** | — | AWS SG, Azure NSG, GCP FW |

---

## 🇬🇧 Stateful vs Stateless

### Stateless (Packet Filtering)

- Examines each packet independently
- No connection tracking
- Fast but limited

```
Access List:
  permit tcp 10.0.0.0/8 any eq 443
  permit tcp 10.0.0.0/8 any eq 80
  deny ip any any
```

### Stateful

- Tracks TCP/UDP connection state
- Allows return traffic automatically
- SYN → SYN-ACK → ACK tracked

```
State Table:
  TCP  10.0.0.5:44321 → 93.184.216.34:443 ESTABLISHED
  UDP  192.168.1.10:53 → 8.8.8.8:53      (no state)
```

---

## 🇬🇧 Next-Generation Firewall (NGFW)

| Feature | Description |
|---------|-------------|
| **App Control** | Identify and control applications (Zoom, Teams, Netflix) |
| **User-ID** | Map rules to users (AD/LDAP integration) |
| **SSL Inspection** | Decrypt and inspect HTTPS traffic |
| **IPS/IDS** | Intrusion prevention/detection |
| **Threat Intelligence** | Block known malicious IPs/domains |
| **URL Filtering** | Block categories (gambling, malware, etc.) |

### Popular NGFWs

| Vendor | Product |
|--------|---------|
| Palo Alto | PA Series, Prisma |
| Fortinet | FortiGate |
| Cisco | Firepower |
| Check Point | Quantum |
| Juniper | SRX |

---

## 🇬🇧 Firewall Rules

### Rule Order Matters!

Rules are evaluated top-to-bottom. First match wins.

```
1. permit tcp 10.0.0.0/8 any eq 443    # HTTPS for internal
2. permit tcp 10.0.0.0/8 any eq 80     # HTTP for internal
3. permit tcp any any eq 443            # HTTPS for everyone
4. deny ip any any log                  # Block everything else
```

### Rule Components

| Component | Example | Description |
|-----------|---------|-------------|
| **Source** | 10.0.0.0/8 | Who is sending |
| **Destination** | any / 93.184.216.34 | Who is receiving |
| **Protocol** | TCP/UDP/ICMP | Transport protocol |
| **Port** | 443, 80, 22 | Service port |
| **Action** | permit/deny/log | What to do |
| **Direction** | inbound/outbound | Traffic direction |

---

## 🇬🇧 Zone-Based Firewall (ZBF)

Organizes security by zones rather than interfaces.

| Zone | Interfaces | Security Level |
|------|-----------|----------------|
| Inside | LAN, VLAN10 | High (80) |
| DMZ | DMZ VLAN | Medium (50) |
| Outside | WAN | Low (0) |

**Rules:** Traffic from higher → lower security: allowed by default
Traffic from lower → higher: denied by default (must explicitly permit)

---

## 🇬🇧 VPN Through Firewalls

| Type | Protocol | Port | Use |
|------|----------|------|-----|
| Site-to-Site | IKEv2/IPsec | UDP 500/4500, ESP 50 | Branch connectivity |
| Remote Access | SSL VPN | TCP 443 | Remote workers |
| Remote Access | IKEv2 | UDP 500/4500 | Mobile clients |

### IPsec Phases

| Phase | Purpose |
|-------|---------|
| **Phase 1 (IKE)** | Establish ISAKMP SA, authenticate |
| **Phase 2 (IPsec)** | Establish IPSec SA, encrypt data |

---

## 🇬🇧 Common Attacks & Mitigations

| Attack | Description | Mitigation |
|--------|-------------|-----------|
| **SYN Flood** | Flood SYN packets | SYN cookies, rate limiting |
| **DDoS** | Distributed denial of service | Cloudflare, upstream filtering |
| **Port Scan** | Discovery of open ports | Port knocking, fail2ban |
| **Brute Force** | Password guessing | Account lockout, 2FA |
| **SQL Injection** | Malicious SQL in input | WAF, parameterized queries |
| **XSS** | Malicious scripts | CSP, input validation |

---

- 
- 
- 
- 

---
