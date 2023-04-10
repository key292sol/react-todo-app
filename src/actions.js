export function addItem(item) {
	return {
		type: 'ADD_ITEM',
		data: item
	}
}

export function delItem(item) {
	return {
		type: 'DEL_ITEM',
		data: item
	}
}