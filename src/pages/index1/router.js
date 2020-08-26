// import home from './views/home.vue';
// import productList from './views/productList.vue';
// import me from './views/me.vue';
// import detail from './views/detail.vue';
// import test from './views/test.vue';

const home = resolve => {
  require.ensure(['./views/home.vue'], () => {
    resolve(require('./views/home.vue'))
  },'home')
}
const productList = resolve => {
  require.ensure(['./views/productList.vue'], () => {
    resolve(require('./views/productList.vue'))
  },'producsList')
}
const me = resolve => {
  require.ensure(['./views/me.vue'], () => {
    resolve(require('./views/me.vue'))
  },'me')
}
// const detail = resolve => {
//   require.ensure(['./views/detail.vue'], () => {
//     resolve(require('./views/detail.vue'))
//   },'detail')
// }
// const test = resolve => {
//   require.ensure(['./views/test.vue'], () => {
//     resolve(require('./views/test.vue'))
//   },'test')
// }

export default [
    { path: '/', redirect:'/home'},
    { 
        path: '/home', 
        name:'home',
        component: home
    },            
    { 
        path: '/me', 
        name:'me',
        component: me
    },    
    { 
        path: '/finance', 
        name:'finance',
        component: productList        
    },
    // { 
    //     path: '/detail', 
    //     name:'detail',
    //     component: detail        
    // },
    // { 
    //     path: '/test', 
    //     name:'test',
    //     component: test        
    // }
];