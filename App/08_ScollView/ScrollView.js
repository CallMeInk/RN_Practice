import React, { Component } from 'react';
import{ ScrollView, Image, Text, View } from 'react-native'

export default class ScrollViewTest extends Component {
    render() {
        return(
            <ScrollView style={{marginTop:100}}>
                <Text style={{fontSize:12}}>Scroll me plz</Text>
                <Image source={require('../../img/peiqi.jpg')} style={{width:100, height:100}} />
                <Image source={require('../../img/peiqi.jpg')} style={{width:100, height:100}}/>
                <Image source={require('../../img/peiqi.jpg')} style={{width:100, height:100}}/>
                <Image source={require('../../img/peiqi.jpg')} style={{width:100, height:100}}/>
                <Text style={{fontSize:12}}>If you like</Text>
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Text style={{fontSize:12}}>Scrolling down</Text>
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Text style={{fontSize:12}}>What's the best</Text>
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Text style={{fontSize:12}}>Framework around?</Text>
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Image source={require('../../img/peiqi.jpg')} />
                <Text style={{fontSize:12}}>React Native</Text>
            </ScrollView>
        );
    }
}