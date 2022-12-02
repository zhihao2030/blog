import { defineStore } from 'pinia';
import { store } from '../'

const readInfoList = new Map()

export const useReadInfo = defineStore('readInfo', {
    persist: {
        enabled: true, // 开启数据缓存
    },
    state() {
        return {
            readInfoList
        };
    },
    actions: {
        setReadInfoList(v) {
            this.readInfoList =v
        }
    }
});

export const useReadInfoOut = () =>{
    return useReadInfo(store)
}
