<script setup>
import SongListComponent from '@/components/SongListComponent.vue';
</script>
<template>
    <div class="box">
        <h1>HOME</h1>
        <SongListComponent/>
    </div>
</template>
<style scoped>
  .box {
    top: 100px;
    left: 370px;
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: 30px;
  }
</style>