import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';

// import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>

      {/* <Icon name="accessibility-outline" size={25} /> */}

      <FAB
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        style={globalStyles.fab}
        icon="add-outline"
      />
    </View>
  );
};
