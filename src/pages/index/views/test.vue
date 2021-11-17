<template>
    <div class="test">
        <div class="root">
            <SortableList v-model="items">
                <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
            </SortableList>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .root {
      width: 60%;
    }
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
    .list-item{
      background: #fff;
      border: 1px solid #ccc;
      padding: 20px;
      list-style: none;
    }
</style>
<script>
import Vue from 'vue';
import { ContainerMixin, ElementMixin } from 'vue-slicksort';

const SortableList = {
  mixins: [ContainerMixin],
  template: `
    <ul class="list">
      <slot />
    </ul>
  `
};

const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `
    <li class="list-item">{{item}}</li>
  `
};

export default {
    name:'v-test',
    created() {
        
    },
    mounted(){
        var self = this;
    },
    data() {
      return {
          items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
      }
    },
    methods:{
       
    },
    components:{
        SortableItem,
        SortableList
    },
    filters:{
        
    }
}
</script>