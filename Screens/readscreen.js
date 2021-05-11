import * as React from "react"
import { FlatList } from "react-native"
import {View, Text, TouchableOpacity} from "react-native"
import {Header, SearchBar} from "react-native-elements"

export default class ReadScreen extends React.Component{
    constructor(){
        super()
        this.state={
            search:"", 
            allQuotes:[], 
            dataSource:[]
        }
    }

  retrieve=()=>{
   try{
    var allQuotes=[]
    var q = db.collection("quotes").get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
allQuotes.push(doc.data())
      })
      this.setState({allQuotes})
    })
}
catch(error){
    console.log(error)
}
   }
  

   Search=(text)=>{
       const newData = this.state.allQuotes.filter((item)=>{
           const itemData = item.writer ? item.writer.toUpperCase() :"".toUpperCase()
           const textData = text.toUpperCase()
           return itemData.indexOf(textData) > -1
       })
       this.setState({
           dataSource:newData, search:text
       })
   }
  componentDidMount(){
      this.retrieve()
  }
    render(){
        return(
            <View>

                <Header/>
                <SearchBar placeholder="Type Here to Search.." onChangeText={text=>{this.Search(text)}}
                onClear={text=>{this.Search("")}}
                value={this.state.search}/>

                <FlatList
                data={this.state.search==="" ? this.state.allQuotes: this.state.dataSource}
                renderItem={({item})=>(
                    <View>
                        <Text> Quote {item.quote}</Text>
                        <Text> Quote {item.writer}</Text>
                    </View>
                )}
                />
            </View>
        )
    }
}