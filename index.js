/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function () {
        return func.call(context, ...args, ...arguments);
    };
}
/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    if (x !== undefined) {
        return function sumNext (nextNumber) {
            if (nextNumber === undefined) {
                return x;
            }

            x += nextNumber;

            return sumNext;
        };
    }

    return 0;
}

module.exports = {
    customBind,
    sum
};
