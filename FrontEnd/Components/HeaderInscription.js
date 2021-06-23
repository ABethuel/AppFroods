import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native'

class HeaderInscription extends React.Component {

    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../images/logo.png')}/>
                <Text style={styles.text_header}>Frood's</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,
        position: 'absolute',
        marginTop: 40
    },

    logo: {
        height: 50,
        width: 95,
        marginLeft: 15,
    },

    text_header: {
        fontSize : 20,
        fontFamily: 'Quicksand-Bold',
        alignSelf:'center',
        marginLeft: 10
    }
})

export default HeaderInscription