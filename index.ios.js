import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert
} from 'react-native';

export default class Receipts extends Component {
  constructor(props) {
    super(props); 
    this.state = { text: "" };
  }

  onButtonPress = () => {
    Alert.alert('Tallennettu!');
    this.setState({text: ""});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
          Syötä summa:
        </Text>
        <TextInput style={styles.input} 
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline = {false}
          placeholder="€"
        />
        <Button
          onPress={this.onButtonPress}
          title="Lähetä"
          color="blue"
        />
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
  largeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 60,
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'black', 
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('Receipts', () => Receipts);
