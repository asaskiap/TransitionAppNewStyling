import * as React from 'react';


import {  Text,  TouchableOpacity, ScrollView, ImageBackground, StyleSheet, View, Image } from 'react-native';
import Styles from '../../styles/styles'

const GermanyMenu = ({navigation}) => {
 
    return (
      <ScrollView>
        <ImageBackground
          source={require('./../../styles/images/passport.jpg')}
          style={styles.backgroundImage}>
        <Text style={styles.header}>Leben und Arbeiten in Deutschland</Text>
        </ImageBackground>

        <View style={Styles.choiceBtnContainer}>

        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10,  marginVertical: 20}} ></Image>

          <TouchableOpacity  style={Styles.choice}>
            <Text style={Styles.choiceText}
            onPress={() => navigation.navigate('Deutschkurse')}>⨀  Deutschkurse</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Styles.choice}>
            <Text style={Styles.choiceText}
            onPress={() => navigation.navigate('Visum')}>⨀  Visum / Aufenthaltserlaubnis</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Styles.choice}>
            <Text style={Styles.choiceText} onPress={() => navigation.navigate('Nachweise')}>⨀  Nachweise</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Styles.choice}>
            <Text style={Styles.choiceText}
            onPress={() => navigation.navigate('Zeugnisse')}>⨀  Anerkennung von ausländischen Zeugnissen</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Styles.choice}>
            <Text style={Styles.choiceText}>⨀  Ein -und Auswanderung</Text>
          </TouchableOpacity>

         

        </View>
        
         
      </ScrollView>
    );
  }


export default GermanyMenu;



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, 
    resizeMode: "cover",
    justifyContent: "center", 
    height: 250,
    
  },
  header: {
    fontSize: 30,
      paddingLeft: 10,
      paddingVertical: 10,
      marginRight: 70,
      marginLeft: 5,
      marginTop: 130,
      marginBottom: 30,
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
      }
  

});


