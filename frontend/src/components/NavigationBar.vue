<script setup>
</script>

<template>
    <div class="navbar">
        <img src="../assets/ULFX_Logo.png" style="height: var(--navbar-height); margin-left: 2.5%;">
        <div style="margin: auto;">
            <input type="text" style="width: 600;">
        </div>
        <RouterLink to="/profile" tag="li"><img src="../assets/mountain_icon_126008.svg" style="height: var(--navbar-height); margin-right: 2.5%;"></RouterLink>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(20,20,20);
}

.navbar {
    display: flexbox;
}
</style>