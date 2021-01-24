import React, { Component } from 'react';
import axios from 'axios';
import LogoutButton from './LogoutButton';

const GET_SURVEY_PRICES_URL = 'https://sdcemt6dv2.execute-api.ap-southeast-2.amazonaws.com/Prod/mbie_survey_prices';
const XLSX_VIEWER_URL = 'https://view.officeapps.live.com/op/embed.aspx?src=';

class Survey extends Component {
  state = {
    s3Url: '',
    day: '',
    month: '',
    yea: '',
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const values = await axios.get(GET_SURVEY_PRICES_URL);
    this.setState({ ...values.data });
  }

  render() {
    const iFrameSrc = `${XLSX_VIEWER_URL}${this.state.s3Url}`
    const uniqueTitle = `${this.state.day}-${this.state.month}-${this.state.year}`

    return (
      <div>
        <LogoutButton/>
        <br/>

        <h3>Quarterly Survey of domestic electricity Prices (QSDEP)</h3>
        <div>Prices to {this.state.day} {this.state.month} {this.state.year}</div>
        <br/>

        <div className="survey-container">
          <iframe className="suvey-iframe" src={iFrameSrc} title={uniqueTitle}></iframe>
        </div>
      </div>
    );
  }
}

export default Survey;
