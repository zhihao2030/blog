import { defineStore } from 'pinia';

export const useTagStore = defineStore('tags', {
    persist: {
        enabled: true, // 开启数据缓存
    },
    state() {
        return {
            tagList: []
        };
    },
    actions: {
        setTagList(v) {
            this.tagList =v
        }
    }
});
