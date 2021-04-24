// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, FlatList, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {getAllDishes} from '../../../Data/commandsData'
import DisplayAsian from '../../../Components/DisplayAsian'
import HeaderComponent from '../../../Components/HeaderComponent'



class AsianScreen extends React.Component {

  _displayDish = (id, name, date, from, price, category, adress, description, image) => {
    this.props.navigation.navigate("Detail", {id: id, name: name, date: date, from: from, price: price, category: category, adress: adress, description: description, image:image})
  }

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderComponent/>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={styles.image} source={require('../../../images/back.png')}/>
          </TouchableOpacity>
          <Text style={styles.text}>Plats asiatiques</Text>
        </View>
          
        <View style={styles.container}>
          <FlatList
            data={getAllDishes()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <DisplayAsian command={item} displayDish={this._displayDish}/>}
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

export default AsianScreen