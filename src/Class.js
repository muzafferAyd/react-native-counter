import React from 'react';
import {SafeAreaView,View,Text, Button} from 'react-native';

class Clarusway extends React.Component{
    constructor(props){
        super (props);

        this.state={
            counter:0
        }
    }



    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text
                    style={{fontSize:250}}>
                        {this.state.counter}
                    </Text>

                    <Button
                    title='Up!'
                    onPress={()=> this.setState({
                        counter:this.state.counter+1 })
                    
                    }>

                    </Button>
                </View>
            </SafeAreaView>
        ) 
    
    }
}
export default Clarusway;
