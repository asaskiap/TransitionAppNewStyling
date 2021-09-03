import React from 'react';

import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home'
import Nav from './screens/nav'
import FinancialScreen from './screens/Financial/financialMenu';
import Aufstiegsstipendium from './screens/Financial/aufstieg';
import Bafoeg from './screens/Financial/bafoeg';
import Stipendium from './screens/Financial/stipendium';
import Psychology from './screens/Psychology/psychologyMenu';
import Abschied from './screens/Psychology/abschied';
import Veraenderung from './screens/Psychology/veraenderung';
import Unsicherheiten from './screens/Psychology/unsicherheiten';
import WerBinIch from './screens/Psychology/werBinIch';
import InsuranceScreen from './screens/Insurance/insuranceMenu'
import IdeasMenu from './screens/Ideas/ideasMenu'
import GermanyMenu from './screens/Germany/germanyMenu'
import PersonalMenu from './screens/personalMenu'
import SelfEmploymentMenu from './screens/SelfEmployment/selfMenu'
import IdeasToPractice from './screens/IdeasToPractice/ideasToPractice'


import {signOut, verify} from './services/authentication'
import berufsFragebogen from './screens/Ideas/berufsFragebogen';
import berufsPortrait from './screens/Ideas/berufsPortrait';
import TransitionStories from './screens/Ideas/transitionStories';
import {Universitaeten, Studienplatzsuche, Ausbildungsbetriebe, Bewerbungsprozess}  from './screens/IdeasToPractice/ideasToPracticeComponents';
import { Bankdarlehn, Bildungskredit, Studienkredit } from './screens/Financial/financialComponents';
import { Deutschkurse, Nachweise, Zeugnisanerkennung } from './screens/Germany/germanyComponents';
import Visum from './screens/Germany/visum';
import Bayrische from './screens/Insurance/bayrische';
import KSK from './screens/Insurance/ksk';

const Stack = createStackNavigator();


class App extends React.Component {

  state = {
    user: null,
    loaded: false
  };

  async componentDidMount() {
    const user = await verify();
    this.handleUserChange(user);
    this.setState({ loaded: true });
  }; 

  // set user object returned from authentication to state of app
  handleUserChange = (user) => {
    this.setState({ user });
  };

  // set user object returned from authentication to state of app
  handleUserChange = (user) => {
    this.setState({ user });
  };

  // sign out user and remove user from state
  handleSignOut = async () => {
    console.log('signing out')
    await signOut();
    console.log('signed out')
    this.handleUserChange(null);
  };


  render(){ return ( 
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">

         <Stack.Screen 
          name="Stiftung Tanz" 
          options={{
            headerStyle: {
              backgroundColor: '#0040A2',
            },
            headerTintColor: 'transparent',
            headerLeft: ()=> <Image  style={{ height: 28, width: 182}} source={{ uri: "https://stiftung-tanz.com/wordpress/wp-content/uploads/2017/03/logo.png"}}></Image>
          }}>
            {(props) => <Home {...props} user={this.state.user} signOut={this.handleSignOut} />}
          </Stack.Screen>

         <Stack.Screen name="Menu" component={Nav}
         options={{
            
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} />

         

           <Stack.Screen name="Beratung" component={PersonalMenu} 
         options={{  
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>

         <Stack.Screen name="Finanzierung" component={FinancialScreen} 
         options={{
           headerStyle: {
          backgroundColor: '#0040A2',
        },
          headerTintColor: '#ebf3fa',
          headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>}}/>

         <Stack.Screen name="Aufstiegsstipendium" component={Aufstiegsstipendium}
         options={{ 
           title: 'Stipendium',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} />

         <Stack.Screen name="Bafög" component={Bafoeg} 
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>
          
         <Stack.Screen name="Stipendium" component={Stipendium} 
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=><Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>

          <Stack.Screen name="Bildungskredit" component={Bildungskredit} 
            options={{
              headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>   

          <Stack.Screen name="Studienkredit" component={Studienkredit} 
            options={{
              headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>   


        <Stack.Screen name="Bankdarlehn" component={Bankdarlehn} 
            options={{
              title: 'Bankdarlehn',
              headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>   

         <Stack.Screen name="Psychologische Aspekte" component={Psychology}
         options={{
          title: 'Psychologie',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} />
            
         <Stack.Screen name="Abschied" component={Abschied} 
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>

      <Stack.Screen name="Veränderung" component={Veraenderung} 
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>  

    <Stack.Screen name="Unsicherheiten" component={Unsicherheiten} 
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/>  

      <Stack.Screen name="Wer Bin Ich?" component={WerBinIch} 
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }}/> 


        <Stack.Screen name="Versicherungen" component={InsuranceScreen}
         options={{
           title: 'Versicherung',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

      <Stack.Screen name="Bayrische" component={Bayrische}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="KSK" component={KSK}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 


          
        <Stack.Screen name="Ideen" component={IdeasMenu}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Berufsinteressen" component={berufsFragebogen}
         options={{
           title: 'Interessen',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

      <Stack.Screen name="Berufe Vorstellen" component={berufsPortrait}
         options={{
           title: 'Portrait',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

    <Stack.Screen name="Transition Stories" component={TransitionStories}
         options={{
           title: 'Stories',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Deutschland" component={GermanyMenu}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Deutschkurse" component={Deutschkurse}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Visum" component={Visum}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

      <Stack.Screen name="Zeugnisse" component={Zeugnisanerkennung}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=><Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

      <Stack.Screen name="Nachweise" component={Nachweise}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 




        <Stack.Screen name="Selbstständigkeit" component={SelfEmploymentMenu}
         options={{
          title: 'Selbsständig',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Umsetzung" component={IdeasToPractice}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Universitäten" component={Universitaeten}
         options={{
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Studienplatzsuche" component={Studienplatzsuche}
         options={{
           title: 'Studienplatz',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Ausbildungsbetriebe" component={Ausbildungsbetriebe}
         options={{
           title: 'Ausbildung',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} /> 

        <Stack.Screen name="Bewerbungsprozess" component={Bewerbungsprozess}
         options={{
           title: 'Bewerbung',
          headerStyle: {
            backgroundColor: '#0040A2',
          },
            headerTintColor: '#ebf3fa',
            headerRight: ()=> <Image  style={{ height: 32, width: 32, marginRight: 10, borderRadius: 50}} source={require('./styles/images/logos/stiftungLogo_blue.png')}></Image>
          }} />   







    </Stack.Navigator>
    </NavigationContainer>
    );
}
   
}

export default App