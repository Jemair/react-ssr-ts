import { ADD, DEL, LIST } from './constant';
export default function update(state, action) {
    var newState = Object.assign({}, state);
    if (action.type === ADD) {
        var list = Array.isArray(action.item) ? action.item : [action.item];
        newState.list = newState.list.concat(list);
        console.log('-----', newState.list);
    }
    else if (action.type === DEL) {
        newState.list = newState.list.filter(function (item) {
            return item.id !== action.id;
        });
    }
    else if (action.type === LIST) {
        newState.list = action.list;
    }
    return newState;
}
