<template>
    <div>
        <CommonView msg="Second View" />
        <br>
        <h4>uname: {{ $route.params.uname }}</h4>
        <h4>pwd: {{ $route.params.pwd }}</h4>
    </div>
</template>
<script>
import CommonView from '@/components/CommonView.vue'
export default {
    name: 'SecondView',
    components: { CommonView }
}
</script>