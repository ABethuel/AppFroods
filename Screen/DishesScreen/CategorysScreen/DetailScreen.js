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
      isLoading: false
    })
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
    if (this.props.commandMade.findIndex(item => item.id === this.state.dish.id) !== -1){
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
    if (this.props.commandMade.findIndex(item => item.id === this.state.dish.id) !== -1){
      return(
        <TouchableOpacity 
          style={styles.btn_show}
          onPress={() => this.props.navigation.navigate('Commandes')}>
          <Text style={styles.text_add}>Voir la commande</Text>
        </TouchableOpacity>
      )
    }
  }

  _toggleCommand() {
    const action_command = { type: 'TOGGLE_COMMAND', value: this.state.dish}
    const action_money = { type: 'GET_COIN', value: 2}
    this.props.dispatch(action_command)
    this.props.dispatch(action_money)
    console.log(this.props.coin)
  }

  _displayDetail() {
    const {id, name, date, from, price, category, adress, description, image} = this.props.route.params
    if (this.state.dish != undefined) {
      return (
        <ScrollView>
          <View style={styles.dish_container}>
           <Image
              style={styles.image_dish}
              source={{uri: image}}
          />
            <View style={styles.text_container}>
              <Text style={styles.text_name}>{name}</Text>
              <Text style={styles.text_price}>{price}P</Text>
              <Text style={styles.text_description}>{description}</Text>
              <Text style={styles.text_caracteristics}>Catégorie : {category}</Text>
              <Text style={styles.text_caracteristics}>De : {from.firstName} {from.lastName}</Text>
              <Text style={styles.text_adress}>Adresse : {adress}</Text>
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
    borderRadius: 10,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
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
    margin: 5,
    marginBottom: 8
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
    borderRadius: 10,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  btn_show:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#57B8FF',
    margin: 20,
    marginBottom: 25,
    borderRadius: 10,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
})

const mapStateToProps = (state) => {
  return {
    commandMade: state.toggleCommand.commandMade,
    coin: state.getMoney.coin
  }
}

export default connect(mapStateToProps)(DetailScreen)