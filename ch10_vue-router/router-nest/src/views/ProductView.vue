<template>
    <div>
        <p>
            <router-link to="/product/alldev">全栈开发</router-link>
            <router-link to="/product/JavaEE">Java EE 整合开发</router-link>
            <router-link to="/product/SpringBoot">SpringBoot 开发</router-link>
        </p>
        <router-view />
    </div>
</template>

<style scoped>
p a {
    text-decoration: none;
}
</style>