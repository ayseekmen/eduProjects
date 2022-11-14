import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from './Button.style'

const Button = ({ title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text testID="button-title" style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;