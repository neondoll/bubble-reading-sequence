export const ApiMixin = {
    methods: {
        async fetch(url, table, columns, where) {
            const query = where ? `${table}(${where}){${columns}}` : `${table}{${columns}}`;
            const data = {
                query: `query myquery {${query}}`
            }
            let result = []
            await Axios.post(url, data).then((res) => {
                if (res.data.hasOwnProperty('data')) {
                    result = res.data.data[table];
                }
            }).catch((e) => console.error(e))
            return result;
        },
        async getOutOfSchema(schema, table, columns, where) {
            const query = where ? `${table}(${where}){${columns}}` : `${table}{${columns}}`;
            const data = {
                query: `query {${query}}`
            }
            let result = []
            await Axios.post(`/api/${schema}`, data).then((res) => {
                if (res.data.hasOwnProperty('data')) {
                    result = res.data.data[table];
                }
            }).catch((e) => console.error(e))
            return result;
        },
        async getSiteGroups() {
            return await this.fetch('/graphql', 'siteGroups', [
                'id', 'title', 'sites{id, title, text, href, icon, created_at, updated_at, deleted_at}', 'created_at',
                'updated_at', 'deleted_at'
            ]);
        },
    }
}
