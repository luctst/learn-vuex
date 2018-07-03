<template>
    <div class="col p-4">
        <h3>You may edit the User here</h3>
        <p><small>Edit me !</small></p>
        <p>This is my age {{ userAge }}</p>
        <button class="btn btn-warning" @click="editAge">Edit age</button>
    </div>
</template>

<script>
import { eventBus } from "../../event-bus.js";
export default {
    props: {
        userAge: {
            type: Number
        }
    },
    methods: {
        editAge() {
            this.userAge = 30;
            // this.$emit("changeAge", this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>

<style scoped>
div {
    background: darkgreen;
}
</style>
