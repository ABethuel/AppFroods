// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import HeaderInscription from '../Components/HeaderInscription'
import {getOldProposition} from '../Data/commandsData'
import DisplayOldPropositions from '../Components/DisplayOldPropositions'

class OldPropositionsScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        
        <HeaderInscription/>

        <View style={styles.choice_tab}>
          <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate("MyDish")}>
            <Text style={styles.text}>Proposition en attente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text}>Anciennes propositions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <FlatList
            data={getOldProposition()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <DisplayOldPropositions proposition={item}/>}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor : '#ECFFFA', 
  },

  choice_tab: {
    flexDirection: 'row',
    flex : 0.2,
    marginTop: 50,
    justifyContent: 'center'
  },

  button1:{
    height: 27,
    backgroundColor: "#C4C4C4",
    margin : 8,
    marginTop: 60,
    borderRadius: 10
  },

  button2:{
    height: 27,
    backgroundColor: "#E0E0E0",
    margin : 8,
    marginTop: 60,
    borderRadius: 10
  },

  text: {
    fontFamily:'Quicksand-SemiBold',
    fontSize: 14,
    margin:6,
    marginTop:1,
    marginBottom:1
},

  container: {
    flex : 2,
    marginTop: 50,
    marginBottom:10,
  }
})

export default OldPropositionsScreen