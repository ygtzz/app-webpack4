<template>
    <div class="test stage">
      fasdf
      <lookup title="用户查找" :data="buildData()"></lookup>
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
// import {MyScroll} from './myscroll';
import lookup from 'widget/lookup';
// import Lookup from '../../../widget/lookup/lookup.vue';

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
        let stu = {
          name: {
            firstName: 'zhang'
          }
        }
        console.log('stu: ', stu.name.firstName);
        console.log('stu: ', stu.age?.lastName.first);

        //nullish
        let stuAge = stu.age ?? 22;
        console.log('stuAge: ', stuAge);


        let obj = {name: 'zhangsan', age: 22}
        let obj1 = {...obj};
        console.log(obj1);
    },
    data() {
      return {
        
      }
    },
    methods:{
       buildData(){
         return [
           {id:1,name:'张三',code:'0801'},
           {id:2,name:'李四',code:'0802'},
           {id:3,name:'王五',code:'0803'},
           {id:4,name:'赵六',code:'0804'}
         ];
       }
    },
    components:{
      lookup
    },
    filters:{
        
    }
}
</script>