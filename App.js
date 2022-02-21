import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import TrackPlayerScreen from './screens/TrackPlayerScreen';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {useTailwind } from 'tailwind-rn';

export default function App() {

  const tailwind = useTailwind();
  const Stack = createNativeStackNavigator();
  const globalScreenOptions = {
    headerStyle : { backgroundColor : "#34d399"},
    headerTitleStyle : {color :"#fff"},
    headerTintColor : "#fff",
    
    
  };

  return (

    <TailwindProvider utilities={utilities}>

      <NavigationContainer>
      
        <Stack.Navigator 
          screenOptions={globalScreenOptions}
          tabBar={() => null}
          >
            <Stack.Screen 
              options ={{ title : "Home"}} 
              name ="Home" 
              component={Home} 
              
            />
            <Stack.Screen 
              options ={{ title : "My library"}} 
              name ="TrackPlayer" 
              component={TrackPlayerScreen} 
            />
          </Stack.Navigator>
    </NavigationContainer>
   </TailwindProvider>
  );
}


