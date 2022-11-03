import { Spin, Card, Row } from 'antd';
import React from "react";
import moment from 'moment';
import CitySearchComponent from '../common/search/city.search';
import sunrise from '../../img/sunrise_icon.png';
import getImageByKey from '../common/images';

const HomePage = (props) => {
  const { loading, forecastData, cityData } = props;
  return (
    <div className="container container--bg">
      <div className="wrapper">
        <h1 className="wrapper__headline">Weather App</h1>
        <CitySearchComponent {...props} />
      </div>

      <Row justify='center'>
        {loading ? <Spin /> :
          cityData && forecastData ?
            <div className="results">
              <Card className="card__weather">
                <p className="card__country">
                  {cityData?.EnglishName}, {cityData?.Country?.EnglishName}
                </p>
                  {forecastData?.DailyForecasts?.map(forecast => {
                    return (
                      <>
                      <p>
                        {moment(forecast?.Sun?.Rise).format('LT')}
                        <img src={sunrise} class="img__small" alt="Sunrise" />
                        {moment(forecast?.Sun?.Set).format('LT')} 
                      </p>
                      <h1>
                        {Math.floor(forecast?.Temperature?.Minimum?.Value)} <span class="sub">°{forecast?.Temperature?.Minimum?.Unit}</span>
                      </h1>
                      <img src={getImageByKey(`img_${forecast?.Day?.Icon}`)} alt="New image"  class="card__abs__image"/>
                      </>
                    )
                  })}
                 

                <p class="card__category">{forecastData?.Headline?.Category}</p>
              </Card>
            </div>
            : ""
        }
      </Row>
      
    </div>
  );
};

export default HomePage;
