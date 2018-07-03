import Vue from 'vue';

export const eventBus = new Vue( {
    methods: {
        changeAge(age) {
            this.$emit("editedYourAge", age);
        }
    }
} );