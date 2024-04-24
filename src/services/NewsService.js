import axios from 'axios';
import {
    NEWS_API_KEY,
    NEWS_BASE_URL,
    NEWS_ENDPOINT
} from "../constants/Urls";

const NEWS_HTTP_REQUEST = axios.create({
    baseURL: NEWS_BASE_URL,
});

const getEverything = () =>
  NEWS_HTTP_REQUEST.get(`${NEWS_ENDPOINT.EVETYTING}&apiKey=${NEWS_API_KEY}`);

const getTopHeadlines = () =>
    NEWS_HTTP_REQUEST.get(`${NEWS_ENDPOINT.TOP_HEADLINES}&apiKey=${NEWS_API_KEY}`, { params:{ category: "technology", }});


export {
    getEverything, getTopHeadlines
}
