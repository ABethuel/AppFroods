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
          
          

          <View style={styles.container}>
            <Text style={{fontFamily:'Quicksand-Bold', fontSize:20}}>Proposer un plat</Text>
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

  
})

export default ChoiceDishScreen