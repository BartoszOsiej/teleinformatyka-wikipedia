---
sidebar_position: 6
---

# DNS & DHCP

Domain Name System and Dynamic Host Configuration Protocol — the internet's address book and automatic configuration system.

---

## DNS — Domain Name System

### What DNS Does

DNS translates human-readable domain names (`example.com`) into IP addresses (`93.184.216.34`). Without DNS, you'd have to memorize IP addresses for every website.

### DNS Hierarchy

```
. (root)
├── .com (TLD — Top-Level Domain)
│   ├── example.com (domain)
│   │   ├── www.example.com (hostname)
│   │   ├── mail.example.com (hostname)
│   │   └── api.example.com (hostname)
├── .org (TLD)
├── .pl (ccTLD — country code)
├── .net (TLD)
└── .edu (TLD)
```

### Record Types

| Record | Purpose | Example |
|--------|---------|---------|
| **A** | Maps domain to IPv4 | `example.com → 93.184.216.34` |
| **AAAA** | Maps domain to IPv6 | `example.com → 2606:2800:220:1:...` |
| **CNAME** | Alias pointing to another name | `www.example.com → example.com` |
| **MX** | Mail exchange server | `example.com → mail.example.com (pri 10)` |
| **NS** | Name server for domain | `example.com → ns1.example.com` |
| **TXT** | Text data (SPF, DKIM, verification) | `v=spf1 include:_spf.google.com ~all` |
| **PTR** | Reverse lookup (IP → name) | `34.216.184.93 → example.com` |
| **SRV** | Service location | `_sip._tcp.example.com → sip.example.com:5060` |
| **SOA** | Start of Authority (zone metadata) | Serial number, refresh, retry, expire |
| **CAA** | Certificate Authority Authorization | `letsencrypt.org` |

### DNS Resolution Process

```
Client                    Resolver              Root Server         TLD Server         Authoritative
  |--- Query: example.com --->|                    |                   |                   |
  |                           |--- Query --------->|                   |                   |
  |                           |<-- "Ask .com" -----|                   |                   |
  |                           |--- Query ------------------------------>|                   |
  |                           |<-- "Ask ns1.example.com" ------------------|               |
  |                           |--- Query -------------------------------------------------->|
  |                           |<-- 93.184.216.34 -------------------------------------------|
  |<-- 93.184.216.34 ---------|                    |                   |                   |
```

### DNS Caching

| Cache Level | Location | TTL (Time To Live) |
|-------------|----------|-------------------|
| Browser cache | Browser | Varies |
| OS cache | Operating system | Configurable |
| Resolver cache | ISP/custom DNS | Usually hours |
| Authoritative | Name server | Set by domain owner |

### Common DNS Commands

```bash
# Query specific record type
nslookup -type=A example.com
nslookup -type=MX example.com
nslookup -type=TXT example.com

# dig (more detailed)
dig example.com A
dig example.com MX
dig +trace example.com     # Full resolution path
dig +short example.com     # IP only

# Windows
nslookup example.com
Resolve-DnsName example.com -Type A
```

### DNS Servers

| Server Type | Description |
|-------------|-------------|
| **Recursive resolver** | Handles client queries, does the recursion |
| **Root nameserver** | 13 root server clusters (A-M) |
| **TLD nameserver** | Manages .com, .org, .net, etc. |
| **Authoritative** | Definitive answers for a domain |
| **Forwarding** | Passes queries to another resolver |

### Public DNS Servers

| Provider | Primary | Secondary |
|----------|---------|-----------|
| Google | 8.8.8.8 | 8.8.4.4 |
| Cloudflare | 1.1.1.1 | 1.0.0.1 |
| Quad9 | 9.9.9.9 | 149.112.112.112 |
| OpenDNS | 208.67.222.222 | 208.67.220.220 |

### DNS Security

| Threat | Description | Mitigation |
|--------|-------------|------------|
| **DNS spoofing** | Fake DNS responses redirect traffic | DNSSEC |
| **DNS amplification** | DDoS using open resolvers | Rate limiting, BCP38 |
| **DNS tunneling** | Data exfiltration via DNS queries | DNS logging, anomaly detection |
| **Cache poisoning** | Corrupt resolver cache | Randomize source port |

**DNSSEC** adds cryptographic signatures to DNS records, verifying authenticity and integrity.

---

## DHCP — Dynamic Host Configuration Protocol

### What DHCP Does

DHCP automatically assigns IP configuration (address, mask, gateway, DNS) to devices when they join a network.

### DHCP DORA Process

| Step | Name | From → To | Description |
|------|------|-----------|-------------|
| 1 | **D**iscover | Client → Broadcast | "Any DHCP server out there?" |
| 2 | **O**ffer | Server → Client | "Here's an IP you can use" |
| 3 | **R**equest | Client → Broadcast | "I'll take that IP" |
| 4 | **A**cknowledge | Server → Client | "Confirmed — it's yours" |

```
Client                          DHCP Server
  |---- DHCP Discover --------->|  (broadcast: 255.255.255.255)
  |<--- DHCP Offer -------------|  (unicast or broadcast)
  |---- DHCP Request ---------->|  (broadcast — tells all servers)
  |<--- DHCP Acknowledge -------|  (unicast — lease confirmed)
```

### DHCP Options

| Option | Code | Description |
|--------|------|-------------|
| Subnet Mask | 1 | Subnet mask for the client |
| Router | 3 | Default gateway |
| DNS Server | 6 | DNS servers |
| Domain Name | 15 | Domain name |
| Lease Time | 51 | How long the lease lasts |
| DHCP Message Type | 53 | DORA message type |
| TFTP Server | 66 | For PXE/network boot |
| Vendor Class | 60 | Client identification |

### DHCP Relay (IP Helper)

When DHCP server is on a different subnet than clients:

```
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip helper-address 10.0.0.100
```

The router forwards DHCP broadcasts as unicasts to the DHCP server.

### DHCP Reservations

Static mapping of MAC address to IP:

```
ip dhcp pool VOICE
 network 10.0.40.0 255.255.255.0
 default-router 10.0.40.1
 dns-server 8.8.8.8

ip dhcp excluded-address 10.0.40.1 10.0.40.10
```

### Lease Times

| Scenario | Recommended Lease |
|----------|-------------------|
| Guest WiFi | 1-4 hours |
| Office desktops | 8-24 hours |
| IoT devices | 24-48 hours |
| Printers (static) | Reservation (no expiry) |

---

## Related Topics

- [IP Addressing](/networking/ip-addressing)
- [TCP/IP](/networking/tcp-ip)
- [Security](/security/firewalls)
