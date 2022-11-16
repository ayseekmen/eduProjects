import { View, Text } from 'react-native'
import React from 'react'

import database from '@react-native-firebase/database'

const App = () => {

  const getCurrentUser = () => {

    const reference = database().ref('/diyet/userList/' + user.uid);

    reference
      .on('value', snapshot => {

        console.log(snapshot.val());

      });

  }

  return (
        <View style={{flex:1, backgroundColor:"red"}} />
  )
}

export default App;