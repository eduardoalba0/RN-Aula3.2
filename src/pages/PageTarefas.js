import { useState, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native"
import { Card, Text } from "react-native-paper";

function PageTarefas() {
    const [tarefas, setTarefas] = useState([])

    async function listarTarefas() {
        fetch("https://dummyjson.com/todos").then(response => {
            response.json().then(dados => {
                setTarefas(dados.todos)
            })
        }).catch(err => {
            alert("Erro ao listar tarefas!")
        })
    }

    useEffect(() => {
        listarTarefas();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {tarefas.map(tarefa => (
                <Card>
                    <Card.Content>
                        <Text>{tarefa.todo}</Text>
                    </Card.Content>
                </Card>
            ))}
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