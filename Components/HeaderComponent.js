import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native'
import { connect } from 'react-redux'

class HeaderComponent extends React.Component {

    render() {
        return (
            <View style={styles.header}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Image style={styles.logo} source={require('../images/logo.png')}/>
                    <Text style={styles.text_header}>Frood's</Text>  
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end',  marginLeft: 92, marginRight:0}}>
                    <Text style={styles.text_header_coin}>{this.props.coin}</Text>
                    <Image style={styles.coin} source={require('../images/coins.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,
        position: 'absolute',
        marginTop: 40,
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
    },

    text_header_coin: {
        fontSize : 20,
        fontFamily: 'Quicksand-Bold',
        alignSelf:'center',
    },

    coin: {
        height: 40,
        width: 40, 
        margin: 10, 
        marginTop: 7
    }
})

const mapStateToProps = (state) => {
    return {
      coin: state.getMoney.coin
    }
  }
  
  export default connect(mapStateToProps)(HeaderComponent)