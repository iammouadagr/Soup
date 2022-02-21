import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {useTailwind } from 'tailwind-rn';
import { Icon } from 'react-native-elements'

const HomeHeader = () => {
    const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-row bg-emerald-200 justify-between h-20 w-96  py-5 px-5 rounded-3xl')}>
      <View style={tailwind('flex justify-between w-3/6')}>
        <TouchableOpacity>
            <Image style={tailwind("h-10 w-10 rounded-full")} source={require('../assets/avatar.jpg')}/>
        </TouchableOpacity> 
        
      </View>
      <View>
        <TouchableOpacity style={tailwind('rounded-3xl bg-emerald-400 ')}>
          <Text style={tailwind("text-slate-50 font-medium text-lg px-4")}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
