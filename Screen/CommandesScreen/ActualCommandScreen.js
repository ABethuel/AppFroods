// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderInscription from '../../Components/HeaderInscription'

class ActualCommandScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderInscription/>
        <View style={styles.text}>
          <Text>Pas de commandes en cours !</Text>
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

  text: {
    alignItems:'center',
    justifyContent:'center',
    flex : 1
  }
})

export default ActualCommandScreen