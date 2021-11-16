const { dataProcessing } = require('./for_test.js');
describe("Test for testing the dataProcessing in the filter", () => {
    test('without a country', () => {
        const result = dataProcessing("0", "2000", "0", "1000", "");
    
        expect(result).toBe(0)
    })

    test('with everythin', () => {
        const result = dataProcessing("0", "2000", "0", "1000", "Colombia");
    
        expect(result).toStrictEqual(["0", "2000", "0", "1000", "Colombia", "America"]);
    })

    test('without initialYear', () => {
        const result = dataProcessing("", "2000", "0", "1000", "Colombia");
    
        expect(result).toStrictEqual([0, "2000", "0", "1000", "Colombia", "America"]);
    })

    test('without finalYear', () => {
        const result = dataProcessing("1000", "", "0", "1000", "Colombia");
    
        expect(result).toStrictEqual(["1000", new Date().getFullYear(), "0", "1000", "Colombia", "America"]);
    })

    test('without initial Denomination', () => {
        const result = dataProcessing("1000", "2000", "", "1000", "Colombia");
    
        expect(result).toStrictEqual(["1000", "2000", 0, "1000", "Colombia", "America"]);
    })

    test('without Final Denomination', () => {
        const result = dataProcessing("1000", "2000", "500", "", "Colombia");
    
        expect(result).toStrictEqual(["1000", "2000", "500", Infinity, "Colombia", "America"]);
    })

    test('without year', () => {
        const result = dataProcessing("", "", "500", "1000", "Colombia");
    
        expect(result).toStrictEqual([0, new Date().getFullYear(), "500", "1000", "Colombia", "America"]);
    })

    test('without year and initial Denomination', () => {
        const result = dataProcessing("", "", "", "1000", "Colombia");
    
        expect(result).toStrictEqual([0, new Date().getFullYear(), 0, "1000", "Colombia", "America"]);
    })

    test('without year and without denomination', () => {
        const result = dataProcessing("", "", "", "", "Colombia");
    
        expect(result).toStrictEqual([0, new Date().getFullYear(), 0, Infinity, "Colombia", "America"]);
    })

    test('without year and without final denomination', () => {
        const result = dataProcessing("", "", "500", "", "Colombia");
    
        expect(result).toStrictEqual([0, new Date().getFullYear(), "500", Infinity, "Colombia", "America"]);
    })


    test('without final year and without initial denomination', () => {
        const result = dataProcessing("1000", "", "", "1000", "Colombia");
    
        expect(result).toStrictEqual(["1000", new Date().getFullYear(), 0, "1000", "Colombia", "America"]);
    })
    test('without final year and without final  denomination', () => {
        const result = dataProcessing("1000", "", "200", "", "Colombia");
    
        expect(result).toStrictEqual(["1000", new Date().getFullYear(), "200", Infinity, "Colombia", "America"]);
    })

    test('without final year and without denomination', () => {
        const result = dataProcessing("1000", "", "", "", "Colombia");
    
        expect(result).toStrictEqual(["1000", new Date().getFullYear(), 0, Infinity, "Colombia", "America"]);
    })

    test('without denomination', () => {
        const result = dataProcessing("1000", "2000", "", "", "Colombia");
    
        expect(result).toStrictEqual(["1000", "2000", 0, Infinity, "Colombia", "America"]);
    })

    
})