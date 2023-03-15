import { BASE_URL } from '~/services/constants';

export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const request = async (url = '', method = METHODS.GET, payload = {}, header = {}) => {
    if (localStorage.getItem('accessToken')) {
        let body = {};

        if (method != METHODS.GET) {
            body = {
                body: JSON.stringify(payload),
            };
        }

        const res = await fetch(`${BASE_URL}/${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                ...header,
            },
            ...body,
        });

        const data = await res.json();
        return data;
    }

    return null;
};
