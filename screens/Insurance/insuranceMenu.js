import React from 'react';
import {  TouchableOpacity, Text, ScrollView, ImageBackground, StyleSheet, View, Image, Linking } from 'react-native';

import Styles from '../../styles/styles'

const InsuranceScreen = ({navigation}) => {
  return (
    <ScrollView >
      <ImageBackground
      style={styles.backgroundImage}
      source={require('./../../styles/images/danceImages/the_fall_cut.jpg')}>
      <Text style={styles.header}>Versicherungen</Text>
      </ImageBackground>

      <View style={Styles.choiceBtnContainer}>

      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10,  marginVertical: 20}} ></Image>
      
          <TouchableOpacity style={Styles.choice}>
              <Text style={Styles.choiceText}
              onPress={()=> Linking.openURL('https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Fl_Blallett_Leitfaden_18.pdf')}>⨀  Arbeitsagentur und Co.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
              <Text style={Styles.choiceText}
              onPress={()=> navigation.navigate('Bayrische')}>⨀  Bayrische Versorgungskammer </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
              <Text style={Styles.choiceText}
              onPress={() => navigation.navigate('KSK')}>⨀  Künstlersozial- versicherung (KSK)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
              <Text style={Styles.choiceText}>⨀  Arbeitslosigkeits- versicherung</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
            <Text style={Styles.choiceText}>⨀  Berufsunfähigkeits- und Unfallversicherung</Text>

          </TouchableOpacity>  

      </View>
         
     

    </ScrollView>
  );
}


export default InsuranceScreen; 



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
      marginBottom: 70,
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







