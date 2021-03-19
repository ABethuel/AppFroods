// Components/Connexion.js

import React from 'react'
import { View, TextInput, Button , Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native'
import HeaderInscription from '../Components/HeaderInscription'


class ConnexionScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.getScreen()
    }

    getScreen = () => {
        setTimeout(() => {
           this.setState({ isLoading: false })
        }, 1000);
     }

    _displayScreen() {
        if (this.state.isLoading === true){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color="grey" />
                </View>
            )
        } else {
            return(
                <View>
                    <HeaderInscription/>
                    <Text style={styles.text_title}>Connectez-vous</Text>
                    
                    <View style={styles.questionnaire}>
                        <View style={styles.ask}>
                            <Text style={{fontFamily: 'Quicksand-Bold',}}>Email</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View style={styles.ask}>
                            <Text style={{fontFamily: 'Quicksand-Bold',}}>Mot de passe</Text>
                            <TextInput style={styles.input}/>
                        </View>
                    </View>
    
                    <View style={styles.btn_connexion} >
                        <Button color='#57B8FF' title="Se connecter" onPress={() => {}}/>  
                    </View> 
    
                    <View style={styles.inscription}>
                        <Text style={{fontFamily: 'Quicksand-Bold', fontSize:16}}>Pas encore de compte ?</Text>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Inscription')}>
                            <Text style={{fontFamily: 'Quicksand-Bold', color:'#6F6F6F', fontSize:16}}>Inscrivez-vous !</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    render() {
        return(
            <ScrollView style={styles.main_container}>
                {this._displayScreen()}
            </ScrollView>
        )
    }
}
 
const styles = StyleSheet.create({
    loading_container: {
        marginTop:400,
      },

    main_container: {
        flex: 1,
        backgroundColor : '#ECFFFA', 
    },
    
    text_title: {
        textAlign:'center',
        fontSize: 24,
        marginTop : 150,
        marginBottom : 80,
        fontFamily: "Quicksand-Bold"
    },

    questionnaire:{
        margin: 15,
        
    },

    input: {
        height: 30,
        borderWidth: 2,
        width: '100%',
        marginTop : 5,
        textAlign:'center',
        fontFamily: 'Quicksand-Bold',
        borderRadius: 8
    },

    ask:{
        marginBottom:30
    },

    btn_connexion: {
        width: '60%',
        alignSelf: 'center',
        marginVertical: 20, 
        borderRadius: 100,
        fontFamily: 'Quicksand-Bold',
        flex: 1
    },

    inscription: {
        marginTop: 8,
        fontFamily: 'Quicksand-Bold',
        alignItems:'center', 
    },
    
})
export default ConnexionScreen