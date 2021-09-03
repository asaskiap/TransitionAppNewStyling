import * as React from 'react';

import {  Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';


import {WerSindWir, WasMachenWir, WomitHelfen} from './components/homeScreenInfo'


export default class HomeScreen extends React.Component {
    state = {
        displayWer: false,
        displayWas: false,
        displayWomit: false,
        displayNav: false
      };
    
      
      displayNav = () => {
        console.log('pressed menu here', this.state.displayNav)
        this.setState({
          displayNav: !this.state.displayNav
        })
      }
       displayWer = () => {
        this.setState({
          displayWer: !this.state.displayWer,
          displayWas: false,
          displayWomit: false
        });
      };
      displayWas = () => {
        this.setState({
          displayWer: false,
          displayWas: !this.state.displayWas,
          displayWomit: false,
        });
      };
      displayWomit = () => {
        this.setState({
          displayWer: false,
          displayWas: false,
          displayWomit: !this.state.displayWomit
        });
      };

      close = () => {
        console.log('closing')
        this.setState({
          displayWer: false,
          displayWas: false,
          displayWomit: false
        })
      }


    render(){
        return(
            <ScrollView >
            
            <ImageBackground
                style={styles.backgroundImageTop}
                source={require('./../styles/images/img-background.png')}
                >
                  <Image
                  style={styles.landingPageLogo}
                source={require('./../styles/images/logoAndSlogan.png')}>

                  </Image>
                  </ImageBackground>
            <ImageBackground
             style={styles.backgroundImageBottom}
             source={require('./../styles/images/backgroundBottom.png')}>

                <TouchableOpacity   
                    style={styles.button}
                    onPress={this.displayWer}
                    > 
                 <Text style={styles.buttonText}>WER SIND WIR?</Text>
                </TouchableOpacity>
            

            <TouchableOpacity
                style={styles.button}
                onPress={this.displayWas}
                    >
            <Text style={styles.buttonText}>WAS MACHEN WIR?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={this.displayWomit}
                >
                <Text style={styles.buttonText}>WOBEI KÖNNEN WIR HELFEN?</Text>
            </TouchableOpacity>

               
                
                 <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Menu')}>
                        <Image source={require('./../styles/images/logos/stiftungLogo_blue.png')}
                        style={styles.hamburger}></Image>
                    </TouchableOpacity>

              
        {this.state.displayWer && (<WerSindWir close={this.close}/>)}
        {this.state.displayWas && (<WasMachenWir close={this.close}/>)}
        {this.state.displayWomit && (<WomitHelfen close={this.close}/> )}
             </ImageBackground>  
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
  backgroundImageTop:{
    height: 250,
    display: 'flex',
    alignItems: 'center',
  justifyContent: 'center'  
},
  landingPageLogo:{

    height: 90,
    width: 320,
  },
  backgroundImageBottom:{
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    height: 60,
    width: 280,
    marginVertical: 10,
    backgroundColor: 'rgba(198,220,220, 0.9)',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonText: {
    color: 'rgb(59,66,66)',
    fontSize: 15,
    fontWeight: 'bold',
    height: 25,
    width: 150,
    
  },
  menuButton:{
  // position: 'absolute',
   top: 55,
   right: 15
  },
  hamburger: {
    height: 50, width: 50,
    borderRadius: 50
  }
})