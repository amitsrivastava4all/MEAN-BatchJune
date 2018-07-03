app.factory("calcfactory", () => {
    console.log("Factory is Loaded...");
    const object = {
        add(firstNumber, secondNumber) {

            return parseInt(firstNumber) + parseInt(secondNumber);
        }
    };
    console.log("Factory is Going End and return an object ", object);
    return object;
});