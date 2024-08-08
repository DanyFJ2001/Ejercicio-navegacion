import 'react-native-gesture-handler';
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import { styles } from './src/theme/Apptheme';

const Stack = createStackNavigator(); 

const App = () => { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator 
        screenOptions={{
          headerTitleAlign: 'center', 
          headerStyle: styles.header,
          cardStyle: styles.contentinput
         
        }}
      > 
        <Stack.Screen  name="Inicio" component={Screen1} options={{ title: 'Inicio' }} 
        /> 
        <Stack.Screen  name="Dividir"  component={Screen2} options={{ title: 'División' }} 
        /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}; 
 
export default App;
