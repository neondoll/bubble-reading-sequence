export const GetMixin = {
    methods: {
        async getCurrentUser() {
            let result = {};
            await Axios.get('/get/currentUser').then((res) => {
                result = res.data;
            }).catch((e) => console.error(e))
            return result;
        }
    }
}
