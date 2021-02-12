class Api {
    constructor(url) {
        this._url = url;
    }
    _handleResponse(response){
        if (response.ok) {
            return response.json();
        } else {
            console.log('_handleResponse rejection')
            return Promise.reject(response.statusText)
        }
    }
    _handleResponseError(err){
        console.log('_handleResponseError')
        return Promise.reject(err.message)
    }
    submit(obj){
        return fetch(this._url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: obj.name,
                service: obj.service,
                email: obj.email,
                phone: obj.phone,
            })
        }).then(this._handleResponse).catch(this._handleResponseError)
    }
}

export const api = new Api('http://localhost:1000/');
