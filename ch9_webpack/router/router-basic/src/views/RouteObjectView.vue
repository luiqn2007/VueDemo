<template>
    <div>
        <CommonView msg="$route" />
        <br>
        <h4>uname: {{ $route.query.uname }}</h4>
        <h4>pwd: {{ $route.query.pwd }}</h4>
    </div>
</template>