export default [
    {
        path: '/categories',
        name: 'MainCategories',
        component: () => import('@/pages/MainCategories.vue')
    },
    {
        path: '/:category_url',
        name: 'Brands',
        component: () => import('@/pages/Brands.vue')
    },
    {
        path: '/:category_url/:brand_url',
        name: 'Brand',
        component: () => import('@/pages/Brand.vue')
    }
]