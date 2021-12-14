export const HelpersMixin = {
    filters: {
        dateFormatter(val) {
            let v = new Date(val)
            return v.toLocaleDateString("ru-RU", {month: 'long', day: 'numeric', year: 'numeric'})
        }
    },
    methods: {
        prepareRouteByName(name) {
            return {name: name}
        },
        async toRouteByName(pathName) {
            await this.$router.push(this.prepareRouteByName(pathName));
        }
    }
}
