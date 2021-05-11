import * as React from "react"
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native"
import {Header} from "react-native-elements"
import db from "../config.js"

export default class WriteScreen extends React.Component{
    constructor(){
        super()
        this.state={
            quote:"",
            writer:""
        }
    }

    submitQuotes=()=>{
        db.collection("Quotes").add({
            quote : this.state.quote,
            writer : this.state. writer
        })
        this.setState({
            quote:'', writer:""
        })
    }
    render(){
        return(
            <View>
                <Header backgroundColor={"red"} centerComponent={{text:"Quote o'Clock" , style:{fontSize:15}}}/>

                <View>
                    <TextInput placeholder="Enter the Quote" onChangeText={(quoteText)=>{
                        this.setState({quote: quoteText})
                    }}
                    value={this.state.quote}/>

                </View>
                <View>
                    <TextInput placeholder="Enter your name" onChangeText={(writerText)=>{
                        this.setState({writer:writerText})
                    }}
                    value={this.state.writer}/>

                </View>
                <View>
                    <TouchableOpacity style={Styles.btn} onPress={this.submitQuotes}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    btn:{
        backgroundColor:"red"
    }
})