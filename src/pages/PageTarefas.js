import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

function PageTarefas() {
    const [carregando, setCarregando] = useState(false)
    const [tarefas, setTarefas] = useState([])

    async function listarTarefas() {
        setCarregando(true)
        fetch("https://dummyjson.com/todos").then(response => {
            response.json().then(dados => {
                setTimeout(() => {
                    setTarefas(dados.todos)
                    setCarregando(false)
                }, 2000)
            })
        }).catch(err => {
            setCarregando(false)
            alert("Erro ao listar tarefas!")
        })
    }

    useEffect(() => {
        listarTarefas();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tarefas}
                keyExtractor={(tarefa) => tarefa.id}
                renderItem={({ item }) => (
                    <Card key={item.id}>
                        <Card.Content>
                            <Text>{item.todo}</Text>
                        </Card.Content>
                    </Card>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={carregando}
                        onRefresh={listarTarefas}
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    textColorCard: {
        color: 'green'
    }
})

export default PageTarefas;