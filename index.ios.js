/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';


import HelloWorldApp from "./App/01_HelloWorld/HelloWorld";
import Props from "./App/02_Props/Props";
import State from "./App/03_State/State";
import Style from "./App/04_Style/Style";
import HeightAndWidth from "./App/05_Height&Width/HeightAndWidth";
import FlexBox from "./App/06_FlexBox/FlexBox";
import InputText from "./App/07_InputText/InputText";
import ScrollViewTest from "./App/08_ScollView/ScrollView";


// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { showText: true };
//
//         // 每1000毫秒对showText状态做一次取反操作
//         setInterval(() => {
//             this.setState(previousState => {
//                 return { showText: !previousState.showText };
//             });
//         }, 1000);
//     }
//
//     render() {
//         // 根据当前showText的值决定是否显示text内容
//         let display = this.state.showText ? this.props.text : ' ';
//         return (
//             <Text>{display}</Text>
//         );
//     }
// }

// export default class MyRNApp extends Component {
//   render() {
//     let pic = {
//         uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//         <View style={{alignItems:'center'}}>
//             <Greetings name='first name'/>
//             <Greetings name='second name'/>
//             <Greetings name='third name'/>
//             <Image source={pic} style={{width: 193, height: 110}} />
//             <Blink text='1111111'/>
//             <Blink text='2222222'/>
//             <Text style={styles.bigblue}>big blue</Text>
//             <View style={{width:50, height:100, backgroundColor:'#ff6913'}}/>
//         </View>
//     );
//   }
// }

// export default class Flex extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {text: '1111'}
//     }
//     render() {
//         return (
//             <View>
//                 <View style={{width:50, height:100, backgroundColor:'#ff0000'}}/>
//                 <View style={{width:50, height:100, backgroundColor:'#00ff00'}}/>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42, backgroundColor:'#00ff00'}}>
//                     {this.state.text}
//                 </Text>
//                 <ScrollView>
//                     <View style={{width:100, height:200, backgroundColor:'#4289ff'}}/>
//                     <View style={{width:100, height:200, backgroundColor:'#ff6913'}}/>
//                     <View style={{width:100, height:200, backgroundColor:'#4289ff'}}/>
//                     <View style={{width:100, height:200, backgroundColor:'#ff6913'}}/>
//                     <View style={{width:100, height:200, backgroundColor:'#4289ff'}}/>
//                     <View style={{width:100, height:200, backgroundColor:'#ff6913'}}/>
//                 </ScrollView>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//     bigblue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'red',
//     },
// });


AppRegistry.registerComponent('MyRNApp', () => ScrollViewTest);
