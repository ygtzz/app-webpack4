<template>
    <div class="imgHolder" :style="{'background-image':'url('+bgUrl+')'}">
        <img :src="src" :alt="alt" :class="[imgClass]"></img>
    </div>
</template>
<script>
export default {
    name:'c-imgHolder',
    props:{
        src:{
            type:String,
            required:true
        },
        alt:{
            type:String,
            default:'img'
        },
        bgUrl:{
            type:String,
            defalut:'http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png'
        }
    }
}
</script>
<style lang="sass" scoped>
    .imgHolder{
        background-size:100%;
        img{width:100%}
    }
</style>