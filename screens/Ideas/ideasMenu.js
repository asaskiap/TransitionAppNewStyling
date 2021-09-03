import * as React from 'react';


import {  Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import Styles from '../../styles/styles'


const IdeasMenu = ({navigation}) => {
 
    return (
      <ScrollView>
          <ImageBackground
          source={require('./../../styles/images/danceImages/combre_cut.jpg')}
          style={styles.backgroundImage}>
        <Text style={styles.header}>Ideen - Berufsfindung</Text>
        </ImageBackground>

        <View style={styles.choiceBtnContainer}>

        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10,  marginVertical: 20}} ></Image>
      
          <TouchableOpacity  style={styles.choice} onPress={()=> navigation.navigate('Berufsinteressen')}>
            <Text style={styles.choiceText}>⨀  Berufsinteressen Fragebogen</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.choice} onPress={()=> navigation.navigate('Berufe Vorstellen')}>
            <Text style={styles.choiceText}>⨀  Berufesportraits</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.choice}
          onPress={()=> navigation.navigate('Transition Stories')}>
            <Text style={styles.choiceText}>⨀  Transition Stories</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.choice}>
            <Text style={styles.choiceText}>⨀  Externe Berufsfindungstests</Text>
          </TouchableOpacity>

        </View>
        
      </ScrollView>
    );
  }


export default IdeasMenu;




const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 300
  },
  header: {
      fontSize: 30,
      paddingLeft: 10,
      paddingVertical: 10,
      marginRight: 70,
      marginTop: 120,
      marginBottom: 90,
      fontWeight: 'bold',
      lineHeight: 35,
      backgroundColor: 'rgba(154, 205, 50, 0.9)',      
      color: 'white',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      shadowColor: "#2b271e",
      shadowOffset: {
          width: 5,
          height: 5,
        },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 10,

  },
  
  choice: {
    height: 60,
    width: 280,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(244, 249, 255, 0.6)',
    borderRadius: 10,
     shadowColor: "#45619D",
    shadowOffset: {
	      width: 5,
	      height: 5,
      },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  choiceText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#313131'
   
  },
  choiceBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});




