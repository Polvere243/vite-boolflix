<script>
import BaseForm from './components/BaseForm.vue'
export default {
    name: "AppHeader",
    components: { BaseForm }
}
</script>

<template>
    <header>
        <BaseForm />
    </header>
</template>

<style lang="scss" scoped>
header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>