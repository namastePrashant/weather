import React, { useState } from 'react';
import { message } from 'antd';

import HomePageComponent from '../../components/homePage';
import { getForecastApi } from '../../services';

const HomePageContainer = () => {
  const [loading, setLoading] = useState(false);
  const [forecastData, setForecastData] = useState()
  const [selectedCity, setSelectedCity] = useState();


  const handleCitySelection = (value) => {
    if (value === undefined) {
      message.warning('City not found')
      setForecastData(undefined)
      return
    }
    setSelectedCity(value)
    fetchForecast(value?.Key)
  }

  const fetchForecast = (key) => {
    setLoading(true)
    getForecastApi({
      finalCallback: () => {
        setLoading(false)
      },
      locationKey: key,
      successCallback: (response) => {
        if (response) {
          setForecastData(response)
        }
      }
    })
  }

  return (
    <HomePageComponent
      handleCitySelection={handleCitySelection}
      forecastData={forecastData}
      cityData={selectedCity}
      loading={loading}
    />
  )
}

export default HomePageContainer;
