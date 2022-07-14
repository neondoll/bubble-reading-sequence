import {jsonToGraphQLQuery} from 'json-to-graphql-query';
import request from 'graphql-request';

const status = {
    step_date: true,
    dep_status: {
        id: true,
        value: true,
        status: true
    },
    mgsu_status: {
        id: true,
        value: true,
        status: true,
    },
};
const objectProps = {
    id: true,
    program_id: true,
    org_id: true,
    real_estate_id: true,
    name: true,
    name_dbi: true,
    status,
    files: {
        id: true,
        obj_id: true,
        list_id: true,
        label: true,
        server_name: true,
        name: true,
        listItem: {descriptor: true},
    },
    events: {
        id: true,
        obj_id: true,
        stage: true,
        p01: true,
        p02: true,
        p03: true,
        p04: true,
        p05: true,
        p06: true,
        p07: true,
        type: {
            id: true,
            label: true,
            value: true,
        },
        end_stage: true,
        comment: true,
        exp_mon: true,
        comment_mon: true,
        file: {
            id: true,
            name: true,
            label: true,
        },
        events: {
            file: {
                id: true,
                name: true,
                label: true,
            },
            id: true,
            obj_id: true,
            stage: true,
            parent: true,
            p02: true,
            p03: true,
            p04: true,
            p05: true,
            p06: true,
            end_stage: true,
            comment: true,
            exp_mon: true,
            comment_mon: true,
        },
    },
    activities: {
        id: true,
        obj_id: true,
        type: true,
        stage: true,
        p01: true,
        p02: true,
        p03: true,
        p04: true,
        p05: true,
    },
    waited: {
        id: true,
        obj_id: true,
        element: true,
        aim: true,
        plan: true,
        changes: true,
    },
    short_description: true,
    address: true,
    address_dbi: true,
    type_remont: true,
    type: true,
    priority: true,
    region_id: true,
    city: true,
    cadastral_number: true,
    build_year: true,
    exploy_year: true,
    kaprem_year: true,
    nadzor_orgs: true,
    wear: true,
    osnovanie: true,
    pravo_oper: true,
    naznach: true,
    naznach2: true,
    pravo: true,
    square: true,
    totalFin: true,
    totalCoFin: true,
    kaprem_square: true,
    square_ustav: true,
    square_ne_ustav: true,
    arenda: true,
    primechanie: true,
};

export const ApiMixin = {
    methods: {
        async fetch(table, columns, where) {
            let query = {query: {}};
            query.query[table] = {};
            if (where) {
                query.query[table]['__args'] = where;
            }
            query.query[table] = {
                ...query.query[table],
                ...columns,
            };
            query = jsonToGraphQLQuery(query);
            let result = [];
            await request('/graphql', query).then(data => {
                if (data.hasOwnProperty(table)) {
                    result = data[table];
                }
            }).catch((e) => console.error(e));
            return result;
        },
        async getAdminFilter(pagination, where) {
            return await this.fetch('adminFilter', {
                data: {
                    org_id: true,
                    region: true,
                    org_name: true,
                    file: {
                        id: true,
                        name: true,
                    },
                    sent: true,
                    inn: true,
                },
                paginatorInfo: {
                    count: true,
                },
            }, {pagination, where});
        },
        async getDepStatuses() {
            return await this.fetch('depStatuses', {
                id: true,
                value: true,
            });
        },
        async getDictionaryRoles() {
            return this.$cache.cache('roles', async () => {
                return await this.fetch('dictionaryRoles', {
                    id: true,
                    value: true,
                });
            });
        },
        async getEventTypes() {
            return (await this.fetch('object_event_types', {
                id: true,
                stage: true,
                label: true,
                value: true,
            }));
        },
        async getFileList(type) {
            return await this.fetch(
                'file_list',
                {
                    id: true,
                    label: true,
                    descriptor: true,
                    type: true,
                    required: true,
                },
                {type},
            );
        },
        async getObjStatuses() {
            return await this.fetch('objStatuses', {
                id: true,
                value: true,
            });
        },
        async getObject(id) {
            return await this.fetch('object', objectProps, {id: parseInt(id)});
        },
        async getProgram(where) {
            return await this.fetch('program', {
                id: true,
                org_id: true,
                square: true,
                sent: true,
                cost_kaprem: true,
                p0201: true,
                p0210: true,
                can_create_object: true,
                psd: true,
                file: {id: true, name: true},
                year: true,
                org: {id: true, name: true, short_name: true, is_nauch: true},
                org_info: {
                    program_id: true,
                    org_id: true,
                    p1: true,
                    p2: true,
                    p3: true,
                    p4: true,
                    p5: true,
                    p6: true,
                    p7: true,
                    p8: true,
                    p9: true,
                    p10: true,
                    p11: true,
                    p12: true,
                    p13: true,
                    p14: true,
                    p15: true,
                    p16: true,
                    p17: true,
                    p18: true,
                    p19: true,
                    p20: true,
                },
                contacts: {
                    id: true,
                    fio: true,
                    position: true,
                    role: true,
                    role_label: true,
                    phone: true,
                    org_id: true,
                    program_id: true,
                    email: true,
                    last_name: true,
                    name: true,
                    middle_name: true
                },
            }, where);
        },
        async getProgramByOrgId(id) {
            return await this.getProgram({org_id: parseInt(id)});
        },
        async getRealEstates(id_org) {
            return await this.fetch('realEstate', {
                'id': true,
                'adr': true,
                'name': true,
            }, {id_org: parseInt(id_org)});
        },
        async getRegions() {
            return (await this.$cache.cache('regions', async () => {
                return await this.fetch('regions', {id: true, region: true});
            }, '1d')).map(item => ({...item, id: parseInt(item.id)}));
        },
        async getUser(id) {
            //await new Promise(r => setTimeout(r, 2000));
            return await this.fetch('user',
                {'id': true, 'email': true, 'org_id': true},
                id ? {id: parseInt(id)} : null);
        }
    },
};
