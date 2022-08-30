import React from 'react';
import { View } from 'react-native';

import Card from './components/Card';
import Conteudo from './components/Conteudo';
import BarraTitulo from './components/BarraTitulo';

import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container }>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
  );
}