// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
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
            <TextInput style={styles.text_input} placeholder='Rechercher un plat'/>
          </View>

          <View style={styles.container}>
            
            <View style={styles.line}>
              <TouchableOpacity style={styles.cadre}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/sandwich.png')}/>
                <Text style={styles.text}>Sandwich</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.cadre}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/salad.png')}/>
                <Text style={styles.text}>Salades</Text>
              </TouchableOpacity> 
            </View>

            <View style={styles.line}>
              <TouchableOpacity style={styles.cadre}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/pizza.png')}/>
                <Text style={styles.text}>Italien</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.cadre}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/asian.png')}/>
                <Text style={styles.text}>Asiatique</Text>
              </TouchableOpacity> 
            </View>

            <View style={styles.line}>
              <TouchableOpacity style={styles.cadre}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/vegan.png')}/>
                <Text style={styles.text}>Vegan</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.cadre} onPress={() => this.props.navigation.navigate("All")}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/all.png')}/>
                <Text style={styles.text}>Tous les plats</Text>
              </TouchableOpacity> 
            </View>

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
    flex: 1,
    alignItems:'center',
    marginTop:12
  },

  header:{
    marginTop : 110,
    margin: 35,
    flexDirection : 'row'
  },

  text_input: {
    height : 28,
    width : '85%',
    backgroundColor: '#C4C4C4',
    borderRadius : 20,
    textAlign : 'center',
    fontFamily:'Quicksand-Bold',
    marginLeft : 20,
    justifyContent:'center'
  },

  line :{
    flexDirection:'row'
  } ,

  images: {
    width: 100,
    height: 100,
    marginTop : 4,
    margin: 18,
    marginBottom:0
   
  },

  image: {
    height:28,
    width:28,
  },

  cadre:{
    backgroundColor:'#57B8FF',
    marginLeft : 15,
    marginRight : 15,
    marginBottom:38,
    borderRadius:10,
  },

  text: {
    fontFamily:'Quicksand-Bold',
    textAlign:'center',
    fontSize: 18,
    marginBottom:8
  }
  
})

export default ChoiceDishScreen