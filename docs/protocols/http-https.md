---
sidebar_position: 1
---

# HTTP & HTTPS

HyperText Transfer Protocol — the foundation of web communication.

---

## HTTP Methods

| Method | Purpose | Body | Safe | Idempotent |
|--------|---------|------|------|------------|
| **GET** | Retrieve resource | No | Yes | Yes |
| **POST** | Create resource | Yes | No | No |
| **PUT** | Replace resource | Yes | No | Yes |
| **PATCH** | Partial update | Yes | No | No |
| **DELETE** | Remove resource | Optional | No | Yes |
| **HEAD** | Get headers only | No | Yes | Yes |
| **OPTIONS** | Describe options | No | Yes | Yes |

---

## HTTP Status Codes

| Code | Category | Examples |
|------|----------|---------|
| **1xx** | Informational | 100 Continue, 101 Switching Protocols |
| **2xx** | Success | 200 OK, 201 Created, 204 No Content |
| **3xx** | Redirection | 301 Moved, 302 Found, 304 Not Modified |
| **4xx** | Client Error | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| **5xx** | Server Error | 500 Internal Error, 502 Bad Gateway, 503 Unavailable |

---

## HTTP Headers

| Header | Purpose |
|--------|---------|
| `Content-Type` | Response body format |
| `Authorization` | Authentication credentials |
| `Cache-Control` | Caching directives |
| `Cookie` | Session data |
| `Host` | Target hostname |
| `User-Agent` | Client identification |
| `Accept` | Accepted response formats |
| `X-Forwarded-For` | Original client IP (proxy) |

---

## HTTPS

HTTP + TLS encryption:

```
HTTP (plain text):    GET /login HTTP/1.1
                      password=secret123     ← visible to anyone

HTTPS (encrypted):    [encrypted data]       ← unreadable without key
```

### TLS 1.3 Features

| Feature | Benefit |
|---------|---------|
| 1-RTT handshake | Faster connection setup |
| 0-RTT resumption | Even faster reconnection |
| Removed weak ciphers | No more RC4, 3DES |
| Encrypted handshake | More privacy |

---

## Common Ports

| Port | Protocol | Use |
|------|----------|-----|
| 80 | HTTP | Unencrypted web |
| 443 | HTTPS | Encrypted web |
| 8080 | HTTP Alt | Development servers |
| 8443 | HTTPS Alt | Development servers |

---

## Related Topics

- [Encryption](/security/encryption)
- [Firewalls](/security/firewalls)
- [BGP/OSPF](/protocols/bgp-ospf)
