import axios from "axios";

const http = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

export const countryApi = {
    getAllCountries: async (options) => {
        const response = await http.get("/all", options);
        return response.data;
    },
    getCountryByCode: async (code, options) => {
        const response = await http.get(`/alpha/${code}`, options);
        return response.data[0];
    },
    getCountriesByRegion: async (region, options) => {
        const response = await http.get(`/region/${region}`, options);
        return response.data;
    },
};
