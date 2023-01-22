import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import locales from "../locales";

import defaultStyles from "../assets/styles";

function Todo() {
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [todoSecondInput, setTodoSecondInput] = useState(todo);

  const onChangeText = (text) => {
    setTodo(text);
    setTodoSecondInput(todo);
  };

  const onChangeTextSecondInput = (text) => setTodoSecondInput(text);

  const onPressFirstButton = () => setIsEditing(!isEditing);

  const onPressSecondButton = () => setTodo(todoSecondInput);

  const renderTextInput = (props) => {
    const { placeholder, value, onChangeText } = props;

    return (
      <TextInput
        style={defaultStyles.style.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    );
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

  return (
    <View>
      <View style={defaultStyles.style.row}>
        {renderTextInput({
          value: todo,
          onChangeText: onChangeText,
          placeholder: locales.FIRST_TEXT_INPUT,
        })}
        {renderButton({
          color: defaultStyles.colors.PRIMARY,
          onPress: onPressFirstButton,
          title: locales.FIRST_BUTTON,
        })}
      </View>
      <View style={defaultStyles.style.lineBreak}></View>
      <Text style={defaultStyles.style.mediumHeaderText}>{todo}</Text>

      <View style={defaultStyles.style.row}>
        {isEditing &&
          renderTextInput({
            value: todoSecondInput,
            onChangeText: onChangeTextSecondInput,
            placeholder: locales.SECOND_TEXT_INPUT,
          })}
        {renderButton({
          color: defaultStyles.colors.SECONDARY,
          onPress: onPressSecondButton,
          title: locales.SECOND_BUTTON,
        })}
      </View>
    </View>
  );
}

export default Todo;
