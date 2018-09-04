import React from 'react';
import { View, Text } from 'react-native';
import CookiesManager from 'react-native-cookies';

/**
 * Tests whether CookiesManager.get can work even if there is
 * no WebView present in the same component
 */

export default class CookiesManagerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cookies: '', url: 'https://m.facebook.com' };
  }

  componentDidMount() {
    const { url } = this.state;
    CookiesManager.get(url)
      .then((res) => {
        console.log('can get cookies: ', res);
        this.setState({ cookies: res });
      })
      .catch((err) => {
        console.log('cannot get cookies: ', err);
        this.setState({ cookies: err });
      });
  }

  render() {
    const { url, cookies } = this.state;
    return (
      <View>
        <Text>URL: {url}</Text>
        <Text>Cookies: {JSON.stringify(cookies)}</Text>
      </View>
    );
  }
}
