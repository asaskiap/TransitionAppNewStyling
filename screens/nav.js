import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground, ScrollView } from 'react-native';




const NavMenu = ({navigation}) => {
return ( 
  <ScrollView>
  
      <ScrollView style={styles.nav}>
       
            <TouchableOpacity onPress={() => navigation.navigate('Stiftung Tanz')} >
              <Text style={styles.navText}>Startseite</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Beratung')} >
              <Text style={styles.navText}>Entscheidungsbaum</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Psychologische Aspekte')}>
             <Text style={styles.navText}>Psychologische Aspekte</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Ideen')}>
              <Text style={styles.navText}>Ideen - Berufsfindung</Text>
            </TouchableOpacity>

             <TouchableOpacity onPress={() => navigation.navigate('Umsetzung')} >
              <Text style={styles.navText}>Wie setze ich meine Ideen um?</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Finanzierung')}>
              <Text style={styles.navText}>Finanzierungs- möglichkeiten</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Versicherungen')}>
              <Text style={styles.navText} >Versicherungen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Deutschland')}>
              <Text style={styles.navText} >Leben und arbeiten in Deutschland</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Selbstständigkeit')}>
              <Text style={styles.navText}>Selbstständigkeit</Text>
            </TouchableOpacity>
           
        </ScrollView> 
      </ScrollView>
    );
  
} 
  
  export default NavMenu
    



const styles = StyleSheet.create({
  nav:{
    
    paddingTop: 10,
    backgroundColor: 'rgba(69, 97, 157, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
   
    
  }, 
  navText:{
    fontSize: 22,
    marginHorizontal: 12,
    marginVertical: 20,
    color: '#FFFFFF',
    width: 240,
    fontWeight: '500'
  },
  backgoundImage: {
    flex: 1,
    
  }
})
