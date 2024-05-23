<script setup>
    import NavigationBar from '../components/NavigationBar.vue';
    import Profile from "../components/Profile.vue";
</script>

<template>
    <NavigationBar />
    <div class="menu-inner">
        <Profile />
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
    width: auto;
    height: auto;
    font-family: Verdana;
    font-size: 12px;
    margin: var(--navbar-height);
    margin-left: 20%;
    margin-right: 20%;
    background-color: lightblue;
}

</style>