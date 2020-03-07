import React  from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, ActivityIndicator } from 'react-native';
import { Component } from 'react';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading : true,
      dataSource:null,
    }
  }
  componentDidMount(){
  return fetch('https://reqres.in/api/users?fbclid=IwAR3JZYIEqxx9Pl7CV3A8TG81BhQOooPVNAze_75qkCEceFIK_wrw4yuM8KQ')
          .then((response)=>response.json())
          .then((responseJson)=>{
              this.setState({
                isLoading:false,
                dataSource:responseJson.data,
              })
          })
          .catch((error)=>{
              console.log(error()
              )
          });
  }
  render() {
      const {navigation} = this.props;
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
            <ActivityIndicator/>
        </View>
      )}else{
        let data = this.state.dataSource.map((val,key)=>{
           return <View key={key} style={styles.item} > 
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',val)}>
                <Text>{val.first_name}</Text>
                </TouchableOpacity>
                
           </View>
         });
         return(
           <View style={styles.container}>
              {data}
           </View>
         )
      
  }}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex:1,
    alignSelf:'stretch',
    padding:10,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#eee',
    borderBottomWidth:1,
    borderRadius:3,
  }
});
