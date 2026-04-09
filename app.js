import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

export default function App() {
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefaAtual.trim() === '') return;
    setListaTarefas([
      ...listaTarefas,
      { id: Date.now().toString(), texto: tarefaAtual }
    ]);
    setTarefaAtual('');
  };

  const removerTarefa = (id) => {
    setListaTarefas(listaTarefas.filter(item => item.id !== id));
  };

  return (
    <View style={estilos.container}>
      <View>
      <Text style={estilos.titulo}>Minha Lista</Text>
      </View>
      <View style={estilos.containerInput}>
        <TextInput
          style={estilos.input}
          placeholder="Digite uma tarefa..."
          placeholderTextColor="#888"
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
        />
        <TouchableOpacity style={estilos.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={estilos.textoBotaoAdicionar}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.tarefa}
            onPress={() => removerTarefa(item.id)}
          >
            <Text style={estilos.textoTarefa}>{item.texto}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },

  containerInput: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#111',
    color: '#3279a8',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3279a8',
    fontSize: 18,
  },
  botaoAdicionar: {
    marginLeft: 10,
    backgroundColor: '#3279a8',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderRadius:8,
  },
  textoBotaoAdicionar: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  tarefa: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3279a8',
    marginBottom: 10,
  },
  textoTarefa: {
    color: '#fff',
    fontSize: 16,
  },
});
