import React, { useState, useEffect } from "react";
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    Image,
    Pressable,
    TextInput,
    Alert
  } from 'react-native';

const Customer = (props) =>{

    const[data, setData] = useState('');

    const fetchPay = () =>{
        fetch('https://snaploan.herokuapp.com/pay', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
            setData(data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
    useEffect(() => {
        fetchPay();
       },[props]);

    const pay = () =>{
        Alert.alert("This button will process the Payment");
    }

    return(
        <ScrollView>         
            <View style={styles.container}>
                <Image source={require("../img/ladie.jpg")} 
                        style={{ width: 200, height: 200, marginTop: 20, borderRadius: 10 }}>
                </Image>

                <Text style={{ color: "black", fontSize: 24}}>
                    Olivia Gerard
                </Text>
            </View>           

            <View style={styles.container}>
                <Text style={{ color: "black", fontSize: 24}}>
                    Top Up
                </Text>
            </View>
            
            <View style={styles.row}>
                <TextInput onChangeText={(e)=>{
                                setData(e) }}
                 style={{ height: 40, backgroundColor: 'white', fontSize: 20, 
                                    borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                    color: "gray", width: 90
                                }}
                        placeholder="Amount"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                        value={data}
                        
                />
                <Pressable style={{ backgroundColor: "#96E765", width: 90, height: 40,
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 5}}
                                    onPress={pay}>
                <Text style={{color: "black", fontSize: 18}}>Pay</Text>
            </Pressable>
            </View>

            <View style={styles.container}>
                <Text style={{color: "black"}}>
                    {data}
                </Text>
            </View>

            <View style={styles.container}>
                <Text style={{ color: "black", fontSize: 24}}>
                    Recent Transactions
                </Text>
            </View>

            <View style={styles.row}>
                <Text style={{ color: "black" }}>Top up 20%</Text>
                <Text style={{ color: "black" }}>+N50,000</Text>
            </View>

            <View style={styles.recentTransaction}>
                <Text style={{ color: "#ccc" }}>May 20, 02:23 PM</Text>
                <Text style={{ color: "#96E765" }}>Font </Text>
            </View>

            <View style={styles.recentTransaction}>
                <Text style={{ color: "black" }}>Borrowed</Text>
                <Text style={{ color: "black" }}>-N250,000</Text>
            </View>

            <View style={styles.recentTransaction}>
                <Text style={{ color: "#ccc" }}>Apr 05, 04:10 PM</Text>
                <Text style={{ color: "#E86C6C" }}>Font </Text>
            </View>

            <View style={styles.recentTransaction}>
                <Text style={{ color: "black" }}>Completed</Text>
                <Text style={{ color: "black" }}>N104,000</Text>
            </View>

            <View style={styles.recentTransaction}>
                <Text style={{ color: "#ccc" }}>Mar 04, 10:30 PM</Text>
                <Text style={{ color: "#96E765" }}>Font </Text>
            </View>

            <View style={styles.recentTransaction}>
                <Text style={{ color: "black" }}>Borrowed</Text>
                <Text style={{ color: "black" }}>-N100,000</Text>
            </View>

            <View style={styles.recentTransaction}>
                <Text style={{ color: "#ccc" }}>Feb 01, 08:02 PM</Text>
                <Text style={{ color: "#E86C6C" }}>Font </Text>
            </View>

        </ScrollView>
    )
}

export default Customer;
