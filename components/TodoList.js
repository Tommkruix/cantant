import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import Todo from "./Todo";

import { defaultTodo } from "../constants";
import locales from "../locales";

import defaultStyles from "../assets/styles";

const TodoList = () => {
  const [todoList, setTodoList] = useState(defaultTodo);

  const addTodo = () => {
    const lastTodoListLength = todoList.length;
    const newTodo = {
      id: lastTodoListLength + 1,
    };
    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
  };

  const deleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updatedTodoList);
  };

  const renderButton = (props) => {
    const { color, onPress, title } = props;

    return (
      <Button
        accessibilityLabel={title}
        color={color}
        onPress={() => onPress()}
        title={title}
      />
    );
  };

  const renderTodoList = () => {
    return todoList.map((todo, index) => (
      <View key={index}>
        <Todo />
        <View style={defaultStyles.style.row}>
          {renderButton({
            color: defaultStyles.colors.RED,
            onPress: () => deleteTodo(todo.id),
            title: locales.DELETE,
          })}
        </View>
        <View style={defaultStyles.style.separator}></View>
        <View style={defaultStyles.style.lineBreak}></View>
      </View>
    ));
  };

  return (
    <View>
      {renderButton({
        color: defaultStyles.colors.GREEN,
        onPress: addTodo,
        title: locales.ADD,
      })}
      <View style={defaultStyles.style.lineBreak}></View>
      {todoList && todoList.length > 0 ? (
        renderTodoList()
      ) : (
        <Text>No TodoList</Text>
      )}
    </View>
  );
};

export default TodoList;
