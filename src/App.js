import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Mention from "./Mention";
import apiData from "./apiData.json"

const ACCOUNT_ID = apiData.ACCOUNT_ID;
const ALERT_ID = apiData.ALERT_ID;
const ACCESS_TOKEN = apiData.ACCESS_TOKEN;

const MENTIONS_LIST_URL = `https://web.mention.com/api/accounts/${ACCOUNT_ID}/alerts/${ALERT_ID}/mentions?access_token=${ACCESS_TOKEN}`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mentions: [],
    };
  }

  componentDidMount() {
    fetch(MENTIONS_LIST_URL).then((response) => {
      response.json().then((data) => {
        this.setState({
          mentions: data.mentions
        })
      });
    });
  }

  render() {
    const { mentions } = this.state;
    return (
      <div>
        <Container maxWidth="sm">
          {mentions.map(mention =>
            <Mention 
            title={mention.title} 
            description_medium={mention.description_medium} 
            created_at={mention.created_at} 
            picture_url={mention.picture_url}
            source_name={mention.source_name}
            source_type={mention.source_type}
            source_url={mention.source_url}
            key={mention.id} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
