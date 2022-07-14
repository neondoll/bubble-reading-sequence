export default class AxiosCache {
    constructor() {
        this.clearCache()
        this.log('init constructor')
    }

    log(msg) {
        console.log(`--- ${msg} ----`)
    }

    parseTime(time) {
        if (!isNaN(Number(time))) {
            return time;
        }

        const timeArr = {
            d: [24, 60, 60, 1000],
            ms: [1],
            s: [1000],
            m: [60, 1000]
        }

        let digits = time.replace(/\D/g, "");
        let type = time.replace(/[^a-z]/gi, "");
        if (timeArr[type]) {
            timeArr[type].forEach(i => {
                digits *= i;
            })
        }
        return digits;

    }

    setKey(key) {
        this._key = `kad_reserv_cache_${key}`;
    }

    setData(data, expire = '1m') {
        localStorage.setItem(this._key, JSON.stringify({
            data,
            expire: this.parseTime(expire),
            date: new Date()
        }))
    }

    getData(key) {
        const d = localStorage.getItem(key);
        return d ? JSON.parse(d) : null;
    }

    async cache(key, callback, time = '1m') {
        this.log('init cache')
        this.setKey(key)
        this.log(`key: ${this._key}`)
        if (this.isExpired(this._key)) {
            this.log(`key: expired`)
            this.setData(await callback(), time)
        }
        return this.getData(this._key)?.data || null;
    }

    isExpired(key) {
        let item = this.getData(key)
        if (!item) return true;
        this._curTime = (new Date()).getTime()
        let expire = parseInt(item.expire);
        let date = new Date(item.date);
        return this._curTime - date.getTime() >= expire;
    }

    clear(key) {
        if (key) {
            localStorage.removeItem(key)
        } else {
            localStorage.clear()
        }
    }

    clearCache() {
        let keys = Object.keys(localStorage).filter(item => item.match(new RegExp('kad_reserv_cache_', 'gi')))

        keys.forEach(k => {
            if (this.isExpired(k)) {
                this.clear(k)
            }
        })

    }
}

