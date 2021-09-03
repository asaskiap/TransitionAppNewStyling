import * as React from 'react';
import { Text, ScrollView, Linking, Image, View, TouchableOpacity } from 'react-native';
import Styles from '../../styles/styles'


export const Universitaeten = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Liste mit Universitäten </Text>
      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

      
    <Image source={require('./../../styles/images/uni.jpg')}
      style={{height: 200, width: 400}}></Image>
      
      <Text style={Styles.articleTextBlock}>
      Es gibt ein paar gute Seiten im Netz, auf denen eine Auflistung aller Universitäten und deren Studiengänge zu finden sind. Dort sind meist auch gleich nützliche Informationen mit angegeben, ob beispielsweise mit einem NC zu rechnen ist, ob der Studiengang im Winter- und Sommersemester angeboten wird, wie viele Studenten pro Jahr zugelassen werden oder was die möglichen Berufsfelder wären in denen man mit einem Abschluß in einem bestimmten Studienfach arbeiten kann. Die folgenden Seiten bieten dazu eine nützliche Übersicht, welche bei der ersten Orientierung oder ideen-generierender Suche helfen kann: </Text>


          <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.hochschulkompass.de/hochschulen.html')}>
          ⨀ www.hochschulkompass.de</Text>

          <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www2.daad.de/deutschland/studienangebote/studiengang/de/')}>
          ⨀ www2.daad.de/deutschland</Text>
          
          <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://studiengaenge.zeit.de/hochschulen/land/deutschland?wt_ref=https:%2F%2Fwww.google.com%2F&wt_time=1625245417754')}>
          ⨀ studiengaenge.zeit.de/hochschulen/</Text> 
          
    <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://studieren.de/landkarte-unis-deutschland.0.html')}>
          ⨀ studieren.de </Text>

    </ScrollView>
  );
}





export const Studienplatzsuche = ({navigation}) =>  {
    return (
    <ScrollView style={Styles.articleContainer}>
        <Text style={Styles.articleHeader}>Studienplatzsuche </Text>


    <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

    <Image source={require('./../../styles/images/books.jpg')}
      style={{height: 200, width: 400}}></Image>
      

    <Text style={Styles.articleTextBlock}>
        <Text style={Styles.subHeader}>Zunächst ist es wichtig, sich einige Fragen zu stellen:</Text> 
        <Text style={Styles.articleBullet}>● Was möchte ich studieren?</Text>
        <Text style={Styles.articleBullet}>● Erfülle ich die Voraussetzungen? (Abitur – Fachgebundene Hochschulreife – Fachhochschulreife – Studieren ohne Abitur)</Text>
        <Text style={Styles.articleBullet}>● Wie möchte ich studieren (Vollzeit – Teilzeit, Präsenzstudium – Fernstudium – Duales Studium)</Text>
        <Text style={Styles.articleBullet}>● An welchen Hochschulen kann oder möchte ich das studieren (Universität – FH, staatlich – privat, etc.)?</Text>
        <Text style={Styles.articleBullet}>● Wäre ein Umzug in eine andere Stadt denkbar, falls nötig?</Text>

        <Text style={Styles.paragraph}>Hat man diese Fragen beantwortet, gibt es einige Webseiten, die bei der Suche nach einem Studienplatz hilfreich sein können. Die Seite www.hochschulkompass.de ist eine gute Möglichkeit, um die Suche zu starten. Dort findet man nicht nur zahlreiche Informationen zu Studiengängen und Hochschulen, sondern auch rund ums Studium, inklusive Voraussetzungen, Bewerbung und Finanzierung.  </Text>
        <Text style={Styles.paragraph}>Die Seite 
        <Text style={Styles.articleBullet} onPress={() => Linking.openURL('https://www.studienwahl.de')}> www.studienwahl.de</Text> kann dabei ebenso hilfreich sein. Hiervon gibt es auch eine jährliche Printausgabe mit einer Übersicht über die verschiedenen Studiengänge und Hochschulen. </Text>
        <Text style={Styles.paragraph}>Hat man dann einen passenden Studienplatz gefunden, geht es an den 
        <TouchableOpacity onPress={()=> navigation.navigate('Bewerbungsprozess')}>
            <Text style={Styles.articleBullet}>Bewerbungsprozess.</Text></TouchableOpacity></Text>
</Text>
  
      </ScrollView>
    );
  }
  
  


  
export const Ausbildungsbetriebe = () =>  {
    return (
      <ScrollView style={Styles.articleContainer}>
        <Text style={Styles.articleHeader}>Ausbildungsbetriebe </Text>

        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

        <Image source={require('./../../styles/images/craft.jpg')}
      style={{height: 200, width: 400}}></Image>
      


        <Text style={Styles.articleTextBlock}>
        Die Suche nach einer Ausbildung und einem Ausbildungsbetrieb kann sehr individuell und facettenreich sein, denn es gibt eine Vielzahl an verschiedensten Berufen und Bereichen in denen eine Berufsausbildung absolviert werden kann. Es gibt verschiedene Möglichkeiten um an einen Ausbildungsplatz zu kommen. So kann man beispielsweise direkt mit dem Betrieb der Wahl Kontakt aufnehmen oder sich zuerst bei Ausbildungs- oder Jobmessen oder Institutionen wie der IHK beraten lassen. Ein wichtiger Ansprechpartner ist dabei die Arbeitsagentur. Gerade im Rahmen einer beruflichen Veränderung, kann hier auch noch zusätzlich bei einer eventuellen Finanzierung in Form einer Umschulung oder eines Bildungsgutscheins weiter geholfen werden. Unter den folgenden Webseiten kann man sich auch über die Möglichkeiten einer Berufsausbildung informieren:
        </Text>
  
       

        <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.arbeitsagentur.de/m/ausbildungklarmachen/?pk_campaign=AusbildungKlarmachen&pk_source=google_paid&pk_medium=textad&pk_content=Performance')}>
          ⨀ www.arbeitsagentur.de/</Text>

          <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.ihk-berlin.de/ausbildung/infos-fuer-ausbildungsbetriebe/ausbildungsbetrieb-werden/wegweiser-fuer-ausbildungsbetriebe-2277902')}>
          ⨀ https://www.ihk-berlin.de/</Text>

          <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.bibb.de/de/65925.php')}>
          ⨀ https://www.bibb.de/</Text>

          <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://www.bmwi.de/Navigation/DE/Service/Ausbildungsberufe/ausbildungsberufe.html')}>
          ⨀ https://www.bmwi.de/</Text>

          <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: '600', color: '#FF6B53' }} 
      onPress={() => Linking.openURL('https://planet-beruf.de/schuelerinnen/mein-beruf/berufe-von-a-z/')}>
          ⨀ https://planet-beruf.de/</Text>
        
      </ScrollView>
    );
  }
  
  



  export const Bewerbungsprozess = () =>  {
    return (
      <ScrollView style={Styles.articleContainer}>
        <Text style={Styles.articleHeader}>Bewerbungsprozess </Text>

        <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

        <Image source={require('./../../styles/images/typing.jpg')}
      style={{height: 200, width: 400}}></Image>
      


        <Text style={Styles.articleTextBlock}>
        Für das Schreiben einer Bewerbung gibt es kein allgemeingültiges Rezept; hängt es doch stark von dem beruflichen Feld und der spezifischen Stellenbeschreibung, sowie der Person des Bewerbers ab. Im Internet gibt es eine Vielzahl an verschiedensten Vorlagen wie eine Bewerbung auszusehen hat. Die genaue Wahl der jeweiligen Form hängt dann meist vom Bewerber ab und ist individuell gestaltbar. 
        </Text>

        <Image source={require('./../../styles/images/bewerbung.jpg')}
      style={{height: 200, width: 400}}></Image>
      

        <Text style={Styles.articleTextBlock}>
        Was jedoch essentiell ist, ist ein übersichtlicher, tabellarischer Lebenslauf, in dem die für den Arbeitgeber und die ausgeschriebene Stelle wichtigen Informationen übersichtlich zusammengefasst sind. Dies beinhaltet den Bildungsweg, die Berufserfahrung und ggf. persönliche Erfahrungen oder Kenntnisse (beispielsweise Sprachen oder ehrenamtliche Tätigkeiten), die für den Arbeitgeber interessant sein könnten und einen selbst von den anderen Mitbewerbern abhebt und unterscheiden kann. In dem Bewerbungsschreiben sollten folgende Informationen erhalten sein; 
        
            <Text style={Styles.articleBullet}>● worauf bewerbe ich mich?
            </Text>
            <Text style={Styles.articleBullet}>● Warum bewerbe ich mich auf diese Stelle? (Interesse, Leidenschaft, Hobbies, Vorerfahrungen, etc.)
            </Text>
            <Text style={Styles.articleBullet}>● Welche (Arbeits-)Erfahrungen bringe ich mit, die mich für die Stelle qualifizieren? (eine Art „Arbeitsbiographie“ mit allen relevanten Stationen im eigenen Leben die mit der ausgeschriebenen Stelle zu tun haben)
            </Text>
            <Text style={Styles.articleBullet}>● Wie stelle ich mir die Arbeit / Tätigkeit vor?
            </Text>

            <Text style={Styles.articleBullet}>● Wie stelle ich mir die Arbeit / Tätigkeit vor?
            </Text>

            <Text style={Styles.articleBullet}>● Warum bin gerade ich besonders gut geeignet für die Stelle? Was unterscheidet mich vielleicht von möglichen Mitbewerbern?
            </Text>

            <Text style={Styles.articleBullet}>● Was macht mich persönlich aus? Wie würde ich mich mit wenigen Worten selbst beschreiben?
            </Text>

        Alle diese Informationen müssen natürlich selektiv ausgewählt und an die ausgeschriebene Stelle angepasst werden. Dabei ist meist ein kurzer, prägnanter Text eingängiger als lange Ausführungen über vorangegangene Tätigkeiten. Eine persönliche Note kann dabei manchmal dazu führen, dass man unter den Mitbewerbern auffällt und das Interesse der Personalabteilung weckt. 
        </Text>
  
 
        
      </ScrollView>
    );
  }
  