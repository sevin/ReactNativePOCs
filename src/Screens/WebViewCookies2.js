import React from 'react';
import {
  WebView, View, Text, ScrollView
} from 'react-native';
import CookieManager from 'react-native-cookies';

export default class WebViewCookies2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uri: 'https://www.google.com', onLoadEndUrl: '', cookie: '' };
  }

  render() {
    const { uri, onLoadEndUrl, cookie } = this.state;

    return (
      <View
        style={{ flex: 1 }}
      >
        <WebView
          source={{ uri }}
          onLoadEnd={(obj) => {
            // console.log('onLoadEnd');
            // console.log('obj', obj);
            // console.log('obj.nativeEvent: ', obj.nativeEvent);
            const { nativeEvent: { url } } = obj;
            // console.log('url: ', url);
            CookieManager.get(url)
              .then((res) => {
                // console.log('CookieManager.get =>', res); // => 'user_session=abcdefg; path=/;'
                this.setState({ onLoadEndUrl: url, cookie: res });
              })
              .catch((err) => {
                // console.log('CookieManger.get error =>', err);
                this.setState({ onLoadEndUrl: url, cookie: err });
              });
          }}
        />
        <View
          style={{ height: 200 }}
        >
          <View
            style={{ backgroundColor: 'red', height: 3 }}
          />
          <ScrollView>
            <Text>URL - {onLoadEndUrl}</Text>
            {
              cookie !== ''
              && <Text>Cookies - {JSON.stringify(cookie)}</Text>
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
