import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
export default class App extends Component{
    static navigationOptions = { header: null};
        render() {
        return (
        <View style={styles.container}>

            <Image
                style={{width: 150, height: 150, borderRadius: 90}}
                source={{uri: 'https://avatars3.githubusercontent.com/u/41560305?s=400&u=cd75039e1f145bda4c62c8a188c2ba4aafdd5378&v=4'}}
            />
            <Text style={styles.name}>
                DZUHRI ANDIKA PUTRA SUSANTO
            </Text>
            <Text style={styles.instructions}>
                Kelas XII RPL 2
            </Text>
            <Text style={styles.instructions}>
                No.Absen 15
            </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});