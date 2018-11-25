import React from "react";
import "./WeatherCard.css";
import { formatDateTime } from "../util/FormatDateUtil";
import { Card, Divider, Collapse } from "antd";

const Panel = Collapse.Panel;

export default function WeatherCard({ city, weatherData, iconUrl }) {
    const coord = weatherData.coord;
    const weather = weatherData.weather[0];
    const main = weatherData.main;
    const wind = weatherData.wind;
    const sys = weatherData.sys;

    const title = weatherData.name + ", " + formatDateTime(new Date());

    return (
        <div>
            <Card title={title} style={{ fontSize: "16px" }}>
                <Divider orientation="left">Weather info</Divider>
                <p>
                    <b>Temperature: {main.temp}</b>
                </p>
                <p>
                    <b>
                        Min:{" "}
                        <span style={{ color: "blue" }}>{main.temp_min}</span>
                    </b>
                </p>
                <p>
                    <b>
                        Max:{" "}
                        <span style={{ color: "red" }}>{main.temp_max}</span>
                    </b>
                </p>
                <Divider />
                {iconUrl ? (
                    <p>
                        <img id="wicon" src={iconUrl} alt="Weather icon" />
                    </p>
                ) : null}
                <p>
                    <b>Main: </b>
                    {weather.main}
                </p>
                <p>
                    <b>Description: </b>
                    {weather.description}
                </p>
                <Collapse bordered={false} defaultActiveKey={["0"]}>
                    <Panel
                        header="More info"
                        key="1"
                        style={{ bottomBorder: "0", background: "#f7f7f7" }}
                    >
                        <p>
                            <b>Humidity: </b>
                            {main.humidity} %
                        </p>
                        <p>
                            <b>Pressure: </b>
                            {main.pressure} hPa
                        </p>
                        <p>
                            <b>Wind speed: </b>
                            {wind.speed} mps
                        </p>
                        <p>
                            <b>Visibility: </b>
                            {weatherData.visibility} meter
                        </p>
                        {weatherData.precipitation ? (
                            <p>
                                <b>Precipitation: </b>
                                {weatherData.precipitation.mode},{" "}
                                {weatherData.precipitation.value}
                            </p>
                        ) : null}
                    </Panel>
                </Collapse>
                <Divider orientation="left">Location info</Divider>
                <p>
                    <b>City & Country: </b>
                    {weatherData.name}, {sys.country}
                </p>
                <p>
                    <b>Longitude: </b>
                    {coord.lon}
                </p>
                <p>
                    <b>Latitude: </b>
                    {coord.lat}
                </p>
            </Card>
        </div>
    );
}
