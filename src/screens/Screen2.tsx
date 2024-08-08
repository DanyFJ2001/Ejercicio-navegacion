
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import { styles } from '../theme/Apptheme';
import { Inputcomponent } from '../components/Inputcomponent';
import { Buttoncomponent } from '../components/Buttoncomponent';

export const Screen2 = () => {
  const [form, setForm] = useState({ number1: '', number2: '' });
  const [result, setResult] = useState('');

  const handleSetvalues = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const Dividir = () => {
    const num1 = parseFloat(form.number1);
    const num2 = parseFloat(form.number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Ingrese de nuevo');
      return;
    }

    if (num2 === 0) {
      Alert.alert('Error', num1 === 0 ? 'Indeterminación' : 'No existe división para cero');
      setResult('');
      return;
    }

    setResult((num1 / num2).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingresa dos Números:</Text>
      <Inputcomponent
        placeholder="Primer Número"
        handlesetvalue={handleSetvalues}
        name="number1"
      />
      <Inputcomponent
        placeholder="Segundo Número"
        handlesetvalue={handleSetvalues}
        name="number2"
      />
      <Buttoncomponent textbutton="Dividir" onpress={Dividir} />
      {result !== '' && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

export default Screen2;
