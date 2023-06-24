import { View, Text, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'
import { styles } from './styles'
import { TarefaObj } from './../../screens/Home' 
import SVGImg from './../../../assets/recyclebin.svg';

type Props = {
    tarefaObj:TarefaObj;
    handleDelete: (Id:string) => void;
    handleConclusao: (id:string) => void;
}

export default function Tarefa({tarefaObj, handleDelete, handleConclusao}:Props) {

    return (

        <View style={styles.container}>
            <View style={styles.selecao}>
                <Checkbox
                    value={tarefaObj.Concluido}
                    style={styles.checkbox} 
                    onTouchStart={() => handleConclusao(tarefaObj.Id)}
                />
            </View>
            <View style={styles.descricao}>
                <Text style={tarefaObj.Concluido ? styles.descricaoConcluida: styles.descricao}>
                    {tarefaObj.Descricao}
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => handleDelete(tarefaObj.Id)} style={styles.exclusao}>
                    <SVGImg style={styles.recyclebin} />
                </TouchableOpacity>
            </View>
        </View>

    );
};