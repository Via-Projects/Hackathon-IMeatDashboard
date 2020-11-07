<template>
    <div>
        <ol>
            <li>{{todo.text}}</li>
        </ol>

    </div>
</template>

<script>
    export default {
        name: "todo-item",

        props: {
            todo: {
                type: String,
                required: true
            }
        },

        data: () => ({
            groceryList: [
                {id: 0, text: 'Vegetables' },
                {id: 1, text: 'Cheese' },
                {id: 2, text: 'Eat shit bitch' }
            ]
        })
    }
</script>

<style scoped>

</style>