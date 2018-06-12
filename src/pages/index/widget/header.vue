<template>
    <div class="header">
        <c-cHeader ref="cHeader" :bBack="false" :midText="header.midText" :rightIcon="header.rightIcon" :rightPath="header.rightPath">
        </c-cHeader>
        <ul class="tips-menu" :class="{'tips-close':bMenuClose}">
            <li class="tip-item"><i class="iconfont icon-tips-xiaoxi"></i>发起群聊</li>
            <li class="tip-item"><i class="iconfont icon-tips-add-friend"></i>添加朋友</li>
            <li class="tip-item"><i class="iconfont icon-tips-saoyisao"></i>扫一扫</li>
            <li class="tip-item"><i class="iconfont icon-tips-fukuan"></i>收付款</li>
        </ul>   
    </div>
</template>
<script>
import cHeader from './cHeader.vue';

export default {
    name:'c-header',
    mounted(){
        var self = this;
        if(this.$route.path == '/weixin'){
            this.$refs.cHeader.$on('rightClick',function(){
                self.bMenuClose = !self.bMenuClose;
            })
        }
    },
    data(){
        return {
            bMenuClose:true,
            header:{}
        }
    },
    watch:{
        '$route':{
            handler:function(){
                 const path = this.$route.path,
                  map = {
                        '/':{
                            midText:'微信(12)',
                            rightIcon:'iconfont icon-tips-jia'
                        },
                        '/weixin':{
                            midText:'微信(12)',
                            rightIcon:'iconfont icon-tips-jia'
                        },
                        '/contact':{
                            midText:'通讯录',
                            rightIcon:'iconfont icon-tips-add-friend',
                            rightPath:'/contact/add-friends'
                        },
                        '/find':{
                            midText:'发现'
                        },
                        '/me':{
                            midText:'我'
                        }
                    };
                this.header = map[path] || {};
            },
            immediate:true
        }
    },
    methods:{
    
    },
    components:{
        'c-cHeader':cHeader
    }
}
</script>
<style scoped>
    .header{
        background:linear-gradient(to bottom, #303036, #3c3b40);
        color:#efefef;
        line-height:1;
        height:46px;
        text-align:center;
    }
    .tips-menu{position:absolute;width:100px;right:5px;top:53px;padding:2px 10px;background-color:#49484b;
        color:#fff;font-size:dpr(16px);line-height:2;text-align:left;transition:all .2s ease;}
    .tips-menu:before{width:0;height:0;position:absolute;top:-8px;right:15px;content:"";border-width:0 dpr(6px) dpr(8px);
        border-color:rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0);border-style:solid;}
    .tip-item:not(:last-child){border-bottom:1px solid #5b5b5d;}
    .tip-item i{margin-right:15px}
    .tips-close{opacity:0;transform:scale(.7);transform-origin:90% 0;}
</style>