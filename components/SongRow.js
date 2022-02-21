import { 
  View,
  Text,
  TouchableOpacity,
  Image
 } from 'react-native'
import React from 'react'
import {useTailwind } from 'tailwind-rn'
import { useNavigation } from '@react-navigation/core'



const SongRow = ({data}) => {
    const tailwind = useTailwind();
    const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={tailwind(" flex flex-row justify-between  rounded-xl  bg-emerald-200 p-5 m-1 w-80 ")}
      onPress={()=> navigation.navigate('TrackPlayer',{
        data
      })}
      >
        <View style={tailwind("flex flex-row ")}>
          <View style={tailwind("mt-1")}>
            <Image style={tailwind("h-10 w-10 rounded-lg ")} source={require('../assets/song.png')}/>
          </View>
          <View style={tailwind(" px-2 ")}>
            <Text style={tailwind("text-white font-bold text-lg")}>test {data.title}</Text>
            <Text style={tailwind("text-slate-50 font-medium")}> test {data.artist}</Text>
          </View>
          
        </View>
        <View style={tailwind("pt-3")}>
          <Text style={tailwind("text-white font-light text-base")}>2:31</Text>
        </View>
      
    </TouchableOpacity>
  )
}

export default SongRow