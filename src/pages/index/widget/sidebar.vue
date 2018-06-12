<template>
        <aside @click="fToggleSideBar()" v-show="bShow" class="sidebar">
            <nav class="nav">
                <transition name="leftNav">
                    <ul v-show="bShow" class="list">
                        <router-link :to="{name:'home'}"><li class="item"><span>首页</span><i class="fa fa-angle-right"></i></li></router-link>
                        <router-link :to="{name:'movie'}"><li class="item"><span>影片</span><i class="fa fa-angle-right"></i></li></router-link>
                        <router-link :to="{name:'cinema'}"><li class="item"><span>影院</span><i class="fa fa-angle-right"></i></li></router-link>
                        <router-link :to="{name:'my'}"><li class="item"><span>我的</span><i class="fa fa-angle-right"></i></li></router-link>
                        <router-link :to="{name:'query'}"><li class="item"><span>卖座网查询</span><i class="fa fa-angle-right"></i></li></router-link>
                    </ul>
                </transition>
            </nav>
        </aside>
</template>

<script>
import {mapActions} from 'vuex';

export default{
    name:'sidebar',
    props:{
        bShow:{
            type:Boolean,
            required:true
        }
    },
    methods:{
        ...mapActions({
            fToggleSideBar:'fToggleSideBar'
        })
    }
}
</script>

<style lang="sass" scoped>
     .leftNav-enter-active,.leftNav-leave-active{
         transition:transform ease .4s;
     }
     .leftNav-enter,.leftNav-leave-to{
         transform:translateX(-100%);
     }
    .sidebar{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);
        a{text-decoration:none;}
        a:link,a:visited,a:hover,a:active{color:#9a9a9a}
    }
    .nav,.list{position:absolute;top:0;right:0;left:0;bottom:0;}
    .list{top:50px;right:110px;padding:0;margin:0;list-style:none;background:#282828;color:#9a9a9a;}
    .item{padding:15px;display:flex;justify-content:space-between;border:1px dotted #333;}
</style>