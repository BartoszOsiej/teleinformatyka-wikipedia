---
sidebar_position: 1
---

# 🔍 Wireshark — Analizator protokołów

> **PL:** Narzędzie do przechwytywania i analizy ruchu sieciowego.
> **EN:** Network packet capture and analysis tool.

---

## 🇬🇧 What is Wireshark?

Wireshark is the world's foremost network protocol analyzer. It lets you
capture and interactively browse traffic running on a computer network.

**Use cases:**
- Network troubleshooting
- Protocol development and debugging
- Security analysis
- Education (learning protocols)

---

## 🇬🇧 Capture Interfaces

### Start a Capture

1. Select interface (Ethernet, WiFi, loopback)
2. Click **Start** (blue shark fin)
3. Traffic appears in real-time
4. Click **Stop** when done

### Display Filters

| Filter | Description |
|--------|-------------|
| `tcp.port == 443` | HTTPS traffic |
| `ip.src == 10.0.0.5` | Traffic from specific host |
| `http.request.method == "GET"` | HTTP GET requests |
| `dns` | All DNS traffic |
| `tcp.flags.syn == 1` | TCP SYN packets (new connections) |
| `tcp.flags.rst == 1` | TCP RST (connection reset) |
| `icmp` | Ping/traceroute |
| `frame.len > 1000` | Large packets |
| `!(arp or dns)` | Exclude ARP and DNS |

### Capture Filters (BPF)

| Filter | Description |
|--------|-------------|
| `host 10.0.0.5` | Traffic to/from host |
| `port 80` | HTTP traffic |
| `net 10.0.0.0/24` | Subnet traffic |
| `tcp` | Only TCP |
| `not port 22` | Exclude SSH |
| `tcp port 80 and host 10.0.0.5` | Combined |

---

## 🇬🇧 Protocol Analysis

### TCP Analysis

| Indicator | What to Look For |
|-----------|-----------------|
| **Retransmissions** | Duplicate SEQ numbers — packet loss |
| **Duplicate ACKs** | Receiver asking for retransmission |
| **Zero Window** | Receiver buffer full — flow control issue |
| **RST** | Connection reset — possible error |
| **Slow Start** | Small initial window growing |

### HTTP Analysis

| Filter | Description |
|--------|-------------|
| `http.request` | All HTTP requests |
| `http.response.code == 200` | Successful responses |
| `http.response.code >= 400` | Error responses |
| `http.host == "example.com"` | Specific host |
| `http.request.uri contains "login"` | Login requests |

### DNS Analysis

| Filter | Description |
|--------|-------------|
| `dns.qry.name == "example.com"` | Query for specific domain |
| `dns.flags.rcode != 0` | DNS errors |
| `dns.qry.type == 1` | A record queries |
| `dns.qry.type == 28` | AAAA record queries |

---

## 🇬🇧 Common Scenarios

### Slow Website

```
1. Filter: http.request.method == "GET"
2. Look at Time column — which requests take long?
3. Right-click → Follow → TCP Stream
4. Check for retransmissions, zero windows
5. Check DNS resolution time
```

### Connection Refused

```
1. Filter: tcp.flags.rst == 1
2. Check source/destination IPs
3. Verify destination port is correct
4. Check firewall logs
```

### DNS Issues

```
1. Filter: dns
2. Check query name and type
3. Look at response codes (NXDOMAIN = not found)
4. Check response time
5. Verify DNS server is reachable
```

### VoIP Quality Issues

```
1. Telephony → VoIP Calls
2. Select call → Play Streams
3. Check RTP statistics (jitter, loss, MOS)
4. Filter: rtp || sip
```

---

## 🇬🇧 Statistics & Tools

| Tool | Description |
|------|-------------|
| **Conversations** | Top talkers by IP/protocol |
| **Protocol Hierarchy** | Breakdown of protocols |
| **IO Graphs** | Traffic over time |
| **Flow Graph** | TCP connection visualization |
| **VoIP Calls** | SIP/RTP call analysis |
| **TLS** | SSL/TLS handshake analysis |
| **Endpoints** | All devices with traffic |
| **Expert Information** | Warnings and errors |

---

## 🇬🇧 Tips & Tricks

| Tip | How |
|-----|-----|
| Follow TCP Stream | Right-click packet → Follow → TCP Stream |
| Mark packets | Ctrl+M (useful for bookmarking) |
| Color rules | View → Coloring Rules |
| Time reference | Ctrl+T (set time reference point) |
| Export objects | File → Export Objects → HTTP |
| Decode as | Right-click → Decode As (change protocol interpretation) |

---

## 🔗 Related Topics

- [Nmap](/tools/nmap)
- [Monitoring](/tools/monitoring)
- [Troubleshooting](/scenarios/troubleshooting)

---
