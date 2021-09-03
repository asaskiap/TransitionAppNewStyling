import * as React from 'react';
import {  Text, ScrollView, View, Image, Linking } from 'react-native';
import Styles from '../../styles/styles'

const Stipendium = ()  => {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Die Stiftung TANZ vergibt Stipendien</Text>

      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

        <Image source={require('./../../styles/images/freeSwing.jpg')}
      style={{height: 300, width: 400}}></Image>
      
      <View style={Styles.articleTextBlock}>
        <Text style={Styles.paragraph}>
        ... an Tanzschaffende im Übergang in einen neuen Beruf nach der aktiven
        Tanzkarriere. Jedes Jahr zum 30.3., 30.6. und 30.10. kann ein Antrag auf
        eine einmalige Förderung für z.B: Kurs- oder Studiengebühren,
        Fahrtkosten oder Kinderbetreuung während einer Ausbildung gestellt
        werden. Wer einen Antrag stellen will, sollte sich zuvor von der
        Geschäftsstelle der Stiftung zu seiner individuellen Transition beraten
        lassen- telefonisch, persönlich oder per E-mail. Einen Antrag stellen
        können alle professionellen Tänzer/-innen, die eine mind. 7 jährige
        Berufstätigkeit als festangestellter/-e oder freischaffender/e
        Tänzer/-innen nachweisen können. Davon müssen mind. 5 Jahre
        Berufstätigkeit in Deutschland nachgewiesen werden. Nicht EU- oder
        Schengen- Bürger benötigen eine unbefristete Aufenthaltsgenehmigung.
        Bewerbungsvoraussetzung für eine individuelle Transition-Förderung ist
        eine persönliche Transition-Beratung durch die Stiftung TANZ oder die
        Teilnahme an einem Transition-Workshop.
      </Text>

      <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} >
        Bewerbungen bitte ausschließlich (Ausnahmefälle nach persönlicher
        Absprache) per Email als eine zusammengefügte PDF-Datei an:
        info@stiftung-tanz.com
      </Text>


      <Text 
      style={Styles.articleBullet}
      onPress={() => Linking.openURL('https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Statuten-zur-Vergabe-von-Unterst%C3%BCtzung-und-Stipendien.pdf')}>
          ⨀ Statuten zur Vergabe des Stipendiums</Text>


      <Text 
      style={Styles.articleBullet}
      onPress={() => Linking.openURL('https://stiftung-tanz.com/wordpress/wp-content/uploads/2021/03/Antragsformular-fuer-Stipendien-Stiftung-TANZ-1.pdf')}>
        ⨀ Antragsformular für Stipendien</Text>

      <Text 
      style={Styles.articleBullet}
      onPress={() => Linking.openURL(' https://stiftung-tanz.com/wordpress/wp-content/uploads/2013/02/Einkommensnachweis-Antrag-Stiftung-TANZ.pdf')}>
        ⨀ Einkommensnachweis für Stipendiumsantrag</Text>
    </View>
    </ScrollView>
  );
}

export default Stipendium
