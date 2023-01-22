import { SafeAreaView, ScrollView, Text, View } from "react-native";

import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

import locales from "./locales";

import defaultStyles from "./assets/styles";

export default function App() {
  return (
    <View style={defaultStyles.style.container}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={defaultStyles.style.largeHeaderText}>
            {locales.TODO_COMPONENT}
          </Text>
          <View style={defaultStyles.style.separator}></View>
          <View style={defaultStyles.style.separator}></View>
          <View style={defaultStyles.style.lineBreak}></View>
          <Todo />
          <View style={defaultStyles.style.lineBreak}></View>
          <View style={defaultStyles.style.separator}></View>
          <View style={defaultStyles.style.lineBreak}></View>
          <View style={defaultStyles.style.lineBreak}></View>
          <Text style={defaultStyles.style.largeHeaderText}>
            {locales.TODO_LIST_COMPONENT}
          </Text>
          <View style={defaultStyles.style.separator}></View>
          <View style={defaultStyles.style.separator}></View>
          <View style={defaultStyles.style.lineBreak}></View>
          <TodoList />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
