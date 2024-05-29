<template>
    <div>
        <CommonView msg="First View" />
        <br>
        <h4>uname: {{ $route.query.uname }}</h4>
        <h4>pwd: {{ $route.query.pwd }}</h4>
    </div>
</template>
<script>
import CommonView from '@/components/CommonView.vue'
export default {
    name: 'FirstView',
    components: { CommonView }
}
</script>