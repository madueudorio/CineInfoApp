import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CadastroFilme from './src/CadastroFilme';
import ListagemFilmes from './src/ListagemFilmes';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name='Cadastro' component={CadastroFilme} 
        options={{ headerShown: false }} />
       
       <Stack.Screen name='listagem' component={ListagemFilmes}
         options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;