<template>
    <div class="stage con">
        <header class="header">
            <c-cHeader :bBack="true" :backText="topModel.backText" :midText="iframe_title"
                       :rightIcon="topModel.nextIcon" :rightPath="topModel.nextPath">
            </c-cHeader>
        </header>
        <section class="body">
            <iframe :src="iframe_url" class="ifc" frameborder="0"></iframe>
        </section>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'; 

export default {
    name:'c-iframe',
    data(){
        return {
            topModel:{
                backText:'返回',
                curText:'',
                nextPath:'',
                nextIcon:''
            }
        }
    },
    computed:{
        ...mapGetters([
            'iframe_url',
            'iframe_title'
        ])
    },
    watch:{
        '$route':{
            handler(){
               
            },
            immediate:true
        }
    },
    methods:{
    },
    components:{

    }
}
</script>
<style lang="sass" scoped>
    .con{display:flex;flex-direction:column}
    .body{
        flex:1;
    }
    .ifc{width:100%;height:100%;}
</style>