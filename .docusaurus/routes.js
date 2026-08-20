import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/teleinformatyka-wikipedia/en/',
    component: ComponentCreator('/teleinformatyka-wikipedia/en/', '7bf'),
    routes: [
      {
        path: '/teleinformatyka-wikipedia/en/',
        component: ComponentCreator('/teleinformatyka-wikipedia/en/', '0b7'),
        routes: [
          {
            path: '/teleinformatyka-wikipedia/en/',
            component: ComponentCreator('/teleinformatyka-wikipedia/en/', '85b'),
            routes: [
              {
                path: '/teleinformatyka-wikipedia/en/certifications/cisco',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/certifications/cisco', 'c27'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/fiber-optics/fundamentals',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/fiber-optics/fundamentals', '372'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/networking/ip-addressing',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/networking/ip-addressing', '3df'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/networking/osi-model',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/networking/osi-model', '022'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/networking/routing',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/networking/routing', 'e29'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/networking/switching',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/networking/switching', 'c6c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/networking/tcp-ip',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/networking/tcp-ip', '426'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/scenarios/network-design',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/scenarios/network-design', '189'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/security/firewalls',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/security/firewalls', '2f1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/telecom/voip-sip',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/telecom/voip-sip', 'e3a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/tools/wireshark',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/tools/wireshark', '759'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/wireless/wifi-standards',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/wireless/wifi-standards', '8e9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/en/',
                component: ComponentCreator('/teleinformatyka-wikipedia/en/', '836'),
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
