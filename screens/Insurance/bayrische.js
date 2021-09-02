import * as React from 'react';
import { Text, ScrollView, Linking, Image} from 'react-native';
import Styles from '../../styles/styles'


const Bayrische = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Bayerische Versorgungskammer</Text>
      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

      
    <Image source={require('./../../styles/images/umbrellaSky.jpg')}
      style={{height: 200, width: 400}}></Image>
      
      <Text style={Styles.articleTextBlock}>
        <Text style={Styles.subHeader}>Versorgungsanstalt der deutschen Bühnen</Text>
        <Text style={Styles.paragraph}> Die Versorgungsanstalt der deutschen Bühnen ist eine berufsständische Pflichtversorgungseinrichtung. Sie hat die Aufgabe, den an deutschen Theatern abhängig beschäftigten Bühnenangehörigen im Wege der Pflichtversicherung eine zusätzliche Alters-, Berufsunfähigkeits- und Hinterbliebenenversorgung zu gewähren.</Text>
        <Text style={Styles.paragraph}>Die Versorgungsanstalt bietet für Tänzer und Tänzerinnen, die den Bühnenberuf aufgeben folgende Möglichkeiten: die Inanspruchnahme einer sog. Tänzerabfindung, die Weiterversicherung oder die teilweise Inanspruchnahme einer Tänzerabfindung gekoppelt an eine Weiterversicherung bei der Versorgungsanstalt der deutschen Bühnen.</Text>

        <Text style={Styles.subHeader}>Sonderregelung für Tänzer und Tänzerinnen</Text>
        <Text style={Styles.paragraph}>Die Sonderregel der Tänzerabfindung gilt für auftretende Tänzer und Tänzerinnen, dazu gehören Solo-, Gruppen- und Musicaltänzer.</Text>
        <Text style={Styles.paragraph}>Eine Abfindung kann dann in Anspruch genommen werden, wenn der Tänzer oder die Tänzerin den Bühnenberuf spätestens mit dem Ende der Spielzeit, in der sie das 44. Lebensjahr vollenden, global aufgeben sowie eine Umschulung, Fortbildung oder Existenzgründung glaubhaft nachweisen. Zudem müssen für mindestens 60 Monate Beiträge entrichtet und es dürfen keine Versorgungsleistungen (Ruhegeld wegen Berufs- oder Erwerbsunfähigkeit) in Anspruch genommen worden sein.</Text>
        <Text style={Styles.paragraph}>Tanzgruppenmitglieder, die bereits vor dem Jahr 2011 pflichtversichert waren, können die Abfindung noch nach der alten Sonderregelung beanspruchen, wenn sie den Bühnenberuf im Anstaltsbereich bis zum Ende der Spielzeit, in der sie das 40. Lebensjahr vollenden, spätestens aber bis zum 31. August 2016, endgültig aufgegeben haben. Der Antrag auf Abfindung muss bis zur Vollendung des 42. Lebensjahres gestellt werden.</Text>
        <Text style={Styles.paragraph}>Die Abfindung wird nur einmalig und auf Antrag ausbezahlt. Als Abfindung werden alle eingezahlten Beiträge gezahlt, also auch die Arbeitgeberanteile. Dazu erhalten die Tänzer und Tänzerinnen Zinsen von jährlich 4 % für Beiträge, die bis 2005 entrichtet, von jährlich 3,25 % für Beiträge, die von 2006 bis einschließlich 2010 entrichtet, von jährlich 2 % für Beiträge, die ab 2011 entrichtet wurden und von 0,9 % für Beiträge, die ab 2021 entrichtet wurden. Für ab 2011 gezahlte Beiträge wird zusätzlich der Wert der gegebenenfalls vom Verwaltungsrat im Wege der Überschussverteilung beschlossenen Anwartschaftsdynamisierungen erstattet.</Text>
        <Text style={Styles.paragraph}>Nach Inanspruchnahme der vollen Abfindung erlöschen alle Anwartschaften auf eine Versorgung bei der Versorgungsanstalt der deutschen Bühnen.</Text>
        <Text style={Styles.paragraph}>Beitragspflichtig versicherte Tänzer oder Tänzerinnen haben einen Anspruch auf ein befristetes Ruhegeld wegen Berufsunfähigkeit, wenn die Berufsunfähigkeit vor Vollendung des 35. Lebensjahres eingetreten ist und der Tänzer bzw. die Tänzerin für 36 Monate Beiträge entrichtet hat oder der Versicherungsfall durch einen Arbeitsunfall bedingt ist. Eine Tänzerabfindung ist anschließend ausgeschlossen. Die Ansprüche auf die Alters- und Hinterbliebenenversorgung bleiben aber voll erhalten.</Text>
        <Text style={Styles.paragraph}>Stets besteht anstelle der Tänzerabfindung ein Anspruch auf ein Ruhegeld wegen Erwerbsunfähigkeit bei sonst gegebenen Voraussetzungen.</Text>
        <Text style={Styles.paragraph}>Die Sonderregelung für die Tänzerabfindung gilt nicht, wenn der Tänzer oder die Tänzerin nach dem Ende der Spielzeit, in welcher dieser oder diese das 44. Lebensjahr vollendet hat, durch ein Theater versichert ist. In diesem Fall finden ausschließlich die allgemeinen Satzungsbestimmungen Anwendung.</Text>
        
       </Text>

       <Image source={require('./../../styles/images/dancerOnYellow.jpg')}
      style={{height: 200, width: 400}}></Image>

       <Text style={Styles.articleTextBlock}>
           <Text style={Styles.subHeader}>Möglichkeit der Weiterversicherung</Text>
                <Text style={Styles.paragraph}>Statt der Inanspruchnahme einer Abfindung kann sich ein Tänzer oder eine Tänzerin nach Aufgabe des Bühnenberufs alternativ weiterversichern. Eine Weiterversicherung hat den Vorteil, dass dadurch ggf. die Wartezeit für das Altersruhegeld erreicht wird und dadurch ein Anspruch auf Altersruhegeld, flexibles Altersruhegeld oder auf Hinterbliebenenversorgung entsteht.</Text>
                <Text style={Styles.paragraph}>Ohne Weiterversicherung wird die Versicherung als beitragsfreie Versicherung fortgeführt. Während der beitragsfreien Versicherung werden keine Versicherungszeiten zurückgelegt und es besteht kein Versicherungsschutz bei Berufs- oder Erwerbsunfähigkeit. Außerdem wächst die Rentenanwartschaft nicht.</Text>
                <Text style={Styles.paragraph}>Die Weiterversicherung ist zulässig im unmittelbaren Anschluss an die Beschäftigung bei einem Theater, die Zahlung eines Ruhegeldes wegen Berufs- oder Erwerbsunfähigkeit oder den Wegfall der Erwerbsunfähigkeit, wenn unmittelbar vor deren Eintritt eine beitragspflichtige Versicherung bestand.</Text>
                <Text style={Styles.paragraph}>Sie ist ausgeschlossen bei Erwerbs- oder Berufsunfähigkeit, solange von der Versorgungsanstalt der deutschen Bühnen ein Ruhegeld gezahlt wird.</Text>
                <Text style={Styles.paragraph}>Die Weiterversicherung ist innerhalb eines Jahres nach Ende der Beschäftigung am Theater oder dem Eintritt der anderen Voraussetzungen schriftlich zu erklären. Der Grundbeitrag beträgt monatlich 12,50 Euro und ist jeweils am Monatsersten fällig. Wahlweise kann zum Grundbeitrag ein Zusatzbeitrag bis zum Höchstbeitrag (16 % der Beitragsbemessungsgrenze der allgemeinen Rentenversicherung) entrichtet werden.</Text>
                <Text style={Styles.paragraph}>Einmalig ist auch eine betragsmäßig teilweise Abfindung möglich, bei der die Versicherung in Höhe der verbleibenden Anwartschaften fortbesteht.</Text>
                <Text style={Styles.paragraph}>Detaillierte Ausführungen zur Tänzerabfindung, der Weiterversicherung und der beitragsfreien Versicherung können – auch auf Englisch – unter 
                    <Text style={Styles.articleBullet} onPress={()=> Linking.openURL('https://www.buehnenversorgung.de')}>https://www.buehnenversorgung.de nachgelesen werden.</Text>
                </Text>
       </Text>
    </ScrollView>
  );
}


export default Bayrische;



