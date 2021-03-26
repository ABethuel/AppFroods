// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import HeaderInscription from '../../Components/HeaderInscription'

class ChoiceDishScreen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderInscription/>
          <TextInput style={styles.text_input} placeholder='Rechercher un plat'/>

          <View style={styles.container}>
            
            <View style={styles.line}>
              <View style={styles.sandwich}>
                <Image style={styles.images} source={require('../../images/CategoryIcons/sandwich.png')}/>
                <Text style={styles.text}>Sandwich</Text>
              </View> 
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
  },

  line :{
    flexDirection:'row'
  } ,
  
  sandwich:{
    flex:1
  },

  images: {
    width: 150,
    height: 150,
    backgroundColor:'gray'
   
  },

  text: {

  }
  
})

export default ChoiceDishScreen