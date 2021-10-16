<template>
    <div class="refc">
        <input class="input" v-model="selectedItemName" style="width:450px;line-height:33px" readonly />
        <button @click="fShowTable" class="btn">弹窗</button>
        <!-- dialog -->
        <modal name="ref-modal" :title="title" width="800px" height="600px">
            <div class="ref-modalc">
                <div class="title" v-text="title"></div>
                <form onsubmit="event.preventDefault()">
                    <div class="dib">
                        <label class="form-item"><span>名称</span><input v-model="searchName" type="text" class="input ml10" /></label>
                    </div>
                    <div class="dib ml10">
                        <button @click="fSearch" type="submit" class="btn btn-search btn-primary ml10">Search</button>
                    </div>
                </form>
                <div class="datac">
                    <div class="table-wraper">
                        <table class="pure-table" style="width:100%">
                            <thead>
                                <tr>
                                    <th style="width:40px;"></th>
                                    <th v-for="(item,i) in cols" :key="'label'+i">{{item.label}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="onItemClick(d)" v-for="(d,i) in data" :class="{'lookup-selected':activeItemId == d.id}" :key="'d'+i">
                                    <td>
                                        <input type="radio" :value="d['id']" v-model="activeItemId" name="lookup-item" />
                                    </td>
                                    <td v-for="(item,i) in cols" :key="'name'+i">{{d[item.name]}}</td>                        
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <pager class="pager" :total="100" :pgeSize="10" 
                            :num-display-entries="4" :num-edge-entries="1" 
                            :cur-page="1"></pager>
                </div>
                <div class="btnc">
                    <button type="button" @click="ok" class="btn btn-foot btn-primary">OK</button>
                    <button type="button" @click="cancel" class="btn btn-foot btn-default">Cancel</button>
                </div>
            </div>
        </modal>
        <!-- dialog -->
    </div>
</template>
<script>
import Vue from "vue";
import 'vue-pageman/dist/vue-pageman.css';
import { pager } from 'vue-pageman';
import vmodal from 'vue-js-modal'
    
Vue.use(vmodal)
let options = {};

export default {
    name:'c-lookup',
    props:{
        value:{
            type:Object
        },
        data:{
            type:Array
        },
        fGetData:{
            type:Function
        },
        loading:{
            type:Boolean,
            default:false
        },
        total:{
            type:Number
        },
        pageSize:{
            type:Number
        },
        title:{
            type:String
        }
    },
    data() {
        return {
            searchName: '',
            selectedItem: {name:''},
            bShowTableDialog: false,
            activeItemId: '',
            table:{
                cols:[
                    {name:'code',label:'编码'},
                    {name:'name',label:'名称'}
                ],
                total:1,
                currentPage: 1,                
                pageSize:10
            }
        }
    },
    computed: {
        selectedItemName() {
            return (this.selectedItem || {}).name;
        },
        cols() {
            return this.table.cols;
        },
        fields() {
            return this.cols.map(function(item) {
                return item.name;
            }).join();
        },
        totalCount(){
            return this.total || this.table.total;
        },
        pageCount(){
            return this.pageSize || this.table.pageSize;
        }
    },
    watch: {
        bShowTableDialog(val) {
            if (val) {
                this.fCurrentChange(this.table.currentPage);
                this.activeItemId = this.selectedItem.id;                
            }
            else{
                this.searchName = '';
            }
        },
        value:{
            handler:function(val){
                this.selectedItem = val;
            },
            immediate:true
        }
    },
    methods: {
        ok(){
            this.fSelectItem();
            this.cancel();
        },
        cancel(){
            this.$modal.hide('ref-modal');
        },
        getItem() {
            return this.selectedItem;
        },
        fSelectItem() {
            const itemId = this.activeItemId;
            const aItem = this.data.filter(function(item) {
                return item.id == itemId;
            });
            if (aItem.length) {
                this.selectedItem = aItem[0];
            }
            this.bShowTableDialog = false;
            //v-model up sync data
            this.$emit('input',this.selectedItem);
        },
        fUpdateSelectedItem(val){

        },
        fSearch() {
            this.fCurrentChange(1);
        },
        onItemClick(item) {
            this.activeItemId = item.id;
        },
        fShowTable() {
            this.$modal.show('ref-modal');
        },
        fCurrentChange(index) {
            this.fGetData(index,JSON.stringify([
                { field: 'name', op: 'like', q: this.searchName },
                { field: 'status', op: 'eq', q: 'active'}
            ]));
            this.table.currentPage = index;            
        },
        fSizeChange() {}
    },
    components: {
        pager
    }
}
</script>
<style lang="scss" scoped>
    .ref-modalc{
        padding: 20px;
        form{margin-top:20px;}
        .title{font-size: 16px;font-weight: bold;}
        .form-item *{
            vertical-align: middle;
        }
        .table-wraper{height:420px;}
        .pager{margin-left:-5px;}
        .btn-search,.btn-foot{
            height: 29px;
            width: 68px;
            vertical-align: middle;
        }
        .datac{
            margin-top: 20px;
            text-align: center;
        }
        .btnc{
            text-align: center;
            margin-top: 10px;
        }
    }
    .refc{
        font-size: 12px;
        .ml10{
            margin-left: 10px;
        }
        .input{
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 29px;
            line-height: 29px;
            outline: none;
            padding: 0 5px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            // width: 100%;
        }
        .btn{
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            // padding: 12px 20px;
            // font-size: 14px;
            border-radius: 4px;
        }
        .btn-primary{
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
        }
        td,th {
            padding: 0;
        }
        .pure-table {
            border-collapse: collapse;
            border-spacing: 0;
            empty-cells: show;
            border: 1px solid #cbcbcb;
            text-align: left;
        }
        .pure-table caption {
            color: #000;
            font: italic 85%/1 arial,sans-serif;
            padding: 1em 0;
            text-align: center;
        }
        .pure-table td,.pure-table th {
            border-left: 1px solid #cbcbcb;
            border-width: 0 0 0 1px;
            font-size: inherit;
            margin: 0;
            overflow: visible;
            padding: .5em 1em;
        }
        .pure-table thead {
            background-color: #e0e0e0;
            color: #000;
            text-align: left;
            vertical-align: bottom;
        }
        .pure-table td {
            background-color: transparent;
        }
        .pure-table-odd td {
            background-color: #f2f2f2;
        }
        .lookup-selected{
            background-color:#DFF0D8 !important;
        }
    }
</style>