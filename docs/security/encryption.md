---
sidebar_position: 3
---

# Encryption

Protecting data by converting it into unreadable format without the correct key.

---

## Symmetric vs Asymmetric

| Feature | Symmetric | Asymmetric |
|---------|-----------|------------|
| Keys | Same key encrypt/decrypt | Public/private key pair |
| Speed | Fast | Slow |
| Key distribution | Problematic | Easier (public key) |
| Use case | Bulk data | Key exchange, signatures |

---

## Symmetric Algorithms

| Algorithm | Key Size | Block Size | Status |
|-----------|----------|-----------|--------|
| **AES-128** | 128-bit | 128-bit | Secure |
| **AES-256** | 256-bit | 128-bit | Very secure |
| **ChaCha20** | 256-bit | Stream | Secure (alternative to AES) |
| **3DES** | 168-bit | 64-bit | Deprecated |
| **DES** | 56-bit | 64-bit | Broken |
| **Blowfish** | 32-448 bit | 64-bit | Legacy |
| **Twofish** | 128-256 bit | 128-bit | Secure |

---

## Asymmetric Algorithms

| Algorithm | Key Size | Use |
|-----------|----------|-----|
| **RSA** | 2048-4096 bit | Key exchange, signatures |
| **ECC** | 256-521 bit | Key exchange, signatures |
| **Diffie-Hellman** | 2048+ bit | Key exchange only |
| **Ed25519** | 256 bit | Digital signatures |

---

## Hash Functions

| Algorithm | Output | Use |
|-----------|--------|-----|
| **SHA-256** | 256-bit | General hashing, certificates |
| **SHA-3** | Variable | Next-gen standard |
| **MD5** | 128-bit | **Broken** — avoid |
| **SHA-1** | 160-bit | **Deprecated** — avoid |
| **HMAC** | Variable | Message authentication |

---

## TLS — Transport Layer Security

### TLS 1.3 Handshake (Simplified)

```
Client                          Server
  |---- ClientHello ----------->|
  |<--- ServerHello ------------|
  |<--- Certificate ------------|
  |<--- ServerHelloDone --------|
  |---- KeyExchange ----------->|
  |---- ChangeCipherSpec ------>|
  |---- Finished -------------->|
  |<--- ChangeCipherSpec -------|
  |<--- Finished ---------------|
  |       (encrypted)           |
```

### TLS Versions

| Version | Status |
|---------|--------|
| SSL 2.0 | **Broken** |
| SSL 3.0 | **Broken** |
| TLS 1.0 | **Deprecated** |
| TLS 1.1 | **Deprecated** |
| TLS 1.2 | Secure (still widely used) |
| TLS 1.3 | **Recommended** (faster, more secure) |

---

## Digital Certificates

### X.509 Certificate Structure

| Field | Description |
|-------|-------------|
| **Subject** | Entity the certificate is issued to |
| **Issuer** | CA that issued the certificate |
| **Validity** | Not Before / Not After dates |
| **Public Key** | Subject's public key |
| **Signature** | CA's digital signature |

### Certificate Types

| Type | Validation | Use |
|------|-----------|-----|
| **DV** (Domain Validation) | Domain ownership only | Websites |
| **OV** (Organization Validation) | Organization verified | Business sites |
| **EV** (Extended Validation) | Full identity verification | Banking, e-commerce |
| **Self-signed** | None (owner-signed) | Internal, development |

---

## PKI — Public Key Infrastructure

```
Root CA
├── Intermediate CA 1
│   ├── Server certificate
│   └── Client certificate
└── Intermediate CA 2
    ├── Server certificate
    └── Code signing certificate
```

| Component | Purpose |
|-----------|---------|
| **CA** | Issues certificates |
| **RA** | Verifies certificate requests |
| **CRL** | Certificate Revocation List |
| **OCSP** | Online Certificate Status Protocol |

---

## Common Encryption Use Cases

| Use Case | Technology |
|----------|------------|
| Web browsing | TLS 1.3 |
| Email | PGP/GPG, S/MIME |
| File encryption | AES-256 |
| VPN | IPsec, WireGuard |
| Password storage | bcrypt, Argon2 |
| Code signing | RSA/ECC + SHA-256 |

---

## Related Topics

- [Firewalls](/security/firewalls)
- [VPN](/security/vpn)
- [IDS/IPS](/security/ids-ips)
