const test = resolve => {
  require.ensure(['./views/test.vue'], () => {
    resolve(require('./views/test.vue'))
  },'test')
}

export default [
    { path: '/', redirect:'/test'},
    { 
        path: '/test', 
        name:'test',
        component: test        
    }
];