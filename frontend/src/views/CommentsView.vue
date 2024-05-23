<script setup>
    import NavigationBar from '@/components/NavigationBar.vue';
    import SiteBar from "@/components/SiteBar.vue";
    import Comment from '@/components/PostEdit.vue';
</script>

<template>
    <NavigationBar />
    <div class="content">
        <div class="menu-outer">
            <SiteBar />
        </div>
        <div class="menu-inner">
            <PostEdit />
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
    font-family: Verdana;
    font-size: 12px;
}

.menu-outer {
    width: 30%;
    font-family: Verdana;
}
</style>