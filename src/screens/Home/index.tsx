import Cabecalho from '../../components/Cabecalho';
import NovoItem from '../../components/NovoItem';
import Painel from '../../components/Painel';
import { styles } from './styles';
import { View, Alert } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';


export type TarefaObj = {
    Concluido: boolean,
    Descricao: string,
    Id: string
}


export default function Home() {

    const [tarefas, setTarefas] = useState<TarefaObj[]>([]);
    const [tarefaDescricao, setTarefaDescricao] = useState('');

    function handleTarefasAdd() {
        if (tarefaDescricao.trim() != "")
        {
            var tarefaExiste = false;
            tarefas.forEach(tarefa => {
                if (tarefa.Descricao == tarefaDescricao)
                    tarefaExiste = true;
            });
            if (!tarefaExiste)
                setTarefas(prevState => [...prevState, {Id: uuid.v4().toString(), Concluido: false, Descricao: tarefaDescricao}]);
            else
                Alert.alert("Tarefa já existe",`A tarefa ${tarefaDescricao} já existe.`);
            console.log(tarefas);
        }
    }

    function handleDelete(id: string) {
        setTarefas(prevState => prevState.filter(p => p.Id != id));
        console.log(id);
    }

    function handleSetTarefasDescricao(text: string) {
        setTarefaDescricao(text);
        console.log(text);
    }

    function handleConclusao(id: string)
    {
        setTarefas(tarefas.map(item => item.Id === id ? {...item, Concluido: !item.Concluido} : item))
    }
                                    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.fundotopo} />
                <Cabecalho />
                <NovoItem onAdd={handleTarefasAdd} onChange={handleSetTarefasDescricao} />
                <Painel tarefas={tarefas} handleDelete={handleDelete} handleConclusao={handleConclusao} />
            </View>
        </>
    );

}