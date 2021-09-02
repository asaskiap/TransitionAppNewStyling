import * as React from 'react';
import { Text, ScrollView, Linking, Image, View, TouchableOpacity } from 'react-native';
import Styles from '../../styles/styles'


export const Deutschkurse = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Deutschkurse </Text>
      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

      
    <Image source={require('./../../styles/images/German.jpg')}
      style={{height: 200, width: 400}}></Image>
      
      <Text style={Styles.articleTextBlock}>
      Deutschkurse sind über verschiedene Anbieter zu finden. Beispielsweise über das Goethe Institut, die Volkshochschule oder die DeutschAkademie in Berlin. Unter bestimmten Voraussetzungen kann der Deutschkurs über das Arbeitsamt finanziert. 
       </Text>
    </ScrollView>
  );
}





export const Nachweise = () =>  {
    return (
    <ScrollView style={Styles.articleContainer}>
        <Text style={Styles.articleHeader}>Nachweise </Text>


    <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

    <Image source={require('./../../styles/images/paper.jpg')}
      style={{height: 200, width: 400}}></Image>
      

    <Text style={Styles.articleTextBlock}>
    Allgemeine Informationen zum Thema „Leben und Arbeiten in Deutschland” und damit verbundene Fragen wie z.B. die Anerkennung von Abschlüssen, Beschäftigungschancen und Sozialversicherung etc. finden Sie auf der Internetplattform der Auslandsvermittlung der Bundesagentur für Arbeit 
    <Text style={Styles.articleBullet} 
      onPress={() => Linking.openURL('https://www.ba-auslandsvermittlung.de/deutschland')}>
          www.ba-auslandsvermittlung.de/deutschland</Text> 
    sowie auf dem 
    <Text style={Styles.articleBullet} 
      onPress={() => Linking.openURL('http://ec.europa.eu/eures')}>
         EURES-Portal (European Employment Services). </Text>
    <Text style={Styles.paragraph}>
    Informationen für Auswanderer und Auslandstätige bietet der Informationsdienst des Bundesverwaltungsamtes (BVA)
    <Text style={Styles.articleBullet} 
      onPress={() => Linking.openURL('http://www.bva.bund.de')}>
         (http://www.bva.bund.de). </Text>
    </Text>
     </Text>
      </ScrollView>
    );
  }
  
  


  
export const Zeugnisanerkennung = () =>  {
    return (
      <ScrollView style={Styles.articleContainer}>
        <Text style={Styles.articleHeader}>Annerkennung von ausländischen Zeugnissen</Text>

        
    <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

    <Image source={require('./../../styles/images/learning.jpg')}
      style={{height: 200, width: 400}}></Image>


        <Text style={Styles.articleTextBlock}>
            <Text style={Styles.paragraph}>In Deutschland verfügt jedes Bundesland über eine „Zeugnisanerkennungsstelle“, die für die Bewertung von Zeugnissen als Nachweis der Hochschulreife,der Fachhochschulreife, eines mittleren Schulabschlusses oder des erfolgreichen Hauptschulabschlusses zuständig ist.</Text>
            <Text style={Styles.paragraph}>Aufgaben einer Zeugnisanerkennungsstelle sind folgende:</Text>
            <Text style={Styles.paragraph}>● Bewertung von in- und ausländischen Bildungsnachweisen für den Zugang zu den Universitäten und Fachhochschulen.</Text>
            <Text style={Styles.paragraph}>● Bewertung von in- und ausländischen Bildungsnachweisen als Nachweis eines dem Hauptschulabschluss oder dem mittleren Schulabschluss gleichwertigen Schulabschlusses.</Text>
            <Text style={Styles.paragraph}>● Gleichstellung mit im schulischen Bereich erworbenen beruflichen Abschlüssen (Berufsfachschulen, Fachschulen).</Text>

            <Text style={Styles.paragraph}>Die Zentrale für ausländisches Bildungswesen (ZAB), die im Sekretariat der Kultusministerkonferenz (KMK) angesiedelt ist, bietet seit Januar 2010 auch für Privatpersonen mit einem ausländischen Hochschulabschluss Zeugnisbewertungen gegen Gebühr an.</Text>


            <Text style={Styles.articleBullet}>⨀ Wer hilft weiter in Anerkennungsfragen?</Text>
            <Text style={Styles.paragraph}>Die Berater der ZAV Auslandsvermittlung informieren und beraten Sie in allen Fragen zur Anerkennung Ihrer ausländischen Qualifikationen und zum deutschen Arbeitsmarkt.</Text>
            <Text style={Styles.articleBullet}>Info-Center der ZAV: Telefon: 0228 713-1313</Text>
            <Text style={Styles.articleBullet}>E-Mail: zav-auslandsvermittlung@arbeitsagentur.de</Text>
            
            <Text style={Styles.paragraph}>Eine zusammenfassende Beschreibung der Dienstleistung sowie Ansprechpartner finden Sie auch folgendem Flyer zur Anerkennungsberatung:</Text>
            <Text style={Styles.articleBullet}
             onPress={() => Linking.openURL('http://www.ba-auslandsvermittlung.de/lang_de/nn_7688/SharedDocs/Publikationen/ZAV/ZAV-Anerkennungsberatung-Flyer,templateId=raw,property=publicationFile.pdf')}>
                 http://www.ba-auslandsvermittlung.de/</Text>

            <Text style={Styles.paragraph}>Informationssystem zur Anerkennung ausländischer Bildungsabschlüssen (Datenbank der Kultusminister-Konferenz): </Text>

            <Text style={Styles.articleBullet}
            onPress={()=>Linking.openURL('http://www.anabin.de/')}>www.anabin.de/</Text>

        </Text>
        
        
      </ScrollView>
    );
  }
  
  

