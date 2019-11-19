import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const DispalyBook = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Book',{id:1})}>
        <View style={styles.bookList}>
            <Text style={styles.listItem} > The long Earth</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bookList:{
        padding: 0
    },
    listItem:{
        
        margin:12,
        padding:10,
        borderRadius:4,
        borderColor: "#880E4F",
        borderStyle:"solid",
        borderWidth:1,
        color:"#880E4F",
        shadowColor: " rgba(0, 0, 0, 0.3)"
}
})
export default DispalyBook