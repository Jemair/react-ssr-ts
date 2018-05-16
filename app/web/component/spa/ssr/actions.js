import { ADD, DEL } from './constant';
export var add = function (item) {
    console.log('item', item);
    return {
        type: ADD,
        item: item,
    };
};
export var del = function (id) {
    return {
        type: DEL,
        id: id,
    };
};
