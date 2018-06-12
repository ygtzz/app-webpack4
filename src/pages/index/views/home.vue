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
                        <p class="f40 white">提取绑卡，理财快人一步</p>
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
                        <li class="fast-item" v-for="item in model.fastData.data">
                            <p class="fast-title">{{item.name}}({{item.days}})</p>
                            <p class="c-orange f40">?2.6%~3.1%</p>
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
        <div v-for="item in model.oldData.data" class="panel choice">
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
        </div>
        <div class="text-info tc">
            <span class="icon icon-managemoney"></span>
            <span class="text">微博上的理财平台</span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .home{background:#f2f2f2;width:100%;
        .header,.info,.panel{background:#fff}
        .header{}
    }
    .home-banner{
        .banner-top{
            height:304px;
            background-image:url('./common/banner-1px.png');
            background-size:100% 100%;
            background-color:#ff5a00;
            padding-top:42px;
        }
        .arc{
            height:24px;
            background-image:url('./home/banner-home-arc.png');
            background-size: 100% 100%;
        }
    }
    .notice-wrap{height:50px;line-height:50px;font-size:24px;background-color:#fffecb;color:#ff8201;
        padding-left:24px;padding-right:24px;
    }
    .close{width:36px;height:36px;line-height:32px;text-align:center;border:2px solid #bbb;border-radius:50%;
        color:#bbb;margin-top:8px;}
    .user-wrap{height:106px;}
    .user{height:106px;padding-left:25px;padding-right:20px;line-height:106px;width:100%;
        top:0;background-image:url('./common/banner-1px.png');}
    .user-fix{position:fixed;transform:scale(1);z-index:9999;top:0;left:0;}
    .icon-tree{background-image:url('./home/tree@2x.png');width:70px;height:80px;
        margin-top:12px;
    }    
    .avatar{
        height:60px;width:60px;margin-right:24px;
        img{border-radius:50%;}
        img{width:100%;height:100%;}  
    }    
    .title-wrap{}
    .bind-wrap{margin-top:45px;}
    .btn-bind{background-color:#fff072;color:#ff5000;border:0;border-radius:4px;
        width:314px;height:82px;
        font-size:36px;
    }
    .slide-wrap{height:180px;}
    :global(.slide-list .mint-swipe-indicators){
        left:90%
    }
    :global(.slide-list .mint-swipe-indicator.is-active){
        background: #ff8200;
    }
    .slide{height:100%;
           img{width:100%;height:100%;}}
    .panel{background-color:#fff;margin-top:20px;
        border-top:1px solid #e5e5e5;
        border-bottom:1px solid #e5e5e5;
        .header{height:100px;line-height:100px;border-bottom:1px solid #e5e5e5;
             padding-left:26px;padding-right:26px;
            *{vertical-align:middle;}
        }
        .body{padding-top:47px;padding-bottom:60px;position:relative;}
        .left{padding-left:60px;padding-right:40px;
            border-right:1px solid #e5e5e5;
        }
        .right{padding-left:44px;}
    }
    .fast{.body{padding:26px;}}
    .fast-wrap{width:100%;}
    .fast-list{width:1050px;}
    .fast-item{border:1px solid #e5e5e5;display:inline-block;padding:30px;
        text-align:center;
        &:not(:last-child){margin-right:30px;}
    }
    .fast-title{color:#7a7a7a;font-size:28px}    
    .text-info{height:95px;line-height:95px;}
    .icon-managemoney{background-image:url('./home/managemoney@2x.png');width:54px;height:27px;}
</style>
<script>
import Vue from 'vue';
import {mapGetters,mapActions,mapState} from "vuex";
import BScroll from 'better-scroll';
import { Swipe, SwipeItem } from 'mint-ui';
import {fNotifyError} from 'widget/util/util';
import _ from 'lodash';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

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
            this.fNotifyError(this,val);
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