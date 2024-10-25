import { useContext, useState } from 'react';
import { MEASUREMENT_SYSTEMS } from '../constants';
import '../styles/components/Settings.scss';
import WeatherContext from '../context/weather.context';
import ThemeContext from '../context/theme.context';

function Settings() {
  const [openSettings, setOpenSettings] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);
  const { measurementSystem, setMeasurementSystem } = useContext(WeatherContext);

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setOpenSettings(false);
  };

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <div className='Settings'>
      <div className='theme-toggler'>
        <div className='theme-buttons' onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? '' : 'active'}`}>
            <i className='bi bi-sun'></i>
          </div>
          <div className={`dark-theme-btn ${dark ? 'active' : ''}`}>
            <i className='bi bi-moon'></i>
          </div>
        </div>
      </div>
      <div className='settings-btn' onClick={() => setOpenSettings((prevVal) => !prevVal)}>
        <i className='bi bi-gear'></i>
      </div>
      <div className={`settings-menu ${openSettings ? 'open' : ''}`}>
        <div className='measurement-systems'>
          <h4>Measurement Systems:</h4>
          <div className='systems'>
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`system ${
                  system === measurementSystem ? 'active' : ''
                }`}
                key={system}
                onClick={() => changeMeasurementSystem(system)}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;