const romanIntConversion = require('./romanIntConversion');

test('Test Case 1: Roman numeral "III" (should return 3)', () => {
    expect(romanIntConversion('III')).toBe(3);
});

test('Test Case 2: Roman numeral "LVIII" (should return 58)', () => {
    expect(romanIntConversion('LVIII')).toBe(58);
});

test('Test Case 3: Roman numeral "MCMXCIV" (should return 1994)', () => {
    expect(romanIntConversion('MCMXCIV')).toBe(1994);
});

test('Test Case 4: Roman numeral "ZIV" (should return "Contains invalid character.")', () => {
    expect(romanIntConversion('ZIV')).toBe('Contains invalid character.');
});