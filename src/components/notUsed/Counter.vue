<template>
    <div class="myClass">
        <p>This is my counter {{name}}</p>
        <p>{{counter}}</p>
        <v-btn color="primary" @click="increment()">Increment</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data: () => ({
            counter: 0
        }),
        props: {
            name: {
                type: String,
                required: true
            }
        },
        methods: {
            increment() {
                this.counter++;
            }
        },
    }
</script>

<style>
    .myClass {
        margin: 5px;
        display: inline-block;
        padding: 3px;
        border: 1px solid black;
        border-radius: 4px;
    }
</style>
