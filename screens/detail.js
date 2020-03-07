import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Card from '../shared/card';
export default function ReviewDetails({navigation,route}){
/*const pressHandler=()=>{
    navigation.goBack();
}*/
    const {email} = route.params;
    const {first_name} = route.params;
    const {last_name} = route.params;
    const {avatar} = route.params;
    

    return(
        <View style={styles.contaner} >
          <Card>
          <Text>Email : {email}</Text>
            <Text>First Name : {first_name}</Text>
            <Text>Last Name: {last_name}</Text>
            <View style={styles.img}>
                <Text>Avatar</Text>
              <Image source={{uri:avatar}} />
            </View>
            </Card>
          
        </View>
    )
}
const styles = StyleSheet.create({
  contaner:{
      flex:1,
      padding:10,
  },
  img:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee',
  }
})

