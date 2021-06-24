import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../../Atoms';
import { Container } from './styled';

const index = ({ item, handleDelete }) => {
  return (
    <Container>
      <Text>{item.name}</Text>
      <Text style={styles.delete} onPress={() => handleDelete(item.id)}>X</Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  delete: {
    padding: 8,
  }
});

export default index
