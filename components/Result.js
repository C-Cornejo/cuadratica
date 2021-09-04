import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
const {a, b, c, x1,x2, errorMessage} = props;
return (
<View style={styles.content}>
    
    <View style={styles.boxResult}>
    <Text style={styles.title}>RESUMEN</Text>
    <DataResult title="Input:" value={`${a}x^2 +${b}x +${c}`} />
    <DataResult title="Resultado"  />
    <DataResult title="X1" value={`${x1}`} />
    <DataResult title="X2" value={`${x2}`} />
    </View>
    
    <View>
    <Text style={styles.error}>{errorMessage}</Text>
    </View>
</View>
);
}
function DataResult(props) {
const {title, value} = props;
return (
    <View style={styles.value}>
        <Text>{title}</Text>
        <Text>{value}</Text>
    </View>
);
}
const styles = StyleSheet.create({
content: {
marginHorizontal: 40,
},
boxResult: {
padding: 30,
},
title: {
fontSize: 25,
textAlign: 'center',
fontWeight: 'bold',
marginBottom: 20,
},
value: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom:5
,
},
error: {
textAlign: 'center',
color: '#f00',
fontWeight: 'bold',
fontSize: 20,
},
});