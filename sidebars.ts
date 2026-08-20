import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'index',
    {
      type: 'category',
      label: '🌐 Sieci komputerowe',
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
      label: '📡 Telekomunikacja',
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
      label: '💡 Światłowody',
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
      label: '📶 Bezprzewodowe',
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
      label: '🔐 Bezpieczeństwo',
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
      label: '📋 Protokoły',
      items: [
        'protocols/http-https',
        'protocols/bgp-ospf',
        'protocols/snmp-netconf',
        'protocols/mpls-vpn',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Narzędzia',
      items: [
        'tools/wireshark',
        'tools/nmap',
        'tools/pfsense',
        'tools/monitoring',
      ],
    },
    {
      type: 'category',
      label: '🎓 Certyfikaty',
      items: [
        'certifications/cisco',
        'certifications/comptia',
        'certifications/juniper',
        'certifications/cloud',
      ],
    },
    {
      type: 'category',
      label: '🎯 Scenariusze',
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
