import React, { useState, useEffect  } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles';

import {
    ScrollView,
    View,
    Text,
    Pressable,
    TouchableOpacity,
    Alert, 
    TextInput
  } from 'react-native';


const Index = (props) =>{
    const[isHidden, setIsHidden] = useState(false);
    const[notViz, setVisible] = useState(false);
    const[amount, setAmount] = useState('-N210,000');
    const[loanAmount, setLoanAmount] = useState(0);
    const[option, setOption] = useState(0);
    const[errMsg, setErrMsg] = useState('');
    const[payment, setPayment] = useState('');
    const[data, setData] = useState([]);
    
    const hideBalance = () =>{
        setIsHidden(!isHidden);
    }

    const showLoan = () =>{
        setVisible(!notViz);
    }

    const applyForLoan = () =>{
        Alert.alert("This button takes the data to Apply page");
    }

    const calcAmount = (opt) =>{
        if(loanAmount < 50000){
            setErrMsg('Please enter loan amount above or N50,000');
            return;
        }
            
        if (opt == 1){
            let interest = 0.04 * loanAmount;
            let loan = interest + parseInt(loanAmount);
            setPayment(loan);
        }
        else if (opt == 3){
            let interest = 0.06 * loanAmount;
            let loan = interest + parseInt(loanAmount);
            setPayment(loan);
        }
        else if (opt == 6){
            let interest = 0.09 * loanAmount;
            let loan = interest + parseInt(loanAmount);
            setPayment(loan);
        }
        else if (opt == 12){
            let interest = 0.15 * loanAmount;
            let loan = interest + parseInt(loanAmount);
            setPayment(loan);
        }
    }

    const getLoanPeriod = () =>{
        fetch('https://snaploan.herokuapp.com')
        .then(response => response.json())
        .then(data => setData(data));
    }

    useEffect(() => {
       getLoanPeriod();
      },[props]);

    return(
    <ScrollView>
        <View style={styles.balance}>
            <Text style={{ color: 'black', fontSize: 18 }}>
                Your Balance
            </Text>

            <Pressable style={{ backgroundColor: "#ccc", width: 60, height: 30,
                                alignItems: 'center',
                                borderRadius: 5}}
                                onPress={hideBalance}>
                { !isHidden ?  
                <Text style={{color: "black", fontSize: 18}}> Hide </Text> : 
                <Text style={{color: "black", fontSize: 18}}> Show </Text>
                }

            </Pressable>  
            <Text style={{ color: 'black', fontSize: 30 }}>
                {isHidden ? '*********' : amount}
            </Text>
        </View>

        <View style={ styles.payAndHistory }>
            <TouchableOpacity>
                <Text style={{ color: "black", fontSize: 20 }}>
                    Pay
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ color: "black", fontSize: 20 }}>
                    History
                </Text>
            </TouchableOpacity>
        </View>

        { !notViz ?
        <View style={styles.getLoan}>
            <Text style={{ color: 'black',
                           fontSize: 24 }}>
                Eligible for loans up to N500,000
            </Text>
            <Text style={{ color: 'black' }}>
                Get loan at a snap in less than 5 minutes.
            </Text>
            <TouchableOpacity onPress={ showLoan }>
                <Text style={{ textAlign: 'center', 
                                fontSize: 24,
                                color: 'black' }}> 
                                Get a loan 
                </Text>
            </TouchableOpacity>
        </View> : null
        }

        { notViz ? 
                    <View style={ styles.borrow }>
                        <Text style={{color: "black"}}>How much do you want to borrow?</Text>
                        <Text style={{color: "black", marginBottom: 10}}>Max: N500,000</Text>
                        
                        <View style={ styles.howMuch}>
                            <TextInput onChangeText={(e)=>{
                                setLoanAmount(e);
                                if( e < 50000){
                                    setErrMsg(<Text>Must be above or equal to N50,000</Text>);
                                }else{
                                    setErrMsg(<Text style={{ color: "green" }}>Okay</Text>)
                                }
                            }}
                                    value={loanAmount}
                                    placeholder="Enter amount"
                                    placeholderTextColor="#ccc"
                                    keyboardType="numeric"
                                    maxLength={7}
                                    
                                    style={{ color: 'black',
                                        textAlign: 'center',
                                        fontSize: 20, }} />
                        
                        </View>
                        
                        <View>
                            <Text style={{color: "red", textAlign:'center'}}>
                                {errMsg}
                            </Text>
                        </View>

                    <View style={styles.minMax}>
                        <Text style={{color: "black"}}>N50,000 </Text>
                        <Text style={{color: "black"}}>N500,000</Text>
                    </View>

                    <View style={styles.containerleft}>
                        <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>Loan Period</Text>
                        <Text style={{color: "black", marginBottom: 10}}>Choose your loan period</Text>
                    </View>
                    
                    
            {
                data.map((item, index) => (
                <View key={index} style={ option == item.duration ? styles.loanPeriodSelected: styles.loanPeriod }>
                    
                    <TouchableOpacity onPress={()=>{calcAmount(item.duration), setOption(item.duration)}}
                    index={index}
                    key={index}
                    >
                        <Text style={{ color: 'aliceblue',
                                        textAlign: 'center',
                                        fontSize: 24 }}>
                                {item.duration} {item.duration>1?'s':''}
                        </Text>
                        <Text style={{ color: 'black',
                                        textAlign: 'center',
                                        fontSize: 24 }}>
                                {item.interest}%
                        </Text>
                    </TouchableOpacity>
                </View>
                ))
            }
            </View> : null
            
        }


       {
            payment > 0 ? <View style={ styles.loanTotal }>
                                <Text style={{ color: 'black',
                                        textAlign: 'center',
                                        fontSize: 24 }}>
                                        You will pay: N{payment}
                                </Text>
                            </View> : null
        } 

        { notViz ? 
        <View style={styles.apply}>
            <Pressable style={{ backgroundColor: "#96E765", width: 180, height: 50,
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 5, marginBottom: 10}}
                                    onPress={applyForLoan}>
                <Text style={{color: "black", fontSize: 18}}>Apply</Text>
            </Pressable>
            <Icon name="info-circle" size={20} color="blue"/>
        </View> : null
    }


    </ScrollView>
    )
}

export default Index;
