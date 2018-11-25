import React, { Component } from "react";
import WeatherWidget from "./widget/WeatherWidget";
import "./App.css";
import { Layout } from "antd";
const { Content } = Layout;

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout className="app-container">
					<Content className="app-content">
						<div className="container">
							<div className="widget-container">
								<WeatherWidget />
							</div>
						</div>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
