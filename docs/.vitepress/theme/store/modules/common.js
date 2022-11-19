import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state() {
    return {
      loading: true
    };
  },
  actions: {
      setLoading(v) {
          console.log(v,8888)
        this.loading =v
      }
  }
});
