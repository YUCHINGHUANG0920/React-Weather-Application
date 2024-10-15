function WeatherIcon({ iconNumber, summary }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/dist/weather_icons/set04/medium/${iconNumber}.png`}
      alt={summary}
      draggable={false}
      style={{ width: '60px', height: '60px' }} // 調整圖片大小
    />
  );
}

export default WeatherIcon;
