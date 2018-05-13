import React, {Component} from "react";
import {Image, Text, View} from "react-native";

class Greetings extends Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    )
  };
}

export default class Props extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Greetings name='Greetings'/>
            </View>
        );
    }
}

