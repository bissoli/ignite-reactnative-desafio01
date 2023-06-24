import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        totalizacao: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            paddingTop: 10,
        },
        totalizacaoUnica: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 120
        },
        criadas: {
            fontSize: 16,
            fontWeight: "700",
            color: '#4EA8DE'
        },
        concluidas: {
            fontSize: 16,
            fontWeight: "700",
            color: '#8284FA'
        },
        totalizacaoUnicaNumero: {
            fontSize: 16,
            fontWeight: "700",
            color: '#D9D9D9',
            paddingLeft: 6,
            paddingRight: 6
        },
        destaqueNumero: {
            borderWidth: 0,
            borderRadius: 15,
            backgroundColor: '#333333'
        }
    }
);