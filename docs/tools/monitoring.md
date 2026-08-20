---
sidebar_position: 4
---

# Network Monitoring

Observing and analyzing network performance, availability, and security.

---

## Monitoring Types

| Type | What It Monitors | Tools |
|------|-----------------|-------|
| **Availability** | Is the device/service up? | Ping, SNMP |
| **Performance** | Latency, throughput, errors | SNMP, NetFlow |
| **Security** | Intrusions, anomalies | SIEM, IDS/IPS |
| **Configuration** | Config changes | RANCID, Oxidized |

---

## Monitoring Protocols

| Protocol | Use | Port |
|----------|-----|------|
| **SNMP** | Device metrics | 161/162 |
| **Syslog** | Log collection | 514 (UDP/TCP) |
| **NetFlow/sFlow** | Traffic analysis | 2055/9995 |
| **IPFIX** | Standardized flow data | 4739 |
| **SNMP TRAP** | Event notifications | 162 |

---

## Monitoring Tools

| Tool | Type | Cost |
|------|------|------|
| **Zabbix** | Full monitoring | Free (open source) |
| **Nagios** | Infrastructure monitoring | Free / Commercial |
| **PRTG** | All-in-one | Commercial (100 free) |
| **LibreNMS** | SNMP monitoring | Free (open source) |
| **Grafana** | Visualization | Free (open source) |
| **Prometheus** | Metrics collection | Free (open source) |
| **Cacti** | SNMP graphing | Free (open source) |
| **Splunk** | SIEM/Log analysis | Commercial (500MB free) |
| **ELK Stack** | Log analysis | Free (open source) |

---

## Zabbix Architecture

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Zabbix  │─────│ Database │     │  Web UI  │
│  Server  │     │ (MySQL/  │─────│          │
│          │     │  PG)     │     │          │
└────┬─────┘     └──────────┘     └──────────┘
     │
     ├── SNMP ──► [Router/Switch]
     ├── Agent ─► [Server]
     ├── JMX ──► [Java App]
     └── HTTP ─► [Web Service]
```

---

## Key Metrics to Monitor

| Metric | Description | Alert Threshold |
|--------|-------------|-----------------|
| **CPU** | Processor utilization | &gt;80% |
| **Memory** | RAM usage | &gt;85% |
| **Disk** | Storage usage | &gt;90% |
| **Interface** | Bandwidth utilization | &gt;80% of capacity |
| **Latency** | Round-trip time | &gt;100ms |
| **Packet loss** | Dropped packets | &gt;1% |
| **Errors** | CRC, runts, giants | Any increase |

---

## Alerting Best Practices

| Practice | Description |
|----------|-------------|
| **Baseline** | Know what "normal" looks like |
| **Thresholds** | Set realistic alert thresholds |
| **Escalation** | Alert → notify → escalate |
| **Correlation** | Group related alerts |
| **Maintenance windows** | Suppress during planned work |

---

## Dashboard Example (Grafana + Prometheus)

```
┌─────────────────┬─────────────────┐
│  CPU Usage %    │  Memory Usage % │
│  [graph]        │  [graph]        │
├─────────────────┼─────────────────┤
│  Network I/O    │  Disk I/O       │
│  [graph]        │  [graph]        │
├─────────────────┼─────────────────┤
│  Active Alerts  │  Uptime         │
│  [table]        │  [stat]         │
└─────────────────┴─────────────────┘
```

---

## Related Topics

- [SNMP/NETCONF](/protocols/snmp-netconf)
- [Wireshark](/tools/wireshark)
- [Nmap](/tools/nmap)
