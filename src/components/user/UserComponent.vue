<template>
    <div class="col-12 p-4">
        <h2>The User component !</h2>
        <p><small>It's an awesome user.</small></p>
        <button class="btn btn-warning" @click="changeName">Change my name</button>
        <p>My name is {{ prenom }}</p>
        <p>This is my age {{ age }}</p>
        <hr>
        <div class="row">
            <app-red-user :name="prenom" @returnName="prenom = $event" :userAge="age"></app-red-user>
            <app-blue-user :userAge="age" @editedYourAge="age = $event"></app-blue-user>
        </div>
    </div>
</template>

<script>
import RedUser from './RedUserComponent'
import BlueUser from './BlueUserComponent'

export default {
    data: function () {
        return {
            prenom: "Lucas",
            age: 22
        }
    },
    methods: {
        changeName() {
            this.prenom = "Boubou";
        }
    },
    components: {
        "app-red-user": RedUser,
        "app-blue-user": BlueUser
    }
}
</script>

<style scoped>
div {
    background: darkcyan;
}
</style>

