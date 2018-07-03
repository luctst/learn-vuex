<template>
    <div class="row">
        <div class="col-12">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quote: {
            type: String
        }
    }
}
</script>

<style scoped>
.col-12 {
    border: 1px solid #ccc;
}
</style>
