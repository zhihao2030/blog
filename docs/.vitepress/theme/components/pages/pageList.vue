
<template>
    <div class="blog-container-wrap">
      <div class="blog-container">
        <list-item v-for="page in pageData" :key="page.path" class="blog" :page="page" />
        <!-- 分页 -->
        <div class="pagination-wrap">
            <a-pagination
                v-model:current="pagination.current"
                :total="pagination.total"
                :showSizeChanger="false"
                showQuickJumper
                @change="pageChange"/>
        </div>
      </div>
    </div>
</template>
<script setup>
import usePageList from "./hooks/usePageList";
import { onMounted } from "vue";
import { useCommonStore } from "../../store/modules/common";

const {pagination,pageChange,pageData} = usePageList()
const commonStore = useCommonStore()
// initPage
// 想要用window或bom方法事件，一定要在mounted后执行
onMounted(()=>{
  pageChange()
  commonStore.setLoading(false)
})
</script>
<style scoped lang="scss">
.blog-container-wrap {
  .blog-container {
    display: flex;
    flex-direction: column;
    max-width: 998px;
    margin: 30px auto 0;
    padding: 0 50px;
    .pagination-wrap {
      display: flex;
      justify-content: end;
      padding-bottom: 20px;
    }
  }
}

</style>
