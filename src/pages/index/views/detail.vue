<template>
    <div class="detail">
        <div class="header">
            <div class="banner-top">
                <div class="info">
                    <span class="icon icon-publish"></span>
                    <span class="info-text">天金所发行</span>
                    <span class="icon icon-underwrite underwrite"></span>
                    <span class="info-text">长安保险承保</span>
                    <span class="icon icon-underwriting"></span>
                    <button class="btn btn-detail r">产品详情</button>
                </div>
            </div>
            <div class="arc"></div>
            <div class="finance">
                <div class="finance-header g9">
                    <div class="left dib">
                        <p class="f60 c-orange tc">
                            <span class="f60">5.9</span><span class="f36">%</span>
                        </p>
                        <p class="f24">预期年化收益率</p>
                    </div>
                    <div class="right dib">
                        <p>
                            <span class="f28">理财期限</span>
                            <span class="">·</span>
                            <span class="f36 c-orange">120天</span>
                        </p>
                        <p>
                            <span class="f28">理财期限</span>
                            <span class="">·</span>
                            <span class="f36 c-orange">100.00元</span>
                        </p>
                    </div>
                </div>
                <div class="progress-wrap mt30">
                    <span class="progress vm"></span>
                    <span class="f24 s9 c-orange vm ml5">67%</span>
                </div>
                <div class="date f24 mt30">
                    <ul class="datalist">
                        <li class="date-item">
                            <p>起息时间</p>
                            <p class="rel line-wrap">
                                <span class="circle"></span>
                                <span class="date-line"></span>
                            </p>
                            <p class="s9">2016/06/23</p>
                        </li>
                        <li class="date-item">
                            <p>到期时间</p>
                            <p class="rel line-wrap">
                                <span class="circle"></span>
                                <span class="date-line"></span>                                
                            </p>
                            <p class="s9">2016/06/23</p>
                        </li>
                        <li class="date-item">
                            <p>自动还款</p>
                            <p class="line-wrap">
                                <span class="circle"></span>
                            </p>
                            <p class="s9">3个工作日内</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel mt20">
            <ul class="list">
                <li class="item">
                    <div class="item-inner">
                        <span class="text-l">购买金额</span>
                        <span class="r gc">剩余金额24,345.00元</span>
                    </div>
                </li>
                <li class="item">
                    <div class="item-inner">
                        <span class="text-l">使用红包</span>
                        <span class="r gc">
                            <span>请选择红包</span>
                            <span class="icon icon-arrow-right"></span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="btn-wrap">
            <button class="btn btn-buy">立即购买</button>
        </div>
        <div class="accpet">
            <span class="cbk" :class="{'active':bAgree}">
                <input v-model="bAgree" type="checkbox" class="cbk-real"/>     
            </span>
            <span class="text g9">同意并接受</span>
            <span>
                <a href="">《理财平台服务协议》</a>
            </span>
        </div>
        <div class="time">
            <div>{{time}}</div>
        </div>
        <div>
            <c-countdown class="countdown" :endTime="endTime" :startTime="startTime"></c-countdown>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .countdown{padding:15px 30px;border:1px solid #ccc;color:orange;font-size:50px;}
    .detail{background-color:#f2f2f2;height:100%;width:100%;}
    .header{height:560px;position:relative;
        .banner-top{
            height:388px;
            background-image:url('./detail/banner-detail.png');
            background-size:100% 100%;
        }
        .arc{height:62px;background-image:url('./detail/banner-detail-arc.png')}
    }
    .finance{height:430px;width:698px;position:absolute;bottom:0;
        left:50%;transform:translateX(-50%);padding:58px;
        border:1px solid #e5e5e5;border-radius:4px;background-color:#fff;    
    }
    .date{color:#707070;line-height:.9;}
    .date-item{display:inline-block;width:32%;text-align:center;
        letter-spacing:3px;
    }
    .line-wrap{margin-top:20px;margin-bottom:20px;}
    .date-line{display:inline-block;position:absolute;top:50%;
        margin-left:8px;width:90%;height:2px;background-color:#ccc;}
    .circle{display:inline-block;width:13px;height:13px;border:2px solid #d1d1d1;border-radius:50%;}
    .finance-header{
        line-height:1.2;
        .left{padding-right:32px;}
        .right{padding-left:38px;border-left:1px solid #e5e5e5;line-height:1.4}
    }
    .banner-top{background-color:orange;}
    .progress{display:inline-block;width:500px;height:7px;
        background-color:#ececec;border-radius:8px;}
    .info{padding:44px 26px 40px 26px;
        *{vertical-align:middle;}
    } 
    .info-text{color:#ffa9a5;font-size:28px}
    .icon-publish{background-image:url('./detail/publish@2x.png');width:25px;height:28px;}
    .icon-underwrite{background-image:url('./detail/underwrite@2x.png');width:28px;height:28px;}
    .underwrite{margin-left:48px;}
    .btn-detail{background:transparent;padding:8px 20px;border:1px solid #fff;
        border-radius:4px;color:#fff;font-size:24px;
    }
    .panel{
        background-color:#fff;
        .list{border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;}
        .item{padding:35px 27px;
            &:not(:last-child){border-bottom:1px solid #e5e5e5;}
            .text-l{color:#a7a7a7;} 
            *{vertical-align:middle;}       
        }
    }
    .btn-wrap{margin-top:45px;text-align:center;}
    .btn-buy{width:698px;height:100px;text-align:center;border-radius:0;
        background-color:#ff8200;color:#fff;border:0;font-size:36px;
    }
    .accpet{margin-top:30px;font-size:24px;padding-left:26px;
        *{vertical-align:middle;}
        .cbk{height:37px;width:37px;border:1px solid #ccc;display:inline-block;
            &.active{
                background-image:url('./detail/cbk-j@2x.png');
                background-repeat:no-repeat;
                background-size:27px 27px;
                background-position:center;
            }
        }
        .cbk-real{width:100%;height:100%;opacity:0;}
        .text{margin-left:23px;}
    }
</style>
<script>
import Vue from 'vue';
import {mapGetters,mapActions} from "vuex";
import countdown from 'index/widget/countdown.vue';

Vue.component('c-countdown',countdown);

export default {
    name:'v-detail',
    created() {
        this.fStartCountdown();
        console.log(this.fSplitMoney(666668.00));
    },
    data() {
      return {
         bAgree:false,
         time:'',
         startTime:new Date().getTime(),
         endTime:new Date('2017/04/03 19:00:00').getTime()
      }
    },
    computed:{
       
    },
    methods:{
        fMenuItemClick(index){
            
        },
        fStartCountdown(){
            this.countDown = setInterval(() => {
                this.time = this.fCountdown(new Date('2017/04/01 19:00:00').getTime(),new Date().getTime());
            },1000);
        },
        fCountdown(endTime,currentTime){
            let sTime = '';
            let nDiff = endTime - currentTime;
            const nDays = Math.floor(nDiff/(24*60*60*1000));
            if(nDays >= 0){
                nDiff -= nDays * (24*60*60*1000);
                sTime += nDays + '天';
            }
            const nHour = Math.floor(nDiff/(60*60*1000));
            if(nHour >= 0){
                nDiff -= nHour * (60*60*1000);
                sTime += (nHour < 10 ? ('0' + nHour) : nHour) + '时';
            }
            const nMin = Math.floor(nDiff/(60*1000));
            if(nMin >= 0){
                nDiff -= nMin * (60*1000);
                sTime += (nMin < 10 ? ('0' + nMin) : nMin) + '分';
            }
            const nSecond = Math.floor(nDiff/1000);
            if(nSecond >= 0){
                nDiff -= nSecond * 1000;
                sTime += (nSecond < 10 ? ('0' + nSecond) : nSecond) + '秒';
            }
            return sTime;
        },
        fSplitMoney(money){
            money = String(money);
            const aMoney = money.split('.');
            const aSplit = aMoney[0].split('').reverse();
            for(let i=0;i<aSplit.length;i++){
                if(i % 3 == 2){
                    aSplit[i] = ',' + aSplit[i];
                }
            }
            let result = aSplit.reverse().join('');
            if(aMoney.length > 1){
                result += '.' + aMoney[1];
            }
            if(result[0] == ','){
                result = result.slice(1);
            }
            return result;
        }
    },
    components:{
        
    },
    filters:{
        
    }
}
</script>