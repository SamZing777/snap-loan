import {
    StyleSheet,
  } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      marginTop: -10,
      padding: 20
    },

    containerLeft: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      margin: 20,
      marginBottom: -24,
      padding: 20
    },

    containerLeftInput: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 20,
      paddingTop: -40,
      margin: 20,
      marginTop: -40
    },

    containerRight: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: '',
    },

    row: {
      flex: 1,
      flexDirection: 'row',
      margin: 40,
      marginTop: -40,
      padding: 40,
      justifyContent: 'space-between'
    },

    button: {
      backgroundColor: "#96E765",
      margin: 10,
      padding: 10
    },

    // separator: {
    //   backgroundColor: '#ccc',
    //   height: 10
    // },

    balance: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 120,
        borderRadius: 10,
        backgroundColor: "#96E765",
        margin: 40,
        padding: 20
    },

    payAndHistory: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      margin: 40,
      padding: 20,
      marginTop: -15,
      marginBottom: -15
    },

    getLoan: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 10,
      backgroundColor: '#E86C6C',
      margin: 40,
      padding: 20
    },

    borrow: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: 20,
      padding: 10
    },

    minMax: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40
    },

    howMuch: {
      borderRadius: 5,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 5,
      padding:  20
    },

    loanPeriod: {
      borderRadius: 5,
      backgroundColor: '#E86C6C',
      borderColor: 'gray',
      borderWidth: 2,
      margin: 5,
      padding:  20
    },

    loanPeriodSelected: {
      borderRadius: 5,
      backgroundColor: "#96E765",
      borderColor: 'gray',
      borderWidth: 2,
      margin: 5,
      padding:  20
    },

    loanTotal: {
      margin: 5,
      padding:  20
    },

    apply: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: 24,
      padding: 40
    },

    button: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    },

    recentTransaction: {
      flex: 1,
      flexDirection: 'row',
      margin: 40,
      marginTop: -55,
      padding: 40,
      paddingTop: -55,
      justifyContent: 'space-between'
    },

    cvv: {
      flex: 1,
      flexDirection: 'row',
      margin: 5,
      marginTop: -20,
      padding: 40,
      paddingTop: -40,
      justifyContent: 'space-between'
    },

    center: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20
    },

    notifications: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
      paddingTop: -80,
      marginTop: 10,
      backgroundColor: "#96E765",
      height: 5,
      width: 300,
      borderColor: '#ccc',
      borderRadius: 5
    },

    applyContainer: {
      flex: 1,
      flexDirection: "column",
      margin: 20,
      padding: 20,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#ddd"
    }

})

  export default styles;
  