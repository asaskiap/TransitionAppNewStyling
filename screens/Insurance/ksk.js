import * as React from 'react';
import { Text, ScrollView, Linking, Image} from 'react-native';
import Styles from '../../styles/styles'


const KSK = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Die Künstlersozialversicherung (KSK)</Text>
      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

    <Image source={require('./../../styles/images/leafColors.jpg')}
      style={{height: 200, width: 400}}></Image>
      
      <Text style={Styles.articleTextBlock}>
        <Text style={Styles.paragraph}> Mit der Künstlersozialversicherung sind seit 1983 die selbständigen Künstler und Publizisten in den Schutz der gesetzlichen Sozialversicherung einbezogen. Besonderheit: Die Künstler und Publizisten brauchen nur die Hälfte ihrer Beiträge zu tragen und sind damit ähnlich günstig gestellt wie Arbeitnehmer. Die andere Beitragshälfte wird durch eine Abgabe der Kunst- und Publizistikverwerter (z. B. Galerien, Musikschulen, Theater, Rundfunkanstalten, Werbeagenturen, Verlage) und durch einen Bundeszuschuss finanziert.</Text>

        <Text style={Styles.subHeader}>Voraussetzungen:</Text>
        <Text style={Styles.paragraph}>
         Es muss eine selbständige künstlerische/publizistische Tätigkeit als Beruf (also zum Zweck des Broterwerbs) ausgeübt werden. Der Kunstbegriff orientiert sich an typischen Berufsbildern. Ein Grafik-Designer beispielsweise ist in diesem Sinne Künstler, während etwa ein Möbeltischler als Handwerker und nicht als Künstler gilt. Ein Musiklehrer fällt schon nach dem Gesetzeswortlaut unter den begünstigten Personenkreis. In “Grenzfällen” hängt die Künstlereigenschaft davon ab, ob der/die Betreffende in den maßgeblichen Fachkreisen als Künstler anerkannt ist (erkennbar z.B. an der Mitgliedschaft in künstlerischen Berufsverbänden oder an der Erwähnung in der Presse).</Text>
        <Text style={Styles.paragraph}>
        Bei nur nebenberuflicher Betätigung im künstlerischen/publizistischen Bereich kann die Künstlersozialversicherung nur eingeschränkt oder gar nicht genutzt werden.
        </Text>
        <Text style={Styles.paragraph}>Das Arbeitseinkommen (Einnahmen abzüglich Ausgaben) muss über der Geringfügigkeitsgrenze von monatlich 325 € / jährlich 3.900 € liegen.Es wird maximal ein Arbeitnehmer beschäftigt. Sonst bestünde eine zu starke Arbeitgeberstellung, der Künstler/Publizist wäre nicht mehr schutzbedürftig.</Text>

        <Text style={Styles.subHeader}>Ausnahmeregelungen: </Text>
        <Text style={Styles.paragraph}>In den ersten drei Jahren der Berufsausübung darf das Einkommen geringer sein. Auch bei gelegentlichen Unterschreitungen (zweimal innerhalb eines 6-Jahreszeitraumes) bleibt die Versicherung erhalten.</Text>

        <Text style={Styles.subHeader}>Versicherungsschutz durch die KSK: </Text>
        <Text style={Styles.paragraph}>Die KSK ist ein Teil der gesetzlichen Sozialversicherung und umfasst die Versicherungszweige Rentenversicherung, Krankenversicherung und Pﬂegeversicherung. Es gilt jeweils der gesamte gesetzliche Leistungskatalog. Was viele Künstler/Publizisten nicht wissen: Auch als Selbständiger kann man bei Arbeitsunfähigkeit Krankengeld beantragen, und zwar entweder nach sechs “Karenzwochen” (Normalfall) oder bereits nach zwei “Karenzwochen” (sog. vorgezogenes Krankengeld auf Antrag gegen Aufpreis).</Text>

        <Text style={Styles.subHeader}>Höhe der Beiträge: </Text>
        <Text style={Styles.paragraph}>Die Versicherungsbeiträge errechnen sich aus dem Arbeitseinkommen und aus den halben Beitragssätzen der verschiedenen Versicherungszweige sowie gesetzlichen Zusatzbeiträgen. Zurzeit ergibt sich daraus eine Beitragsbelastung von 18-19 % des Nettoeinkommens. Die Beiträge sind monatlich zu zahlen. Beispiel: Bei einem Jahresarbeitseinkommen (netto) von 12.000,- € (entsprechend mtl. 1.000,- €) müssten monatlich etwa 180,- € bis 190,- € als Beitragsbelastung einkalkuliert werden.</Text>

       </Text>

       <Image source={require('./../../styles/images/freedomJump.jpg')}
      style={{height: 200, width: 400}}></Image>

       <Text style={Styles.articleTextBlock}>
           <Text style={Styles.subHeader}>Eintritt in die KSK: Anmeldeformulare bei der Künstlersozialkasse (KSK) anfordern </Text>
                <Text style={Styles.paragraph}> 
                Bei Absendung der Formulare an die KSK nicht vergessen, Tätigkeitsbelege (z.B. Verträge, Unterlagen über
                ausgeführte Arbeiten, Kritiken, Presse) beizufügen.
                Die KSK prüft nach Antragstellung, ob die Voraussetzungen zur Künstlersozialversicherung erfüllt sind. Sie
                muss hierbei sorgfältig und auch kritisch vorgehen, da für die Finanzierung des Gesamtsystems auch Dritte (nämlich der Steuerzahler und die abgabepflichtigen Unternehmen) zur Kasse gebeten werden.
                Sind alle Voraussetzungen erfüllt, stellt die KSK rechtsverbindlich die Versicherungspflicht fest, denn die Künstlersozialversicherung ist eine Pflichtversicherung! Sie nimmt die Anmeldung bei einer gesetzlichen Krankenkasse (z.B. AOK, Ersatzkasse, Innungskrankenkasse, Betriebskrankenkasse – man kann also in seiner bisherigen Krankenkasse bleiben) und bei der Datenstelle der Träger der Rentenversicherung vor und führt die Gesamtbeiträge dorthin ab. Dem Künstler/Publizist teilt die KSK mit, in welcher Höhe Beiträge zu zahlen sind. Zur Ermittlung der Beitragshöhe fragt die KSK anlässlich der Erstanmeldung und dann jährlich wiederkehrend nach dem “voraussichtlichen Jahresarbeitseinkommen”. </Text>

                <Text style={Styles.subHeader}>Was geschieht, wenn die Anmeldung bei der KSK versäumt wird?</Text>
                <Text style={Styles.paragraph}>Solange der Künstler/Publizist nicht von sich aus Kontakt mit der KSK aufnimmt,“ruht” gewissermaßen die Versicherung und die beitragsrechtlichen Vergünstigungen können nicht in Anspruch genommen werden. Wer sich also nicht bei der KSK meldet, verschenkt Vorteile, die ihm rechtlich zustehen. In jedem Fall beginnt die Versicherung frühestens mit der erstmaligen Meldung bei der KSK. Für den Zeitraum vor der erstmaligen Meldung bei der KSK gibt es weder nachträglichen Versicherungsschutz, noch werden von der KSK für solche Zeiträume Beiträge erhoben.</Text>

                <Text style={Styles.subHeader}>Kann man die Mitgliedschaft in der KSK während eines Engagements für einige Monate ruhen lassen?</Text>
                <Text style={Styles.paragraph}>Das ist leider bei der KSK nicht vorgesehen. Bei jeder -egal wie kurzen – Festanstellung, muss man aus der KSK austreten und danach wieder eintreten, das geht bei Zeiträumen unter 6 Monaten formlos, bei längerer Festanstellung, muss man danach erneut sie kompletten Eintrittsformulare ausfüllen.</Text>

                <Text style={Styles.subHeader}>Kann man sich auch privat versichern?</Text>
                <Text style={Styles.paragraph}>Berufsanfänger und Höherverdienende haben die Möglichkeit, sich zugunsten einer privaten Kranken-/Pflegeversicherung von der gesetzlichen Krankenversicherung befreien zu lassen. Die KSK gewährt dann einen Zuschuss. In der Rentenversicherung gibt es dagegen keine Befreiungsmöglichkeit, die Pflichtversicherung ist hier zwingend.</Text>

                <Text style={Styles.subHeader}>Kontakt:</Text>
                <Text style={Styles.paragraph}>Tel. 04421/ 973 405 1500</Text>
                <Text style={Styles.paragraph}>E-Mail:   auskunft@kuenstlersozialkasse.de</Text>
                <Text style={Styles.articleBullet} onPress={()=> Linking.openURL('https://www.kuenstlersozialkasse.de')}>www.kuenstlersozialkasse.de</Text>
       </Text>
    </ScrollView>
  );
}


export default KSK;



