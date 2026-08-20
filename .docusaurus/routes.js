import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/teleinformatyka-wikipedia/pl/',
    component: ComponentCreator('/teleinformatyka-wikipedia/pl/', 'b5c'),
    routes: [
      {
        path: '/teleinformatyka-wikipedia/pl/',
        component: ComponentCreator('/teleinformatyka-wikipedia/pl/', '30d'),
        routes: [
          {
            path: '/teleinformatyka-wikipedia/pl/',
            component: ComponentCreator('/teleinformatyka-wikipedia/pl/', 'b58'),
            routes: [
              {
                path: '/teleinformatyka-wikipedia/pl/certifications/cisco',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/certifications/cisco', '749'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/fiber-optics/fundamentals',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/fiber-optics/fundamentals', 'a9a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/networking/ip-addressing',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/networking/ip-addressing', 'd85'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/networking/osi-model',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/networking/osi-model', '119'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/networking/routing',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/networking/routing', 'c62'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/networking/switching',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/networking/switching', 'cb2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/networking/tcp-ip',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/networking/tcp-ip', '0c7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/scenarios/network-design',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/scenarios/network-design', 'fcd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/security/firewalls',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/security/firewalls', '0ce'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/telecom/voip-sip',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/telecom/voip-sip', '8d0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/tools/wireshark',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/tools/wireshark', '007'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/wireless/wifi-standards',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/wireless/wifi-standards', 'ec8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/teleinformatyka-wikipedia/pl/',
                component: ComponentCreator('/teleinformatyka-wikipedia/pl/', 'afb'),
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
