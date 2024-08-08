import { StackScreenProps } from '@react-navigation/stack'; 
import React from 'react'; 
import { Image, View, Text, TouchableOpacity } from 'react-native'; 
import { styles } from '../theme/Apptheme';

export const Screen1 = ({ navigation }: any) => { 
  return ( 
    <View style={styles.container}>  
      <Text style={styles.contentBody}>Bienvenido</Text> 
      <View>
        <Image 
          source={{ uri: 'https://servisoftcorp.com/wp-content/uploads/2019/02/aplicaciones-moviles-apps-servisoftcorp.com_.jpg' }} 
          style={styles.image} 
        />
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Dividir', { data: 'someData' })}
      >
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>
    </View> 
  ); 
};

export default Screen1;
