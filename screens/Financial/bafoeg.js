import * as React from 'react';
import { Text, ScrollView , Image, View} from 'react-native';
import Styles from '../../styles/styles'


const Bafoeg = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}> Bafög: Wie finanziere ich ein Studium?</Text>

      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

        <Image source={require('./../../styles/images/piggybank.jpg')}
      style={{height: 200, width: 400}}></Image>

      <Text style={Styles.articleTextBlock}>
        Nach §7 Abs.1 BAföG werden grundsätzlich finanzielle Leistungen nach dem
        BAföG nur für eine Ausbildung gewährt. Ausgebildete TänzerInnen im
        Besitz einer Hochschulzu-gangsberechtigung erhalten deshalb keine
        finanzielle Leistung nach dem BAföG, wenn die Erstausbildung nach dem
        BAföG gefördert werden konnte. Ausnahme nach §7 Abs.2 BAföG, wenn die
        TänzerInnen als erste berufsbildende Ausbil-dung eine zumindest
        dreijährige Ausbildung an einer Berufsfachschule abgeschlossen haben,
        deren Besuch eine abgeschlossene Berufsausbildung nicht voraussetzt.
      </Text>

      
      <Image source={require('./../../styles/images/student.jpg')}
      style={{height: 200, width: 400}}></Image>

      <Text style={Styles.articleTextBlock}>
        BAföG Die staatliche Unterstützung für Studierende ist im
        Bundesausbildungs-Förderungsgesetz geregelt – besser bekannt unter dem
        Kürzel BAföG, womit auch die Förderung an sich bezeichnet wird. BAföG
        wird für Studierende grundsätzlich zur Hälfte als Zuschuss und zur
        Hälfte als zinsfreies Staatsdarlehen gezahlt, das nach dem Studium an
        das Bundesver-waltungsamt zurückgezahlt werden muss. Die Förderung nach
        dem BAföG ist vom Ein-kommen der Eltern abhängig. Nach 5 Jahren
        eigenständiger Erwerbsarbeit ist der Antrag-steller allerdings
        elternunabhängig. Einkommen und Vermögen des/der Studierenden werden
        dagegen grundsätzlich nach Abzug der Freibeträge (Single ohne Kind:
        5200,- €) auf den Förderbetrag angerechnet. Auszubildende/ Studierende
        können grundsätzlich nur gefördert werden, wenn sie die Ausbildung/ das
        Studium, für die sie Förderung beantragen, vor Vollendung des 30.
        Le-bensjahres beginnen. Es gibt aber verschiedene Ausnahmeregelungen, z.
        B. für Absolven-ten des zweiten Bildungsweges, Berufstätige ohne
        formelle Hochschulzugangsberechti-gung, die aufgrund ihrer beruflichen
        Qualifikation an einer Hochschule eingeschrieben worden sind, oder für
        Personen, die aus persönlichen (z. B. Krankheit) oder familiären (z. B.
        Kindererziehung) Gründen gehindert waren, die Ausbildung vor Vollendung
        des 30. Le-bensjahres zu beginnen. Eine Ausnahme von der Altersgrenze
        ist allerdings nur möglich, wenn die Auszubildenden die Ausbildung ihrer
        Wahl unverzüglich nach Erreichen der Zu-gangsvoraussetzungen oder dem
        Wegfall der Hinderungsgründe aufgenommen haben. Seit 2010 ist man für
        ein Masterstudium bei Studienbeginn bis zum 35. Geburtstag
        BA-föG-berechtigt. Auch beim BaföG gibt es die Möglichkeit gegen einen
        abgelehnten An-trag innerhalb von 4 Wochen Widerspruch einzulegen. Mehr
        unter: www.bafoeg.bmbf.de
      </Text>
    </ScrollView>
  );
}


export default Bafoeg