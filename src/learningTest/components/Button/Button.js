import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from './Button.style'

const Button = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>Button</Text>
        </TouchableOpacity>
    )
}

export default Button;