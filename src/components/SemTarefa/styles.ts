import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            height: 250,
            padding: 30
        },
        semtarefa: {
            width: 56,
            height: 56,
            alignSelf: 'center'
        },
        titulo: {
            color: '#808080',
            fontSize: 14,
            paddingTop: 30,
            textAlign: 'center',
            fontWeight: "700"
        },
        mensagem: {
            color: '#808080',
            fontSize: 14,
            textAlign: 'center',
            fontWeight: "400"
        }
    }
);