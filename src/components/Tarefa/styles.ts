import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            width: "100%",
            marginTop: 5,
            marginBottom: 5,
            backgroundColor: '#1F1E25',
            paddingTop: 10,
            paddingBottom: 10,
            borderColor: '#FFF',
            borderWidth: 0,
            borderRadius: 15    
        },
        checkbox: {
        },
        selecao: {
            width: "15%",
            alignItems: 'center',
            justifyContent: 'center',                    
        },
        descricao: {
            color: '#FFF',
            fontSize: 14,
            lineHeight: 20,
            justifyContent: 'center',
            fontWeight: "400",
            width: "75%"          
        },
        descricaoConcluida: {
            fontSize: 14,
            color: '#808080',
            textDecorationLine: 'line-through',
            justifyContent: 'center',
            fontWeight: "400"                   
        },
        exclusao: {
            width: "20%"
        },
        recyclebin: {
            width: 32,
            height: 32
        }
    }
);