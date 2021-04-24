import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import DisplayMyPropositions from '../Components/DisplayMyPropositions'
import HeaderComponent from '../Components/HeaderComponent'


class MyPropositionDishScreen extends React.Component {

  _displayDetail= (id, image, name, description, category, adress, price) => {
    this.props.navigation.navigate("DetailProposition", {id: id, image: image, name: name, description, category, adress, price})
  }

  _display() {
    if (this.props.propositionCommand.length === 0){
      return(
        <View style={styles.empty_container}>
          <Text style={{fontFamily:'Quicksand-Bold', fontSize:20}}>Aucun plat proposé !</Text>
        </View>
      )
    }
    else {
      return(
        <View style={styles.container}>
          <FlatList
            data={this.props.propositionCommand}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <DisplayMyPropositions command={item} displayDetail={this._displayDetail}/>}
          />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        
        <HeaderComponent/>

        <View style={styles.choice_tab}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text}>Proposition en attente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate("OldPropositions")}>
            <Text style={styles.text}>Anciennes propositions</Text>
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
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    fontFamily:'Quicksand-Bold'
    }
  })
  
  const mapStateToProps = (state) => {
    return {
      propositionCommand: state.toggleProposition.propositionCommand
    }
  }
  
  export default connect(mapStateToProps)(MyPropositionDishScreen)
