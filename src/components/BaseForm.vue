<script>
export default {
    name: "BaseForm",
    data: () => ({
        textToSearch: ""
    }),
    props: {
        defaultText: String
    },
    emits: [""]
}
</script>

<template>
    <form>
        <input type="text" :placeholder="defaultText" v-model.trim="textToSearch" @keyup="">
        <button>
            CERCA
        </button>
    </form>
</template>

<style lang="scss" scoped>
input,
button {
    padding: 5px 10px;
}
</style>