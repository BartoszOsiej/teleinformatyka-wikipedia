---
sidebar_position: 2
---

# Troubleshooting sieci

Systematic approach to diagnosing and fixing network problems.

---

## Metodologia troubleshootingu

1. **Identify** — What is the problem?
2. **Establish theory** — What could cause it?
3. **Test theory** — Verify the cause
4. **Establish plan** — How to fix it
5. **Implement** — Apply the fix
6. **Verify** — Confirm it works
7. **Document** — Record what happened

---

## Typowe problemy & Solutions

### No Network Connectivity

| Check | Command | Expected Result |
|-------|---------|-----------------|
| Physical link | `show interface status` | Connected |
| IP address | `ip addr show` / `ipconfig` | Valid IP |
| Default gateway | `ping &lt;gateway&gt;` | Reply |
| DNS | `nslookup google.com` | Resolves |
| Internet | `ping 8.8.8.8` | Reply |

### Slow Performance

| Check | Command | What to Look For |
|-------|---------|-------------------|
| Bandwidth | `iperf3 -c &lt;server&gt;` | Throughput |
| Latency | `ping -c 100 &lt;host&gt;` | Average ms |
| Jitter | `ping -c 1000 &lt;host&gt;` | Std deviation |
| Errors | `show interface` | CRC, drops |
| CPU | `show processes cpu` | High utilization |

### Intermittent Connectivity

| Check | Tool | What to Look For |
|-------|------|-------------------|
| Cables | Cable tester | Physical damage |
| Duplex mismatch | `show interface` | Half vs Full |
| Spanning tree | `show spanning-tree` | Port state changes |
| Power | PoE budget | Insufficient power |
| Broadcast storm | `show interface counters` | High broadcast |

---

## Layer-by-Layer Troubleshooting

### Layer 1 (Physical)

| Symptom | Check |
|---------|-------|
| No link | Cable connected? LED status? |
| Flapping | Damaged cable? Loose connector? |
| Errors | Cable quality? Distance exceeded? |

### Layer 2 (Data Link)

| Symptom | Check |
|---------|-------|
| No MAC learning | VLAN configured? Trunk working? |
| STP blocking | Port state? BPDU filter? |
| Duplex mismatch | Speed/duplex settings |

### Layer 3 (Network)

| Symptom | Check |
|---------|-------|
| No routing | Route table? OSPF/BGP neighbors? |
| Asymmetric routing | Path analysis? |
| ACL blocking | Access-list log? |

### Layer 4 (Transport)

| Symptom | Check |
|---------|-------|
| Connection refused | Service running? Firewall? |
| Slow connections | TCP retransmissions? Window size? |
| Port exhaustion | Connection table full? |

---

## Przydatne polecenia

| Platform | Command | Purpose |
|----------|---------|---------|
| **Linux** | `ip addr show` | IP addresses |
| **Linux** | `ip route show` | Routing table |
| **Linux** | `ss -tulnp` | Open ports |
| **Linux** | `traceroute` | Path trace |
| **Linux** | `mtr` | Real-time path analysis |
| **Cisco** | `show ip interface brief` | Interface status |
| **Cisco** | `show ip route` | Routing table |
| **Cisco** | `show mac address-table` | MAC table |
| **Windows** | `ipconfig /all` | IP configuration |
| **Windows** | `tracert` | Path trace |
| **Windows** | `netstat -an` | Active connections |

---

## Packet Capture Workflow

```
1. Identify problem area
2. Place capture point (SPAN/TAP)
3. Filter traffic (host, port, protocol)
4. Reproduce problem
5. Analyze capture
6. Identify root cause
```

---

## Related Topics

- [Wireshark](/tools/wireshark)
- [Network Design](/scenarios/network-design)
- [Nmap](/tools/nmap)
