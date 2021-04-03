// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, FlatList, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import HeaderInscription from '../../../Components/HeaderInscription'
import {getAllDishes} from '../../../Data/commandsData'
import DisplayVegan from '../../../Components/DisplayVegan'



class VeganScreen extends React.Component {

  _displayDish = (idDish, Name, Date, From, Price, Category, Adress, Description, IMage) => {
    this.props.navigation.navigate("Detail", {idDish:idDish, Name:Name, Date: Date, From:From, Price:Price, Category:Category, Adress:Adress, Description:Description, IMage:IMage})
  }

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderInscription/>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={styles.image} source={require('../../../images/back.png')}/>
          </TouchableOpacity>
          <Text style={styles.text}>Plats vegans</Text>
        </View>
          
        <View style={styles.container}>
          <FlatList
            data={getAllDishes()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <DisplayVegan command={item} displayDish={this._displayDish}/>}
          />
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
  
    container: {
      flex : 2,
      marginTop: 15,
      marginBottom:10,
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

    text:{
      fontSize:19,
      fontFamily:'Quicksand-Bold'
    }
  })

export default VeganScreen