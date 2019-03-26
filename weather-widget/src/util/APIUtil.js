import { OPEN_WEATHER_API_URL, BUGSTER_USERS_API_URL } from "../constants/Constants";

const request = options => {
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url).then(response =>
        response.json().then(json => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentWeatherByCityName(cityName) {
    let CURRENT_WEATHER_BY_CITY_NAME_URL = OPEN_WEATHER_API_URL.replace(
        "{cityName}",
        cityName
    );
    console.log(CURRENT_WEATHER_BY_CITY_NAME_URL);
    return request({
        url: CURRENT_WEATHER_BY_CITY_NAME_URL,
        method: "GET"
    });
}

export function getUsersFromBugsterApi() {
    console.log(BUGSTER_USERS_API_URL);
    return request({
        url: BUGSTER_USERS_API_URL,
        method: "GET",
        mode : "no-cors"
    });
}
