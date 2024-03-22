<script setup>
import NavigationBar from '../components/NavigationBar.vue';
</script>

<template>
    <NavigationBar />
    <div class="content">
        <div class="menu-outer">
            <p>menu-left</p>
        </div>
        <div class="menu-inner">
            <p>menu-middle</p>
        </div>
        <div class="menu-outer">
            <p>menu-right</p>
        </div>
    </div>
</template>

<style scoped>
.content {
    height: 100%;
    margin-top: var(--navbar-height);
    display: flex;
    flex-direction: row;
}

.menu-inner {
    width: 100%;
}

.menu-outer {
    width: 30%;
}
</style>