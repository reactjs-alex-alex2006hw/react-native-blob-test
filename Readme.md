# react-native-blob-test

> An example project to test out work being done on bringing https://github.com/silklabs/silk/tree/master/react-native-blobs upstream to React Native.

Start dev server with:
```bash
$ npm run dev
```

Then, proceed normally with `react-native start`.

## Tests

To test specific case, require it from `index.common.js` first.

### Case 1

> src/case-one.js

Websocket connection will open automatically and message will be delivered right after message is
established.