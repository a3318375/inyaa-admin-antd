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
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
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
        path: 'config',
        name: 'config',
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
