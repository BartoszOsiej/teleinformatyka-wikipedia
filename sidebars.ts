import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'index',
    {
      type: 'category',
      label: '🌐 Networking',
      link: { type: 'doc', id: 'networking/osi-model' },
      items: [
        'networking/osi-model',
        'networking/tcp-ip',
        'networking/ip-addressing',
        'networking/routing',
        'networking/switching',
        'networking/dns-dhcp',
        'networking/load-balancing',
      ],
    },
    {
      type: 'category',
      label: '📡 Telecom',
      link: { type: 'doc', id: 'telecom/pstn-isdn' },
      items: [
        'telecom/pstn-isdn',
        'telecom/voip-sip',
        'telecom/sdh-sonet',
        'telecom/multiplexing',
        'telecom/qos',
      ],
    },
    {
      type: 'category',
      label: '💡 Fiber Optics',
      link: { type: 'doc', id: 'fiber-optics/fundamentals' },
      items: [
        'fiber-optics/fundamentals',
        'fiber-optics/cables-connectors',
        'fiber-optics/testing-otdr',
        'fiber-optics/wdm-dwdm',
        'fiber-optics/fusion-splicing',
      ],
    },
    {
      type: 'category',
      label: '📶 Wireless',
      link: { type: 'doc', id: 'wireless/wifi-standards' },
      items: [
        'wireless/wifi-standards',
        'wireless/lte-4g',
        'wireless/5g-nr',
        'wireless/microwave-links',
        'wireless/antennas',
      ],
    },
    {
      type: 'category',
      label: '🔐 Security',
      link: { type: 'doc', id: 'security/firewalls' },
      items: [
        'security/firewalls',
        'security/vpn',
        'security/encryption',
        'security/ids-ips',
        'security/zero-trust',
      ],
    },
    {
      type: 'category',
      label: '📋 Protocols',
      link: { type: 'doc', id: 'protocols/http-https' },
      items: [
        'protocols/http-https',
        'protocols/bgp-ospf',
        'protocols/snmp-netconf',
        'protocols/mpls-vpn',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Tools',
      link: { type: 'doc', id: 'tools/wireshark' },
      items: [
        'tools/wireshark',
        'tools/nmap',
        'tools/pfsense',
        'tools/monitoring',
      ],
    },
    {
      type: 'category',
      label: '🎓 Certifications',
      link: { type: 'doc', id: 'certifications/cisco' },
      items: [
        'certifications/cisco',
        'certifications/comptia',
        'certifications/juniper',
        'certifications/cloud',
      ],
    },
    {
      type: 'category',
      label: '🎯 Scenarios',
      link: { type: 'doc', id: 'scenarios/network-design' },
      items: [
        'scenarios/network-design',
        'scenarios/troubleshooting',
        'scenarios/migration',
        'scenarios/remote-work',
      ],
    },
  ],
};

export default sidebars;
