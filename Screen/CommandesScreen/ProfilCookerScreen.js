import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderInscription from '../../Components/HeaderInscription'
import { Ionicons } from '@expo/vector-icons';


class ProfilCookerScreen extends React.Component {

    call() {
      Alert.alert('Appel du cuisinier')
    }

    render() {
      console.log(this.props.route.params)
      const {email, firstName, lastName, picture, telephone} = this.props.route.params.from
      return (
        <View style={styles.main_container}>
          
          <HeaderInscription/>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("ActualCommand")}>
              <Image style={styles.image} source={require('../../images/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>Profil du cuisinier</Text>
          </View>
          
          <ScrollView>
            <View style={styles.container}>
              <Image
                style={styles.profil}
                source={{uri: picture}}/>
              <Text style={styles.text_name}>{firstName} {lastName}</Text>
              <Text style={styles.text_data}>Telephone : {telephone}</Text>
              <Text style={styles.text_data}>Email : {email}</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => this.call()}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="call" size={24} color="black"  />
                <Text style={styles.btn_text}>Contacter</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        
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
  
    container:{
      flex: 1,
    }, 
  
    profil: {
      height: 165,
      width: 165,
      borderRadius: 8941423486,
      marginTop: 30,
      alignSelf:'center',
      marginBottom:30
    },
  
    text_name: {
      fontFamily:'Quicksand-Bold', 
      fontSize:22,
      textAlign: 'center', 
      flexWrap: 'wrap',
      marginBottom: 30
    }, 
  
    text_data: {
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
      marginTop:2, 
      marginLeft: 12
    }
  })
  
  export default ProfilCookerScreen
