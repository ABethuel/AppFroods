// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import HeaderInscription from '../../../Components/HeaderInscription'

class DetailScreen extends React.Component {

  render() {

    console.log(this.props.route)
    const {idDish, Name, Date, From, Price, Category, Adress, Description, IMage} = this.props.route.params

    return (
      <View style={styles.main_container}>
        <HeaderInscription/>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={styles.image} source={require('../../../images/back.png')}/>
          </TouchableOpacity>
          <Text style={styles.text}>Détail du plat</Text>
        </View>

        <View style={styles.container}>
          <ScrollView>
            <View style={styles.dish_container}>
              <Image
                style={styles.image_dish}
                source={{uri: IMage}}
              />
              <View style={styles.text_container}>
                <Text style={styles.text_dish}>{Name}</Text>
                <Text style={styles.text_dish}>{Description}</Text>
                <Text style={styles.text_dish}>Catégorie : {Category}</Text>
                <Text style={styles.text_dish}>Prix : {Price}P</Text>
                <Text style={styles.text_dish}>De : {From}</Text>
                <Text style={styles.text_dish}>Où : {Adress}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.add_container}>
              <Text style={styles.text_add}>Commander le plat</Text>
            </TouchableOpacity>

          </ScrollView>
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
    flex:1
  },

  dish_container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#57B8FF',
    margin: 30,
    borderRadius: 10
  },

  image_dish:{
    height: 180, 
    width:'90%',
    margin: 10,
    borderRadius: 10
  },

  header: {
    flexDirection:'row',
    marginTop:120
  },

  image: {
    height:33,
    width:33,
    marginLeft: 25,
    marginRight: 20
  },

  text_container: {
    margin : 10
  },

  text_dish:{
    fontFamily:'Quicksand-Bold', 
    fontSize:20,
    textAlign:'center'
  },

  text_add:{
    fontFamily:'Quicksand-Bold', 
    fontSize:20,
    textAlign:'center',
    margin: 5
  },

  text:{
    fontSize:19,
    fontFamily:'Quicksand-Bold'
  },

  add_container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#57B8FF',
    margin: 30,
    borderRadius: 10
  },
})

export default DetailScreen