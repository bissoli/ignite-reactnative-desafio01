import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import Tarefa from './../Tarefa';
import Totalizacao from './../Totalizacao';
import SemTarefa from './../SemTarefa';
import { TarefaObj } from '../../screens/Home';


type Props = {
    tarefas: TarefaObj[];
    handleDelete: (id:string) => void;
    handleConclusao: (id:string) => void;
}

export default function Painel({ tarefas, handleDelete, handleConclusao }: Props) {
    return (
        <>
        <Totalizacao tarefas={tarefas}/>
        <View style={styles.container}>
            <FlatList
                data={tarefas}
                keyExtractor={item => item.Id}
                showsVerticalScrollIndicator = {false}
                renderItem={({ item }) => (
                    <Tarefa tarefaObj={item} handleDelete={() => handleDelete(item.Id)} handleConclusao={() => handleConclusao(item.Id)}  />
                )
                }
                ListEmptyComponent={<SemTarefa/>}
            />
        </View>
        </>
    );
} 