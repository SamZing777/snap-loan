import React from "react";
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';

const About = () =>{

    return(
        <ScrollView>
            <View style={ styles.container }>
                <Text style={{ color: "black", fontSize: 24 }}>
                    About Us
                </Text>
                <Text style={{ color: "black" }}>
                    Meet our team, discover our history and find our branches.
                </Text>
                <Image source={require("../img/money-lending.jpg")} 
                    style={{ width: 300, height: 300, marginTop: 20 }}>
                </Image>
            </View> 

            <View style={ styles.container }>
                <Text style={{ color: "black", fontSize: 24, marginBottom: 10 }}>
                    Address
                </Text>
                <Text style={{ color: "black" }}>
                    Thompson Street, Anthony, Ikeja
                </Text>
                <Text style={{ color: "black" }}>
                    Lagos,
                </Text>
                <Text style={{ color: "black" }}>
                    Nigeria
                </Text>
            </View>

            <View style={ styles.container }>
                <Text style={{ color: "black", fontSize: 24, marginBottom: 10 }}>
                    PMB
                </Text>
                <Text style={{ color: "black" }}>
                    16 P.O Box
                </Text>
                <Text style={{ color: "black" }}>
                    15485
                </Text>
            </View>           

        </ScrollView>
    )
}

export default About;
