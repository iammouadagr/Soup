import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useTailwind } from 'tailwind-rn'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'


const Navbar = () => {
    const tailwind = useTailwind();
    const navigation = useNavigation();
    
    
  return (
    <View style={tailwind("absolute bottom-5 bg-emerald-300 w-9/12 flex-row justify-between  px-6 py-3 rounded-3xl")}>
       <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
            <Icon
                
                name='home'
                type='font-awesome'
                color='#F2F3F4'
                size={32}
                
                
                 />
        </TouchableOpacity>
        <TouchableOpacity >
            <Icon
                name='search'
                type='font-awesome'
                color="#F2F3F4"
                 size={28}
                 />
        </TouchableOpacity>
        <TouchableOpacity >
            <Icon
                
                name='microphone'
                type='font-awesome'
                color="#F2F3F4"
                size={32}
                
                 />
        </TouchableOpacity>
     
    </View>
  );
};

export default Navbar;

