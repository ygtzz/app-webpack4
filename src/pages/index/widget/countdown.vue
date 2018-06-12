<template>
    <div class="countdown">
        {{countTime}}
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name:'c-countdown',
    created(){
        this.fStartCountdown();
    },
    destroyed(){
        clearInterval(this.timer);
    },
    props:{
        endTime:{
            type:Number,
            required:true
        },
        startTime:{
            type:Number,
            required:true
        }
    },
    data(){
        return {
            timer:'',
            countTime:''
        }
    },
    methods:{
        fStartCountdown(){
            const self = this,endTime = self.endTime;
            let startTime = self.startTime;
            self.timer = setInterval(function(){
                self.countTime = self.fCountdown(endTime,startTime);
                startTime += 1000;
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
        }
    }
}
</script>
<style lang="sass" scoped>
    
</style>