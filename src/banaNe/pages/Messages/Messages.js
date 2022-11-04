import React, { useState } from 'react';
import {SafeAreaView, Text} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';

import styles from './Messages.style';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false)

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content){
    handleInputToggle();
    console.log(content);
  }

  return(
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
      visible={inputModalVisible}
      onClose={handleInputToggle}
      onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};
 
export default Messages;
