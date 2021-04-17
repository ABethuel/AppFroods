import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import HeaderInscription from '../../Components/HeaderInscription'


class ProfilCookerScreen extends React.Component {

    render() {
      return (
        <View style={styles.main_container}>
          
          <HeaderInscription/>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("ActualCommand")}>
              <Image style={styles.image} source={require('../../images/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>Profil du cuisinier</Text>
          </View>

          <View style={styles.container}>
            <Text style={{fontFamily:'Quicksand-Bold'}, {fontSize:16}}>Profil</Text>
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
    },
  
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    }
  })
  
  export default ProfilCookerScreen
