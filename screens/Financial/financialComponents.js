import * as React from 'react';
import { Text, ScrollView, Linking, Image, View, TouchableOpacity } from 'react-native';
import Styles from '../../styles/styles'


export const Bildungskredit = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Bildungskredit </Text>
      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

      
    <Image source={require('./../../styles/images/loan.jpg')}
      style={{height: 200, width: 400}}></Image>
      
      <Text style={Styles.articleTextBlock}>
          <Text style={Styles.paragraph}> Der Bildungskredit ist speziell für die Schlussphase des Studiums, für Praktika, Zusatz-, Ergänzungs- oder Aufbaustudiengänge gedacht. Er finanziert den Studierenden oder die Studierende bis zu zwei Jahre lang mit monatlich bis zu 300,- Euro, sofern das Studium an einer BAföG-anerkannten Ausbildungsstätte absolviert wird.</Text>
          <Text style={Styles.paragraph}>Im Gegensatz zur Ausbildungsförderung nach dem BAföG ist der Bildungskredit unabhängig vom eigenen Einkommen und Vermögen sowie dem der Eltern.</Text>
          <Text style={Styles.paragraph}>Der Bildungskredit wird von der KfW Privatkundenbank vergeben und kann auch zusätzlich zum BAföG beantragt werden. Der Darlehenszins ist niedrig und auf der Internetseite der KfW Bankengruppe einsehbar. Höchstalter: 36 Jahre.</Text>
       </Text>


    <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('www.bildungskredit.de')}>
          ⨀ Mehr unter: www.bildungskredit.de</Text>

    </ScrollView>
  );
}





export const Studienkredit = () =>  {
    return (
    <ScrollView style={Styles.articleContainer}>
        <Text style={Styles.articleHeader}>Studienkredit </Text>


    <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

    <Image source={require('./../../styles/images/moneyJar.jpg')}
      style={{height: 200, width: 400}}></Image>
      

    <Text style={Styles.articleTextBlock}>

        <Text style={Styles.paragraph}>Bis zu 14 Semester lang können Studierende ihre Lebenshaltungskosten mit einem Studienkredit finanzieren. Die monatlichen Kreditbeträge können von 100,- bis zu 650,- Euro betragen, abhängig vom Wunsch des Kreditnehmers oder der Kreditnehmerin. Die Zinsen sind vergleichsweise niedrig und mit der Rückzahlung ist zwischen 6 und 23 Monate nach Studienabschluss zu beginnen. Der Kreditantrag ist möglichst 3 Monate vor Finanzierungsbeginn bei einem KfW-Vertriebspartner, das ist ein Studentenwerk, eine Bank oder Sparkasse vor Ort, einzureichen. Weitere Informationen zum Studienkredit der KfW gibt es auf der Internetseite der KfW Bankengruppe. Höchstalter: 44 Jahre.</Text>
        
        <Text 
        style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
        onPress={() => Linking.openURL('https://www⦁	.kfw.de/inlandsfoerderung/Privatpersonen/Studieren-Qualifizieren/Finanzierungsangebote/KfW-Studienkredit-(174)/')}>⨀ Mehr unter: www.kfw.de/</Text> 
</Text>

        <Text style={Styles.articleHeader}>Bafög Bankdarlehn </Text>

        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

        <Image source={require('./../../styles/images/bank.jpg')}
                style={{height: 200, width: 400}}></Image>
      

        <Text style={Styles.articleTextBlock}>
        Im Rahmen des Bundesausbildungsförderungsgesetzes (BAföG) können Studierende unter bestimmten Voraussetzungen ein zinsgünstiges Bankdarlehen erhalten. Wer eine weitere Ausbildung, die eine erste Hochschulausbildung sinnvoll ergänzt, anschließen möchte, die durch einen Fachrichtungswechsel verlängerte Studiendauer finanzieren muss oder finanzielle Unterstützung bis zum Studienabschluss benötigt, weil die BAföG-Förderungshöchstdauer überschritten wurde, kann beim Amt für Ausbildungsförderung einen Antrag stellen. Die Höhe des Darlehens legt das zuständige BAföG-Amt fest. Ausgezahlt wird es von der Kreditanstalt für Wiederaufbau (KfW).
        </Text>
  
       

        <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.kfw.de')}>
          ⨀ Mehr unter: www.kfw.de</Text>
  
      </ScrollView>
    );
  }
  
  


  
export const Bankdarlehn = () =>  {
    return (
      <ScrollView style={Styles.articleContainer}>
        
        
      </ScrollView>
    );
  }
  
  

