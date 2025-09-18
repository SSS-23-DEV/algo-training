const tasks = ['Task 1'];

function add(task){
    tasks.push(task);
};

function remove(task){
    let index = tasks.indexOf(task);
    if(index === -1) return;
    return tasks.splice(index, 1);
};

function prioritize(task){
    let result = remove(task);
    if(!result) return;
    else tasks.unshift(result[0]);
};


add('Task 2');
add('Task 3');
console.log(tasks);
remove('Task 2');
console.log(tasks);
prioritize('Task 3');
console.log(tasks);