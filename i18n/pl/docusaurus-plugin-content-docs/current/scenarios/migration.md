---
sidebar_position: 3
---

# Migracja sieci

Moving networks from legacy infrastructure to modern platforms.

---

## Typy migracji

| Type | Description | Risk |
|------|-------------|------|
| **Hardware refresh** | Replace old equipment with new | Low |
| **Software upgrade** | OS/firmware updates | Medium |
| **Platform migration** | Change vendor/technology | High |
| **Cloud migration** | On-premises to cloud | High |

---

## Planowanie migracji

### Phase 1: Assessment

| Activity | Purpose |
|----------|---------|
| Inventory | Document all current devices, configs |
| Traffic analysis | Understand bandwidth requirements |
| Dependency mapping | What depends on what |
| Risk assessment | What could go wrong |

### Phase 2: Design

| Activity | Purpose |
|----------|---------|
| Target architecture | Design the new network |
| IP addressing plan | Re-address if needed |
| VLAN design | Restructure if needed |
| Redundancy | Ensure failover capability |

### Phase 3: Implementation

| Activity | Purpose |
|----------|---------|
| Lab testing | Validate in controlled environment |
| Pilot deployment | Test with limited users |
| Parallel operation | Run old and new simultaneously |
| Cutover | Switch to new infrastructure |

### Phase 4: Validation

| Activity | Purpose |
|----------|---------|
| Connectivity testing | All hosts reachable |
| Performance testing | Meets requirements |
| Failover testing | Redundancy works |
| Documentation | Update all records |

---

## Common Migration Scenarios

### Router Replacement

```
1. Backup old config
2. Convert config to new syntax
3. Install new router in lab
4. Test all features
5. Schedule maintenance window
6. Swap hardware
7. Verify connectivity
8. Monitor for 24 hours
```

### VLAN Restructuring

```
1. Document current VLANs and assignments
2. Design new VLAN scheme
3. Create VLANs on new switches
4. Configure trunk links
5. Migrate users (one department at a time)
6. Verify connectivity
7. Remove old VLANs
```

---

## Planowanie cofania

Always have a rollback plan:

| Step | Action |
|------|--------|
| 1 | Keep old config backup |
| 2 | Document every change |
| 3 | Set rollback deadline |
| 4 | Test rollback procedure |
| 5 | Have old equipment ready |

---

## Related Topics

- [Network Design](/scenarios/network-design)
- [Troubleshooting](/scenarios/troubleshooting)
- [Remote Work](/scenarios/remote-work)
