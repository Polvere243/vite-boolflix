<script>
export default {
    name: "BaseForm",
    data: () => ({
        textToSearchFor: ""
    }),
    props: {
        defaultText: String,
    },
    emits: ['text-wrote']
}
</script>

<template>
    <form @submit.prevent="$emit('text-wrote', textToSearchFor)">
        <input type="text" :placeholder="defaultText" v-model.trim="textToSearchFor" @keyup="$emit('text-wrote', textToSearchFor)">
        <button>
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