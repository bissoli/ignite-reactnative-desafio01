import { View, Text } from 'react-native'
import { styles } from './styles'
import { TarefaObj } from '../../screens/Home';

type Props = {
    tarefas:TarefaObj[];
};

export default function Totalizacao({tarefas} : Props) {
    return(
        <View style={styles.totalizacao}>
            <View style={styles.totalizacaoUnica}>
                <Text style={styles.criadas}>Criadas</Text>
                <View style={styles.destaqueNumero}>
                    <Text style={styles.totalizacaoUnicaNumero}>{tarefas.length}</Text>
                </View>
            </View>
            <View style={styles.totalizacaoUnica}>
                <Text style={styles.concluidas}>Concluídas</Text>
                <View style={styles.destaqueNumero}>
                    <Text style={styles.totalizacaoUnicaNumero}>{tarefas.filter(p => p.Concluido == true).length}</Text>
                </View>
            </View>
        </View>
    );
}