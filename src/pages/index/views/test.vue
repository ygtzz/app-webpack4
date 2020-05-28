<template>
    <div class="test stage">
        <Parent>
        </Parent>
    </div>
</template>
<style lang="scss" scoped>
    .scrollc{height:400px;width:100%;overflow:hidden;position:relative;}
    .scrolls{position:relative;}
    .scrolls-h .scroll-item{float:left;}
    .scrolls-h li{float:left;display:inline-block;};
    .scrolls-v .scroll-item{}
    .scrolls.moving{
        transition: transform .3s linear;        
        transition: -webkit-transform .3s linear;
    }
    /*debug*/
    .scrolls{background-color:orange;}
    .scroll-item {
        width:300px;margin-right:20px;
        font-size:100px;text-align:center;height:400px;
        background-color:lightblue;line-height:400px;
    }
</style>
<script>
import Vue from 'vue';
import {MyScroll} from './myscroll';

Vue.component('Child1',{
  template: '<div>child1</div>',
  beforeCreate(){
    console.log('child1 beforeCreate');
  },
  created(){
    console.log('child1 created');
  },
  beforeMount(){
    console.log('child1 beforeMount');
  },
  mounted(){
    console.log('child1 mounted');
  },
  beforeUpdate(){
    console.log('child1 beforeUpdate');
  },
  updated(){
    console.log('child1 updated');
  },
  beforeDestroy(){
    console.log('child1 beforeDestory')
  },
  destoryed(){
    console.log('child1 destoryed')
  }
})

Vue.component('Child2',{
  template: '<div>child2</div>',
  beforeCreate(){
    console.log('child2 beforeCreate');
  },
  created(){
    console.log('child2 created');
  },
  beforeMount(){
    console.log('child2 beforeMount');
  },
  mounted(){
    console.log('child2 mounted');
  },
  beforeUpdate(){
    console.log('child2 beforeUpdate');
  },
  updated(){
    console.log('child2 updated');
  },
  beforeDestroy(){
    console.log('child2 beforeDestory')
  },
  destoryed(){
    console.log('child2 destoryed')
  }
})

Vue.component('Parent',{
  template: '<div>parent<Child1 /><Child2 /></div>',
  beforeCreate(){
    console.log('parent beforeCreate');
  },
  created(){
    console.log('parent created');
  },
  beforeMount(){
    console.log('parent beforeMount');
  },
  mounted(){
    console.log('parent mounted');
  },
  beforeUpdate(){
    console.log('parent beforeUpdate');
  },
  updated(){
    console.log('parent updated');
  },
  beforeDestroy(){
    console.log('parent beforeDestory')
  },
  destoryed(){
    console.log('parent destoryed')
  }
})

export default {
    name:'v-test',
    created() {
        
    },
    mounted(){
        var self = this;
        // self.$nextTick(() => {
        //     var myscroll = new MyScroll({
        //         container:'#scrollc',
        //         direction:'left',
        //         step:10,
        //         interval:200
        //     });
        // });
    },
    data() {
      return {
  
      }
    },
    methods:{
       
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>