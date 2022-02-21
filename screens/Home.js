import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';
import {useTailwind } from 'tailwind-rn';
import HomeHeader from '../components/HomeHeader';
import HomeContainer from '../components/HomeContainer';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    const tailwind = useTailwind();

  return (
    <View>
        <LinearGradient
        colors={['#27e453', '#34d399']}
        style={tailwind("flex items-center pt-5 w-full h-full")}>
          <HomeHeader/>
          <HomeContainer/>
          <Navbar/>
      </LinearGradient>
        
    </View>
  );
};

export default Home;


