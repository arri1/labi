import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

function Lab2() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ margin: 180 }}>
      <Text>     {count} 
      {"\n"}
      <Button color="#ad6909" title="+" onPress={() => setCount(count + 1)} />
      <Button color="#000000" title="-" onPress={() => setCount(count - 1)} />
      </Text>
    </View>
  );
}

export default Lab2;