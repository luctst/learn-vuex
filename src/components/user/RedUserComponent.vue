<template>
    <div class="col p-4">
        <h3>You may view the User details here</h3>
        <p><small>Many details</small> {{ name }}</p>
        <p>My age is {{ userAge }}</p>
        <button class="btn btn-warning" @click="switchName">Switch name</button>
    </div>
</template>

<script>
import { eventBus } from "../../event-bus.js";
export default {
    props: {
        name: {
            type: String,
        },
        userAge: {
            type: Number
        }
    },
    methods: {
        switchName: function () {
            this.name = "Lulu";
            this.$emit('returnName', this.name);
        }
    },
    created: function () {
        eventBus.$on("editedYourAge", (age) => {
            this.userAge = age;
        } )
    }
}
</script>

<style scoped>
div {
    background: darkred;
}
</style>
