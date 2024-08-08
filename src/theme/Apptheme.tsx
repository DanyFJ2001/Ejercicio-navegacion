import React from 'react'
import { StyleSheet } from 'react-native'
import { INPUT, PRIMARY, SECUNDARY } from '../constans/constans'


export const styles = StyleSheet.create({
    global:{
        color: SECUNDARY,
        fontSize:25,
        paddingHorizontal:30,
        paddingVertical: 30,
        fontWeight:'bold'
        
    },


    inputContainer: {
      marginBottom: 15,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingLeft: 10,
    },
  
    result: {
      marginTop: 20,
      fontSize: 18,
      textAlign: 'center',
    },
    header: {
        backgroundColor: PRIMARY, 
        marginTop:10,
        margin:20,
      },
      headerTitle: {
        fontWeight: 'bold', 
        fontSize: 20, 
        color: '#fff', 
      },
    contetbody:{
        backgroundColor:SECUNDARY,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:40,
        
    },
    titleheaderbody:{
        fontSize:17,
        fontWeight:'bold',
        color:'black'

    },
    textbody:{
        fontSize:15
    },
    Inputext:{
        backgroundColor:INPUT,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10

    },
    contentinput:{
        marginTop:50,
        gap:10,
         
     
         

    },
    container: {
        marginTop:-200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      contentBody: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      image: {
        width: 100,
        height: 100,
        marginBottom: 10,
      },
      button: {
        backgroundColor: PRIMARY, // Color de fondo del botón
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff', // Color del texto
        fontSize: 16,
        fontWeight: 'bold',
      },
    button2:{
        backgroundColor: PRIMARY,
        paddingVertical:20,
        borderRadius:10,
        marginTop:30
    },
    buttontext:{
        color:SECUNDARY,
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'

    },
    iconpass:{
        position:'absolute',
        right:20,
        zIndex:1,
        marginTop:10
    },
    
})