export function stringLength(string) {
    const length = string.length;
    output.value = length;
}

export function test(string) {
    if (string.length < 1 || string.length > 10) {
        alert('Oupps !!! you can only have 10 characters')
        return false;

    } else {
        return true;
    };
}