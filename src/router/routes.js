const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    name: 'home',
    component: () => import('pages/Index.vue')
  }, {
    path: 'result',
    name: 'result',
    component: () => import('pages/SearchResult.vue')
  }]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
