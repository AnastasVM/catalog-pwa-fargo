
const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}


class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getProductList() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers,
        }).then(onResponse)
    }
}

const config = {
    baseUrl: 'https://moscow.fargospc.ru/test/json/',
    headers: {
        'Content-Type': 'application/json',
    }
}


const api = new Api(config);

export default api;