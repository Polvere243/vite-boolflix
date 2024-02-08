<script>
import BaseForm from './BaseForm.vue'
export default {
    name: "AppHeader",
    components: { BaseForm }
}
</script>

<template>
    <header>
        <nav>
            <BaseForm default-text="Cerca Titolo" />
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 80px;
    background-color: black;
}

header nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>