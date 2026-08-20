---
sidebar_position: 2
---

# VPN — Virtual Private Network

Secure encrypted tunnels over public networks for private communication.

---

## VPN Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Site-to-Site** | Connects two networks | Branch offices |
| **Remote Access** | Individual connects to network | Remote workers |
| **Client-to-Site** | Software client connects | Mobile workforce |
| **LAN-to-LAN** | Same as site-to-site | Data center interconnect |

---

## VPN Protocols

| Protocol | Port | Encryption | Speed | Use |
|----------|------|-----------|-------|-----|
| **IPsec** | UDP 500/4500, ESP 50 | AES-256 | Medium | Site-to-site |
| **OpenVPN** | TCP 1194 / UDP 1194 | AES-256 | Medium | Remote access |
| **WireGuard** | UDP 51820 | ChaCha20 | Fast | Modern remote |
| **SSL/TLS** | TCP 443 | AES-256 | Medium | Web-based |
| **L2TP/IPsec** | UDP 1701 | AES-256 | Slow | Legacy |

---

## IPsec

### Phase 1 (IKE — Internet Key Exchange)

Establishes secure channel between peers:

| Mode | Description |
|------|-------------|
| **Main mode** | 6-message exchange, identity protected |
| **Aggressive mode** | 3-message exchange, faster but less secure |

### Phase 2 (IPsec SA)

Establishes the actual encryption:

| Protocol | Description |
|----------|-------------|
| **ESP** | Encrypts payload (most common) |
| **AH** | Authentication only (no encryption) |

### IPsec Modes

| Mode | Description |
|------|-------------|
| **Transport** | Encrypts payload only (host-to-host) |
| **Tunnel** | Encrypts entire packet (gateway-to-gateway) |

---

## WireGuard

| Feature | Value |
|---------|-------|
| Codebase | ~4,000 lines (vs 400,000 for OpenVPN) |
| Encryption | ChaCha20, Curve25519, BLAKE2s |
| Key exchange | Noise protocol framework |
| Performance | Faster than OpenVPN |
| Config | Simple text file |

```ini
# WireGuard config example
[Interface]
PrivateKey = <private_key>
Address = 10.0.0.2/24
DNS = 1.1.1.1

[Peer]
PublicKey = <server_public_key>
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
```

---

## Split Tunnel vs Full Tunnel

| Type | Description | Security |
|------|-------------|----------|
| **Full tunnel** | All traffic through VPN | Higher (all traffic inspected) |
| **Split tunnel** | Only corporate traffic through VPN | Lower (direct internet for personal) |

---

## VPN Security Considerations

| Threat | Mitigation |
|--------|------------|
| **Man-in-the-middle** | Certificate verification |
| **Replay attacks** | Sequence numbers |
| **DNS leaks** | VPN DNS servers |
| **Kill switch** | Block traffic if VPN drops |
| **Weak encryption** | Use AES-256, avoid PPTP |

---

## Related Topics

- [Firewalls](/security/firewalls)
- [Encryption](/security/encryption)
- [Zero Trust](/security/zero-trust)
