import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/teleinformatyka-wikipedia/',
    component: ComponentCreator('/teleinformatyka-wikipedia/', 'bb0'),
    routes: [
      {
        path: '/teleinformatyka-wikipedia/',
        component: ComponentCreator('/teleinformatyka-wikipedia/', '8b4'),
        routes: [
          {
            path: '/teleinformatyka-wikipedia/',
            component: ComponentCreator('/teleinformatyka-wikipedia/', 'a0a'),
            routes: [
              {
                path: '/teleinformatyka-wikipedia/certifications/cisco',
                component: ComponentCreator('/teleinformatyka-wikipedia/certifications/cisco', '020'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/certifications/cloud',
                component: ComponentCreator('/teleinformatyka-wikipedia/certifications/cloud', '94e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/certifications/comptia',
                component: ComponentCreator('/teleinformatyka-wikipedia/certifications/comptia', '6da'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/certifications/juniper',
                component: ComponentCreator('/teleinformatyka-wikipedia/certifications/juniper', '0c2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/fiber-optics/cables-connectors',
                component: ComponentCreator('/teleinformatyka-wikipedia/fiber-optics/cables-connectors', '730'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/fiber-optics/fundamentals',
                component: ComponentCreator('/teleinformatyka-wikipedia/fiber-optics/fundamentals', '7a2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/fiber-optics/fusion-splicing',
                component: ComponentCreator('/teleinformatyka-wikipedia/fiber-optics/fusion-splicing', 'd6d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/fiber-optics/testing-otdr',
                component: ComponentCreator('/teleinformatyka-wikipedia/fiber-optics/testing-otdr', 'a8b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/fiber-optics/wdm-dwdm',
                component: ComponentCreator('/teleinformatyka-wikipedia/fiber-optics/wdm-dwdm', 'f5b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/networking/dns-dhcp',
                component: ComponentCreator('/teleinformatyka-wikipedia/networking/dns-dhcp', 'd00'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/networking/ip-addressing',
                component: ComponentCreator('/teleinformatyka-wikipedia/networking/ip-addressing', '0c1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/networking/load-balancing',
                component: ComponentCreator('/teleinformatyka-wikipedia/networking/load-balancing', 'a21'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/networking/osi-model',
                component: ComponentCreator('/teleinformatyka-wikipedia/networking/osi-model', '263'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/networking/routing',
                component: ComponentCreator('/teleinformatyka-wikipedia/networking/routing', '48f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/networking/switching',
                component: ComponentCreator('/teleinformatyka-wikipedia/networking/switching', '63d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/networking/tcp-ip',
                component: ComponentCreator('/teleinformatyka-wikipedia/networking/tcp-ip', 'c91'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/protocols/bgp-ospf',
                component: ComponentCreator('/teleinformatyka-wikipedia/protocols/bgp-ospf', '781'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/protocols/http-https',
                component: ComponentCreator('/teleinformatyka-wikipedia/protocols/http-https', '0ca'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/protocols/mpls-vpn',
                component: ComponentCreator('/teleinformatyka-wikipedia/protocols/mpls-vpn', 'e5b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/protocols/snmp-netconf',
                component: ComponentCreator('/teleinformatyka-wikipedia/protocols/snmp-netconf', 'fb0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/scenarios/migration',
                component: ComponentCreator('/teleinformatyka-wikipedia/scenarios/migration', '1e6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/scenarios/network-design',
                component: ComponentCreator('/teleinformatyka-wikipedia/scenarios/network-design', '20b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/scenarios/remote-work',
                component: ComponentCreator('/teleinformatyka-wikipedia/scenarios/remote-work', '256'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/scenarios/troubleshooting',
                component: ComponentCreator('/teleinformatyka-wikipedia/scenarios/troubleshooting', 'ea8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/security/encryption',
                component: ComponentCreator('/teleinformatyka-wikipedia/security/encryption', 'fae'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/security/firewalls',
                component: ComponentCreator('/teleinformatyka-wikipedia/security/firewalls', 'dc0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/security/ids-ips',
                component: ComponentCreator('/teleinformatyka-wikipedia/security/ids-ips', '1dc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/security/vpn',
                component: ComponentCreator('/teleinformatyka-wikipedia/security/vpn', 'f54'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/security/zero-trust',
                component: ComponentCreator('/teleinformatyka-wikipedia/security/zero-trust', '48c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/telecom/multiplexing',
                component: ComponentCreator('/teleinformatyka-wikipedia/telecom/multiplexing', '016'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/telecom/pstn-isdn',
                component: ComponentCreator('/teleinformatyka-wikipedia/telecom/pstn-isdn', 'd07'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/telecom/qos',
                component: ComponentCreator('/teleinformatyka-wikipedia/telecom/qos', '9da'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/telecom/sdh-sonet',
                component: ComponentCreator('/teleinformatyka-wikipedia/telecom/sdh-sonet', '788'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/telecom/voip-sip',
                component: ComponentCreator('/teleinformatyka-wikipedia/telecom/voip-sip', 'df7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/tools/monitoring',
                component: ComponentCreator('/teleinformatyka-wikipedia/tools/monitoring', 'ebb'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/tools/nmap',
                component: ComponentCreator('/teleinformatyka-wikipedia/tools/nmap', 'fa1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/tools/pfsense',
                component: ComponentCreator('/teleinformatyka-wikipedia/tools/pfsense', '71b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/tools/wireshark',
                component: ComponentCreator('/teleinformatyka-wikipedia/tools/wireshark', '5e9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/wireless/5g-nr',
                component: ComponentCreator('/teleinformatyka-wikipedia/wireless/5g-nr', 'e56'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/wireless/antennas',
                component: ComponentCreator('/teleinformatyka-wikipedia/wireless/antennas', '042'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/wireless/lte-4g',
                component: ComponentCreator('/teleinformatyka-wikipedia/wireless/lte-4g', 'a8a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/wireless/microwave-links',
                component: ComponentCreator('/teleinformatyka-wikipedia/wireless/microwave-links', '139'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/wireless/wifi-standards',
                component: ComponentCreator('/teleinformatyka-wikipedia/wireless/wifi-standards', '296'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/',
                component: ComponentCreator('/teleinformatyka-wikipedia/', 'e0c'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
