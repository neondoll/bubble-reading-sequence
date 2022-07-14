export const routeMixin = {
  methods: {
    async byRouteName(name, params){
      await this.$router.push({name, params})
    }
  }
}
