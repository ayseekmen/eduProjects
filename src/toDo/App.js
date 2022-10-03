import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import TodoCard from "./components/toDoCard";
import TodoInput from './components/toDoInput'


let dataTodo = []
const App = () => {

  const [todoList, setTodoList] = useState(dataTodo)
  const [count, setCount] = useState(0)


  const saveTodo = (text) => {
    let todoItem = {
      id: Math.random(),
      title: text.trim(),
      isOk: false
    }
    dataTodo.unshift(todoItem)
    setTodoList(dataTodo)
    setCount(count + 1)
  }

  const checkedTodo = (id) => {
    dataTodo.map(item => {
      if (item.id === id) {
        item.isOk = true; return item
      } else {
        return item
      }
    })
    setCount(dataTodo.filter(item => item.isOk === false).length)
    setTodoList(dataTodo)
  }

  const deleteTodo = (id) => {
    dataTodo = dataTodo.filter(item => item.id !== id)
    setTodoList(dataTodo)
    setCount(dataTodo.filter(item => item.isOk === false).length)
  }


  const renderTodoItem = ({ item }) => <TodoCard item={item} onCheckedTodo={checkedTodo} onDeleteTodo={deleteTodo} />;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerWrapper}>
        <Text style={styles.header_text} >Yapılacaklar</Text>
        <Text style={styles.header_text}>{count}</Text>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodoItem}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
      />

      <TodoInput saveTodo={saveTodo} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
    padding: 10,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10
  },
  header_text: {
    color: '#ffa500',
    fontSize: 35,
    fontWeight: "700",
    marginVertical: 20,
  },
  flatList: {
    flex: 1,
  }
})

export default App