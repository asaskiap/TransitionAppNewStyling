import * as React from 'react';
import { Text,  StyleSheet,  ScrollView, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faAlignRight, faTimes } from '@fortawesome/free-solid-svg-icons'

export const WerSindWir = ({close}) => {
  return(
    <ScrollView style={styles.scrollView}>
        <TouchableOpacity
        onPress={close}>
           <FontAwesomeIcon icon={ faTimes } color={'darkgrey'}  size={30} style={{marginLeft: 'auto', padding: 5}}/>  
        </TouchableOpacity>
            <Text style={styles.header}>Wer Sind Wir? </Text>
             <Text style={styles.textBlock}> 
             Stiftung TANZ wurde auf im Januar 2010 auf private Initiative von Inka Atassi und Sabrina Sadowska gegründet und hat ihren Hauptsitz in Berlin. Die Stiftung dient ausschließlich dem gemeinnützigen Zweck, die materiellen und ideellen Bedürfnisse von professionellen TänzerInnen zu fördern, insbesondere die während ihrer Ausbildung, ihrer Karriere und ihres Übergangs in einen neuen Beruf nach dem Ende ihrer aktiven Tanzkarriere.

             </Text>
             </ScrollView>
  )
}


export const WasMachenWir = ({close}) => {
  return(
    <ScrollView style={styles.scrollView}>
       <TouchableOpacity
        onPress={close}>
          <FontAwesomeIcon icon={ faTimes } color={'darkgrey'}  size={30} style={{marginLeft: 'auto', padding: 5}}/>  
        </TouchableOpacity>
        <Text style={styles.header}>Was Machen Wir? </Text>
             <Text style={styles.textBlock}>
             Im Unterschied zu anderen Berufsgruppen müssen sich Tänzer nach einer relativ kurzen aktiven Bühnenlaufbahn beruflich neu orientieren (Transition). Oft in einem Alter, in dem in anderen Berufen erst richtig durchgestartet wird.
               </Text>
               <Text style={styles.textBlock}>
               So bestimmen während und zum Ende der Karriere oft Zweifel, Unsicherheit, große Leere und viele Fragen das Tänzerleben. Was kommt danach? Wer hilft durch den Dschungel aus Institutionen, Paragraphen und Richtlinien? Wo gibt es Beratung, Unterstützung, Begleitung, Bewusstseinsbildung und Sensibilisierung für einen erfolgreichen Transitionprozess?
               </Text>
              <Text style={styles.textBlock}>Wir sind Wegbegleiter und Unterstützer vom Ausbildungsbeginn über jedes Stadium der Karriere bis zum Abschluss des Transitionprozesses. Wir sind für alle Berufstänzer offen, ob festangestellt oder freiberuflich tätig, ob an städtischen Bühnen, an Staatstheatern, beim Musical, Film oder Fernsehen.
</Text>

             </ScrollView>

  )
}

export const WomitHelfen = ({close}) => {
  return (
      <ScrollView style={styles.scrollView}>
         <TouchableOpacity
        onPress={close}
        >
          <FontAwesomeIcon icon={ faTimes } color={'darkgrey'}  size={30} style={{marginLeft: 'auto', padding: 5}}/>  
        </TouchableOpacity>
        <Text style={styles.header}>Wobei Können Wir Helfen? </Text>
          <Text style={styles.listItem}>Die Stiftung TANZ bietet professionellen Tänzern: 
</Text>
          <Text style={styles.listItem}>⦁	Informationen (alle wichtigen Informationen rund um den Transitionprozess)
</Text>
          <Text style={styles.listItem}>⦁	Bürokratische und praktische Unterstützung (beispielsweise in der Form von Anschreiben an Institutionen wie dem Arbeitsamt)
</Text>
          <Text style={styles.listItem}>⦁	Beratung (Coaching und psychologische Betreuung des Transitionprozess) 
</Text>
        <Text style={styles.listItem}>⦁ Workshops </Text>
        <Text style={styles.listItem}>⦁ Stipendium für die Weiterbildung
 </Text>
      </ScrollView>
       
  )
}

  

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgba(240, 240, 240, 0.95)',
    paddingVertical: 10,
    position: 'absolute',
    top: -250,
    flex: 1
  },
 textBlock: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    fontSize: 15,
    lineHeight: 25,
    color: 'rgb(140,140,140)'
 },
 listItem: {
  paddingVertical: 5,
  paddingHorizontal: 20,
  fontSize: 15,
  lineHeight: 25,
  color: 'rgb(140,140,140)'
},
header:  {
  color: '#606060',
  fontSize: 20,
  marginLeft: 20
}
 
});


