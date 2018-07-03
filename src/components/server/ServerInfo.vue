<template>
        <div class="col">
            <ul class="list-group">
                <li class="list-group-item" v-for="i of list">Serveur numéro {{ i }}</li>
            </ul>
        </div>
</template>

<script>
export default {
    data: function () {
        return {
            list: [1,2,3,4,5]
        }
    }
}
</script>
