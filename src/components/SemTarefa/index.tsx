import {View, Text} from 'react-native';
import SVGSemTarefa from '../../../assets/sem-tarefa.svg';
import { styles } from './styles'

export default function SemTarefa() {

    return (
        <View style={styles.container}>
            <SVGSemTarefa style={styles.semtarefa}/>
            <>
                <Text style={styles.titulo}>
                    Você ainda não tem tarefas cadastradas.
                </Text>
                <Text style={styles.mensagem}>
                    Crie tarefas e organize seus itens a fazer.
                </Text>
            </>
        </View>
    );

};