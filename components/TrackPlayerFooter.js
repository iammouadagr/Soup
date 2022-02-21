import { View, Text } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import {useTailwind } from 'tailwind-rn'

const TrackPlayerFooter = ({item}) => {
  const tailwind = useTailwind();
  const [start, setStart] = useState(true);

  useEffect(() => {
    
  }, []);


  const playBtn = () => {
    console.log(start);
    return ( 
      start ? (
          <TouchableOpacity onPress={()=> console.log("start / stop ")}>
          <Icon
            name="play-circle"
            type='material-community'
            color='#F2F3F4'
            size={72}
            
          />
          </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={()=> console.log("start / stop ")}>
          <Icon
            name="pause-circle"
            type='material-community'
            color='#F2F3F4'
            size={72}
            
          />
          </TouchableOpacity>
      ) 
    )
  }
   
  return (
    <View style={tailwind("flex items-center w-full px-6")}>
      <View style={tailwind("flex flex-row justify-between w-full")}>
        <TouchableOpacity onPress={()=> console.log("repeat activated")}>
            <Icon
              name="repeat"
              type='material-community'
              color='#F2F3F4'
              size={28}
              style={tailwind("pt-4")}
            />

        </TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log("skip-previous ")}>
            <Icon
              name="skip-previous"
              type='material-community'
              color='#F2F3F4'
              size={48}
              style={tailwind("pt-2")}
            />

        </TouchableOpacity>
        
        { start ? (
              <TouchableOpacity onPress={()=> {
                console.log("start / stop ");
                setStart(false)
                }}>
              <Icon
                name="play-circle"
                type='material-community'
                color='#F2F3F4'
                size={72}
                
              />
              </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={()=> {
              console.log("start / stop ");
              setStart(true)
            }
            }>
              <Icon
                name="pause-circle"
                type='material-community'
                color='#F2F3F4'
                size={72}
                
              />
              </TouchableOpacity>
          ) 
        }
        

        <TouchableOpacity onPress={()=> console.log("skip-next ")}>
            <Icon
              name="skip-next"
              type='material-community'
              color='#F2F3F4'
              size={48}
              style={tailwind("pt-2")}
            />

        </TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log("add to / remove from  playlist ")}>
            <Icon
              
              name="heart-o"
              type='font-awesome'
              color='#F2F3F4'
              size={28}
              style={tailwind("pt-4")}
            />

        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default TrackPlayerFooter