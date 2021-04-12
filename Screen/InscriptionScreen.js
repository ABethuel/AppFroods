import React from 'react'
import { View, TextInput, Button , Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import HeaderInscription from '../Components/HeaderInscription'

class InscriptionScreen extends React.Component {

    render() {
        return (
            <ScrollView style={styles.main_container}>
                <HeaderInscription/>
                <View style={styles.text_presentation}>
                    <Text style={styles.text_title}>Rejoignez Frood's</Text>
                    <View style={styles.subtitle_text}>
                        <Text style={{fontFamily: 'Quicksand-Bold',}}>Déjà inscrit(e) ?  </Text>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Connexion')}>
                            <Text style={{fontFamily: 'Quicksand-Bold', color:'#6F6F6F'}}>Connectez vous </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.questionnaire}>
                    <View style={styles.nom_prenom}>
                        <View style={styles.prenom}>
                            <Text style={{fontFamily: 'Quicksand-Bold',}}>Prénom</Text>
                            <View>
                                <TextInput style={styles.input_nom_prenom}/>
                            </View> 
                        </View>
                        <View style={styles.nom}>
                            <Text style={{fontFamily: 'Quicksand-Bold',}}>Nom</Text> 
                            <View>
                                <TextInput style={styles.input_nom_prenom}/>
                            </View> 
                        </View>
                    </View>
                    <View style={styles.empty_complete}>
                        <Text style={{fontFamily: 'Quicksand-Bold',}}>Ville</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.empty_complete}>
                        <Text style={{fontFamily: 'Quicksand-Bold',}}>Adresse</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.empty_complete}>
                        <Text style={{fontFamily: 'Quicksand-Bold',}}>Email ISEP</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.empty_complete}>
                        <Text style={{fontFamily: 'Quicksand-Bold',}} secureTextEntry={true}>Mot de passe</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View style={styles.empty_complete}>
                        <Text style={{fontFamily: 'Quicksand-Bold',}} secureTextEntry={true}>Confirmer mot de passe</Text>
                        <TextInput style={styles.input}/>
                    </View>

                </View>

                <View style={styles.btn_inscription} >
                    <Button color='#57B8FF' title="S'inscrire" onPress={() => this.props.navigation.navigate('Home')}/>  
                </View> 

            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor : '#ECFFFA', 
    },

    text_presentation:{
        margin : 15,
    },

    text_title:{
        textAlign:'center',
        fontSize: 24,
        marginTop : 100,
        fontFamily: "Quicksand-Bold"
    },

    subtitle_text: {
        marginTop: 8,
        fontFamily: 'Quicksand-Bold',
        fontSize: 14,
        flexDirection: 'row',
        justifyContent:'center', 
    },

    questionnaire:{
        margin: 15,
    },

    nom_prenom: {
        flexDirection: 'row',
        marginBottom : 20
    },

    prenom: {
        flex:0.5,
        marginRight: 10
    },

    nom: {
        flex:0.5,
        justifyContent: 'flex-end',
        marginLeft:10
    },

    input_nom_prenom: {
        height: 30,
        borderWidth: 2,
        width: '100%',
        marginTop : 5,
        textAlign:'center',
        fontFamily: 'Quicksand-Bold',
        borderRadius: 8
    },

    empty_complete:{
        marginBottom:20
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

    btn_inscription: {
        width: '60%',
        alignSelf: 'center',
        marginVertical: 20, 
        borderRadius: 100,
        fontFamily: 'Quicksand-Bold',
        flex: 1
    }   
})


export default InscriptionScreen