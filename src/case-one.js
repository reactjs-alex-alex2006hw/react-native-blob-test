import React from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';

class CaseOneDemo extends React.Component {
  state = {
    blob: null,
  };

  componentDidMount() {
    const ws = this.ws = new WebSocket('ws://localhost:7232');
    ws.binaryType = 'blob';

    ws.onerror = (error) => {
      console.error(error);
    };

    ws.onmessage = (e) => {
      console.log(e.data);
      this.setState({ blob: e.data });
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    const { blob } = this.state;

    if (!blob) {
      return null;
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ID: {blob.blobId}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('BlobTest', () => CaseOneDemo);
