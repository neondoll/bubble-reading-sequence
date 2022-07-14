const program = {}

const programObject = {
    data: () => ({
        type_remont: [
            {value: 0, text: 'Комплексный'},
            {value: 1, text: 'Выборочный'}
        ],
        types: [
            {value: 0, text: 'Приоритетный'},
            {value: 1, text: 'Резервный'}
        ],
        wears: [
            {value: 0, text: 'От 0 до 10%'},
            {value: 1, text: 'От 11% до 20%'},
            {value: 2, text: 'От 21% до 30%'},
            {value: 3, text: 'От 31% до 40%'},
            {value: 4, text: 'От 41% до 60%'},
            {value: 5, text: 'От 61% до 75%'},
            {value: 6, text: '75% и выше'},
        ]
    }),
    methods: {
        get_type_remont(val) {
            return this.type_remont.find(item => parseInt(item.value) === parseInt(val))?.text ?? '-'
        },
        get_type(val) {
            return this.types.find(item => parseInt(item.value) === parseInt(val))?.text ?? '-'
        },
        get_wear(val) {
            return this.wears.find(item => parseInt(item.value) === parseInt(val))?.text ?? '-'
        }
    }
}

export {program, programObject}
