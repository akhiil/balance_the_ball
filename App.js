import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Game from './src/App';
import Test from './src/test';

const App = () => {
  const [page, setPage] = useState(true);


  return (
    <View style={{ flex: 1 }}>
      {page ? <Game startGame={setPage} /> : <Test />}
    </View>
  );
}

export default App;
