import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const MyWebComponent = () => {
  return <WebView source={{uri: 'https://reactnative.dev/'}} />;
};

export default MyWebComponent;
