import {types} from '../mutation-types'

const state = {
    loading:false,
    err:'',
    "newData": {
            "title": "新手推荐",
            "data": [ ]
    },
    "bannerList": [
        {
            "title": "冷风banner",
            "protoMongoFileId": "",
            "url": "www.yinker.com"
        }
    ],
    "fastData": {
        "title": "快速投资",
        "data": [
            {
                "name": "短期",
                "type": "1",
                "days": "1-30天"
            },
            {
                "name": "中期",
                "type": "2",
                "days": "1-60天"
            },
            {
                "name": "长期",
                "type": "3",
                "days": "1-120天"
            }
        ]
    },
    "alertWindow": {
        "id": 61,
        "title": "站队活动",
        "protoMongoFileId": "http://wb.symdata.cn/pics/c0e84de02b0141e6a7291de918c2f667.png",
        "flowImg": "http://wb.symdata.cn/pics/7d4215ca071449058e877a3208155b4b.png",
        "url": "quiz.html"
    },
    "act": {
        "btnShow": "1",
        "effectTime": 1,
        "received": 0,
        "ifDot": "0"
    },
    "notice": {
        "id": "31",
        "title": "2.0版本要上线啦啦啦！！！"
    },
    "oldData": {
        "title": "精选项目",
        "data": [
            {
                "guarantyway": "保险2",
                "notifyTime": 1479488282000,
                "borrowerInterest": 4,
                "status": 300,
                "biddingAmount": 76830,
                "platAddInterest": 0,
                "endTime": 1488384000000,
                "tagPicPath": "http://wb.symdata.cn/pics/65cefa354b0a4d18a4702a6c25729442.jpg",
                "guarantymemo": "保险1",
                "dayCounts": 30,
                "currentTime": 1482290724198,
                "amount": 8000000,
                "displayTime": 1479488282000,
                "title": "动态合同项目N900121",
                "onlineTime": 1479488284000,
                "tagName": "test2",
                "releaseTime": 1485792000000,
                "fullTime": "",
                "loanId": 29
            },
            {
                "guarantyway": "还本付息",
                "notifyTime": 1481857411000,
                "borrowerInterest": 1,
                "status": 300,
                "biddingAmount": 5000,
                "platAddInterest": 0,
                "endTime": 1483286400000,
                "tagPicPath": "http://wb.symdata.cn/pics/65cefa354b0a4d18a4702a6c25729442.jpg",
                "guarantymemo": "银行承保",
                "dayCounts": 6,
                "currentTime": 1482290724198,
                "amount": 111111111111,
                "displayTime": 1481857411000,
                "title": "qqqqB1111",
                "onlineTime": 1481857420000,
                "tagName": "test2",
                "releaseTime": 1482768000000,
                "fullTime": "",
                "loanId": 26
            },
            {
                "guarantyway": "金诚宝",
                "notifyTime": 1480055214000,
                "borrowerInterest": 5.5,
                "status": 400,
                "biddingAmount": 1200,
                "platAddInterest": 0,
                "endTime": 1480435200000,
                "tagPicPath": "",
                "guarantymemo": "天交所",
                "dayCounts": 4,
                "currentTime": 1482290724198,
                "amount": 1200,
                "displayTime": 1480055214000,
                "title": "去空格Z12301",
                "onlineTime": 1480055215000,
                "tagName": "",
                "releaseTime": 1480089600000,
                "fullTime": 1480086000000,
                "loanId": 85
            }
        ]
    },
    "user": {
        "copywrite": "dd123",
        "nickName": "徐少_87746",
        "investCount": 41,
        "totalAmount": 23418.97,
        "accountType": 3,
        "userCopywrite": "s123",
        "photo": "http://tva1.sinaimg.cn/crop.0.0.664.664.50/005TtEDDjw8f77epfuemlj30ig0ig74g.jpg"
    }
}
const mutations = {
    [types['requestIndexData.start']](state, payload) {
        state.loading = true;
    },
    [types['requestIndexData.ok']](state, payload) {
        _.assign(state,{
            loading: false,
            ...payload
        })
    },
    [types['requestIndexData.error']](state, payload) {
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
