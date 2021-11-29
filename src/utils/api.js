import axios from "axios";

let http = null; // not possible to create a private property in JavaScript, so we move it outside of the class, so that it's only accessible within this module

class APIProvider {
    constructor({ url }) {
        http = axios.create({
            baseURL: url,
            headers: { "Content-Type": "application/json" },
        });
    }

    // REST Methods
    find({ resource, query }) {
        return http.get(resource, {
            params: query,
        });
    }

    get({ resource, id, query }) {
        return http.get(`${resource}/${id}`, {
            params: query,
        });
    }

    create({ resource, data, query }) {
        return http.post(resource, data, {
            params: query,
        });
    }

    update({ resource, id, data, query }) {
        return http.patch(`${resource}/${id}`, data, {
            params: query,
        });
    }

    destroy({ resource, id }) {
        return http.delete(`${resource}/${id}`);
    }
}

export default new APIProvider({
    url: "https://www.piusi-egypt.com/api", // We assume 'https://api.example.com/v1' is set as the env variable
});
