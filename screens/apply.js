import React from "react";
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    Pressable,
    Alert
  } from 'react-native';

const Apply = ({ navigate }) =>{

    const apply = () =>{
        Alert.alert("This is apply button");
    }

    return(
        <ScrollView>
            <View style={styles.applyContainer}>
                <Text style={{ color: "black", fontSize: 18}}>
                    Borrowed Amount
                </Text>
                <Text style={{ color: "black", fontSize: 24}}>
                    N100,000
                </Text>

                <Text style={{ color: "black", fontSize: 18}}>
                    Repayment period
                </Text>
                <Text style={{ color: "black", fontSize: 24}}>
                    6 Months
                </Text>
            </View>

            <View style={styles.applyContainer}>
                <Text style={{ color: "black", fontSize: 18}}>
                    Monthly cost for 6 Months
                </Text>
                <Text style={{ color: "black", fontSize: 14}}>
                You are borrowing N100,000 over 6 months at 9% interest per month with a total loan cost of N109,000. 
                No added fees.
                </Text>
            </View>

            <View style={styles.applyContainer}>
                <Text style={{ color: "black", fontSize: 18}}>
                    Confirm bank details
                </Text>
                <Text style={{ color: "black", fontSize: 24}}>
                    Keystone
                </Text>
                <Text style={{ color: "black", fontSize: 14}}>
                    0265845255
                </Text>
                <Text style={{ color: "black", fontSize: 14}}>
                    Savings
                </Text>
                <Text style={{ color: "black", fontSize: 14}}>
                    Olivia Gerard
                </Text>
            </View>

            <View style={styles.button}>
                <Pressable style={{ backgroundColor: "#96E765", width: 300, height: 50,
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 5, marginBottom: 10}}
                                    onPress={apply}>
                    <Text style={{color: "black", fontSize: 18}}>Continue</Text>
                </Pressable>
            </View>
         

        </ScrollView>
    )
}

export default Apply;
