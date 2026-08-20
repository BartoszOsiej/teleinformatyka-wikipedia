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
      ],
    },
    {
      type: 'category',
      label: '📡 Telekomunikacja',
      items: [
        'telecom/voip-sip',
      ],
    },
    {
      type: 'category',
      label: '💡 Światłowody',
      items: [
        'fiber-optics/fundamentals',
      ],
    },
    {
      type: 'category',
      label: '📶 Bezprzewodowe',
      items: [
        'wireless/wifi-standards',
      ],
    },
    {
      type: 'category',
      label: '🔐 Bezpieczeństwo',
      items: [
        'security/firewalls',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Narzędzia',
      items: [
        'tools/wireshark',
      ],
    },
    {
      type: 'category',
      label: '🎓 Certyfikaty',
      items: [
        'certifications/cisco',
      ],
    },
    {
      type: 'category',
      label: '🎯 Scenariusze',
      items: [
        'scenarios/network-design',
      ],
    },
  ],
};

export default sidebars;
