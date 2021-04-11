// Components/Favorites.js

import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import HeaderInscription from '../../Components/HeaderInscription'

class ChoiceDishScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderInscription/>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
              <Image style={styles.image} source={require('../../images/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.text_title}>Proposer un plat</Text>
          </View>

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.image_container}>
              <TouchableOpacity>
                <ImageBackground style={styles.add_image} source={require('../../images/add.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.questionnaire}>
              <View style={styles.title}>
                <Text style={{marginRight: 5, fontFamily: 'Quicksand-Bold', fontSize: 18}}>Nom du plat :</Text>
                <TextInput style={styles.input_title} placeholder='Saisir le nom du plat'/>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.btn_add}>
            <Text style={styles.text_add}>Soumettre la commande</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'#ECFFFA'
  },

  header:{
    marginTop : 110,
    flexDirection : 'row'
  },

  text_title: {
    fontSize:19,
    fontFamily:'Quicksand-Bold',
  },

  image: {
    height:33,
    width:33,
    marginLeft: 35,
    marginRight: 20
  },

  container:{
    flex: 1,
    backgroundColor: '#57B8FF',
    marginTop: 40,
    margin: 20,
    borderRadius: 10,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  image_container: {
    height: 200, 
    margin: 15,
    width:'90%',
    borderRadius: 10,
    backgroundColor: '#DDDDDD'
  },

  add_image: {
    height: 130,
    width: 130,
    alignSelf: 'center',
    margin: 40
  },

  btn_add:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#57B8FF',
    margin: 20,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 10,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  text_add:{
    fontFamily:'Quicksand-Bold', 
    fontSize:20,
    textAlign:'center',
    margin: 5,
    marginBottom: 8
  },

  questionnaire: {
    marginLeft: 15, 
    marginRight: 15
  },

  title: {
    flexDirection: 'row'
  },

  input_title: {
    fontFamily: 'Quicksand-SemiBold',
    backgroundColor: '#DDDDDD',
    borderRadius: 18,
    width: '55%'
  
  }
})

export default ChoiceDishScreen