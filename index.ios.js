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
import FlatListTest from "./App/09_FlatList/FlatList";
import SectionListTest from "./App/10_SectionList/SectionListTest";


AppRegistry.registerComponent('MyRNApp', () => SectionListTest);
