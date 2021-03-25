// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import HeaderInscription from '../../Components/HeaderInscription'

class ChoiceDishScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderInscription/>
          <TextInput style={styles.text_input} placeholder='Rechercher un plat'/>

          <View style={styles.container}>
            <Text style={{fontFamily:'Quicksand-Bold', fontSize:20}}>Séléction catégorie</Text>
          </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'#ECFFFA'
  },

  container:{
    flex: 10,
    justifyContent:'center',
    alignItems:'center'
  },

  text_input: {
    height : 28,
    marginTop : 110,
    margin: 35,
    backgroundColor: '#C4C4C4',
    borderRadius : 20,
    textAlign : 'center',
    fontFamily:'Quicksand-Bold'
  }

  
  
})

export default ChoiceDishScreen