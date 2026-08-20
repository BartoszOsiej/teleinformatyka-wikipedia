---
sidebar_position: 3
---

# SNMP i NETCONF

Network management protocols for monitoring and configuring network devices.

---

## SNMP — Simple Network Management Protocol

### Komponenty

| Component | Description |
|-----------|-------------|
| **Manager** | Central monitoring system (NMS) |
| **Agent** | Software on managed device |
| **MIB** | Management Information Base (data structure) |
| **OID** | Object Identifier (specific data point) |

### Wersje SNMP

| Version | Security | Authentication | Encryption |
|---------|----------|---------------|------------|
| **v1** | Community string | No | No |
| **v2c** | Community string | No | No |
| **v3** | USM | Yes (MD5/SHA) | Yes (DES/AES) |

### Operacje SNMP

| Operation | Description |
|-----------|-------------|
| **GET** | Retrieve single value |
| **GET-NEXT** | Retrieve next value in MIB |
| **GET-BULK** | Retrieve multiple values |
| **SET** | Modify a value |
| **TRAP** | Unsolicited alert from agent |
| **INFORM** | Acknowledged trap |

### Typowe OID

| OID | Description |
|-----|-------------|
| 1.3.6.1.2.1.1.1 | System description |
| 1.3.6.1.2.1.1.3 | System uptime |
| 1.3.6.1.2.1.1.5 | System name |
| 1.3.6.1.2.1.2.1 | Interface count |
| 1.3.6.1.2.1.2.2.1.10 | Interface in-octets |
| 1.3.6.1.2.1.2.2.1.16 | Interface out-octets |

### Konfiguracja SNMP (Cisco)

```
# SNMPv3 configuration
snmp-server group MYGROUP v3 priv
snmp-server user myuser MYGROUP v3 auth sha AuthPass1 priv aes 128 PrivPass1
snmp-server host 10.0.0.100 version 3 priv myuser
snmp-server enable traps
```

### SNMP Commands

```bash
# Query device
snmpwalk -v3 -l authPriv -u myuser -a SHA -A AuthPass1 -x AES -X PrivPass1 10.0.0.1

# Get specific OID
snmpget -v2c -c public 10.0.0.1 1.3.6.1.2.1.1.1.0

# Set value
snmpset -v2c -c private 10.0.0.1 1.3.6.1.2.1.1.5.0 s "new-hostname"
```

---

## NETCONF — Network Configuration Protocol

### What NETCONF Does

Replaces CLI-based configuration with structured, programmatic management using XML/YANG models.

### NETCONF Layers

| Layer | Protocol |
|-------|----------|
| **Transport** | SSH (port 830) |
| **Messaging** | XML-RPC |
| **Content** | YANG data models |
| **Operations** | get, get-config, edit-config, commit |

### NETCONF Operations

| Operation | Description |
|-----------|-------------|
| **get** | Retrieve running config + state |
| **get-config** | Retrieve specific configuration |
| **edit-config** | Modify configuration |
| **commit** | Apply changes |
| **rollback** | Revert to previous config |
| **copy-config** | Backup/restore configuration |

### YANG — Yet Another Next Generation

YANG defines the data models for NETCONF:

```yang
module example-system {
  leaf hostname {
    type string;
    description "System hostname";
  }
  leaf enable-ssh {
    type boolean;
    default true;
  }
}
```

---

## SNMP vs NETCONF

| Feature | SNMP | NETCONF |
|---------|------|---------|
| Data format | OIDs (flat) | YANG (hierarchical) |
| Configuration | Limited (SET) | Full (edit-config) |
| State data | Yes | Yes |
| Transactions | No | Yes (candidate DB) |
| Industry trend | Legacy | Modern replacement |

---

## Related Topics

- [BGP/OSPF](/protocols/bgp-ospf)
- [Monitoring](/tools/monitoring)
- [Wireshark](/tools/wireshark)
