import axios from "axios";

export default {
    getPersons: function() {
        return axios.get("/api/user");
    },
    getPerson: function(id) {
        return axios.get("/api/user/" + id);
    },
    deletePerson: function(id) {
        return axios.delete("/api/user/" + id);
    },
    createPerson: function(personData) {
        return axios.post("/api/user", personData);
    }
};