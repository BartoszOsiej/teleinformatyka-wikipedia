---
sidebar_position: 7
---

# Balansowanie obciążenia

Distributing network traffic across multiple servers to optimize resource use, maximize throughput, and ensure availability.

---

## Dlaczego balansowanie obciążenia?

- **High availability** — if one server fails, traffic routes to others
- **Scalability** — add more servers as demand grows
- **Performance** — reduce response time by distributing load
- **Redundancy** — no single point of failure

---

## Typy balanserów

| Layer | Works With | Example |
|-------|-----------|---------|
| **L4 (Transport)** | IP + Port | F5 BIG-IP, HAProxy (TCP mode) |
| **L7 (Application)** | HTTP headers, URLs, cookies | Nginx, HAProxy, AWS ALB |

### L4 vs L7

| Feature | L4 | L7 |
|---------|----|----|
| Speed | Faster (less inspection) | Slower (deep inspection) |
| Persistence | IP-based | Cookie/header-based |
| Content routing | No | Yes (URL, host, path) |
| SSL termination | Pass-through or terminate | Typically terminate |
| Use case | TCP/UDP services | Web applications |

---

## Algorytmy

### Round Robin

Requests distributed sequentially: Server 1 → 2 → 3 → 1 → 2 → ...

```
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A
```

### Weighted Round Robin

Servers get proportional traffic based on weight:

```
Server A (weight 3): gets 50% of traffic
Server B (weight 2): gets 33% of traffic
Server C (weight 1): gets 17% of traffic
```

### Least Connections

Route to server with fewest active connections:

```
Server A: 5 connections
Server B: 2 connections  ← next request goes here
Server C: 8 connections
```

### IP Hash

Client IP determines which server handles requests (ensures session persistence):

```
hash(client_ip) % num_servers = server_index
```

### Other Algorithms

| Algorithm | Description |
|-----------|-------------|
| **Least Response Time** | Fastest responding server |
| **Resource-based** | Server reports available capacity |
| **Random** | Random server selection |
| **Geographic** | Route to nearest data center |

---

## Trwałość sesji (Sticky Sessions)

| Method | Description |
|--------|-------------|
| **Cookie-based** | LB inserts cookie, client returns it |
| **IP-based** | Same IP always hits same server |
| **SSL session ID** | Same SSL session → same server |

**Problem:** Sticky sessions reduce load balancing effectiveness.

**Better:** Use shared session store (Redis, database) so any server can handle any session.

---

## Kontrola stanu

Load balancers regularly test backend servers:

| Check Type | What It Tests |
|------------|---------------|
| **TCP connect** | Can we establish a TCP connection? |
| **HTTP GET** | Does the server return 200 OK? |
| **HTTPS** | Does the SSL certificate work? |
| **Custom script** | Application-specific logic |

```
# HAProxy health check example
backend web_servers
    option httpchk GET /health
    http-check expect status 200
    server web1 10.0.0.1:80 check
    server web2 10.0.0.2:80 check
```

---

## Zakończenie SSL/TLS

| Mode | Description |
|------|-------------|
| **SSL Termination** | LB decrypts traffic, forwards plain HTTP to backends |
| **SSL Pass-through** | LB forwards encrypted traffic directly to backends |
| **SSL Re-encryption** | LB decrypts, then re-encrypts to backends |

---

## Nginx Load Balancer Example

```nginx
upstream backend {
    least_conn;
    server 10.0.0.1:8080 weight=3;
    server 10.0.0.2:8080 weight=2;
    server 10.0.0.3:8080 weight=1;
    keepalive 32;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout http_502 http_503;
    }
}
```

---

## HAProxy Example

```
frontend http_front
    bind *:80
    default_backend web_servers

backend web_servers
    balance roundrobin
    option httpchk GET /health
    server web1 10.0.0.1:80 check weight 3
    server web2 10.0.0.2:80 check weight 2
    server web3 10.0.0.3:80 check weight 1
```

---

## Cloud Load Balancers

| Provider | L4 | L7 |
|----------|----|----|
| AWS | NLB | ALB |
| Azure | LB | App Gateway |
| GCP | Network LB | HTTP(S) LB |
| Cloudflare | Spectrum | Load Balancer |

---

## Related Topics

- [Firewalls](/security/firewalls)
- [TCP/IP](/networking/tcp-ip)
- [VLAN](/networking/switching)
