/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { restElement } from '@babel/types';
import React,{useEffect, useState} from 'react';

import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from './components/Footer';
import Form from './components/Forms';
import Result from './components/Result';
export default function App(){

  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [total,setTotal] = useState(null);
  const [x1,setX1] = useState(null);
  const [x2,setX2] = useState(null);
  const [errorMessage,setErrorMessage] = useState("");

  useEffect( () =>{
      if(a && b && c)
      {
        calculate();
      }
      else
      {
        reset();
      }},[a,b,c]);
      const calculate = () =>
      {
        reset();
        let test = Math.pow(b,2) - (4* (a*c));
        // setX1(test);
        if (test >= 0 && a != 0)
        {
            let r1 = ((b * (-1)) + Math.sqrt(test))/(2*a);
            let r2 = ((b * (-1)) - Math.sqrt(test))/(2*a);
            setX1((r1).toFixed(3));
            setX2((r2).toFixed(3));
        }
        else if(a == 0)
        {
            setErrorMessage("El valor de la constante A no puede ser cero");
        }else
        {
          setErrorMessage("Esta ecuación no tiene soluciones reales");
        }
      }//metodo calculate

      const reset =() =>{
        setErrorMessage("");
        setTotal(null)
        setX1(null);
        setX2(null);
      }

  return(
    <>
    <SafeAreaView style={styles.Header}>
    <Text style={styles.titulo}> Solución a funciones</Text>
    <Text style={styles.titulo}> ax^(2) + bx + c</Text>
    <Form setA={setA} setB={setB} setC={setC}/>
    </SafeAreaView>
    <Result a={a} b={b} c={c} x1={x1} x2={x2} errorMessage={errorMessage}/>

        <Footer/>
 
    </>
  );
  }

  const styles = StyleSheet.create({
    Header:{
    backgroundColor:'#b6b6b6',
    height:'45%',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    alignItems:'center',

  },
  titulo:{
    fontSize:32
  }
  });

  AppRegistry.registerComponent("App",()=> App);