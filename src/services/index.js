import * as urlConstants from '../constants/url';
import { getApiCall } from '../utils/serviceBase.utils';
import { catchErrors } from '../utils/catchErrors.utils';

export const getLocationApi = ({
  finalCallback,
  keyword,
  successCallback
}) => {
  let url = `${urlConstants?.LOCATION}?apikey=${urlConstants?.API_KEY}&q=${keyword}`;
  getApiCall({ url: url })
    .then((responseJson) => {
      successCallback(responseJson)
    })
    .catch(err => {
      catchErrors(err, url)
    })
    .finally(() => {
      finalCallback()
    })
}


export const getForecastApi = ({
  finalCallback,
  locationKey,
  successCallback
}) => {
  let url = `${urlConstants?.FORECAST}/${locationKey}?apikey=${urlConstants?.API_KEY}&details=true&metric=true`;
  getApiCall({ url: url })
    .then((responseJson) => {
      successCallback(responseJson)
    })
    .catch(err => {
      catchErrors(err, url)
    })
    .finally(() => {
      finalCallback()
    })
}