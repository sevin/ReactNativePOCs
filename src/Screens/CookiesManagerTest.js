import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import CookiesManager from 'react-native-cookies';

/**
 * 1. Tests whether CookiesManager.get can work even if there is
 * no WebView present in the same component
 * 2. Tests which WebVies's cookies are retrieved if there are two WebViews
 * in different components
 */

const facebookURL = 'https://m.facebook.com';
const googleURL = 'https://www.google.com';

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'grey'
  }
});

export default class CookiesManagerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cookies: '', url: facebookURL };
  }

  componentDidMount() {
    const { url } = this.state;
    this.getCookies(url);
  }

  getCookies(url) {
    CookiesManager.get(url)
      .then((res) => {
        console.log('url: ', url);
        console.log('can get cookies: ', res);
        this.setState({ url, cookies: res });
      })
      .catch((err) => {
        console.log('url: ', url);
        console.log('cannot get cookies: ', err);
        this.setState({ url, cookies: err });
      });
  }

  render() {
    const { url, cookies } = this.state;
    return (
      <View>
        <View
          style={{ flexDirection: 'row' }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.getCookies(facebookURL);
            }}
          >
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.getCookies(googleURL);
            }}
          >
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <Text>URL: {url}</Text>
        <Text>Cookies: {JSON.stringify(cookies)}</Text>
      </View>
    );
  }
}
