<template>
    <div class="d-flex flex-wrap n-cards">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "NCards"
}
</script>

<style lang="scss" scoped>
@media (min-width: 275px) {
    .n-cards {
        max-width: 275px;
    }
}

@media (min-width: 550px) {
    .n-cards {
        max-width: 550px;
    }
}

@media (min-width: 825px) {
    .n-cards {
        max-width: 825px;
    }
}

@media (min-width: 1100px) {
    .n-cards {
        max-width: 1100px;
    }
}

@media (min-width: 1375px) {
    .n-cards {
        max-width: 1375px;
    }
}

@media (min-width: 1650px) {
    .n-cards {
        max-width: 1650px;
    }
}

@media (min-width: 1925px) {
    .n-cards {
        max-width: 1925px;
    }
}

.n-cards {
    margin-left: auto;
    margin-right: auto;
    pointer-events: none;
    width: 100%;

    & > .n-card {
        transition: 300ms opacity, 300ms transform;
    }

    &:hover > .n-card {
        opacity: 0.4;
    }

    &:hover > .n-card:hover {
        transform: scale(1.1);
        opacity: 1;
    }
}
</style>
