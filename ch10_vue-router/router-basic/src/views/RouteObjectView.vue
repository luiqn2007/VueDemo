<template>
    <div>
        <CommonView msg="$route" />
        <br>
        <h4>uname: {{ $route.params.uname }}</h4>
        <h4>pwd: {{ $route.params.pwd }}</h4>
        <h4>age: {{ $route.params.age }}</h4>
        <teble>
            <tr>
                <th>key</th>
                <th>value</th>
            </tr>
            <tr>
                <td>path</td>
                <td>{{ $route.path }}</td>
            </tr>
            <tr>
                <td>params</td>
                <td>{{ $route.params }}</td>
            </tr>
            <tr>
                <td>query</td>
                <td>{{ $route.query }}</td>
            </tr>
            <tr>
                <td>hash</td>
                <td>{{ $route.hash }}</td>
            </tr>
            <tr>
                <td>fullPath</td>
                <td>{{ $route.fullPath }}</td>
            </tr>
            <tr>
                <td>matched</td>
                <td>{{ $route.matched }}</td>
            </tr>
            <tr>
                <td>name</td>
                <td>{{ $route.name }}</td>
            </tr>
            <tr>
                <td>meta</td>
                <td>{{ $route.meta }}</td>
            </tr>
        </teble>
    </div>
</template>