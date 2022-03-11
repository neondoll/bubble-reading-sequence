<template>
    <a v-if="href" :class="`n-chip ${color}`" :href="href" :style="style" :target="target">
        <span :style="styleContent"><slot/></span>
    </a>
    <span v-else :class="`n-chip ${color}`" :style="style">
        <span :style="styleContent"><slot/></span>
    </span>
</template>

<script>
export default {
    computed: {
        style() {
            return {
                "border-radius": this.borderRadius,
                "font-size": this.fontSize,
                "line-height": this.lineHeight,
                margin: this.margin,
                padding: this.padding
            }
        },
        styleContent() {
            return {
                "font-size": this.fontSize
            }
        }
    },
    name: "index",
    props: {
        borderRadius: {
            default: () => "16px",
            type: String
        },
        color: {
            default: () => "n-chip--no-color",
            type: String
        },
        fontSize: {
            default: () => "14px",
            type: String
        },
        href: {
            default: () => null,
            type: String | null
        },
        lineHeight: {
            default: () => "20px",
            type: String
        },
        margin: {
            default: () => "0",
            type: String
        },
        padding: {
            default: () => "9px 12px",
            type: String
        },
        target: {
            default: () => "_self",
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@import "NChip.scss";
</style>
