// Components/Favorites.js

import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import HeaderInscription from '../../Components/HeaderInscription'

class ChoiceDishScreen extends React.Component {

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  

  render() {
    return (
      <View style={styles.main_container}>
        <HeaderInscription/>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
              <Image style={styles.image} source={require('../../images/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.text_title}>Proposer un plat</Text>
          </View>

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.image_container}>
              <TouchableOpacity>
                <ImageBackground style={styles.add_image} source={require('../../images/add.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.questionnaire}>
              <View style={styles.input_block}>
                <Text style={{marginRight: 5, fontFamily: 'Quicksand-Bold', fontSize: 18}}>Nom du plat :</Text>
                <TextInput style={styles.input} placeholder='Saisir le nom du plat' clearButtonMode='always'/>
              </View>
              <View style={styles.input_block}>
                <Text style={{marginRight: 5, fontFamily: 'Quicksand-Bold', fontSize: 18}}>Description :</Text>
                <TextInput style={styles.input} placeholder='Saisir une description' multiline={true} numberOfLines={4} clearButtonMode='always'/>
              </View>

              <View style={styles.input_block2}>
                <Text style={{marginRight: 5, fontFamily: 'Quicksand-Bold', fontSize: 18}}>Catégorie :</Text>
                <Menu
                  ref={this.setMenuRef}
                  button={<TouchableOpacity styles={styles.scrolling_choice} onPress={this.showMenu}>
                            <Text style={{fontFamily: 'Quicksand-SemiBold', textAlign: 'center', fontSize: 18, color:'#6F6F6F',}}>Sélection</Text>
                          </TouchableOpacity>}
                 >
                  <MenuItem onPress={this.hideMenu}>Salades</MenuItem>
                  <MenuItem onPress={this.hideMenu}>Sandwich</MenuItem>
                  <MenuItem onPress={this.hideMenu}>Italien</MenuItem>
                  <MenuItem onPress={this.hideMenu}>Asiatique</MenuItem>
                  <MenuItem onPress={this.hideMenu}>Vegan</MenuItem>
                  <MenuItem onPress={this.hideMenu}>Autres</MenuItem>
              </Menu>
              </View>

              <View style={styles.input_block}>
                <Text style={{marginRight: 5, fontFamily: 'Quicksand-Bold', fontSize: 18}}>Adresse :</Text>
                <TextInput style={styles.input} placeholder='Saisir une adresse' multiline={true} clearButtonMode='always'/>
              </View>
              <View style={styles.input_block}>
                <Text style={{marginRight: 5, fontFamily: 'Quicksand-Bold', fontSize: 18}}>Prix :</Text>
                <TextInput style={styles.input} placeholder='Saisir un prix' clearButtonMode='always'/>
              </View>
            </View>

          </View>

          <TouchableOpacity style={styles.btn_add}>
            <Text style={styles.text_add}>Soumettre la commande</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:'#ECFFFA'
  },

  header:{
    marginTop : 110,
    flexDirection : 'row'
  },

  text_title: {
    fontSize:19,
    fontFamily:'Quicksand-Bold',
  },

  image: {
    height:33,
    width:33,
    marginLeft: 35,
    marginRight: 20
  },

  container:{
    flex: 1,
    backgroundColor: '#57B8FF',
    marginTop: 40,
    margin: 20,
    borderRadius: 10,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  image_container: {
    height: 200, 
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#DDDDDD'
  },

  add_image: {
    height: 130,
    width: 130,
    alignSelf: 'center',
    margin: 40
  },

  btn_add:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#57B8FF',
    margin: 20,
    marginTop: 15,
    marginBottom: 40,
    borderRadius: 10,
    elevation: 4,
    shadowOffset:{
      width: 0,
      height:2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  text_add:{
    fontFamily:'Quicksand-Bold', 
    fontSize:20,
    textAlign:'center',
    margin: 5,
    marginBottom: 8
  },

  questionnaire: {
    marginLeft: 15, 
    marginRight: 15
  },

  input_block: {
    marginBottom: 20
  },

  input_block2: {
    marginBottom: 20,
    flexDirection: 'row'
  },

  input: {
    fontFamily: 'Quicksand-SemiBold',
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 10
  }, 

  scrolling_choice:  {
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    height: 10,
    marginRight: 15
    
  }
})

export default ChoiceDishScreen