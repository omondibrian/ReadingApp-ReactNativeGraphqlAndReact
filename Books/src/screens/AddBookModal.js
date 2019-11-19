
/**
 * @author Brian Omondi
 * @description Add book Component
 */


import React, { useState } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Button,
  Text,
  Left,
  Body,
  Right,
  Title
} from 'native-base';
import { View, Modal } from 'react-native'
const AddBookModal = (props) => {
  const Initialstate = {
    name: '', Genre: '', selected: ''
  };
  const [state, setstate] = useState(Initialstate);
  const onValueChange = (value) => {
    setstate({
      selected: value
    });
  }

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
      >
        <Container>
          <Header style={{ backgroundColor: '#AD1457' }}>
            <Left />
            <Body>
              <Title>Add Book</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Book Name</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Genre</Label>
                <Input />
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosHeader="Select an Author"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  selectedValue={state.selected}
                  onValueChange={onValueChange.bind(this)}
                >
                  <Picker.Item label="select author" />
                  <Picker.Item label="Margret Agolla" value="Margret Agolla" />
                  <Picker.Item label="Collogen igleden" value="Collogen igleden" />
                  <Picker.Item label="Trey Pracheit" value="Trey Pracheit" />
                </Picker>
              </Item>
            </Form>
              <Button 
                style={{ backgroundColor: '#AD1457' }}
                onPress={() => props.close(false)}
                >
                <Text>close</Text>
              </Button>
          </Content>
        </Container>
      </Modal>
    </View>
  );
};
export default AddBookModal;
