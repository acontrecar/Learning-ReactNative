import {SafeAreaView} from 'react-native';
import React from 'react';
// import {HelloWorldScreens} from './src/presentation/screens/HelloWorldScreens';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
// import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {HomeworkScreen} from './src/presentation/screens/HomeworkScreen';
// import {FileScreen} from './src/presentation/screens/FileScreen';
// import {FlexScreen} from './src/presentation/screens/FlexScreen';
// import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
// import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
// import {PositionScreen} from './src/presentation/screens/PositionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreens name="Antonio Contreras" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}

        {/* <PositionScreen /> */}
        {/* <FileScreen /> */}
        {/* <FlexScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
