
/**
 * @author Brian Omondi
 * @description Add Author Component
 */

import React, { useState } from 'react';
import { Container, 
         Header, 
         Content, 
         Form, 
         Item, 
         Input,
         Label, 
         Button, 
         Text, 
         Left, 
         Body, 
         Right,
         Title } from 'native-base';
import { View, Modal, StyleSheet} from 'react-native'
const AddAuthorModal = (props) => {
    const Initialstate = {
        name: '', age: '', selected:''
    };
    const [state, setstate] = useState(Initialstate);

    return (
        <View style={{ marginTop: 22 }}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.modalVisible}
                >
                    <Header style={styles.header}>
                        <Left />
                        <Body>
                            <Title>Add Author</Title>
                        </Body>
                        <Right />
                    </Header>
                <Container style={styles.container}>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Author Name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Age</Label>
                                <Input />
                            </Item>
                           
                                
                            
                        </Form>
                        <View style={styles.buttons}>
                            <Button warning
                            style={styles.button}
                            onPress={()=>props.close(false)}
                            >
                            <Text
                            style={styles.text}
                            >close</Text>
                            </Button>
                            <Button warning
                            style={styles.button}                            
                            >
                            <Text
                            style={styles.text}
                            > ADD </Text>
                            </Button>
                        </View>
                    </Content>
                </Container>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    buttons:{
         flexDirection: "row", alignItems: "flex-start" 
    },
    container:{
         flex:1,
         justifyContent: "center",
         margin: 10,
    },
    header:{
        backgroundColor: '#AD1457'
    },
    button: { 
        backgroundColor: '#AD1457', 
        marginTop: 10, 
        width: 100 
    },
    text:{
        padding:10
    }
})
export default AddAuthorModal;
