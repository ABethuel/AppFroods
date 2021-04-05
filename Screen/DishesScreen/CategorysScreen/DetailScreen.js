// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import HeaderInscription from '../../../Components/HeaderInscription'
import { connect } from 'react-redux'

class DetailScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dish: undefined,
      isLoading: true
    }
  }

  componentDidMount(){
    this.setState({
      dish: this.props.route.params,
      isLoading: true
    })
  }

  componentDidUpdate() {
    console.log(this.props.commandMade)
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayAddRemoveBtn() {
    if (this.props.commandMade.findIndex(item => item.idDish === this.state.dish.idDish) !== -1){
      return(
        <View>
          <Text style={styles.text_add}>Annuler la commande</Text>
        </View>
      )
    }
    else {
      return(
        <Text style={styles.text_add}>Commander le plat</Text>
      )
    }
  }

  _displayShowCommand() {
    if (this.props.commandMade.findIndex(item => item.idDish === this.state.dish.idDish) !== -1){
      return(
        <TouchableOpacity 
          style={styles.btn_show}
          onPress={() => this.props.navigation.navigate('ActualCommand')}>
          <Text style={styles.text_add}>Voir la commande</Text>
        </TouchableOpacity>
      )
    }
  }

  _toggleCommand() {
    const action = { type: 'TOGGLE_COMMAND', value: this.state.dish}
    this.props.dispatch(action)
  }

  _displayDetail() {
    const {idDish, Name, Date, From, Price, Category, Adress, Description, IMage} = this.props.route.params
    if (this.state.dish != undefined) {
      return (
        <ScrollView>
          <View style={styles.dish_container}>
           <Image
            style={styles.image_dish}
            source={{uri: IMage}}
          />
          <View style={styles.text_container}>
            <Text style={styles.text_name}>{Name}</Text>
            <Text style={styles.text_price}>{Price}P</Text>
            <Text style={styles.text_description}>{Description}</Text>
            <Text style={styles.text_caracteristics}>Catégorie : {Category}</Text>
            <Text style={styles.text_caracteristics}>De : {From}</Text>
            <Text style={styles.text_adress}>Adresse : {Adress}</Text>
            </View>
          </View>
  
          <TouchableOpacity 
            style={styles.add_container} 
            onPress={() => this._toggleCommand()}>
            {this._displayAddRemoveBtn()}
          </TouchableOpacity>

          {this._displayShowCommand()}
  
        </ScrollView>
        
      )
    }
  }

  render() {
    return(
      <View style={styles.main_container}>
        <HeaderInscription/>
  
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
            <Image style={styles.image} source={require('../../../images/back.png')}/>
          </TouchableOpacity>
          <Text style={styles.text}>Détail du plat</Text>
        </View>

        <View style={styles.container}>
          {this._displayLoading()}
          {this._displayDetail()}
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

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container:{
    flex:1
  },

  dish_container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#57B8FF',
    margin: 20,
    marginTop: 30,
    borderRadius: 10
  },

  image_dish:{
    height: 180, 
    width:'95%',
    margin: 5,
    marginTop: 8,
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
    margin : 7
  },

  text_name:{
    fontFamily:'Quicksand-Bold', 
    fontSize:20,
    textAlign:'center', 
    marginBottom : 3,
  },

  text_price:{
    fontSize: 16, 
    fontFamily: 'Quicksand-SemiBold',
    textAlign:'center',
    marginBottom : 6
  },

  text_description:{
    fontFamily: 'Quicksand-Medium', 
    fontSize: 16, 
    textAlign : 'center',
    fontStyle:'italic', 
    marginBottom : 6
  }, 

  text_caracteristics:{
    fontFamily:'Quicksand-Medium',
    textAlign:'center',
    fontSize:15
  }, 

  text_adress:{
    fontFamily:'Quicksand-Medium',
    textAlign:'center',
    fontSize:15,
    marginBottom:5
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
    margin: 20,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 10
  },

  btn_show:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#57B8FF',
    margin: 20,
    marginBottom: 25,
    borderRadius: 10
  },
})

const mapStateToProps = (state) => {
  return {
    commandMade: state.commandMade
  }
}

export default connect(mapStateToProps)(DetailScreen)