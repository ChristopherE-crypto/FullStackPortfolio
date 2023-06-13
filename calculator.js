function display(data) {
    document.getElementById('screen').value += data;
    return data;
}

function solve() {
    let data = document.getElementById('screen').value;
    let result = eval(data);
    document.getElementById('screen').value = result;
    return result;
}

function clear() {
    document.getElementById('screen').value = '';
}