
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../theme/Apptheme'

interface Props {
  textbutton: string;
  onpress: () => void;
}

export const Buttoncomponent = ({ textbutton, onpress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.buttonText}>{textbutton}</Text>
    </TouchableOpacity>
  )
}
