// Inputcomponent.js
import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from '../theme/Apptheme'

interface Props {
  placeholder: string;
  handlesetvalue: (name: string, value: string) => void;
  name: string;
}

export const Inputcomponent = ({ placeholder, handlesetvalue, name }: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        keyboardType='numeric'
        onChangeText={(value) => handlesetvalue(name, value)}
        style={styles.input}
      />
    </View>
  )
}

