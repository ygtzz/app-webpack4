<template>
    <div class="home">
        <div class="header">
            <div ref="notice" class="notice-wrap" :class="{'dn':!bShowNotice}">
                <span v-text="model.notice.title" class="notice"></span>
                <span @click="fCloseNotice" class="close r">×</span>
            </div>
            <div class="home-banner">
                <div class="user-wrap">
                    <div ref="user" class="user fix f24">
                        <span class="icon avatar dib vm">
                            <img :src="model.user.photo" alt="avatar">
                        </span>
                        <span class="name vm" v-text="model.user.nickName"></span>
                        <span class="icon r icon-tree tree"></span>
                    </div>
                </div>
                <div class="banner-top">
                    <div class="title-wrap tc">
                        <p class="f40 white">提取绑卡，理财快人一步22</p>
                    </div>
                    <div class="bind-wrap tc">
                        <button class="btn btn-bind">绑定银行卡</button>
                    </div>
                </div>
                <div class="arc"></div>
            </div>
            <div class="slide-wrap">
                <mt-swipe class="slide-list" :auto="4000">
                    <mt-swipe-item class="slide" v-for="(item,index) in model.bannerList" :key="'slide'+index">
                        <img :src="item.protoMongoFileId">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="panel fast">
            <div class="header">
                <span class="f28 g3" v-text="model.fastData.title"></span>
            </div>
            <div class="body">
                <div ref="fastWrapper" class="fast-wrap">
                    <ul class="fast-list">
                        <li class="fast-item" v-for="(item,index) in model.fastData.data" :key="'fast'+index">
                            <p class="fast-title">{{item.name}}({{item.days}})</p>
                            <p class="c-orange f40">2.6%~3.1%</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel newer">
            <div class="header">
                <span class="f28 g3">新手推荐</span>
                <span class="dn r">
                    <span class="f24 g9">查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib left">
                    <p class="f60 c-orange">5.7%</p>
                    <p class="f24 g9">预期年化收益率</p>
                </div>
                <div class="dib right">
                    <p>
                        <span class="f50">360天</span>
                    </p>
                    <p class="f24 g9">天金所发行 · 长安保险承保</p>
                </div>
            </div>
        </div>
        <div v-for="(item,index) in model.oldData.data" :key="'oldData'+index" class="panel choice">
            <div class="header">
                <span class="f28 g3" v-text="item.title"></span>
                <span class="r">
                    <span class="f24 g9">查看全部产品</span>
                    <span class="icon icon-arrow-right"></span>
                </span>
            </div>
            <div class="body">
                <div class="dib left">
                    <p class="f60 c-orange">{{item.borrowerInterest}}%</p>
                    <p class="f24 g9">预期年化收益率</p>
                </div>
                <div class="dib right">
                    <p>
                        <span class="f50">{{item.dayCounts}}天</span>
                    </p>
                    <p class="f24 g9">{{item.guarantymemo}} · {{item.guarantyway}}</p>
                </div>
            </div>
            <!-- <c-keyboard :pwd="'pwd'" :len="6" :show='true' ></c-keyboard> -->
        </div>
        <div class="text-info tc">
            <span class="icon icon-managemoney"></span>
            <span class="text">微博上的理财平台</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .home{background:#f2f2f2;width:100%;
        .header,.info,.panel{background:#fff}
    }
    .home-banner{
        .banner-top{
            height: 304rx;
            background-image:url('./common/banner-1px.png');
            background-size:100% 100%;
            background-color:#ff5a00;
            padding-top:42rx;
        }
        .arc{
            height:24rx;
            background-image:url('./home/banner-home-arc.png');
            background-size: 100% 100%;
        }
    }
    .notice-wrap{height:50rx;line-height:50rx;font-size:24rx;background-color:#fffecb;color:#ff8201;
        padding-left:24rx;padding-right:24rx;
    }
    .close{width:36rx;height:36rx;line-height:32rx;text-align:center;border:2rx solid #bbb;border-radius:50%;
        color:#bbb;margin-top:8rx;}
    .user-wrap{height:106rx;}
    .user{height:106rx;padding-left:25rx;padding-right:20rx;line-height:106rx;width:100%;
        top:0;background-image:url('./common/banner-1px.png');}
    .user-fix{position:fixed;transform:scale(1);z-index:9999;top:0;left:0;}
    .icon-tree{background-image:url('./home/tree@2x.png');width:70rx;height:80rx;
        margin-top:12rx;
    }    
    .avatar{
        height:60rx;width:60rx;margin-right:24rx;
        img{border-radius:50%;}
        img{width:100%;height:100%;}  
    }    
    .title-wrap{}
    .bind-wrap{margin-top:45rx;}
    .btn-bind{background-color:#fff072;color:#ff5000;border:0;border-radius:4rx;
        width:314rx;height:82rx;
        font-size:36rx;
    }
    .slide-wrap{height:180rx;}
    :global(.slide-list .mint-swipe-indicators){
        left:90%
    }
    :global(.slide-list .mint-swipe-indicator.is-active){
        background: #ff8200;
    }
    .slide{height:100%;
           img{width:100%;height:100%;}}
    .panel{background-color:#fff;margin-top:20rx;
        border-top:1rx solid #e5e5e5;
        border-bottom:1rx solid #e5e5e5;
        .header{height:100rx;line-height:100rx;border-bottom:1rx solid #e5e5e5;
             padding-left:26rx;padding-right:26rx;
            *{vertical-align:middle;}
        }
        .body{padding-top:47rx;padding-bottom:60rx;position:relative;}
        .left{padding-left:60rx;padding-right:40rx;
            border-right:1rx solid #e5e5e5;
        }
        .right{padding-left:44rx;}
    }
    .fast{.body{padding:26rx;}}
    .fast-wrap{width:100%;}
    .fast-list{width:1050rx;}
    .fast-item{border:1rx solid #e5e5e5;display:inline-block;padding:30rx;
        text-align:center;
        &:not(:last-child){margin-right:30rx;}
    }
    .fast-title{color:#7a7a7a;font-size:28rx}    
    .text-info{height:95rx;line-height:95rx;}
    .icon-managemoney{background-image:url('./home/managemoney@2x.png');width:54rx;height:27rx;}
</style>
<script>
import Vue from 'vue';
import {mapGetters,mapActions,mapState} from "vuex";
import BScroll from 'better-scroll';
import { Swipe, SwipeItem } from 'mint-ui';
import {fNotifyError} from 'widget/util/util';
import _ from 'lodash';
import keyboard from 'index/widget/board/vue-keyboard.js';
import 'index/widget/board/vue-keyboard.css';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component('c-keyboard',keyboard);

export default {
    name:'v-home',
    created() {
        const self = this;
        this.fixUserHeader = _.throttle(this.fixUser,50);
        this.fRequestIndexData({userId:this.userId});
        this.$nextTick(() => {
            this.fastScroll = new BScroll(this.$refs.fastWrapper,{
                click: true,
                scrollX: true
            });
            document.querySelector('section.body').onscroll = function(){
                self.fixUserHeader();
            }
        });
    },
    mounted(){
        this.nNoticeHeight = this.$refs.notice.offsetHeight;
        // this.$alert({
        //     show:true,
        //     title:'',
        //     content:'请填写收货地址',
        //     okText:'确定',
        //     onOk:function(){
        //         console.log('ok');
        //     }
        // });
        // this.$confirm({
        //     show:true,
        //     title:'确认',
        //     content:'确定放弃本次兑换?',
        //     okText:'去意已决',
        //     onOk:function(){
        //         console.log('ok');
        //     },
        //     cancelText:'再看看',
        //     onCancel:function(){
        //         console.log('cancel');
        //     }
        // });
    },
    destroyed(){
        document.querySelector('section.body').onscroll = null;
    },
    data() {
      const self = this;
      return {
        fastScroll:'',
        bShowNotice:true,
        nNoticeHeight:50
      }
    },
    watch:{
        'model.fastData'(){
            this.$nextTick(() => {
                this.fastScroll.refresh();
            });
        },
        'model.err'(val){
            fNotifyError(this,val);
        }
    },
    computed:{
       ...mapState({
           model:'home'
       }),
       ...mapGetters({
           userId:'userId'
       })
    },
    methods:{
        ...mapActions({
            fRequestIndexData:'fRequestIndexData'
        }),
        fCloseNotice(){
            this.bShowNotice = false;
        },
        fixUser(){
            const scrollTop = document.querySelector('section.body').scrollTop;
            const user = this.$refs.user;
            if(scrollTop >= this.nNoticeHeight){
                if(!user.classList.contains('user-fix')){
                    user.classList.add('user-fix');
                }
            }
            else{
                user.classList.remove('user-fix');
            }
        }
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>