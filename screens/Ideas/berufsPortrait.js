import * as React from 'react';
import { Text, ScrollView, Image, Linking} from 'react-native';
import Styles from '../../styles/styles'

const berufsPortrait = () =>   {

    return (    
    <ScrollView  style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Berufe Vorstellen /Portrait</Text>

      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>
      
      <Image source={require('./../../styles/images/jobConfusion.jpg')}
      style={{height: 200, width: 400}}></Image>

      

      <Text style={Styles.articleTextBlock}>Eine Auflistung mit verschiedensten Berufen gibt es auch unter folgenden Webseiten: </Text>

      <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.aubi-plus.de/berufe/a-z/')}>
          ⨀ www.aubi-plus.de/berufe/a-z/</Text>
    <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.einstieg.com/ausbildung/berufe-a-z.html')}>
          ⨀ www.einstieg.com/ausbildung/berufe-a-z.html</Text>
    <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/')}>
          ⨀ planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/</Text>
    <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.xing.com/campus/de/job-search')}>
          ⨀ www.xing.com/campus/de/job-search</Text>






    </ScrollView>
  );}


export default berufsPortrait