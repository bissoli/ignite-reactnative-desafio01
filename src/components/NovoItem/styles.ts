import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create ({
    form: {
        marginTop: 36,
        marginBottom: 42,
        width: "100%",
        flexDirection: 'row'
    },
    input: {
        flex: 1,        
        marginRight: 12,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        width: 300,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#000',
        borderWidth: 1,
        fontSize: 16,
        fontWeight: "400"
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#1E6F9F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 24
    },
    logo: {
      alignSelf: 'center'
   }   
});