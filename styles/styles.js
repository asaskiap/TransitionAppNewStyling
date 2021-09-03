import * as React from 'react';

import { StyleSheet} from 'react-native';

const  AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#dee7e7',
    alignItems: 'flex-start'

  },
  headerIcon: {
    marginLeft: '43%',
    marginTop: 10,

  },
  header: {
      fontSize: 30,
      paddingLeft: 10,
      marginRight: 70,
      marginTop: 30,
      marginBottom: 50,
      fontWeight: 'bold',
      lineHeight: 50,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: 'rgba(154, 205, 50, 0.9)',
      color: 'white',
     
      shadowColor: "darkblue",
      shadowOffset: {
          width: 5,
          height: 5,
        },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 10,

  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 5,
    textAlign: 'center'

  },
  
  choice: {
    height: 60,
    width: 280,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(244, 249, 255, 0.6)',
    borderRadius: 10,
     shadowColor: "#45619D",
    shadowOffset: {
	      width: 5,
	      height: 5,
      },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  choiceText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#313131'
   
  },
  
 
  button: {
  marginBottom: 14,
  padding: 10,
  alignItems: 'center',
  },
  buttonText:{
    fontSize: 15
  },
  listContainer: {
    margin: 10,
  },
  listItem: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 15,
    lineHeight: 25,
    color: 'rgb(140,140,140)'
  },
  articleList: {
    padding: 16,
    margin: 16,
    fontSize: 17,
    lineHeight: 28,
    display: 'flex',
    flexDirection: 'column',
    borderColor: '#FF6B53',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    color: '#707070',
  },
 
  optionBtn:{
    fontSize: 20,
    paddingLeft: 10,
      marginRight: 70,
      marginTop: 10,
      marginBottom: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: 'rgba(154, 205, 50, 0.9)',
      color: 'white',
     
      shadowColor: "darkblue",
      shadowOffset: {
          width: 5,
          height: 5,
        },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 10,
  },
  
  formButton: {
    padding: 20,
    backgroundColor: '#0570c9',
    borderRadius: 10,
    marginHorizontal: 40,
    marginVertical: 20,
    shadowColor: "darkblue",
    shadowOffset: {
	      width: 0,
	      height: 5,
      },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
  },
  formButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  },
  textBlock: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    fontSize: 15,
    lineHeight: 25,
  },
 
  seperator:{
    color: '#0040A2',
    fontSize: 30,
    marginBottom: 10
  },
  choiceBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 28,
    color: '#707070',
    paddingVertical: 10,
  },
  articleBullet: {
    fontSize: 17,
    lineHeight: 28,
    color: '#707070',
    paddingVertical: 10,
    color: '#45619D',
    fontWeight: '500'

  },

  articleHeader: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 20
  },
  articleHeaderRed: {
    backgroundColor: '#FF6B53',
    color: 'white',
    margin: 20,
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 20
  },

  articleContainer: {
    backgroundColor: '#F4F9FF',
  
  },

  articleTextBlock: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    margin: 16,
    fontSize: 17,
    lineHeight: 28,
    backgroundColor: '#FFFFFF',
    color: '#707070',
    shadowColor: "#00000029",
    shadowOffset: {
	      width: 2,
	      height: 2,
      },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,

  }
  
});

export default AppStyles; 
