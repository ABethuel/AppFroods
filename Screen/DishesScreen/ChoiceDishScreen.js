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
            <Text style={styles.text_title}>Catégories</Text>

          </View>

          <View style={styles.container}>
            
            <View style={styles.line}>
              <TouchableOpacity style={styles.cadre} onPress={() => this.props.navigation.navigate("Sandwich")}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/sandwich.png')}/>
                <Text style={styles.text}>Sandwich</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.cadre} onPress={() => this.props.navigation.navigate("Salads")}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/salad.png')}/>
                <Text style={styles.text}>Salades</Text>
              </TouchableOpacity> 
            </View>

            <View style={styles.line}>
              <TouchableOpacity style={styles.cadre} onPress={() => this.props.navigation.navigate("Italian")}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/pizza.png')}/>
                <Text style={styles.text}>Italien</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.cadre} onPress={() => this.props.navigation.navigate("Asian")}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/asian.png')}/>
                <Text style={styles.text}>Asiatique</Text>
              </TouchableOpacity> 
            </View>

            <View style={styles.line}>
              <TouchableOpacity style={styles.cadre} onPress={() => this.props.navigation.navigate("Vegan")}>
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
    marginTop:40
  },

  header:{
    marginTop : 110,
    flexDirection : 'row'
  },

  text_title: {
    fontSize:19,
    fontFamily:'Quicksand-Bold',
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
    height:33,
    width:33,
    marginLeft: 35,
    marginRight: 20
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