import { Provider } from "react-redux";
import { createStore } from "redux";

import AddInput from "./components/AddInput";
import TodoList from "./components/TodoList";

function reducer(state = { list: [] }, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return { list: [...state.list, action.data] }
		case 'DEL_ITEM':
			let i = action.data;
			let newList = state.list.slice(0, i).concat(state.list.slice(i + 1));
			return { list: newList }
		default:
			return state
	}
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <AddInput></AddInput>
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;
