import * as React from 'react';


import {  Text, View, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image} from 'react-native';
import Styles from '../../styles/styles'


const SelfEmploymentMenu = () =>  {
  return (
    <ScrollView>
         <ImageBackground
          source={require('./../../styles/images/selbstständigkeit.png')}
          style={styles.backgroundImage}>
      <Text style={styles.header}>Selbstständigkeit</Text>
      </ImageBackground>

      <View style={Styles.choiceBtnContainer}>
        
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginVertical: 20}} ></Image>

         <TouchableOpacity  style={Styles.choice}>
          <Text style={Styles.choiceText}>Existenzgründung</Text>
        </TouchableOpacity>
     
      </View>
       
    </ScrollView>
  );
}

export default SelfEmploymentMenu



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
      marginTop: 30,
      marginBottom: 180,
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




