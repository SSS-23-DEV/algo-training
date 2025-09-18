/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init;

    return {
        increment(){
            return ++current;
        },
        decrement(){
            return --current;
        },
        reset(){
            return current = init;
        },
    }
};