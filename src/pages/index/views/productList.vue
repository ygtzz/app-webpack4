<template>
    <div class="productList">
        <div class="productList-banner tc">
            <div class="banner-inner">
                <p class="f60">7%稳赚一年</p>
                <p class="f28 title2">69%用户的安心之选，投5万赚3500元</p>
                <div class="btn-wrap">
                    <button class="btn btn-want">我要稳赚</button>
                </div>
            </div>
            <!--<div class="bg"></div>-->
        </div>
        <div v-for="item in model.financeLoanList" class="panel">
            <div class="header">
                <span class="icon-wrap">
                    <span class="icon icon-short"></span>   
                    <span class="f24 text" v-text="item.title.slice(0,2)"></span>
                </span>
                <span class="f28 g6" v-text="item.termDescription"></span>
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
                        <span class="icon icon-limit">限量爆款</span>
                    </p>
                    <p class="f24 g9">{{item.guarantymemo}} · {{item.guarantyway}}</p>
                </div>
                <div class="icon icon-start-sell"></div> 
            </div>
        </div>

        <div class="text-info">
            <span class="line vm"></span>
            <span class="text">优质资产，保险保障</span>
            <span class="line vm"></span>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .productList{
        background-color:#f2f2f2;
    }
    .productList-banner{position:relative;
            color:#fff;
            background-image:url('./productList/banner-bg.png');
            .banner-inner{height:100%;width:100%;padding-top:68px;padding-bottom:50px;background-color:rgba(0,0,0,.65);}
            .title2{margin-top:18px;}   
            .btn-wrap{margin-top:39px;}
    }
    .btn-want{padding:12px 32px;border:1px solid #fff;background-color:transparent;}
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
    .text-info{height:80px;line-height:80px;color:#cbcbcb;text-align:center;
        letter-spacing:5px;
    }
    .icon-wrap{
        border:2px solid #ffa200;border-radius:4px;
        height:39px;line-height:1;color:#ffa200;
        display:inline-block;
        *{vertical-align:middle;}
        .icon{background-color:#ffa200;}
        .text{padding-left:0px;padding-right:7px;line-height:36px;}
    }
    .icon-short{background-image:url('./productList/rmb@2x.png');height:100%;width:35px;
        background-size:25px 23px;}
    .icon-medium{background-image:url('./productList/dollar@2x.png');background-size:25px 23px;}
    .icon-long{background-image:url('./productList/diamond@2x.png');background-size:25px 23px;}
    
    .icon-start-sell{background-image:url('./productList/begin-sell@2x.png');
        width:100px;height:105px;position:absolute;bottom:0;right:0;}
    .icon-sell-out{background-image:url('./productList/sell-out@2x.png');
        width:100px;height:105px;position:absolute;bottom:0;right:0;}
</style>
<script>
import {mapState,mapGetters,mapActions} from "vuex";
import {fNotifyError} from 'widget/util/util';

export default {
    name:'v-productList',
    created() {
        this.fGetFinanceListData({userId:this.userId});
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
           model:'productList'
       }),
       ...mapGetters({
           userId:'userId'
       })
    },
    methods:{
        ...mapActions(['fGetFinanceListData']),
        fMenuItemClick(index){
            this.sActiveId = index;
            const map = {0:'goods',1:'comment',2:'merchant'};
            this.$router.push({name:map[index]});
        }
    },
    components:{
        
    },
    filters:{
        fSplitMoney(val){
            return val + '$';
        }
    }
}
</script>