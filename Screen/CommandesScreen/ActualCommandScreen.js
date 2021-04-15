// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import HeaderInscription from '../../Components/HeaderInscription'
import { connect } from 'react-redux'
import DisplayAllCommands from '../../Components/DisplayAllCommands'
import { FlatList } from 'react-native-gesture-handler'



class ActualCommandScreen extends React.Component {

  _displayDetail= (id, name, date, from, price, category, adress, description, image) => {
    this.props.navigation.navigate("DetailActual", {id: id, name: name, date: date, from: from, price: price, category: category, adress: adress, description: description, image:image})
  }

  _display() {
    if (this.props.commandMade.length === 0) {
      return (
        <View style={styles.empty_container}>
          <Text style={{fontFamily:'Quicksand-Bold', fontSize:20}}>Pas de commandes en cours !</Text>
        </View>
    )}
    else {
      return(
        <View style={styles.container}>
          <FlatList
            data={this.props.commandMade}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <DisplayAllCommands command={item} displayDetail={this._displayDetail}/>}
          />
        </View>
      )

    }
  }

  render() {
    return (
      <View style={styles.main_container}>

        <HeaderInscription/>

        <View style={styles.choice_tab}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text}>Commandes en cours</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate("AllCommands")}>
            <Text style={styles.text}>Commandes passées</Text>
          </TouchableOpacity>
        </View>
        
        
        {this._display()}
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor : '#ECFFFA', 
  },

  choice_tab: {
    flexDirection: 'row',
    flex : 0.2,
    marginTop: 50,
    justifyContent: 'center'
  },

  button1:{
    height: 27,
    backgroundColor: "#C4C4C4",
    margin : 8,
    marginTop: 60,
    borderRadius: 10
  },

  button2:{
    height: 27,
    backgroundColor: "#E0E0E0",
    margin : 8,
    marginTop: 60,
    borderRadius: 10
  },

  text: {
    fontFamily:'Quicksand-SemiBold',
    fontSize: 14,
    margin:6,
    marginTop:1,
    marginBottom:1
},

  container: {
  flex : 2,
  marginTop: 50,
  marginBottom:10,
  }, 

  empty_container: {
    alignItems:'center',
    justifyContent: 'center',
    fontFamily:'Quicksand-Bold'
  },
})

const mapStateToProps = (state) => {
  return {
    commandMade: state.toggleCommand.commandMade
  }
}

export default connect(mapStateToProps)(ActualCommandScreen)