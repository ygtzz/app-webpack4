<template>
    <div class="me">
        <div class="header">
            <div class="me-banner">
                <div class="banner-top">
                    <div class="user fix f24">
                        <span class="icon avatar dib vm">
                            <img :src="model.user.portraitPath" alt="avatar">
                        </span>
                        <span class="name vm" v-text="model.user.userName"></span>
                        <span class="icon r icon-envelop envelop"></span>
                    </div>
                    <div class="property tc">
                        <div class="p-title">
                            <span class="f24 orange vm">总资产(元)</span>
                            <span class="icon icon-eye vm eye"></span>
                        </div>
                        <div class="p-count white" v-text="model.user.totalAmount"></div>
                    </div>
                    <div class="money-wrap tc">
                        <div class="balance-wrap dib pt40">
                            <p class="orange f24">账户余额(元)</p>
                            <p class="balance white f36" v-text="model.user.cash"></p>
                        </div>
                        <div class="income-wrap dib pt40">
                            <p class="orange f24">累计收益(元)</p>
                            <p class="income white f36" v-text="model.user.userTotalInterest"></p>
                        </div>
                    </div>
                </div>
                <div class="arc"></div>
            </div>
            <div class="operation tc">
                <div class="charge dib">充值</div><div class="drawmoney dib">提现</div>
            </div>
        </div>
        <div class="info mt20">
            <ul class="info-list fix">
                <li class="info-item">
                    <p class="icon icon-pig"></p>
                    <p class="title f36">我的理财</p>
                </li>
                <li class="info-item">
                    <p class="icon icon-trade"></p>
                    <p class="title f36">交易记录</p>
                </li>
                <li class="info-item rel">
                    <p class="icon icon-exprience"></p>
                    <span class="abs dot-red exprience-dot"></span>
                    <p class="title f36">我的体验金</p>
                    <p class="gray">1000元</p>
                </li>
                <li class="info-item rel">
                    <p class="icon icon-red-bag"></p>
                    <span class="abs dot-red red-bag-dot"></span>                    
                    <p class="title f36">我的红包</p>
                    <p class="gray">3张</p>
                </li>
            </ul>
        </div>
        <div class="panel mt20">
            <ul class="list">
                <li class="item">
                    <div class="item-inner">
                        <span class="icon icon-task"></span>
                        <span class="text f36">理财任务</span>
                        <span class="other">
                            <span>3000元体验金</span>
                            <span class="icon icon-arrow-right"></span>
                        </span>
                    </div>
                </li>
                <li class="item">
                    <div class="item-inner">
                        <span class="icon icon-invite"></span>
                        <span class="text f36">邀请好友</span>
                        <span class="other">
                            <span>额外赚0.5%</span>
                            <span class="icon icon-arrow-right"></span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="panel mt20">
            <ul class="list">
                <li class="item">
                   <div class="item-inner">
                        <span class="icon icon-help"></span>
                        <span class="text f36">帮助中心</span>
                        <span class="other">
                            <span>有疑问点这里</span>
                            <span class="icon icon-arrow-right"></span>
                        </span>
                   </div>
                </li>
                <li class="item">
                    <div class="item-inner">
                        <span class="icon icon-setting"></span>
                        <span class="text f36">设置</span>
                        <span class="other">
                            <span>个人信息在这里</span>
                            <span class="icon icon-arrow-right"></span>
                        </span>
                    </div>
                </li>
                <li class="item">
                    <div class="item-inner">
                        <span class="icon icon-online-service"></span>
                        <span class="text f36">在线客服</span>
                        <span class="other">
                            <span>随时为您服务</span>
                            <span class="icon icon-arrow-right"></span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="text-info tc">
            <span class="line vm"></span>
            <span class="weibo">微博上的理财产品</span>
            <span class="line vm"></span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .me{background:#f2f2f2;
        .header,.info,.panel{background:#fff}
        .header{height:560px;}
    }
    .me-banner{
        height:462px;
        .banner-top{
            background-image:url('./common/banner-1px.png');
            background-size:100% 100%;
            background-color:#ff5a00;
            padding-top:36px;
        }
        .arc{
            height:26px;
            background-image:url('./me/banner-me-arc.png');
            background-size: 100% 100%;
        }
    }
    .dot-red{display:inline-block;width:18px;height:18px;background-color:#ff3636;border-radius:50%;}
    .exprience-dot{margin-left:6px;margin-top:-6px;}
    .red-bag-dot{margin-left:7px;margin-top:-10px;}
    .user{padding-left:25px;padding-right:20px;}
    .envelop{margin-top:15px;}
    .property{height:200px;}
    .money-wrap{border-top:1px solid #ff8e42;}
    .charge{width:50%;color:#ff8200;}
    .eye{margin-left:18px;}
    .drawmoney{width:50%;color:#ff8200;}
    .orange{color:#ffe2bd;}
    .p-count{font-size:60px;color:#fff}
    .balance-wrap{width:49%;}
    .income-wrap{width:49%;}
    .balance,.income{font-size:36px}
    .operation{height:100px;line-height:100px;border-bottom:1px solid #e5e5e5;}
    .info-item{float:left;width:49.9%;text-align:center;padding:30px;
        border-bottom:1px solid #e5e5e5;
        &:nth-child(2n+1){border-right:1px solid #e5e5e5;}
    }
    .panel{border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;}
    .item{padding-left:50px;padding-right:50px;}
    .item-inner{padding-top:40px;padding-bottom:30px;
        *{vertical-align:middle}
        .text{padding-left:33px;}
        .other{color:#999;font-size:28px;float:right;}
    }
    .item:not(:last-child) .item-inner{border-bottom:1px solid #e5e5e5;}
    .text-info{height:112px;line-height:112px;letter-spacing:5px;color:#cbcbcb;}
    .avatar{
        height:60px;width:60px;margin-right:24px;
        img{border-radius:50%;}
    }
    img{width:100%;height:100%;}
    .icon-eye{background-image:url('./me/eye@2x.png');width:44px;height:28px;}
    .icon-envelop{background-image:url('./me/envelop.png');width:38px;height:30px;}
    .icon-pig{background-image:url('./me/pig@2x.png');width:50px;height:50px;}
    .icon-trade{background-image:url('./me/trade@2x.png');width:50px;height:50px;}
    .icon-exprience{background-image:url('./me/exprience@2x.png');width:50px;height:50px;}
    .icon-red-bag{background-image:url('./me/red-bag@2x.png');width:50px;height:50px;}
    .icon-task{background-image:url('./me/task.png');width:34px;height:34px;}
    .icon-invite{background-image:url('./me/invite@2x.png');width:34px;height:34px;}
    .icon-help{background-image:url('./me/help@2x.png');width:34px;height:34px;}
    .icon-setting{background-image:url('./me/help@2x.png');width:34px;height:34px;}
    .icon-online-service{background-image:url('./me/online-service@2x.png');width:34px;height:34px;}
</style>
<script>
import {mapState,mapGetters,mapActions} from "vuex";
import {fNotifyError} from 'widget/util/util';

export default {
    name:'v-me',
    created() {
        const userId = this.userId;
        this.fGetUserInfo({userId:userId});
    },
    data() {
      return {
        
      }
    },
    watch:{
        'model.err'(val){
            this.fNotifyError(this,val);
        }
    },
    computed:{
       ...mapState({
           model:'me'
       }),
       ...mapGetters({
           userId:'userId'
       }),
       data(){
           return this.model.data;
       }
    },
    methods:{
        ...mapActions(['fGetUserInfo'])
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>