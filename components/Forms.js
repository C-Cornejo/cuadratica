import React from 'react';
import {StyleSheet, TextInput, View,Text} from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
const {setA, setB, setC} = props;
return (
    <View style={styles.viewForm}>
        <Text  style={styles.etiqueta}>Ingrese los valores para las constantes</Text>
        <View style={styles.viewInputs}>
        <TextInput style={styles.input}
        placeholder="A"
        keyboardType="numeric"

        onChange={(e) => setA(e.nativeEvent.text)}
        />
        <Text style={styles.textStyle}>x^(2) +</Text>
        <TextInput style={styles.input}
        placeholder="B"
        keyboardType="numeric"
        onChange={(e) => setB(e.nativeEvent.text)}/> 
        <Text style={styles.textStyle}>x +</Text>
        
        <TextInput style={styles.input}
        placeholder="C"
        keyboardType="numeric"
        onChange={(e) => setC(e.nativeEvent.text)}/>
    </View>
       
 
    </View>
);
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 26
    },
    etiqueta:
    {
        fontSize:16,
        marginBottom:5
    }
    ,
    viewForm: {
    // position: 'absolute',
    bottom: 0,
    width: '90%',
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 20,
    height: '45%',
    justifyContent: 'center',
    },
    viewInputs: {
    flexDirection: 'row'
    },
    input: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '20%',
    marginLeft: 5,
    marginRight:5,
    color: 'green',
    paddingHorizontal: 20,
    },
    });
   