import React, { useState, useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import TrackPlayerContainer from '../components/TrackPlayerContainer'
import TrackPlayerFooter from '../components/TrackPlayerFooter'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useTailwind } from 'tailwind-rn'
import Navbar from '../components/Navbar'
import { LinearGradient } from 'expo-linear-gradient'
import { useRoute } from '@react-navigation/core'
import TrackPlayer, {State} from 'react-native-track-player'


const TrackPlayerScreen = () => {

  const tailwind = useTailwind();
  const {params} = useRoute();
  const {data} = params;
  const [track, setTrack] = useState(data);

 
  const setupPlayer = async() => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(track);

  }

  const togglePlayback = async() => {

    const currentTrack = await TrackPlayer.getCurrentTrack();
    const state = await TrackPlayer.getState();

    if(state === State.Playing) await TrackPlayer.pause()
    else await TrackPlayer.play()
      
  }

  useEffect(() => {
    setupPlayer();
    
  }, []);

  return (
    <View style={tailwind(" flex items-center")}>
       <LinearGradient
        colors={['#27e453', '#34d399']}
        style={tailwind("flex items-center pt-5 pb-12 w-full h-full")}>
          <TrackPlayerContainer item={track}/>
          <TrackPlayerFooter/>
          <Navbar/>

        </LinearGradient>
      
     
    </View>
  )
}

export default TrackPlayerScreen