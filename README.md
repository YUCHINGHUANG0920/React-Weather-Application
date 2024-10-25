# React Weather App

## Overview
This weather application is a simple dashboard built with React.js that displays the current weather conditions and provides hourly and daily weather forecasts for any selected location. It supports multiple measurement systems (e.g., metric, imperial) to display weather data. The app fetches weather data from the Meteosource Weather API, allowing users to input a location and view detailed weather information such as temperature, humidity, wind speed, UV index, and cloud coverage. This project demonstrates how to integrate a third-party API into an application.

## Prerequisites
To fetch weather data, users must obtain a Meteosource Weather API key and store it in a .env file, naming the variable **REACT_APP_API_KEY**.

## Features
- Current Weather Display: Shows the current weather conditions, including temperature, humidity, wind speed, and more.
- Hourly Weather Forecast: Provides detailed hourly weather forecasts for the selected location.
- Daily Weather Forecast: Displays a 21-day weather forecast for the selected location.
- Measurement System: Automatically adjusts units (e.g., Celsius/Fahrenheit) based on the user's manual selection.
- Light/Dark Mode: Automatically adjusts between light and dark themes based on user's manual selection.

## Key Components:
- CurrentWeather.js: Displays the current weather conditions, including various weather widgets such as temperature, wind speed, humidity, and visibility.
- DailyForecastWidget.js / HourlyForecastWidget.js: Displays daily or hourly weather forecasts, setting the time and date formats.
- WeatherIcon.js: Dynamically renders weather icons based on the icon_num value from the API data.
- HorizontallyScrollable.js: Enables horizontal scrolling for displaying weather forecasts.

Context:
The app utilizes React’s Context API to provide global state management for both weather data and theme (light/dark mode). It handles the fetching and updating of weather data and theme settings throughout the application.
