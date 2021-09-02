import * as React from 'react';
import { Text, ScrollView , Image} from 'react-native';
import Styles from '../../styles/styles'

const Abschied = () =>  {
  return (
    <ScrollView style={Styles.articleContainer}>

      <Text style={Styles.articleHeader}>ABSCHIED</Text>

      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%'}} ></Image>

      <Text style={Styles.articleTextBlock}>
      Das Leben eines Menschen ist geprägt von einer Reihe an Veränderungen, Abschieden und Neuanfängen. Sich von wichtigen Dingen, Menschen, Orten, Gewohnheiten zu trennen ist nicht leicht und kann ein ähnlich intensives Gefühl mit sich bringen wie ein körperlicher Schmerz. Das Loslassen müssen wir von Kindheit an lernen, wir geben liebgewonnene Freundschaften auf, müssen Orte verlassen, verändern unsere Größe und Aussehen, jedoch wachsen und entwickeln wir uns gerade aufgrund der ständigen Veränderung. Jede Veränderung ist ein Neuanfang, jeder neuer Lebensabschnitt bringt neue Möglichkeiten, neue Hoffnungen und neue Erlebnisse mit sich. Jedoch ist Veränderung für uns ein schwerer Prozess, bedeutet es doch, dass wir orientierungslos und unwissend sind und viele neue Eindrücke verarbeiten müssen. Dies benötigt Zeit und Ruhe. In dieser Zeit werden wir konfrontiert mit lebenswichtigen Fragen; Wie soll mein Leben weitergehen? Was wird jetzt auf mich zukommen? Welche Bedeutung hat der Verlust für mein Leben? Und wie werde ich mit den Gefühlen der Trauer, der Leere oder der Angst umgehen können?
      </Text>

      
      <Image source={require('./../../styles/images/danceImages/goodbye2.jpg')}
      style={{height: 200, width: 400}}></Image>

      <Text style={Styles.articleTextBlock}>
      Etwas geht zu Ende, aber etwas Neues beginnt. Jeder Abschied ist ein Neuanfang. Denn erst wenn etwa zu Ende gegangen ist, kann das Neue zum Vorschein kommen. Dies können wir meist erst sehen, wenn wir nicht mehr mit unserer Aufmerksamkeit bei dem Verlust sind und uns nicht mehr auf das Verlorene konzentrieren. Wir müssen das was wir verlassen auch hinter uns gelassen haben um den Blick frei zu bekommen für die Zukunft und ihre Möglichkeiten. Um davon frei zu werden bedarf es einen Prozess des Abschieds nehmen und lernen mit dem Verlust zu leben. Wenn wir das schaffen, geschieht das was jedes Mal in unserem Leben geschieht wenn wir eine Veränderung durchlaufen; wir wachsen, wir entwickeln uns und wir entdecken die Möglichkeiten die die Zukunft für uns bereit hält. Dann sind wir bereit für den Neuanfang. 
      </Text>

      
      <Image source={require('./../../styles/images/danceImages/goodbye.jpg')}
      style={{height: 200, width: 400}}></Image>


        <Text style={Styles.articleHeader}>Abschied und Neubeginn im Leben eines Tänzers</Text>
      <Text style={Styles.articleTextBlock}>
      Der Übergang in einem Leben von der einen Phase in eine andere ist nie leicht. Aber bei einem Tänzer*in können sich da große, existentielle Sinnfragen ergeben: Wer bin ich eigentlich, wenn ich nicht tanze? Kann ich überhaupt etwas anderes als tanzen? Gibt es überhaupt irgendetwas, das mich so ausfüllen kann wie das Tanzen? Werde ich noch Teil der Tanzcommunity sein? Wie soll ich den Abschied von der Bühne schaffen? Wie soll ich mit der Trauer umgehen, dass der Weg als Tänzer*in irgendwann vorbei ist? Werde ich immer ein/e Tänzer*in bleiben können? Da die Auseinandersetzung mit diesen Fragen essenziell ist um danach überhaupt offen zu sein für den Transitionprozess, wird sich im Gespräch mit den Tänzer*innen zuerst diesen Fragen gewidmet. Um den Kopf überhaupt frei zu haben für etwas Neues, etwas Anderes, etwas Unbekanntes, ist der Prozess des Abschiedes nehmen und der Auseinandersetzung mit der eigenen (Tänzer-) Identität sehr wichtig. Denn erst wenn man sich mental von einer alten Liebe verabschieden konnte und mit dieser  emotional abschließen kann, erst dann eröffnen sich im eigenen Sichtfeld überhaupt die Möglichkeiten für eine neue Liebe, für einen neuen Weg, für eine neuen Lebensabschnitt. Daher geht es am Anfang meist um Abschied, Trauer, Loslösen und sich öffnen können für etwas Neues. 

      </Text>

    </ScrollView>
  );
}
export default Abschied