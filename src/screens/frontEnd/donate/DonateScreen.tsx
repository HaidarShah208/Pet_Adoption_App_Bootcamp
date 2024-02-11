import { View, Text, } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker'

class DonateScreen extends Component {
    state = {user :''}
    updateUser=(user: any)=>{
        this.setState({user:user})
    }
    render(){
        return(
            <View>

            <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={{width:150,height:50}}>
            <Picker.Item label='' />
            <Picker.Item label='don' value={'dods'} />
        </Picker>
        <Text>{this.state.user}</Text>
            </View>
        )
    }
}      
export default DonateScreen
