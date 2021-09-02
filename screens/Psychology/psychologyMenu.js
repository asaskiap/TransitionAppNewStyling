import * as React from 'react';
import {  TouchableOpacity, Text, ScrollView, ImageBackground, StyleSheet, View, Image } from 'react-native';

import Styles from '../../styles/styles'






const Psychology = ( {navigation}) => {
 
    return (
      <ScrollView style={styles.psychologyView}>
        <ImageBackground
                style={styles.backgroundImage}
                source={require('./../../styles/images/danceImages/psychology.jpg')}
                >  
        <Text style={styles.header}>Psychologische Aspekte der Transition</Text>
        </ImageBackground>

        <View style={styles.choiceBtnContainer}>

        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10,  marginVertical: 20}} ></Image>


          <TouchableOpacity  style={styles.choice} onPress={()=> navigation.navigate('Abschied')}>
            <Text  style={styles.choiceText}>⨀  Abschied</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.choice} onPress={() => navigation.navigate('Veränderung')}>
            <Text style={styles.choiceText}>⨀  Veränderung</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.choice} onPress={()=> navigation.navigate('Unsicherheiten') } >
            <Text style={styles.choiceText}>⨀  Unsicherheiten</Text>
          </TouchableOpacity>    
          
          <TouchableOpacity style={styles.choice} onPress={()=> navigation.navigate('Wer Bin Ich?')}>
            <Text style={styles.choiceText}>⨀  Wer bin ich?</Text>
          </TouchableOpacity>
         
        </View>

      
      </ScrollView>
    );
  
}

export default Psychology;


const styles = StyleSheet.create({
  psychologyView:{
    backgroundColor: '#DDDDDD'
  },
  backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      height: 250
  },
  header: {
      fontSize: 30,
      paddingLeft: 10,
      marginLeft: 80,
      marginTop: 30,
      marginBottom: 130,
      fontWeight: 'bold',
      lineHeight: 35,
      backgroundColor: 'rgba(154, 205, 50, 0.9)',
      color: 'white',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
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
    fontWeight: 500,
    textAlign: 'center',
    color: '#313131'
   
  },
  choiceBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});








//import * as React from 'react';
// import {  TouchableOpacity, Text, ScrollView, View, StyleSheet, Image, ImageBackground } from 'react-native';




// const Psychology = () => {
 
//     return (
//       <ScrollView style={{backgroundColor: 'white'}}>
//         <View style={styles.headerBackground}> 
//         <ImageBackground
//         source={require('./../../styles/images/stiftungLogo_yellow.png')}
//         style={{flex:1, resizeMode: 'cover', justifyContent: 'center', height: 200}}>
//         <View style={styles.shadowContainer}>
//           <Image
//          source={require('./../../styles/images/psy.jpg')}
//          style= {styles.image}></Image>  
//          </View>  
//         </ImageBackground>
//         </View>

//         <Text style={styles.header}>Psychologische Aspekte</Text>
        
//           <TouchableOpacity  style={styles.choice}>
//             <Text  style={styles.choiceText}>Abschied</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.choice}>
//             <Text style={styles.choiceText}>Veränderung</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.choice}>
//             <Text style={styles.choiceText}>Unsicherheiten</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.choice}>
//             <Text style={styles.choiceText}>Wer bin ich?</Text>
//           </TouchableOpacity>
//       </ScrollView>
//     );
  
// }

// export default Psychology;


// const styles = StyleSheet.create({
//   backgroundImage: {
//       flex: 1,
//       resizeMode: "cover",
//       justifyContent: "center"
//   },
//   headerBackground:{
//     backgroundColor: '#e0be89',
//     height: 250,
//     marginBottom: 40,
    
//   },
//   shadowContainer:{
//     height: 200,
//     width: 200,
//     borderRadius: 10,
//     marginLeft: '40%',
//     marginTop: 20,
//     shadowColor: "darkgrey",
//     shadowOffset: {
//       width: 5,
//       height: 5,
//       },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 10,
//   },
//   image: {
//     height: 200,
//     width: 180,
//     borderRadius: 10,
//     opacity: 0.8,
//   },
//   header: {
//     position: 'absolute',
//     top: 180,
//     fontSize: 35,
//     paddingLeft: 10,
//     marginRight: 50,
//     fontWeight: 'bold',
//     lineHeight: 50,
//     backgroundColor: 'yellowgreen',
//     color: 'white'
//   },
// choice: {
//   paddingVertical: 15,
//   marginVertical: 15,
//   marginHorizontal: 30,
//   backgroundColor: '#faebb1',
//   borderRadius: 10,
//    shadowColor: "darkblue",
//   shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//   shadowOpacity: 0.4,
//   shadowRadius: 5,
//   elevation: 10,
// },
// choiceText: {
//   fontSize: 20,
//   textAlign: 'center',
//   color: '#1e1f1e'
 
// },
// });

