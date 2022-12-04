import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state() {
    return {
      loading: true
    };
  },
  actions: {
      setLoading(v) {
        this.loading =v
      }
  }
});
