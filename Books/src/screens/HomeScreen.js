
/**
 * @author Brian Omondi
 * @description Home Screen Component
 */

import React,{useState} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  View,
  Button,
  Icon,
  Fab,
} from 'native-base';
import AddAuthorModal from './AddAuthorModal'
import AddBookModal from './AddBookModal';
import DispalyBook from './DispalyBook';
const HomeScreen = () => {
  const [active, setactive] = useState(false);
  const [AddAuthorVisibility, setAuthor] = useState(false);
  const [AddBookVisibility, setBook] = useState(false);

  return (
    <Container>
      <Header
        style={{ backgroundColor: '#AD1457' }}
      >
        <Left />
        <Body>
          <Title>Reading list</Title>
        </Body>
        <Right />
      </Header>
      <Container>
        <DispalyBook />
        <DispalyBook />
        <DispalyBook />
        <DispalyBook />
        <DispalyBook />
        <DispalyBook />
        <DispalyBook />
        <DispalyBook />
      </Container>
      <View style={{flex: 1}}>
        <Fab
          active={active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#AD1457'}}
          position="bottomRight"
          onPress={() => setactive(!active)}>
          <Icon name="add" />
          <Button style={{backgroundColor: '#3B5998'}}
            onPress={() => { setAuthor(true); setactive(!active)}}
          >
            <Icon name="person" />
          </Button>
          <Button onPress={() => { setBook(true); setactive(!active)}} style={{backgroundColor: '#DD5144'}}>
            <Icon name="bookmarks" />
          </Button>
        </Fab>
      </View>
      <AddAuthorModal 
       modalVisible = {AddAuthorVisibility}
        close={ setAuthor}

       />
       <AddBookModal 
        modalVisible={AddBookVisibility}
        close={setBook}
        />
    </Container>
  );
};

export default HomeScreen;
