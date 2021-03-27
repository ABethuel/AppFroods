// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderInscription from '../../../Components/HeaderInscription'

class AllScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderInscription/>
          <View style={styles.container}>
            <Text style={{fontFamily:'Quicksand-Bold', fontSize:20}}>Tous les plats</Text>
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
  }
  
})

export default AllScreen