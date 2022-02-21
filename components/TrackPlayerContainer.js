import React,{useState, useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import {useTailwind } from 'tailwind-rn'
import Slider from '@react-native-community/slider'


const TrackPlayerContainer = ({item}) => {

  const tailwind = useTailwind();
  const [trackPosition, setTrackPosition] = useState(0);


 


  return (
    <View style={tailwind("flex items-center  h-5/6 mt-2 w-5/6")}>
        <Image style={tailwind("h-4/6 w-full rounded-lg ")} source={require('../assets/song.png')}/>
        <View style={tailwind("flex items-center p-6")}>
            <Text style={tailwind("text-stone-50 font-bold text-2xl")}>{item.title}</Text>
            <Text style={tailwind("text-stone-100 font-normal text-lg")}>{item.artist}</Text>
        </View>
        <View style={tailwind("flex items-center w-full")}>
          <Slider
            style={tailwind("w-full")}
            minimumTrackTintColor="#fff"
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={trackPosition}
            onValueChange={(sliderValue)=> setTrackPosition(sliderValue)}
            
           

          />
          <View style={tailwind("flex flex-row justify-between w-full")}>
            <Text style={tailwind("text-stone-100 font-light text-base")}>{trackPosition}</Text>
            <Text style={tailwind("text-stone-100 font-light text-base")}>2:33</Text>
          </View>
         

        </View>
        </View>
       
  )
}

export default TrackPlayerContainer