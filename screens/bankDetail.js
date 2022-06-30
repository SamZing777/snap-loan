import React, { useState, useEffect } from "react";
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    Alert
  } from 'react-native';

const BankDetail = () =>{

    const[bank, setBank] = useState('');

    const fetchPay = () =>{
        fetch('https://snaploan.herokuapp.com/create-bank', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bank),
            })
            .then(response => response.json())
            .then(bank => {
            console.log('Success:', bank);
                setBank(bank);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }

        useEffect(() => {
            fetchPay();
        },[props]);

    const submit = () =>{
        Alert.alert("This message submit details");
    }

    return(
        <ScrollView>
            <View style={styles.containerLeft}>
                <Text style={{ color: "black", fontSize: 24}}> Enter your bank details </Text>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10}}> 
                    This will be used to process your loan and monthly repayment automatically.
                </Text>   
            </View> 

            <View style={styles.containerLeftInput}>
                <Text onChangeText = {(e) => {
                    setBank(e)}}
                 style={{ color: "black", fontSize: 18, marginTop: 80}}> Full name </Text>   
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 20, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 20, marginTop: 10, color: 'gray'
                             }}
                    placeholder="Enter full name"
                    placeholderTextColor="#ccc"
                    value={bank}
                />
            </View>   

            <View style={styles.containerLeftInput}>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10}}> Account number </Text>   
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 20, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 20, marginTop: 10, color: 'gray'
                             }}
                    placeholder="0254845468"
                    placeholderTextColor="#ccc"
                />
            </View> 

            <View style={styles.containerLeftInput}>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10}}> BVN </Text>   
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 20, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 20, marginTop: 10, color: 'gray'
                             }}
                    placeholder="Enter BVN"
                    placeholderTextColor="#ccc"
                />
            </View> 

            <View style={styles.button}>
                <Pressable style={{ backgroundColor: "#96E765", width: 300, height: 50,
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 5, marginBottom: 10}}
                                    onPress={submit}>
                    <Text style={{color: "black", fontSize: 18}}>Submit</Text>
                </Pressable>
            </View>

        </ScrollView>
    )
}

export default BankDetail;
