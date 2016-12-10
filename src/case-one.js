import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

const socket = new WebSocket('ws://localhost:7273');

class CaseOneDemo extends React.Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

AppRegistry.registerComponent('BlobTest', () => CaseOneDemo);