import React, { Component } from "react";
import "./WeatherWidget.css";
import SearchWeatherForm from "./SearchWeatherForm";
import WeatherCard from "./WeatherCard";
import { OPEN_WEATHER_ICON_URL } from "../constants/Constants";
import { getCurrentWeatherByCityName } from "../util/APIUtil";
import { Alert, Row } from "antd";

class WeatherWidget extends Component {
    state = {
        notFound: "",
        city: ""
    };

    getCityWeather = cityName => {
        // reset state
        if (this.state.notFound === "" && this.state.res) {
            this.setState(state => ({
                ...state,
                iconUrl: null,
                res: null
            }));
        }

        this.setState(state => ({
            ...state,
            notFound: "",
            city: cityName
        }));

        console.log("Checking weather for: ", cityName);

        getCurrentWeatherByCityName(cityName)
            .then(response => {
                this.setState(state => ({
                    ...state,
                    res: response,
                    iconUrl: OPEN_WEATHER_ICON_URL.replace(
                        "{iconCode}",
                        response.weather[0].icon
                    )
                }));
                console.log("Fetched weatherData: ", this.state.res);
            })
            .catch(error => {
                this.setState(state => ({
                    ...state,
                    notFound: "City with name " + cityName + " was not found!"
                }));
            });
    };

    render() {
        return (
            <div>
                <Row className="widget-row">
                    <SearchWeatherForm getCityWeather={this.getCityWeather} />
                </Row>
                <Row className="widget-row">
                    {this.state.res ? (
                        <WeatherCard
                            city={this.state.city}
                            weatherData={this.state.res}
                            iconUrl={this.state.iconUrl}
                        />
                    ) : null}
                    {this.state.notFound !== "" ? (
                        <Alert message={this.state.notFound} type="error" />
                    ) : null}
                </Row>
            </div>
        );
    }
}

export default WeatherWidget;
