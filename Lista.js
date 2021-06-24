import React from 'react'
import {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner'
import { Text,Image,ActivityIndicator, ImageBackground,Linking,StyleSheet,Separator,
   TouchableOpacity, FlatList,Alert, TouchableHighlight , View,SectionList, Modal, Button,TextInput ,Pressable, ScrollView} from 'react-native';
   import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';
import Itemlis from './Itemlis'
import { Colors,  DebugInstructions,  Header,  LearnMoreLinks,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';


function Lista() {

  const [json, setjson] = useState([]);


      async function getInfo() {
        const response = await fetch('http://syscontrol.azurewebsites.net/FLH/ListaConfirmado?lista');
        const lista = await response.json();
        return lista;
      }
      getInfo().then(invitado => {
        setjson(invitado) 
        console.log(json); 
    });

  
 


  const DATA = [
    {
      Txt_Nombre: "PABLO BUSTAMANTE",
      Txt_NombreAcompañante: "Andrea Roncallo ",
      Bol_Validado: 0,
      Int_Status: 2
  }
];
  const Item = ({ items }) => (
    <View style={styles.item}>
     

      {items.Bol_Validado==0 ?       
      <Text style={styles.todo} > 
      INVITADO: {items.Txt_Nombre}{"\n"} 
      ACOMPÑANTE: {items.Txt_NombreAcompañante}
      </Text>  :null   }
    
      {items.Bol_Validado==1 ? 
      <Text style={styles.evento1} > 
      INVITADO: {items.Txt_Nombre}{"\n"}
       ACOMPÑANTE: {items.Txt_NombreAcompañante}
       </Text> :null   }
  
      {items.Bol_Validado==2 ?  
      <Text style={styles.evento2}> 
      INVITADO: {items.Txt_Nombre}{"\n"}
       ACOMPÑANTE: {items.Txt_NombreAcompañante}
       </Text>:null  }

       {items.Bol_Validado==3 ?  
       <Text style={styles.evento3}> 
       INVITADO: {items.Txt_Nombre}{"\n"} 
       ACOMPÑANTE: {items.Txt_NombreAcompañante} 
       </Text> :null  }
 
     

    </View>
  );
  return (
    <> 
  <View style={styles.centerText}>

  <View style={styles.centerText1}>
    <Text style={styles.titulo}>LISTA DE INVITADOS</Text>
    
    <FlatList
          data={json}          
          renderItem={({ item }) => <Item items={item} />}
          keyExtractor={(item, index) => item + index}
        />
          </View>
  </View>
    </>
  );
 }
 const styles = StyleSheet.create({
  todo:{
    backgroundColor: '#7BB7F2',
    fontWeight:'bold',
    color:'black', 
    marginHorizontal: 5,
  },
  evento1:{
    backgroundColor: '#000000', 
    fontWeight:'bold',
    color:'#FEFEFE', 
    marginHorizontal: 5,
  },
  evento2:{
    backgroundColor: '#28E705',
    fontWeight:'bold',
    color:'black', 
    marginHorizontal: 5,
  },
  evento3:{
    backgroundColor: '#000000',  
    fontWeight:'bold',
    color:'#FEFEFE', 
    marginHorizontal: 5,
  },
  centerText: {
    flex: 1,
    fontSize: 20,
    paddingBottom: 100,
    color: '#777',
  }, 
  centerText1: {
    flex: 1,
    fontSize: 18,
    color: '#777',
    marginHorizontal: 5,
  },
   item: {
    borderColor:'black',
    paddingBottom: 10,
    marginVertical: 2,
    color:'black',
  },
  title:{
    fontSize: 12,
    padding: 0,
    fontWeight:'bold',
    color:'black', 
    marginHorizontal: 5,
    backgroundColor: 'black',
  },
   titulo:{
     textAlign:'center',
     fontSize:30,
     fontWeight:'bold', 
     backgroundColor: '#0481FA',
     paddingBottom:2,
     marginBottom:4,
      color:'#FFFFFF', 
   }
});
 export default Lista;
