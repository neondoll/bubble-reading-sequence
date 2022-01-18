<template>
    <div :class="classes">
        <slot/>
    </div>
</template>

<script>
export default {
    computed: {
        classes() {
            let str = "n-collapse"
            if (this.value) {
                str += " active"
            }
            return str
        }
    },
    name: "NCollapse",
    props: {
        value: null
    },
    watch: {
        value(newVal) {
            const accBody = document.querySelector('.n-collapse');
            const accContent = document.querySelector('.n-collapse > *');

            if (newVal) {
                accBody.style.maxHeight = `${accContent.clientHeight + 40}px`;
                accBody.style.opacity = 1;
            } else {
                accBody.style.maxHeight = "0px";
                accBody.style.opacity = 0;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.n-collapse {
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 4px;
    box-sizing: border-box;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s;

    & * {
        display: block;
        margin: 20px;
    }
}
</style>
