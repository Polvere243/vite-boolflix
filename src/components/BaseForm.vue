<script>
export default {
    name: "BaseForm",
    data: () => ({
        textToSearch: ""
    }),
    props: {
        defaultText: String,
    },
    emits: ["text-wrote"]
}
</script>

<template>
    <form>
        <input type="text" :placeholder="defaultText" v-model.trim="textToSearch"
            @keyup="$emit('text-wrote', textToSearch)">
        <button @click.prevent="$emit('text-wrote', textToSearch)">
            <FontAwesomeIcon icon="fas fa-magnifying-glass" />
        </button>
    </form>
</template>

<style lang="scss" scoped>
input,
button {
    padding: 5px 10px;
}
</style>