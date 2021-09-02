import * as React from 'react';
import { Text, ScrollView, Linking, Image, View, TouchableOpacity } from 'react-native';
import Styles from '../../styles/styles'


const Visum = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Aufenthalts- und Arbeitsgenehmigung in Deutschland
 </Text>
      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

      
    <Image source={require('./../../styles/images/passportVisa.jpg')}
      style={{height: 300, width: 400}}></Image>
      
      <Text style={Styles.articleTextBlock}>
        <Text style={Styles.paragraph}>In der Regel gilt für Bürger aus EU-Staaten und dem Europäischen Wirtschaftsraum (aus Belgien, Dänemark, Estland, Finnland, Frankreich, Griechenland, Irland, Italien, Lettland, Litauen, Luxemburg, Malta, den Niederlanden, Österreich, Polen, Portugal, Schweden, Slowakei, Slowenien, Spanien, Tschechien, Ungarn, dem Vereinigten Königreich und Zypern) genießen die uneingeschränkte Arbeitnehmerfreizügigkeit und benötigen daher zur Arbeitsaufnahme keine Arbeitserlaubnis. </Text>
        <Text style={Styles.paragraph}>
        Aufgrund von vereinbarten Übergangsfristen unterliegen dagegen Staatsangehörige der EU-Mitgliedsstaaten Bulgarien und Rumänien der Arbeitsgenehmigungspflicht. Für Bürger dieser EU-Mitgliedstaaten ist eine Beschäftigung in Deutschland nur möglich, wenn die zuständige Agentur für Arbeit eine Arbeitsgenehmigung-EU erteilt.</Text>
        <Text style={Styles.paragraph}>Nähere Informationen zu den aktuell geltenden Übergangsregelungen erhalten Sie unter 
            <Text style={Styles.articleBullet} onPress={() => Linking.openURL('http://ec.europa.eu/eures')}> http://ec.europa.eu/eures</Text>
        </Text>
        </Text>

        
      
    <Image source={require('./../../styles/images/passportPeople.jpg')}
      style={{height: 300, width: 400}}></Image>

    <Text style={Styles.articleTextBlock}>
        <Text style={Styles.subHeader}>In der Regel gilt für Bürger aus Nicht-EU-Staaten und Staatenlose: </Text>
        <Text style={Styles.paragraph}>Ausländer aus Nicht-EU-Staaten bedürfen für die Einreise ein Visum und für den längeren Aufenthalt in Deutschland eines Aufenthaltstitels. Das Visum zur Einreise in die Bundesrepublik muss bei der Deutschen Botschaft im Ursprungsland beantragt werden und gilt bis zu 3 Monaten. Die Aufenthaltstitel werden erteilt als Niederlassungserlaubnis (unbefristet, unabhängig von einem „Zweck“ des Aufenthalts) oder als Aufenthaltserlaubnis (befristet, stets in Abhängigkeit von einem Aufenthaltszweck erteilt).</Text>
    </Text>

    <Text style={Styles.articleTextBlock}>
        <Text style={Styles.subHeader}>Aufenthaltserlaubnis (Siehe u.a. § 7 und § 8 des Aufenthaltsgesetzes)</Text>
        <Text style={Styles.paragraph}>Die Aufenthaltserlaubnis ist ein Aufenthaltstitel, die grundsätzlich nur befristet (auf mindestens 6 Monate) und zweckgebunden erteilt wird. Die Aufenthaltserlaubnis ist nicht immer mit einer Arbeitserlaubnis verbunden; diese muss im Aufenthaltstitel ausdrücklich ausgesprochen werden. Unter welchen Bedingungen das möglich ist, hängt vom jeweiligen Aufenthaltszweck ab.</Text>
        <Text style={Styles.paragraph}>Zwecke des Aufenthalts können z.B. folgende sein:</Text>
        <Text style={Styles.paragraph}>● Aufenthalt zum Zweck der Ausbildung (§§ 16 und 17)</Text>
        <Text style={Styles.paragraph}>● Aufenthalt zum Zweck der Erwerbstätigkeit (§§ 18 bis 21 </Text>
        <Text style={Styles.paragraph}>● Aufenthalt aus völkerrechtlichen, humanitären oder politischen Gründen (§§ 22 bis 26 </Text>
        <Text style={Styles.paragraph}>● Aufenthalt aus familiären Gründen (§§ 27 bis 36)</Text>
        <Text style={Styles.paragraph}>● Aufenthalt für ehemalige Deutsche und langfristig Aufenthaltsberechtigte in der EU (§§ 37 bis 38 a)</Text>
    </Text>
        
    <Image source={require('./../../styles/images/paperAeroplane.jpg')}
      style={{height: 300, width: 400}}></Image>

    <Text style={Styles.articleTextBlock}>

        <Text style={Styles.subHeader}>Niederlassungserlaubnis (Siehe u.a. § 9 des Aufenthaltsgesetzes)</Text>
        <Text style={Styles.paragraph}>Die Niederlassungserlaubnis ist ein unbefristeter Aufenthaltstitel. Sie berechtigt sowohl zur Beschäftigung als Arbeitnehmer als auch zur Ausübung einer selbständigen Erwerbstätigkeit.</Text>
        <Text style={Styles.paragraph}>Voraussetzungen zur Erteilung einer Niederlassungserlaubnis sind:</Text>
        <Text style={Styles.paragraph}>● 5 Jahre Besitz einer Aufenthaltserlaubnis (3 Jahre als Familienangehöriger eines/r Deutschen),</Text>
        <Text style={Styles.paragraph}>● selbständige Sicherung des Lebensunterhalts</Text>
        <Text style={Styles.paragraph}>● Nachweis über mindestens 60 Monate Pflichtbeiträge oder freiwillige Beiträge zur gesetzlichen Rentenversicherung,</Text>
        <Text style={Styles.paragraph}>● grundsätzliche Straffreiheit,</Text>
        <Text style={Styles.paragraph}>● Erlaubnis zur Beschäftigung als Arbeitnehmer (von der Arbeitsagentur erteilt),</Text>
        <Text style={Styles.paragraph}>● Besitz der Kenntnis zur Ausübung der Erwerbstätigkeit,</Text>
        <Text style={Styles.paragraph}>● Verfügen über einen ausreichenden Wohnraum,</Text>
        <Text style={Styles.paragraph}>● Nachweis über Kenntnisse der deutschen Sprache und Grundkenntnisse der Rechts- und Gesellschaftsordnung in Deutschland (oder erfolgreiche Teilnahme an einem Integrationskurs).</Text>

        <Text style={Styles.articleBullet}>Die Erteilung einer Niederlassungserlaubnis oder einer Aufenthaltserlaubnis ist beim zuständigen Bürgeramt (Ausländerbehörde) zu beantragen (Musterformulare meistens online). Zum Antrag sind unterschiedlichen Unterlagen in Kopie und im Original vorzulegen.</Text>
        <Text style={Styles.paragraph}>Siehe auch: 
            <Text style={Styles.articleBullet} onPress={()=>Linking.openURL('http://bundesrecht.juris.de/aufenthg_2004/index.html')}> http://bundesrecht.juris.de/aufenthg_2004/index.html</Text>
        </Text>

    </Text>




    </ScrollView>
  );
}

export default Visum; 