<template>
    <div id="app">
        <div class="container">
            <section class="body">
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    created(){
        var self = this;
        // setTimeout(function(){
        //     self.bShowWelcome = false;
        // },2000);
        // this.bPc = !this.fIsMobile();
    },
    data(){
        return {
            bShowWelcome:false,
            bPc:false
        }
    },
    computed:{
        ...mapState({
            model:'app'
        })
    },
    methods:{
        fIsMobile(){
            return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
    },
    components:{
      
    }
} 
</script>
<style lang="scss" scoped>
    $footHeight: 104px;

    #app{
        height:100%;width:100%;
    }
    .container{
        height:100%;width:100%;
        overflow:hidden;
    }
    .top-fixed{
        
    }
    .body{
        height:100%;
        width: 100%;
        overflow:hidden;
        overflow-y:auto;
        -webkit-overflow-scrolling:touch;
        padding-bottom:$footHeight;
    }
    .bottom-fixed{
        border-top: 1px solid #E7E7E7;
        height:$footHeight;
        line-height:1;
        position:absolute;
        bottom:0;
        width:100%;
    }
    .inner{width:20em;margin:0 auto;}
    .mobile-model{margin-top:90px;}
    .text{margin-top:15px;}
    .btn-close{padding:2px 5px;color:#fff;background-color:#04be02;border:0;border-radius:6px}
</style>