export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'system',
    path: '/system',
    routes: [
      {
        path: 'menu',
        name: 'menu',
        component: './system/Menu',
      },
      {
        path: 'account',
        name: 'account',
        component: './system/Account',
      },
      {
        path: 'role',
        name: 'role',
        component: './system/Role',
      },
      {
        name: 'config',
        path: 'config',
        component: './system/Config',
      },
      {
        path: 'dept',
        name: 'dept',
        component: './system/Dept',
      },
    ],
  },
  {
    name: 'blog',
    path: '/blog',
    routes: [
      {
        path: 'article',
        name: 'article',
        component: './blog/Article',
      },
      {
        path: 'type',
        name: 'type',
        component: './blog/Type',
      },
      {
        path: 'tag',
        name: 'tag',
        component: './blog/Tag',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
