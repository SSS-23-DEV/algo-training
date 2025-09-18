var mergeTwoLists = function(list1, list2) {
    let concat = [...list1, ...list2].sort();
    return concat;
};

console.log(mergeTwoLists([1,2,3], [1,3,4]));
