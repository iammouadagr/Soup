import { 
  View,
  Text,
  FlatList   
} from 'react-native';
import React, { useState } from 'react';
import {useTailwind } from 'tailwind-rn';
import {
  Button,
  Input,
  Image,
  Icon
} from 'react-native-elements'
import SongRow from './SongRow'



const HomeContainer = () => {

    const tailwind = useTailwind();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState(initialData);

    const initialData = [
      {
        url: 'http://example.com/avaritia.mp3', // Load media from the network
        title: 'Avaritia',
        artist: 'deadmau5',
        album: 'while(1<2)',
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        artwork: 'http://example.com/cover.png', // Load artwork from the network
        duration: 402, // Duration in seconds
        id: 1
      },
      {
        id : 2,
        title: "Heat Waves",
        artist : "Glass animals"
      },
      {
        id : 3,
        title: "Praise God",
        artist : "Kanye West"
      },
      {
        id : 4,
        title: "2055",
        artist : "Sleepy Hallow"
      },
      {
        id: 5,
        title:"Stronger",
        artist : "Kanye West",
        album:"Graduation",
        url:"../assets/songs/Stronger_Kanye West.mp3",
        duration: 320
      }


    ];

  return (
    <View style={tailwind("flex-row bg-emerald-300 justify-center h-4/6 mt-2 mb-2 w-96 rounded-3xl")}>
       <FlatList
                contentContainerStyle={tailwind("flex justify-center items-center ")}
                data={initialData}
                keyExtractor={item => item.id}
                renderItem={({item}) => <SongRow data={item}/>}
                ListHeaderComponent={
                    
                        <Input  
                          placeholder="Find in your library" 
                          style={tailwind("text-slate-50")}
                          placeholderTextColor="white"
                          inputContainerStyle={tailwind("border-b-0")}
                          leftIcon={
                            <Icon
                              name="search"
                              size={18}
                              color='white'
                            />
                          }
                          value={search} 
                          onChangeText={(text) => setSearch(text)} />
                    
                }
                ListHeaderComponentStyle={tailwind("flex justify-center w-9/12 bg-emerald-200 rounded-3xl my-2")}
            
            />
    </View>
  );
};

export default HomeContainer;
