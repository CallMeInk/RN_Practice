import React, {Component} from 'react';
import {FlatList, Text, View} from "react-native";

export default class FlatListTest extends Component{
    render(){
        return(
          <View>
              {/*<FlatList*/}
                {/*data={[{key: 1},{key: 2},{key: 3},{key: 4},{key: 5}]}*/}
                {/*renderItem={({item}) => <Text>{item.key}</Text>}>*/}

              {/*</FlatList>*/}
              <FlatList
                  data={[1, 2, 3, 4, 5]}
                  renderItem={({item}) => <Text style={{marginTop: 100}}>default</Text>}>

              </FlatList>
          </View>
        );
    }
}