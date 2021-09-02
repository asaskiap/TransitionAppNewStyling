import * as React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import Styles from '../../styles/styles'

const Aufstiegsstipendium = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>

      <Text style={Styles.articleHeader}> Aufstiegsstipendium der Bundesregierung</Text>

      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

        <Image source={require('./../../styles/images/moneyplant.jpg')}
      style={{height: 200, width: 400}}></Image>
      
      <Text style={Styles.articleTextBlock}>

        <Text style={Styles.paragraph}>
        Das Aufstiegsstipendium unterstützt Berufserfahrene bei der Durchführung
        eines ersten akademischen Hochschulstudiums. Das Stipendium ist ein
        Programm der Begabtenförde-rung und unterstützt Menschen, die in
        Ausbildung und Beruf ihr besonderes Talent und Engagement bewiesen
        haben. Die SBB – Stiftung Begabtenförderung berufliche Bildung führt im
        Auftrag und mit Mitteln des Bundesministeriums für Bildung und Forschung
        die Auswahl der Stipendiatinnen und Stipendiaten durch und begleitet sie
        während ihres Studiums. Jährlich können über 1.000 Stipendiatinnen und
        Stipendiaten neu aufgenom-men werden. Es gibt keine Altersgrenze. Nach
        erster Anfrage durch die Stiftung TANZ dürfte das Aufstiegsstipendium
        für TänzerInnen, die ihre Ausbildung an einer Berufsfach-schule
        absolviert haben, zugänglich sein.
      </Text>
        <Text style={Styles.subHeader}>
        Die Voraussetzungen für eine Bewerbung sind:</Text>
        <Text style={Styles.articleBullet}>● eine abgeschlossene Berufsausbildung oder Aufstiegsfortbildung</Text>
        <Text style={Styles.articleBullet}>● Berufserfahrung von
        mindestens zwei Jahren (nach Abschluss der Ausbildung und vor Beginn
        eines Studiums) zum Zeitpunkt der Online-Bewerbung</Text>
        <Text style={Styles.articleBullet}>● noch kein
        Hochschulabschluss</Text>
        <Text style={Styles.articleBullet}>● ein Nachweis über die besondere Leistungsfähigkeit in Ausbildung und Beruf Die Bewerbung erfolgt in einem dreistufigen Auswahlverfahren.Mehr unter: www.sbb-sti-pendien.de</Text> 

        <Text style={Styles.paragraph}>
        Weitere Möglichkeiten der Studienfinanzierung: Bildungskredit von der
        staatlich ge-förderten KfW-Bank oder Stipendien von verschiedensten
        Stiftungen. Mehr unter: www.studienfinanzierung.de
        </Text>
      </Text>

      <Text style={Styles.articleHeaderRed}>Ab 1. August 2016: Aufstiegs-Bafög (statt Meister-Bafög)</Text>

      <View style={Styles.articleTextBlock}>
        <Text style={Styles.paragraph}>
        Das AFBG soll in allen Berufsgruppen “Maßnahmen der beruflichen
        Aufstiegsfortbildung finanziell […] unterstützen und […] zu
        Existenzgründungen […] ermuntern [und ist somit] ein umfassendes
        Förderinstrument für die berufliche Fortbildung in grundsätzlich allen
        Berufsbereichen, und zwar unabhängig davon, in welcher Form sie
        durchgeführt wird (Vollzeit/ Teilzeit/ schulisch/ außerschulisch/
        mediengestützt/ Fernunterricht).” Es gibt einkommensunabhängige
        Unterstützung zu den Fortbildungskosten und bei Vollzeit-maßnahmen
        zusätzlich einkommensabhängige Unterstützung zum Lebensunterhalt. Die
        wesentlichen Änderungen ab August 2016 sind im Folgenden:
      </Text>
       
       <Text style={Styles.articleBullet}> ● Der Basisunterhaltsbeitrag steigt bei einer Vollzeitmaßnahme von bisher 645,00 € auf 708,00 €.</Text>

       <Text style={Styles.articleBullet}> ● Der Zuschussanteil für den Lebensunterhalt bei einer Vollzeitmaßnahme wird auf 50% erhöht; und nun werden nicht mehr maximal 10.000 €, sondern 15.000 € Lehrgangskos-ten mit 40% der Summe bezuschusst</Text>

       <Text style={Styles.articleBullet}>● die Förderbeträge für zu versorgende Kinder sowie EhepartnerInnen steigen</Text>

       <Text style={Styles.articleBullet}>● bis zu einem Vermögen von 45.000 € kann finanziell unterstützt werden</Text>

       <Text style={Styles.articleBullet}>∘ Die Förderung von beruflichen Aufstiegsfortbildungen gilt nun auch  für Antragstelle-rInnen mit einem B.A. oder vergleichbaren Hochschulabschluss (z.B. Fachhochschuldiplom) </Text>

       <Text style={Styles.articleBullet}>● Die finanzielle Unterstützung ist weiterhin altersunabhängig.</Text>

       
       <Text style={Styles.articleBullet}>● Die Förderung erfolgt weiterhin teils als Zuschuss, teils als zinsgünstiges Darlehen der Kreditanstalt für Wiederaufbau (KfW, dessen Rückzahlungsmodalitäten ab August ver-bessert wurden.</Text>

        <Text style={Styles.paragraph}> Das Bundesministerium für Bildung und Forschung (BMBF) bietet auf der
        hier mehrmals zitierten Webseite alle wichtigen Informationen und auch
        eine kostenlose Info-Broschüre “Vom Meister- zum Aufstiegs-Bafög” an,
        die auf Nachfrage auch bei uns zu haben ist. Mehr Informationen:
        https://www.aufstiegs-bafoeg.de </Text>

        </View>
      
    </ScrollView>
  );
}
export default Aufstiegsstipendium