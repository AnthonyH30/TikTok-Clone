import React from 'react';
import { View } from 'react-native';
import { styles } from "./styles";
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function Button(){
    return(
        <View style={styles.button}>
            <EntypoIcons name='plus' size={22} color='#000' />
        </View>
    )
}