import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Text, ScrollView, TouchableOpacity, Linking, Image} from 'react-native';
import Styles from '../../styles/styles'

class berufsFragebogen extends React.Component  {

state = {
    handwerklich: false,
    forschend: false,
    künstlerisch: false,
    sozial: false,
    wirtschaftlich: false,
    organisierend: false
}

render(){  
    return (    
    <ScrollView  style={Styles.articleContainer}>
     <Text style={Styles.articleHeader}>Berufsinteressen</Text>

     <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>
      

    <Image source={require('./../../styles/images/interesse.jpg')}
      style={{height: 200, width: 400}}></Image>

      
    <FontAwesomeIcon icon={faQuestion} style={{marginLeft: '45%', marginTop: 20}} size={50} color={'#FF6B53'}></FontAwesomeIcon>

      <Text style={Styles.articleTextBlock}>
          <Text style={Styles.subHeader}>Anleitung:</Text> Bitte lesen Sie sich die einzelnen Tätigkeiten in Ruhe durch und überlegen Sie, ob Sie diese gerne ausführen. Dabei ist es unwichtig, ob Sie es gerne in Ihrer Freizeit tun oder sich vorstellen können, es zukünftig als Beruf auszuüben. Es geht dabei um ihr grundsätzliches Interesse daran. 
          </Text>
        


     <TouchableOpacity 
     onPress={()=>{this.setState({handwerklich: !this.state.handwerklich })}}>
         <Text style={Styles.optionBtn}>Handwerklich-technisch</Text>
         </TouchableOpacity>
    {this.state.handwerklich && 
        <Text style={Styles.articleList}>
            <Text style={Styles.subHeader}>Interessen</Text>
            <Text >⦁	In einer Werkstatt arbeiten</Text>
            <Text >⦁	elektrische Geräte einbauen und bedienen</Text>
            <Text >⦁	Computer einrichten</Text>
            <Text >⦁	Im Garten arbeiten</Text>
            <Text >⦁	Handwerklich arbeiten</Text>     
            <Text >⦁	Herausfinden, wie technische Geräte funktionieren</Text>
        </ Text>
        }

     <TouchableOpacity
     onPress={()=>{this.setState({forschend: !this.state.forschend })}}>
         <Text style={Styles.optionBtn}>Forschend</Text></TouchableOpacity>
         {this.state.forschend && 
        <Text style={Styles.articleList}>
            <Text style={Styles.subHeader}>Interessen</Text>
            <Text>⦁	Wissenschaftliche Bücher und Artikel lesen</Text>
            <Text>⦁	Ein Problem intensiv analysieren</Text>
            <Text>⦁	In einem Forschungsinstitut arbeiten</Text>
            <Text>⦁	Einen wissenschaftlichen Kongress besuchen</Text>
            <Text>⦁	Experimente durchführen</Text>     
            <Text>⦁	Sich mit ungelösten Fragen beschäftigen</Text>
        </Text>}

     <TouchableOpacity
     onPress={()=>{this.setState({künstlerisch: !this.state.künstlerisch })}}
    ><Text style={Styles.optionBtn}>Künstlerisch-kreativ</Text></TouchableOpacity>
     {this.state.künstlerisch && 
        <Text style={Styles.articleList}>
            <Text style={Styles.subHeader}>Interessen</Text>
            <Text>⦁ Zeichnen oder malen</Text>
            <Text>⦁	Vor anderen auftreten (tanzen, singen, etc.)</Text>
            <Text>⦁	Videos und Bilder am Computer bearbeiten</Text>
            <Text>⦁	Innenräume kreativ gestalten</Text>
            <Text>⦁	Sich mit Fotografie beschäftigen</Text>     
            <Text>⦁	Eine Zeitschrift grafisch gestalten</Text>
        </Text>}

     <TouchableOpacity
          onPress={()=>{this.setState({sozial: !this.state.sozial })}}
          ><Text style={Styles.optionBtn}>Sozial</Text></TouchableOpacity>
          {this.state.sozial && 
        <Text style={Styles.articleList}>
            <Text style={Styles.subHeader}>Interessen</Text>
            <Text>⦁	Mit Kindern und Jugendlichen arbeiten</Text>
            <Text>⦁	Kranke Menschen behandeln</Text>
            <Text>⦁	Jemandem bei einem persönlichen Problem helfen</Text>
            <Text>⦁	In einer Beratungsstelle arbeiten</Text>
            <Text>⦁	Streits zwischen anderen schlichten</Text>     
            <Text>⦁	Ältere Menschen in ihrem Alltag unterstützen</Text>
        </Text>}

     <TouchableOpacity
        onPress={()=>{this.setState({wirtschaftlich: !this.state.wirtschaftlich })}}
        ><Text style={Styles.optionBtn}>Wirtschaftlich-unterehmerisch</Text></TouchableOpacity>
     {this.state.wirtschaftlich && 
        <Text style={Styles.articleList}>
            <Text style={Styles.subHeader}>Interessen</Text>
            <Text>⦁	Ein eigenes Geschäft oder Unternehmen führen</Text>
            <Text>⦁	Andere in der Arbeit anleiten</Text>
            <Text>⦁	In Projekten Verantwortung tragen</Text>
            <Text>⦁	Einen Geschäftsplan erstellen</Text>
            <Text>⦁	Geschäftliche Verhandlungen führen</Text>     
            <Text>⦁	Ein Produkt verkaufen</Text>
        </Text>}

     <TouchableOpacity
        onPress={()=>{this.setState({organisierend: !this.state.organisierend })}}
             ><Text style={Styles.optionBtn}>Organisierend-verwaltend</Text></TouchableOpacity>
     {this.state.organisierend && 
        <Text style={Styles.articleList}>
            <Text style={Styles.subHeader}>Interessen</Text>
            <Text>⦁	Termine organisieren</Text>
            <Text>⦁	Schreibarbeiten am Computer durchführen</Text>
            <Text>⦁	Ein Ordnungssystem für Dokumente entwickeln</Text>
            <Text>⦁	Die Buchhaltung für ein Geschäft erledigen</Text>
            <Text>⦁	Veranstaltungen planen</Text>     
            <Text>⦁	In einem Büro arbeiten</Text>
        </Text>}

        
        
     <Image source={require('./../../styles/images/underline.svg')}
      style={{width: 100, height: 10, marginLeft: '35%', marginVertical: 20}} ></Image>

      
        <Text style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53' }} >⨀ Verweise auf Berufsfindungstests</Text>

        <Text 
        style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53' }} 
        onPress={() => Linking.openURL('https://www.ausbildung.de/berufscheck/?gclid=Cj0KCQjw--GFBhDeARIsACH_kdZdbN8dgh9xKs2Qou_urjgXwM1qwxdpQZZz9-XTeCi221GGP2nax9UaAtcNEALw_wcB')}>
            ⨀ Berufscheck für deine Ausbildung</Text>

        <Text 
        style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53' }} 
        onPress={() => Linking.openURL('https://www.aubi-plus.de/berufscheck/')}>
            ⨀ Berufs-Check | Finde heraus, welcher Beruf zu dir passt (aubi-plus.de)</Text>

        <Text 
        style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20,fontWeight: 600, color: '#FF6B53'}}
        onPress={() => Linking.openURL('https://www.einstieg.com/kein-plan/berufswahltest.html')}>
            ⨀ Kostenloser Online-Berufswahltest: Interessencheck - Einstieg</Text>

        <Text 
        style={{fontSize: 20, marginHorizontal: 10, marginVertical: 20, fontWeight: 600, color: '#FF6B53'}} 
        onPress={() => Linking.openURL('https://www.azubiyo.de/berufswahltest/')}>
            ⨀ Welche Berufe passen zu mir? - Bundesagentur für Arbeit (arbeitsagentur.de)</Text>




    </ScrollView>
  );}

}
export default berufsFragebogen