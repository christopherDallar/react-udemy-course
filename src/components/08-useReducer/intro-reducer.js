const initialState = [
	{
		id: 1,
		toDo: 'Buy bread',
		done: false,
	},
];

const toDoReducer = (state = initialState, action) => {
	if (action) {
		if (action.type === 'add') {
			return [...state, action.payload];
		}
	}

	return state;
};

let toDoItems = toDoReducer(); // No usar casi push trabajando en react a menos que usemos useRef

const newToDo = {
	id: 2,
	toDo: 'Buy milk',
	done: false,
};

const addToDoAction = {
	type: 'add',
	payload: newToDo,
};

toDoItems = toDoReducer(toDoItems, addToDoAction);

console.log(toDoItems);
