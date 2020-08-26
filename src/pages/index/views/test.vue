<template>
    <div class="test stage">
      fasdf
        <!-- <Parent>
        </Parent> -->
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