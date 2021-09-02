 import * as React from 'react';
import {  TouchableOpacity, Text, ScrollView, ImageBackground, StyleSheet, View, Image, Linking} from 'react-native';
import Styles from '../../styles/styles'



const FinancialScreen = ( {navigation}) => {

  
    return (
      <ScrollView >        
      <ImageBackground
      source={require('./../../styles/images/money1.png')}
      style={styles.backgroundImage} 
      >
        <Text style={styles.header}>Finanzierung</Text>
        </ImageBackground>
        

        <View style={Styles.choiceBtnContainer}>

        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginVertical: 20}} ></Image>
        
          <TouchableOpacity onPress={() => navigation.navigate('Stipendium')} style={Styles.choice}>
              <Text style={Styles.choiceText}>⨀  Stipendium der Stiftung</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Bafög')} style={Styles.choice}>
              <Text style={Styles.choiceText}>⨀  Bafög</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice} onPress={() => navigation.navigate('Aufstiegsstipendium')} >
              <Text style={Styles.choiceText}>⨀  Aufstiegsstipendium</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
            <Text style={Styles.choiceText}>⨀  Bildungsgutschein</Text>
          </TouchableOpacity >
          
          <Image 
          style={{height: 200, width: 400, marginVertical: 20}}
          source={require('./../../styles/images/money2.png')}></Image>

<Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginVertical: 20}} ></Image>

        <TouchableOpacity style={Styles.choice}
        onPress={() => navigation.navigate('Bildungskredit')} >
              <Text style={Styles.choiceText}>⨀  Bildungskredit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}
          onPress={() => navigation.navigate('Bankdarlehn')} >
              <Text style={Styles.choiceText}>⨀  Bankdarlehn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
              <Text style={Styles.choiceText}>⨀  Arbeitslosengeld</Text>
          </TouchableOpacity> 
          
          <TouchableOpacity style={Styles.choice}>
              <Text style={Styles.choiceText}>⨀  Bayrische Versicherung</Text>
          </TouchableOpacity>

          <Image 
          style={{height: 200, width: 400, marginVertical: 20}}
          source={require('./../../styles/images/danceImages/emptyHands.jpg')}></Image>

          <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginVertical: 20}} ></Image>

          <TouchableOpacity style={Styles.choice}
          onPress={() => navigation.navigate('Studienkredit')} >
              <Text style={Styles.choiceText}>⨀  Studienkredit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
          <Text 
              style={Styles.choiceText} 
              onPress={() => Linking.openURL('https://www.studienfinanzierung.de/stipendien/')}>
                ⨀  Andere Stipendien</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.choice}>
            <Text style={Styles.choiceText}>⨀  Nebenjobs</Text>
          </TouchableOpacity>   

        </View>
         
          
      
      </ScrollView>
    );
 }
   
  


export default FinancialScreen;



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 200
  },
  header: {
      fontSize: 30,
      paddingLeft: 10,
      paddingVertical: 10,
      marginRight: 70,
      marginLeft: 5,
      marginTop: 80,
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

  },
  
});




