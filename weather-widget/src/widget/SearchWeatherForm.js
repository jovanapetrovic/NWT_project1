import React, { Component } from "react";
import { Form, Icon, Input, Popover, Button } from "antd";

const FormItem = Form.Item;

const SearchWeatherForm = Form.create()(
	class extends Component {
		handleSubmit = e => {
			e.preventDefault();
			this.props.form.validateFields((err, values) => {
				if (!err) {
					this.props.getCityWeather(values.cityName);
				}
			});
		};

		render() {
			const { getFieldDecorator } = this.props.form;
			return (
				<Form layout="inline" onSubmit={this.handleSubmit}>
					<FormItem>
						<Popover
							content="To get weather data, enter a city name or city name with country code for more precision"
							title="Help"
						>
							<Icon
								type="question-circle"
								theme="twoTone"
								style={{ fontSize: "16px" }}
							/>
						</Popover>
					</FormItem>
					<FormItem>
						{getFieldDecorator("cityName", {
							rules: [
								{
									required: true,
									message: "Please input city name!"
								}
							]
						})(
							<Input
								prefix={
									<Icon
										type="bank"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								placeholder="City name like Nis or Nis,RS"
								size="large"
								style={{ width: "300px" }}
							/>
						)}
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" size="large">
							Get weather
						</Button>
					</FormItem>
				</Form>
			);
		}
	}
);

export default SearchWeatherForm;
