const CITY_NAME_PARAM = "{cityName}";
const ICON_CODE_PARAM = "{iconCode}";

export const OPEN_WEATHER_API_KEY = "yourApiKeyHere";

export const OPEN_WEATHER_API_URL =
	"http://api.openweathermap.org/data/2.5/weather?q=" +
	CITY_NAME_PARAM +
	"&units=metric&APPID=" +
	OPEN_WEATHER_API_KEY;

export const OPEN_WEATHER_ICON_URL =
	"http://openweathermap.org/img/w/" + ICON_CODE_PARAM + ".png";

export const BUGSTER_USERS_API_URL = "https://localhost:5001/api/Users";
