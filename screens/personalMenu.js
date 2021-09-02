import * as React from 'react';

import {  Text, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import Styles from '../styles/styles'


export class PersonalMenu extends React.Component {
  state = {
    q_1: false,
    q_2: false,
    q_3: false,
    displayCouncellingInvite1: false,
    displayCouncellingInvite2: false,
    displayCouncellingInvite3: false
  };

 
  q1yes = () => {
    this.setState({
      q_1: true,
      displayCouncellingInvite1: false,
    });
  };
  q2yes = () => {
    this.setState({
      q_2: true,
      displayCouncellingInvite2: false,

    });
  };

  q3yes = () => {
    this.setState({
      q_3: true,
      displayCouncellingInvite3: false,
    });
  };
  q1no = () => {
    this.setState({
      q_1: false,
      displayCouncellingInvite1: true
    });
  };
  q2no = () => {
    this.setState({
      q_2: false,
      displayCouncellingInvite2: true
    });
  };
  q3no = () => {
    this.setState({
      q_3: false,
      displayCouncellingInvite3: true
    });
  };
  render() {
    return (
      <ScrollView >
        <ImageBackground 
        style={styles.image}
        source={require('./../styles/images/danceImages/cambre.jpeg')} >
          <Text style={Styles.header}>Entscheidungsbaum</Text>
        </ImageBackground>

        <Text style={Styles.subHeader}>
          Ich denke über das Ende meiner Karriere nach und weiß schon was ich
          machen möchte:
        </Text>

        <View style={styles.buttonContainer}> 
        <TouchableOpacity onPress={this.q1yes} style={Styles.button, styles.yesno}>
          <Text style={Styles.buttonText, styles.yesnoText}>Ja</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={this.q1no} style={Styles.button, styles.yesno}>
          <Text style={Styles.buttonText, styles.yesnoText}>Nein</Text>
          </TouchableOpacity>
          </View>
       

        {this.state.displayCouncellingInvite1 && (
          <View>
              <Text style={styles.textBlock}>Vereinbare gerne einen Beratungstermin unter <Text style={{fontWeight: 'bold'}}>info@stiftung-tanz.com! </Text>
            Unsere Psychologen helfen dir beim Herausfinden von deinen
            verborgenen Talenten, Interessen, Leidenschaften.
            Schau auch gerne unter</Text> 
            <TouchableOpacity>
              <Text style={styles.navText}>Ideen- Berufsfindung</Text>
              </TouchableOpacity> 
              <Text style={styles.textBlock}>und</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Psychologische Aspekte')}>
              <Text style={styles.navText}>Psychologische Aspekte</Text>
              </TouchableOpacity>
          </View>
        )}

        {this.state.q_1 && (
          <View>
            <Text style={Styles.subHeader}>Ich weiß auch wo und was ich studieren möchte...</Text>
            <View style={styles.buttonContainer}> 
              <TouchableOpacity onPress={this.q2yes} style={Styles.button, styles.yesno}>
                <Text style={Styles.buttonText, styles.yesnoText}>Ja</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.q2no} style={Styles.button, styles.yesno}>
                <Text style={Styles.buttonText, styles.yesnoText}>Nein</Text>
              </TouchableOpacity>
            </View>
           
            {this.state.displayCouncellingInvite2 && (
              <View>
                <Text style={styles.textBlock}>Vereinbare gerne einen Beratungstermin unter
                <Text style={{fontWeight: 'bold'}}>info@stiftung-tanz.com!</Text> Unsere Psychologen helfen dir beim Suchen
                einer geeigneten Ausbildung. Schau auch gerne unter:</Text>
                <TouchableOpacity>
                  <Text style={styles.navText}> Wie setze ich meine Idee um?</Text>
                 </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        {this.state.q_2 && (
          <View>
            <Text style={Styles.subHeader}>Ich habe bereits eine Finanzierungsmöglichkeit... </Text>
            <View style={styles.buttonContainer}> 
                <TouchableOpacity onPress={this.q3yes} style={Styles.button, styles.yesno}>
                  <Text style={Styles.buttonText, styles.yesnoText}>Ja</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.q3no} style={Styles.button, styles.yesno}>
                  <Text style={Styles.buttonText, styles.yesnoText}>Nein</Text>
                </TouchableOpacity>
            </View>
           

            {this.state.displayCouncellingInvite3 && (
              <View>
                  <Text style={styles.textBlock}> Vereinbare gerne einen Beratungstermin unter
                  <Text style={{fontWeight: 'bold'}}>info@stiftung-tanz.com!</Text> Unsere Psychologen helfen dir beim Suchen
                einer Finanzierungsmöglichkeit. Evtl. kommt auch eines unserer
                Stipendien für dich in Frage. Schau auch gerne unter</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Finanzierung')} >
                  <Text style={styles.navText}>Finanzierungsmöglichkeiten</Text>
                </TouchableOpacity>
                <Text style={styles.textBlock}>und</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Stipendium')} >
                 <Text style={styles.navText}>Stipendien.</Text> </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        {this.state.q_3 && (
          <View>
              <Text style={styles.textBlock}>Hast du eine andere Frage bzgl. Transition (z.B. bzgl. Versicherung, Arbeitsamt, Visum, etc.)? Dann vereinbare gerne einen Beratungstermin unter <Text style={{fontWeight: 'bold'}}>info@stiftung-tanz.com!</Text> Unsere Psychologen helfen dir beim Beantworten deiner Fragen. Schau auch gerne unter :</Text>
            <TouchableOpacity >
              <Text style={styles.navText} >Versicherungen</Text>
            </TouchableOpacity>
            <Text style={styles.textBlock} >und</Text>
            <TouchableOpacity >
              <Text style={styles.navText}>Leben und Arbeiten in Deutschland.</Text>
               </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Stiftung Tanz')}
        style={styles.bottomButton}> 
        <Text style={styles.bottomButtonText}>Zur Startseite</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default PersonalMenu;

let ScreenHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
 
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bottomButton: {
    backgroundColor: '#0040A2' ,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    margin: 20
   },
  bottomButtonText: {
    textAlign: 'center',
    color: 'whitesmoke',
    fontSize: 16
  },
  yesno: {
    backgroundColor: '#E8AA1B',
    shadowColor: "#000",
    width: 100,
    padding: 10,
    margin: 10,
    borderRadius: 10,
        shadowOffset: {
            width: 0,
            height:5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.30,
         elevation: 10,
  },
  yesnoText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFF1'
  },
  navText: {
    textAlign: 'center',
    color: '#0570c9',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textBlock: {
    margin: 10,
    fontSize: 16,
    lineHeight: 35
  },
  image: {
    height: 250, 
    borderRadius: 30,
  }
})