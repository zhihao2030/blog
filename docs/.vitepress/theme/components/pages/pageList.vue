
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

const {pagination,pageChange,pageData} = usePageList()

// initPage
pageChange()
</script>
<style scoped lang="scss">
.blog-container-wrap {
  .blog-container {
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin: 30px auto 0;
    .pagination-wrap {
      display: flex;
      justify-content: end;
    }
  }
}

</style>
