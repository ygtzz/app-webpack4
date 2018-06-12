<template>
    <div class="footer">
        <router-link :class="{'active':sNavActiveName==item.name}" v-for="item in aNav" :to="{name:item.name}" :key="item.name">
            <div @click="fNavClick(item)" class="inner">
                <i class="icon" :class="[item.icon]"></i>
                <p class="mt5" v-text="item.text"></p>
            </div>
        </router-link>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name:'c-footer',
    className: 'footer',
    data(){
        return {
            aNav:[
                {
                    name:'home',
                    icon:'icon-home',
                    text:'首页'
                },
                {
                    name:'finance',
                    icon:'icon-finance',
                    text:'理财'
                },
                {
                    name:'me',
                    icon:'icon-me',
                    text:'我的'
                }
            ],
            sNavActiveName:'home'
        }
    },
    methods:{
        fNavClick(item){
            this.sNavActiveName = item.name;
        }
    }
}
</script>
<style lang="sass" scoped>
    .footer{
        width:100%;
        height:100%;
        text-align: center;
        color:#5D656B;
        background-color:#f9f9f9;
        font-size:24px;
        a:link,a:visited,a:hover,a:active{color:#929292}
        a{
            display:inline-block;
            width:32%;
            text-decoration:none;
            cursor:pointer;
            padding-top:16px;
            padding-bottom:16px;
        }
        a.active{
            color:#ff8200;
            .icon-home{
                background-image:url('./footer/home-active@2x.png');
            }
            .icon-finance{
                background-image:url('./footer/finance-active@2x.png');
            }
            .icon-me{
                background-image:url('./footer/me-active.png');
            }
        }
        p{transform:scale(0.9)}
        i{
            font-size:28px;
        }
        .dot{width:11px;height:11px;margin-left:-8px;margin-top:1px}
        .count{background-color:#f43531;color:#fff;font-size:14px;line-height:(18/14);border-radius:9px;padding:0px 4px;position:absolute;margin-left:-8px;
            font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica;
        }
        .icon-home{
            background-image:url('./footer/home@2x.png');height:43px;width:43px;
            &.active{background-image:url('./footer/home-active@2x.png');}
        }
        .icon-finance{
            background-image:url('./footer/finance@2x.png');height:43px;width:43px;
            &.active{background-image:url('./footer/finance-active@2x.png')}
        }
        .icon-me{
            background-image:url('./footer/me@2x.png');height:43px;width:43px;
            &.active{background-image:url('./footer/me-active.png')}
        }
    }
</style>