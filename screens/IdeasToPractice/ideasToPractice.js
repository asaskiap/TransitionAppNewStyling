import * as React from 'react';


import {  Text, ScrollView, ImageBackground, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Styles from '../../styles/styles'


const IdeasToPractice = ({navigation}) =>  {
 
    return (
      <ScrollView>
            <ImageBackground
          source={require('./../../styles/images/danceImages/upsidedown_solo.jpg')}
          style={styles.backgroundImage}>
        <Text style={styles.header}>Wie setze ich meine Ideen um?</Text>
        </ImageBackground>
        <View style={Styles.choiceBtnContainer}>
             
        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginVertical: 20}} ></Image>

          <TouchableOpacity  style={Styles.choice} onPress={()=> navigation.navigate('Universitäten')}>
            <Text style={Styles.choiceText}>⨀  Universitäten</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Styles.choice} onPress={()=> navigation.navigate('Studienplatzsuche')}>
            <Text style={Styles.choiceText}>⨀  Studienplatzsuche</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Styles.choice} onPress={()=> navigation.navigate('Ausbildungsbetriebe')}>
            <Text style={Styles.choiceText}>⨀  Ausbildungsbetriebe</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Styles.choice} onPress={()=> navigation.navigate('Bewerbungsprozess')}>
            <Text style={Styles.choiceText}>⨀  Bewerbungsprozess</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    );
  
}

export default IdeasToPractice;



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
    marginTop: 150,
    marginBottom: 29,
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
    paddingVertical: 15,
    marginVertical: 15,
    marginHorizontal: 30,
    backgroundColor: 'rgba(240,240,240,0.85)',
    borderRadius: 10,
     shadowColor: "#2b271e",
    shadowOffset: {
	      width: 0,
	      height: 5,
      },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  choiceText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1e1f1e'
   
  },
});
