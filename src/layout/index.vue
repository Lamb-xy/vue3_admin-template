<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <logo></logo>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar">456</div>
        <!-- 内容展示区 -->
        <div class="layout_main">
            <p height="1000000px"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
    width: 100%;
    height: 100vh;
    background: pink;
    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
    }
    .layout_tabbar {
        position: fixed;
        top: 0px;
        left: $base-menu-width;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
    }
    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        top: $base-tabbar-height;
        left: $base-menu-width;
        background: rgb(109, 134, 71);

        padding: 20px;
        overflow: auto;
    }
}
</style>
