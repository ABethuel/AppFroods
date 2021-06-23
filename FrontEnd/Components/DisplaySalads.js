import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import AnimationDish from '../Animations/AnimationDish'


class DisplaySalads extends React.Component {
  
  _displayCategory() {
    const {id, name, date, from, price, description, image, adress, category} = this.props.command
    if ( category === 'salade'){
      return (
        <AnimationDish>
          <TouchableOpacity 
            style={styles.main_container}
            onPress={() => this.props.displayDish(id, name, date, from, price, category, adress, description, image)}                 
          >
            <Image
                style={styles.images}
                source={{uri: image}}
            />
            <View style={styles.container}>
              <View style={styles.top_container}>
                <Text style={styles.title_text} numberOfLines={1}>{name}</Text>
                <Text style={styles.price_text}>{price}P</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={5}>{description}</Text>
              </View>
              <View>
                <Text style={styles.date_text}>{adress}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </AnimationDish>
      )
    }
  }
    
    render() {
        return(
            <View>
                {this._displayCategory()}
            </View>
        )
  }
}

const styles = StyleSheet.create({
    main_container: {
        height: 200, 
        backgroundColor : '#57B8FF', 
        borderRadius : 8, 
        marginBottom : 0,
        margin :32,
        marginTop: 20,
        flexDirection: 'row',
        elevation: 4,
        shadowOffset:{
          width: 0,
          height:2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
      },
    
      images: {
        flex :2.5,
        margin: 8, 
        height: 185,
        alignContent : 'center',
        backgroundColor:'gray',
        borderRadius:8
      },

      container: {
        flex: 3,
        marginLeft:5,
        marginRight: 5,
        marginTop:8,
        marginBottom:8,
      },

      top_container:{
        flex: 1,
      },
    
      title_text: {
        fontSize : 16,
        textAlign : 'left',
        flexWrap:'wrap',
        fontFamily : 'Quicksand-Bold'
      },

      price_text: {
        textAlign:'left',
        fontSize : 14,
        fontFamily: 'Quicksand-SemiBold'
      },

      description_container:{
        flex:3,
        marginTop:1
      },

      description_text: {
         fontFamily: 'Quicksand-Regular'
      },

      date_text: {
        fontFamily : 'Quicksand-SemiBold',
        fontStyle:'italic'
      }
    })
export default DisplaySalads
