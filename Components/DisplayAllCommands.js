import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class DisplayAllCommands extends React.Component {
  render() {
    const {id, name, date, from, price, description, image} = this.props.command 
    return (
      <TouchableOpacity 
        style={styles.main_container}>
        <Image
            style={styles.image}
            source={{uri: "image"}}
        />
        <Text style={styles.title_text} numberOfLines={1}>{name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190, 
        backgroundColor : '#57B8FF', 
        borderRadius : 8, 
        margin : 20,
        marginBottom : 0,
        marginTop: 20
      },
    
      image: {
        flex :4,
        marginTop: 5,
        marginLeft: 20,
        marginRight : 20, 
        alignContent : 'center',
        backgroundColor:'gray',
        borderRadius:8
      },
    
      title_text: {
        fontSize : 20,
        flex: 1,
        textAlign : 'center',
      }
    })
export default DisplayAllCommands
