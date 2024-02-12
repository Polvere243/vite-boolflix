<script>
export default {
    name: "BaseDiv"
}
</script>

<template>
    <div>
        <p>Cerca un titolo!</p>
    </div>
</template>

<style lang="scss" scoped>
div {
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    color: white;
    font-size: 32px;
}
</style>
