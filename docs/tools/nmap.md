---
sidebar_position: 2
---

# Nmap — Network Mapper

The most popular open-source network discovery and security auditing tool.

---

## Basic Scanning

| Command | Description |
|---------|-------------|
| `nmap 10.0.0.1` | Basic scan (top 1000 ports) |
| `nmap -p 80,443 10.0.0.1` | Specific ports |
| `nmap -p- 10.0.0.1` | All 65535 ports |
| `nmap -sV 10.0.0.1` | Service version detection |
| `nmap -O 10.0.0.1` | OS detection |
| `nmap -A 10.0.0.1` | Aggressive (OS + version + scripts) |

---

## Scan Types

| Type | Flag | Description |
|------|------|-------------|
| **TCP SYN** | `-sS` | Stealth (half-open) — default |
| **TCP Connect** | `-sT` | Full TCP connection |
| **UDP** | `-sU` | Scan UDP ports (slow) |
| **Ping** | `-sn` | Host discovery only |
| **ACK** | `-sA` | Map firewall rules |
| **FIN/XMAS/NULL** | `-sF/-sX/-sN` | Stealth scans |

---

## NSE — Nmap Scripting Engine

| Category | Description |
|----------|-------------|
| **default** | Common scripts |
| **vuln** | Vulnerability detection |
| **exploit** | Attempt exploitation |
| **auth** | Authentication testing |
| **discovery** | Network discovery |

```bash
# Vulnerability scan
nmap --script vuln 10.0.0.0/24

# SMB enumeration
nmap --script smb-enum-shares.nse -p 445 10.0.0.1

# HTTP enumeration
nmap --script http-enum -p 80,443 10.0.0.1
```

---

## Output Formats

| Flag | Format |
|------|--------|
| `-oN` | Normal text |
| `-oX` | XML |
| `-oG` | Grepable |
| `-oA` | All formats |

---

## Common Scan Profiles

```bash
# Quick scan
nmap -T4 -F 10.0.0.0/24

# Full scan
nmap -sS -sV -O -p- -T4 10.0.0.1

# Stealth scan
nmap -sS -T2 -Pn --source-port 53 10.0.0.1

# UDP scan
nmap -sU --top-ports 100 10.0.0.1
```

---

## Timing Templates

| Flag | Speed | Detection Risk |
|------|-------|---------------|
| `-T0` | Paranoia | Very low |
| `-T1` | Sneaky | Low |
| `-T2` | Polite | Low |
| `-T3` | Normal | Medium |
| `-T4` | Aggressive | High |
| `-T5` | Insane | Very high |

---

## Related Topics

- [Wireshark](/tools/wireshark)
- [Firewalls](/security/firewalls)
- [IDS/IPS](/security/ids-ips)
