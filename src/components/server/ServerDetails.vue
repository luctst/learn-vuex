<template>
        <div class="col">
            <h2>État du serveur: {{ etat }}</h2>
            <button class="btn btn-warning" @click="changeState">Changer État</button>
        </div>
</template>

<script>
export default {
    data: function () {
        return {
            etat: "En ligne"
        }
    },
    methods: {
        changeState: function () {
            this.etat = "Hors-ligne"
        }
    }
}
</script>
