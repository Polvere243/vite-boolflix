<script>
export default {
    name: "BaseForm",
    data: () => ({
        textToSearch: ""
    }),
    props: {
        defaultText: String
    }
}
</script>

<template>
    <form>
        <input type="text" :placeholder="defaultText" v-model="textToSearch">
        <button>Cerca</button>
    </form>
</template>