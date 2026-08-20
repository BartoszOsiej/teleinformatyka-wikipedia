import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'index',
    {
      type: 'category',
      label: '🌐 Sieci komputerowe',
      link: { type: 'doc', id: 'networking/osi-model' },
      items: [
        'networking/osi-model',
        'networking/tcp-ip',
        'networking/ip-addressing',
        'networking/routing',
        'networking/switching',
      ],
    },
    {
      type: 'category',
      label: '📡 Telekomunikacja',
      link: { type: 'doc', id: 'telecom/voip-sip' },
      items: [
        'telecom/voip-sip',
      ],
    },
    {
      type: 'category',
      label: '💡 Światłowody',
      link: { type: 'doc', id: 'fiber-optics/fundamentals' },
      items: [
        'fiber-optics/fundamentals',
      ],
    },
    {
      type: 'category',
      label: '📶 Bezprzewodowe',
      link: { type: 'doc', id: 'wireless/wifi-standards' },
      items: [
        'wireless/wifi-standards',
      ],
    },
    {
      type: 'category',
      label: '🔐 Bezpieczeństwo',
      link: { type: 'doc', id: 'security/firewalls' },
      items: [
        'security/firewalls',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Narzędzia',
      link: { type: 'doc', id: 'tools/wireshark' },
      items: [
        'tools/wireshark',
      ],
    },
    {
      type: 'category',
      label: '🎓 Certyfikaty',
      link: { type: 'doc', id: 'certifications/cisco' },
      items: [
        'certifications/cisco',
      ],
    },
    {
      type: 'category',
      label: '🎯 Scenariusze',
      link: { type: 'doc', id: 'scenarios/network-design' },
      items: [
        'scenarios/network-design',
      ],
    },
  ],
};

export default sidebars;
