export const formHelper = {
    methods: {
        async validate(Event, link, errorArg, step) {
            console.log(document.getElementById(Event))
            let f = new FormData(typeof Event === 'string' ? document.getElementById(Event) : Event.target)
            const submitter = Axios.post(link, f, {
                params: {
                    id: this.formData.id
                }
            });
            submitter.catch(({response}) => {
                console.log()
                this.formData[errorArg] = response.data.errors;
                this.$forceUpdate();
                if (this.formData[errorArg]) {
                    this.$nextTick(() => {
                        window.scrollTo({
                            top: document.getElementById(errorArg).offsetTop,
                            left: 0,
                            behavior: 'smooth'
                        })
                    })
                }
            })
            submitter.then(() => {
                this.formData[errorArg] = null
                this.step = step;
            })
            await submitter;
        }
    }
}
