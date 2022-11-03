import React, { useState } from "react";
import { Input, Row, Col } from 'antd';

import { getLocationApi } from '../../../services';



const { Search } = Input;

const CitySearchComponent = (props) => {
  const { handleCitySelection } = props;
  const [cities, setCities] = useState();
  const [loading, setLoading] = useState(false)

  const fetchLocation = (val) => {
    if (val?.length < 3 || loading) {
      return
    }
    setLoading(true)
    getLocationApi({
      keyword: val,
      finalCallback: () => {
        setLoading(false)
      },
      successCallback: (response) => {
        if (response) {
          setCities(response)
          handleCitySelection(response[0])
        }
      }
    })

  }

  return (
    <>
      <Row>
        <Col span={24}>
          <Search
            placeholder="Enter the name of a city"
            onSearch={fetchLocation}
            size="large"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchLocation(e.target.value)
              }
            }}
            className="wrapper__search-input"
            allowClear
            loading={loading}
          />
        </Col>
      </Row>
    </>
  );
};

export default CitySearchComponent;
