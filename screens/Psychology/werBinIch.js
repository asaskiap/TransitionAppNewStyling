import * as React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faPen } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../styles/styles'

const WerBinIch = ({navigation}) =>  {
  return (
    <ScrollView style={Styles.articleContainer}>
      <Text style={Styles.articleHeader}>Sich selbst neu entdecken und kennenlernen </Text>
      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

      <Image source={require('./../../styles/images/discovery.jpg')}
      style={{height: 200, width: 400}}></Image>

      <Text style={Styles.articleTextBlock}>
      Der wichtigste Teil der ganzen Transition ist, zu erkennen wer ICH eigentlich bin und was alles in mir steckt, von dem ich bisher vielleicht noch nicht mal gewusst habe. Sich dabei selbst neu kennenlernen, das eigene ich neu zu denken und auszuprobieren. In einem Leben, in dem der Tanz immer an erster Stelle gestanden hat, sind all die anderen Seiten von jemanden meist stark in den Hintergrund getreten, wenn nicht gar aus den Augen verloren worden. Daher ist es wichtig sich die nötige Zeit zu nehmen, um herauszufinden, was für andere Welten noch in jemandem schlummern, welche verborgenen Träume, Ideen, Leidenschaften es da noch alles gibt. Denn jeder Mensch hat etwas, das ihn antreibt, etwas das mehr kennt als nur eine Form, eine Ausdrucksweise, und meist kommt jemand über noch nicht begangene Wege dahinter was er noch alles will, kann und träumt, was jemanden als individuellen Menschen ausmacht, wofür das eigene Leben stehen soll und was jemanden am Ende eines Tages mit Zufriedenheit und Sinngebung erfüllen kann. Bei dem Weg der Veränderung kommen meist essenzielle Fragen hervor wie:  Was will ich? Wo möchte ich hin? Wie stelle ich mir ein erfülltes Leben vor? Wo liegen meine anderen, verborgenen Talente? Warum entscheide ich mich für diesen Weg? Welcher Teil meiner Selbst steckt dahinter? Welchen Sinn verleihe ich meinem Dasein damit? Werde ich es schaffen mir nochmal etwas ganz Neues aufzubauen? Was sind meine Möglichkeiten? 
      </Text>

      <Image source={require('./../../styles/images/cliff.jpg')}
      style={{height: 300, width: 400}}></Image>


    <Text style={Styles.articleHeader}>Den neuen Weg beschreiten</Text>
      <Text style={Styles.articleTextBlock}>
      Wer einmal diesen wichtigen Prozess durchlebt und dann gefunden hat was ihn oder sie antreibt, und welchen Weg er gehen will, der wird dadurch auch die Kraft und die Zuversicht in sich selbst finden, um diesen neuen Lebensweg zu beschreiten. Denn der Wille, dieses „andere ich“ Wirklichkeit werden zu lassen, trägt jemanden durch diese Schwierigkeiten, die jede Veränderung mit sich bringt. Und das ist das Wichtigste was ein/e Tänzer*in im Transition Prozess erreichen kann, dass er oder sie eine eigene Vision für sich selbst und das eigene Leben entwickelt, eine Vision darüber wie das Leben aussehen soll und was einen glücklich machen wird. Denn das Wunderbare an jedem/r einzelnen Tänzer*in ist, dass sie diesen Willen etwas erreichen zu wollen und die nötige Disziplin auch einen schwierigen Weg dafür zu gehen, schon mitbringen, denn dies waren die Eigenschaften die sie auf ihrem Weg zur Tänzer*in schon getragen haben, und die sie auch diesmal tragen werden.  

      </Text>

      <Image source={require('./../../styles/images/way.jpg')}
      style={{height: 200, width: 400}}></Image>

      
      <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

<Text style={Styles.subHeader}>Um herauszufinden wer du bist und was gut zu dir passt, könnte folgender Test hilfreich sein. Dieser ist aufgeteilt in 3 Abschnitte.</Text>

      <FontAwesomeIcon icon={faPen} style={{marginLeft: '45%'}} size={40} color={'#FF6B53'}></FontAwesomeIcon>

      <Text style={Styles.subHeader}>
      Fülle alle Fragen aus und schaue ob du ein Muster erkennst. (gefunden auf: https://www.vernuenftig-leben.de/wer-bin-ich/) 
      </Text>

<Text style={Styles.subHeader}>Abschnitt 1: Wer warst du?</Text>
    <View style={Styles.articleTextBlock}>
       <Text style={Styles.listItem}>•	Was wolltest du früher mal werden?</Text>
      <Text style={Styles.listItem}>⦁	Für welche Träume oder Sehnsüchte wurdest du einmal ausgelacht oder belächelt?</Text>
      <Text style={Styles.listItem}>⦁	Welche Eigenarten zeichneten dich schon als Kind aus?</Text>
      <Text style={Styles.listItem}>⦁	Worin warst du in der Schule besonders gut?</Text>
      <Text style={Styles.listItem}>⦁	Zu welchen Zeitpunkten in deinem Leben warst du am glücklichsten? Was machte sie besonders? Was haben sie gemeinsam?</Text>
    </View>
     
    
<Text style={Styles.subHeader}>Abschnitt 2: Wer bist du?</Text>
    <View style={Styles.articleTextBlock}>
       <Text style={Styles.listItem}>⦁	Was macht dich glücklich, nur weil du es tun kannst?</Text>
      <Text style={Styles.listItem}>⦁	Bei welcher Tätigkeit erfüllt dich das Tun an sich mehr als das Ergebnis?</Text>
      <Text style={Styles.listItem}>⦁	Wobei vergisst du die Zeit?</Text>
      <Text style={Styles.listItem}>⦁	Wobei vergisst du auf dein Handy zu schauen?</Text>
      <Text style={Styles.listItem}>⦁	Wie sieht dein optimaler Tag aus?</Text>
      <Text style={Styles.listItem}>⦁	Auf welches Talent von dir bist du besonders stolz?</Text>
      <Text style={Styles.listItem}>⦁	Was würdest du gerade lieber tun, als das hier zu lesen?</Text>
    </View>
     


<Text style={Styles.subHeader}>Abschnitt 3: Wer willst du sein?</Text>
    <View style={Styles.articleTextBlock}>
       <Text style={Styles.listItem}>⦁	Was würdest du tun, wenn du wüsstest, dass du nicht scheitern kannst?</Text>
      <Text style={Styles.listItem}>⦁	Was würdest du tun, wenn du unsichtbar wärst?</Text>
      <Text style={Styles.listItem}>⦁	Was würdest du tun, wenn du deinen Tod vorgetäuscht hättest und nun ganz von vorne anfangen könntest?</Text>
      <Text style={Styles.listItem}>⦁	Was würdest du tun, wenn du finanziell ausgesorgt hättest?</Text> 
      <Text style={Styles.listItem}>⦁	Was würdest du in der Welt verändern, wenn du könntest?</Text>
      <Text style={Styles.listItem}>⦁	Was würdest du tun, wenn du nur noch ein Jahr zu leben hättest?</Text>
      <Text style={Styles.listItem}>⦁	Ohne was würdest du in der Welt nicht leben wollen?</Text> 
      <Text style={Styles.listItem}>⦁	Womit würdest du deine Zeit verbringen, wenn du der letzte Mensch auf der Welt wärst?</Text>
      <Text style={Styles.listItem}>⦁	Gibt es etwas in deinem Leben wofür du sterben würdest?</Text>
      <Text style={Styles.listItem}>⦁	Was würdest du tun, wenn du unsterblich wärst?</Text>
      <Text style={Styles.listItem}>⦁	Was sollte in deinem Nachruf über dich und dein Leben gesagt werden?</Text> 
      <Text style={Styles.listItem}>⦁	Was würdest du tun, wenn du nur noch eine Sache in deinem Leben machen könntest?</Text>
      <Text style={Styles.listItem}>⦁	Was würdest du wirklich bereuen, nie getan zu haben?</Text>   
    </View>
     
      <Text style={Styles.articleHeaderRed}>AUSWERTUNG</Text>
      <Text style={Styles.articleTextBlock}>Gehe deine Antworten in Ruhe nochmal durch. Was kristallisiert sich heraus? Was hast du ziemlich oft erwähnt? Wo gibt es Gemeinsamkeiten oder eine Verbindung? Markiere oder unterstreiche diese und ziehe dein Fazit.</Text>






    </ScrollView>
  );
}
export default WerBinIch