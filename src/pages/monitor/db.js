class Db {

    server
    topic
    socket
    key

    constructor(schema, server, topic, key) {
        this.server = `${schema}://${server}`
        this.topic = topic
        this.key = key
        this.socket = new WebSocket(`ws://${server}/subscribe/${topic}/${key}`)
    }

    onMessage = (handler) => {
        this.socket.onmessage = handler
    }

    sendMessage = (msg) => {
        this.request('POST', 'push', msg)
    }

    update = (id, value) => {
        value.id = id;
        return this.request('PATCH','push', value)
    }

    list = () => {
        return this.request('GET', 'list')
    }

    request = (httpMethod, endpoint, payload = {}) => {

        let params = {
            method: httpMethod, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'db-key': this.key,
                'Access-Control-Allow-Origin': '*'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
        }

        if (httpMethod === 'POST' || httpMethod === 'PATCH') {
            params.body = JSON.stringify(payload) // body data type must match "Content-Type" header
        }

        return fetch(`${this.server}/${endpoint}/${this.topic}`, params)
    }

}

export default Db