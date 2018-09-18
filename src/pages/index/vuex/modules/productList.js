import {types} from '../mutation-types';
import _ from 'lodash';

const state = {
    loading:false,
    "bannerList":[
         {
             "id":750000,
             "url":"ddfd/dfdfd/dfd",
             "protoMongoFileId":"55555"
         }
     ],
     "financeLoanList":[
       {
           "amount":750000,
           "displayTime":1480154974000,
           "borrowerInterest":"5.4",
           "platAddInterest":"0.0",
           "status":500,
           "isRookiePrj":0,
           "repayType":15,
           "onlineTime":1480154976000,
           "guarantyway":"保险保障",
           "dayCounts":3,
           "title":"短期项目",
           "realRepayType":"一次还本付息",
           "guarantymemo":"交易所发",
           "minInvestAmount":1000,
           "loanId":101,
           "periodType":1,
           "termDescription":"短期描述",
           "tagPicPath":"/ddd/ddd.jpg"
       }
   ],
   "userId":"DD9B7D8ECBC8C6EFE3067D7F6E4C119E",
   "accountType":3,
   "ifDot":"0"   
}

const mutations = {
    [types['getFinanceListData.start']](state, payload) {
        state.loading = true;
    },
    [types['getFinanceListData.ok']](state, payload) {
        _.assign(state,{
            loading:false,
            userId:payload.userId,
            accountType:payload.accountType,
            ifDot:payload.ifDot,
            financeLoanList:payload.financeLoanList,
            bannerList:payload.bannerList
        })
    },
    [types['getFinanceListData.error']](state, payload) {
        _.assign(state,{
            loading:false,
            err:payload
        })
    }
}

export default {
    state,
    mutations
}
