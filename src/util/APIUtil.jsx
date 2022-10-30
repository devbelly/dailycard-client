import { ACCESS_TOKEN } from "../constants";

export function request(options) {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)).token
    );
  }

  const defaults = { headers: headers };

  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(text);
      });
    } else {
      return response.json();
    }
  });
}
