import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './MessageCard.style';
// import { tr } from 'date-fns/locale';
import { formatDistance, parseISO } from 'date-fns';

const MessageCard = ({ message }) => {
  //  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
  //      addSuffix: true,
   //     locale: tr,
   // });

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{message.date}</Text>
            </View>
            <Text style={styles.title}>{message.text}</Text>
        </View>
    );
};

export default MessageCard;