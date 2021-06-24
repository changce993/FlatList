import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList } from 'react-native';
import { Button, Input, Form } from './components/Atoms';
import { Item } from './components/Molecules';

export default function App() {
  const [ products, setProducts ] = useState([]);
  const [ name, setName ] = useState('');
  const handleSubmit = () => {
    const product = { name, id: products.length + Math.random()};
    setProducts([ ...products, product ]);
    setName('');
  };
  const handleDelete = itemId => setProducts(products.filter(item => item.id !== itemId));
  return (
    <Form>
      <SafeAreaView/>
      <Input
        placeholderTextColor="#aaa"
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />

      <Button title={"Agregar"} onPress={handleSubmit}/>

      <FlatList
        data={products}
        keyExtractor={prod => prod.id}
        renderItem={({ item }) => <Item key={item.id} item={item} handleDelete={handleDelete}/>}
        style={{ width: "100%", marginTop: 12, marginBottom: 12 }}
      />
      <StatusBar style="auto" />
    </Form>
  );
};
