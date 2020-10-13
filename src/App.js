import React,{useState} from 'react';
import {SafeAreaView,View,Text,Button} from 'react-native';


const App = (props) =>{
      const [counter,setCounter] = useState(0);

      const upCounter= () => setCounter(counter+1)
      const downCounter= () => setCounter(counter-1)
    


  return(
      <SafeAreaView>
    <View>
      <Text style={{fontSize:250}}>{counter}</Text>

      <Button
    
      title='UP!'
      onPress={upCounter}>
      </Button>
      
      <Button
      title='Down'
      onPress={downCounter}>

      </Button>
    </View>
  </SafeAreaView>
  )
}


export default App;
