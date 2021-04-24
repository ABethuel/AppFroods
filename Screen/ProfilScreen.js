// Components/Favorites.js

import React from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import HeaderComponent from '../Components/HeaderComponent'
import HeaderInscription from '../Components/HeaderInscription'
import {getProfil} from '../Data/commandsData'



class ProfilScreen extends React.Component {

  _editProfil() {
    Alert.alert('Modifier le profil')
  }

  render() {
    const profil = getProfil()
    return (
      <ScrollView style={styles.main_container}>
        <HeaderComponent/>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: profil.image}}/>
            <Text style={styles.text_name}>{profil.firstname} {profil.lastname}</Text>
            <Text style={styles.text}>Adresse : {profil.adresse}</Text>
            <Text style={styles.text}>Telephone : {profil.telephone}</Text>
            <Text style={styles.text}>Email : {profil.email}</Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => this._editProfil()}>
            <Text style={styles.btn_text}>Modifier le profil</Text>
          </TouchableOpacity>
      </ScrollView>
      
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

  }, 

  image: {
    height: 165,
    width: 165,
    borderRadius: 8941423486,
    marginTop: 125,
    alignSelf:'center',
    marginBottom:30,
    backgroundColor: '#57B8FF'
  },

  text_name: {
    fontFamily:'Quicksand-Bold', 
    fontSize:22,
    textAlign: 'center', 
    flexWrap: 'wrap',
    marginBottom: 30
  }, 

  text: {
    fontFamily:'Quicksand-Medium', 
    fontSize:19,
    textAlign: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
    marginLeft: 15,
    marginRight:15,
    marginTop: 0
  },

  btn: {
    marginTop: 70,
    backgroundColor:'#57B8FF',
    margin: 50,
    borderRadius: 8,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  
  btn_text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
    marginBottom: 7,
    marginTop:2
  }
  
})

export default ProfilScreen