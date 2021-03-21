// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import HeaderInscription from '../../Components/HeaderInscription'

class AllComandsScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        
        <HeaderInscription/>

        <View style={styles.choice_tab}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.text}>Commande en cours</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text}>Commandes passées</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={{fontFamily:'Quicksand-Bold', fontSize:20}}>Pas de commandes en cours !</Text>
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
    alignItems:'center',
    justifyContent:'center',
    flex : 2,
  }
})

export default AllComandsScreen