import { defineStore } from 'pinia';

export const useCommonStore = defineStore('openAi', {
    state() {
        return {
            token: ''
        };
    },
    actions: {
        setToken(v) {
            this.token =v
        }
    }
});
