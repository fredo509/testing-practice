const stringLength = require('./index');

// Tests for the original stringLength function
test('stringLength returns the correct length of a string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('12345')).toBe(5);
});

// Tests for the expanded stringLength function
test('stringLength throws an error if the string is empty', () => {
    expect(() => stringLength('')).toThrow('String must not be empty');
});

test('stringLength throws an error if the string is longer than 10 characters', () => {
    expect(() => stringLength('01234567890')).toThrow('String must not be longer than 10 characters');
});

test('stringLength returns the correct length of a string that is between 1 and 10 characters long', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('1')).toBe(1);
    expect(stringLength('1234567890')).toBe(10);
});