import { styles } from './styles';
import { View, Text, Image } from 'react-native';
import SVGImg from './../../../assets/logo.svg';
export default function Cabecalho() {

    return (
        <>
            <SVGImg style={styles.logo} /> 
        </>
    );

}