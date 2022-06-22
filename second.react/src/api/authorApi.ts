import { handleResponse, handleError } from "./apiUtils";
import { API_URL } from "./constants";
const baseUrl = API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
