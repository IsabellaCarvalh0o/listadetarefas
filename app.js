import React, {useState} from 'react';
import {Image,Text,Ionicons,TextInput,TouchableOpacity,FlatList,StyleSheet,View} from 'react-native';

export default function App(){
    const [tarefaAtual,setTarefaAtual] = useState("");
    const [listaTarefas,setListaTarefas] = useState([]);

    const adicionarTarefa = () =>{
        if (tarefaAtual.trim() === "") return;
        setListaTarefas([
            ...listaTarefas,
            {id:Date.now().toString(), texto: tarefaAtual}])
            setTarefaAtual('');
        };

    const removerTarefa = (id) => {
        setListaTarefas(listaTarefas.filter(item => item.id !== id))
    };
    
    return (
        
        <View style={estilos.container}>
            <Text style = {estilos.titulo}> Minha Lista</Text>
        
            <View>
                <TextInput
                    placeholder="Digite uma tarefa aqui"
                    placeholderTextcolor="#888"
                    value = {tarefaAtual}
                    onChangeText = {setTarefaAtual}>
                </TextInput>
                <TouchableOpacity style = {estilos.botaoAdicionar} onPress={adicionarTarefa}>
                    <Text style = {estilos.textoBotaoAdicionar}> + </Text>
                </TouchableOpacity>

            </View>
            <FlatList>
                data = {listaTarefas}
                keyExtractor = {(item) => item.id}
                renderItem{({item}) => (
                    <TouchableOpacity style = {estilo.tarefa } onPress={() => removerTarefa (item.id)}>
                    <Text style = {estilos.textoTarefa}>{item.texto}</Text>
                    </TouchableOpacity>

                )}
            </FlatList>
        </View>

    );
};
