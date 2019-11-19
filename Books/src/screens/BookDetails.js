/**
 * @author Brian Omondi
 * @description this component shows the book details 
 */

 import React from 'react'
 import { View, Text } from 'react-native'
 
 const BookDetails = (props) => {
     return (
         <View>
             <Text>BookDetails for id {props.navigation.getParam(id, 0)}</Text>

         </View>
     )
 }
 
 export default BookDetails
 