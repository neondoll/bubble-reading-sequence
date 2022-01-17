<template>
    <div class="d-flex justify-content-center">
        <div class="d-flex flex-wrap n-cards">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: "NCards"
}
</script>

<style lang="scss" scoped>
@import "NCards.scss";
</style>
