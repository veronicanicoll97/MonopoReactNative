const config = require("../../package.json");

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

const TMDB_API_KEY = config.projectConfig.apiKey;

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  GENRES: "/genre/movie/list",
  MOVIE: "/movie",
};

const APPEND_TO_RESPONSE = {
  VIDEOS: "videos",
  CREDITS: "credits",
  RECOMMENDATIONS: "recommendations",
  SIMILAR: "similar",
};

const NEWS_BASE_URL = "https://newsapi.org/v2/"
const NEWS_ENDPOINT = {
  EVETYTING: "everything?domains=techcrunch.com,thenextweb.com",
  TOP_HEADLINES: `top-headlines?country=us`
}
const NEWS_API_KEY = config.projectConfig.apiKeyNews;

export {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  APPEND_TO_RESPONSE,
  YOUTUBE_BASE_URL,
  NEWS_BASE_URL,
  NEWS_ENDPOINT,
  NEWS_API_KEY
};