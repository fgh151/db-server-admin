import jsonServerProvider from "ra-data-json-server";
import {fetchUtils} from "react-admin";

export const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const apiUrl = window._env_.REACT_APP_SERVER_SCHEMA + '://' + window._env_.REACT_APP_SERVER_URL;

const srp = jsonServerProvider(apiUrl, httpClient);

export const dataProvider = {
    ...srp,
    update: (resource, params) => {

        if (resource !== 'admin/cf') {
            return srp.update(resource, params);
        }

        const formData = new FormData();
        for (const name in params.data) {
            formData.set(name, params.data[name]);
        }

        formData.append("dockerarc", params.data['dockerarc'].rawFile);

        return httpClient(
            `${apiUrl}/${resource}/${params.id}`,
            {
                method: 'PUT',
                body: formData,
            })
            .then(({json}) => ({data: json}));
    },
    runCf: (id) => {
        return httpClient(`${apiUrl}/api/cf/${id}/run`, {method: 'GET'})
            .then(response => response.json());
    },
    runPush: (id) => {
        return httpClient(`${apiUrl}/api/push/${id}/run`, {method: 'GET'})
            .then(response => response.json());
    },
}
