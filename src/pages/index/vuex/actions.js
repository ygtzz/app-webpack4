import {types} from './mutation-types';
import Vue from 'vue';
import url from './url';

export function fGetUserInfo({commit},payload) {
    commit(types['getUserInfo.start']);
    return Vue.http.get(url['getUserInfo'],{params:payload}).then(function(res) {
        commit(types['getUserInfo.ok'], res.data.data);
    }).catch(function(err){
        commit(types['getUserInfo.error'],err);
        return Promise.reject(err);
    });
}

export function fGetFinanceListData({commit},payload) {
    commit(types['getFinanceListData.start']);
    return Vue.http.get(url['getFinanceListData'],{params:payload}).then(function(res) {
        commit(types['getFinanceListData.ok'], res.data.data);
    }).catch(function(err){
        commit(types['getFinanceListData.error'],err);
        return Promise.reject(err);
    });
}

export function fRequestIndexData({commit},payload) {
    commit(types['requestIndexData.start']);
    return Vue.http.get(url['requestIndexData'],{params:payload}).then(function(res) {
        commit(types['requestIndexData.ok'], res.data.data);
    }).catch(function(err){
        commit(types['requestIndexData.error'],err);
        return Promise.reject(err);
    });
}

