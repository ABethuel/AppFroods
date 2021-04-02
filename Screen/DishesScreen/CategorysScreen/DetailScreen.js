// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderInscription from '../../../Components/HeaderInscription'

class DetailScreen extends React.Component {

  render() {
    
    console.log(this.props.route)
    const {idDish, Name, date, From, Price, Category, Adress, Description, Image} = this.props.route.params

    return (
      <View style={styles.main_container}>
        <HeaderInscription/>
        <View style={styles.container}>
          <Text style={{fontFamily:'Quicksand-Bold', fontSize:20}}>Detail du plat {idDish}</Text>
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

export default DetailScreen