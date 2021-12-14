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
        async getAdminPanelSites() {
            return await this.fetch('/graphql', 'sites', [
                'id', 'title', 'text', 'href_in_project', 'href', 'icon', 'created_at', 'updated_at', 'deleted_at'
            ], 'site_id: 25');
        },
        async getGeneratorReportsSites() {
            return await this.fetch('/graphql', 'sites', [
                'id', 'title', 'text', 'href_in_project', 'href', 'icon', 'created_at', 'updated_at', 'deleted_at'
            ], 'site_id: 24');
        },
        async getLands() {
            return await this.fetch('/graphql', 'lands', [
                'id', 'id_org', 'assignment', 'address', 'cadastral_number', 'latitude', 'longitude', 'created_at',
                'updated_at', 'deleted_at'
            ]);
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
        async getRealEstates() {
            return await this.fetch('/graphql', 'realEstates', [
                'id', 'id_org', 'land_id', 'name', 'address', 'cadastral_number', 'latitude', 'longitude', 'created_at',
                'updated_at', 'deleted_at'
            ]);
        },
        async getSiteGroups() {
            return await this.fetch('/graphql', 'siteGroups', [
                'id', 'title', 'sites{id, title, text, href_in_project, href, icon, created_at, updated_at, deleted_at}',
                'created_at', 'updated_at', 'deleted_at'
            ]);
        }
    }
}
