---
sidebar_position: 4
---

# IDS i IPS

Intrusion Detection System and Intrusion Prevention System — monitoring network traffic for malicious activity.

---

## IDS vs IPS

| Feature | IDS | IPS |
|---------|-----|-----|
| Mode | Passive (monitor only) | Active (blocks threats) |
| Placement | Out-of-band (tap/mirror) | Inline (in traffic path) |
| Action | Alert only | Alert + block |
| Impact | No network impact | Can cause latency |
| Risk | None (watch only) | Can block legitimate traffic |

---

## Metody wykrywania

| Method | Description | Pros/Cons |
|--------|-------------|-----------|
| **Signature-based** | Match known attack patterns | Fast, no false positives for known attacks, misses new attacks |
| **Anomaly-based** | Detect deviations from baseline | Catches new attacks, higher false positive rate |
| **Stateful protocol** | Understand protocol behavior | Accurate for known protocols |
| **Heuristic** | Uses rules/algorithms | Catches variants of known attacks |

---

## Signature Types

| Type | Description |
|------|-------------|
| **Text strings** | Match specific byte sequences |
| **Regular expressions** | Pattern matching |
| **Context signatures** | Consider packet position/state |
| **Composite** | Combine multiple conditions |

---

## Wdrożenie IPS

```
Internet ──► [Firewall] ──► [IPS] ──► [Switch] ──► LAN
                        (inline)    (bypass if IPS fails)
```

### Inline vs Tap

| Mode | Description |
|------|-------------|
| **Inline** | Traffic passes through IPS (can block) |
| **Tap/SPAN** | Copy of traffic only (detection only) |
| **Bypass** | IPS fails open (traffic continues) |

---

## Typowe narzędzia IDS/IPS

| Tool | Type | Cost |
|------|------|------|
| **Snort** | IDS/IPS | Free (open source) |
| **Suricata** | IDS/IPS | Free (open source) |
| **Zeek** | Network monitor | Free (open source) |
| **OSSEC** | Host IDS | Free (open source) |
| **Palo Alto Threat** | IPS | Commercial |
| **Cisco Firepower** | IPS | Commercial |

---

## Snort Rule Example

```
# Alert on SQL injection attempt
alert http $EXTERNAL_NET any -> $HTTP_SERVERS any \
  (msg:"SQL Injection attempt"; \
   content:"SELECT"; nocase; \
   content:"FROM"; nocase; \
   sid:1000001; rev:1;)

# Alert on port scan
alert tcp $EXTERNAL_NET any -> $HOME_NET any \
  (flags:S; threshold:type both, track by_src, count 20, seconds 60; \
   msg:"Port scan detected"; sid:1000002; rev:1;)
```

---

## Fałszywie pozytywne

| Cause | Mitigation |
|-------|------------|
| Legitimate traffic patterns | Tune signatures |
| Encrypted traffic | SSL inspection |
| New applications | Update baselines |
| Misconfigured rules | Regular rule review |

---

## Related Topics

- [Firewalls](/security/firewalls)
- [Encryption](/security/encryption)
- [Zero Trust](/security/zero-trust)
