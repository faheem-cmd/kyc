import React from 'react';
import {
  SafeAreaView,
  Text,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() =>
          NativeModules.ToastExample.show(
            'hello',
            err => {
              alert(err);
            },
            message => {
              alert(message);
            },
          )
        }>
        <Text>click</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
