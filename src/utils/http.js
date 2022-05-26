import jsonServerProvider from "ra-data-json-server";
import {fetchUtils} from "react-admin";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
export const dataProvider = jsonServerProvider(window._env_.REACT_APP_SERVER_SCHEMA + '://' + window._env_.REACT_APP_SERVER_URL, httpClient);

export const request = {
    runCf: (id) => {
        return httpClient(`${window._env_.REACT_APP_SERVER_SCHEMA}://${window._env_.REACT_APP_SERVER_URL}/api/cf/${id}/run`, { method: 'GET' })
            .then(response => response.json());
    },
    runPush: (id) => {
        return httpClient(`${window._env_.REACT_APP_SERVER_SCHEMA}://${window._env_.REACT_APP_SERVER_URL}/api/push/${id}/run`, { method: 'GET' })
            .then(response => response.json());
    },
}