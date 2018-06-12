<template>
    <div class="search_bar">
        <div class="search">
            <i class="fa fa-search mr5"></i>
            <span>搜索</span>
        </div>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name:'c-serachbar'
}
</script>
<style lang="sass" scoped>
    .search_bar{padding:8px 10px;background-color:#efeff4;}
    .search{color:#b2b2b2;font-size:dpr(14px);background-color:#fff;line-height:2;text-align:center;border-radius:4px}
</style>