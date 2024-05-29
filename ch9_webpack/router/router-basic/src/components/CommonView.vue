<template>
    <div>
        <img src="../assets/logo.png" alt="Vue logo">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name: 'CommonView',
    props: {
        msg: String
    }
}
</script>