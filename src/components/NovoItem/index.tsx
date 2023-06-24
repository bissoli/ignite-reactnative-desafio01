import { View, TextInput, TouchableOpacity, Text } from   'react-native'
import { styles } from './styles'
import SVGImg from './../../../assets/mais.svg';

type Props = {
    onAdd: () => void;
    onChange: (text:string) => void;
}

export default function NovoItem({ onAdd, onChange }: Props) {

    return (

        <View style={styles.form}>
            <TextInput
                style={styles.input} 
                placeholder='Adicionar uma nova tarefa'
                placeholderTextColor='#6B6B6B'
                onChangeText={(text) => onChange(text)}
            />
            <TouchableOpacity style={styles.button} onPress={onAdd} >
                <SVGImg style={styles.logo}/>
            </TouchableOpacity>
        </View>

    );

}