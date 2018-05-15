import React, {Component} from 'react';
import {SectionList, Text, View} from "react-native";

export default class SectionListTest extends Component{
    render(){
        return(
            <View>
                <SectionList
                    sections={[
                    {title: 'D', data: ['Devin']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},]}
                    renderItem={({item}) => <Text>{item}</Text>}
                    renderSectionHeader={({section}) => <Text>{section.title}</Text>}>
                </SectionList>
            </View>
        );
    }
}