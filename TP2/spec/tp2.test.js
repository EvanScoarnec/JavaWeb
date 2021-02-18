
describe('arrondissement()', () => {
    it('should return 2', () => {
        arbres = [{"ARRONDISSEMENT": "16" }, {"ARRONDISSEMENT": "16" }, {}, {}];
        expect(arrondissement("16").length).toBe(2);
    })
});


describe('vieux()', () => {
    it('should return 1934', () => {
        arbres = [
            {"ANNEE PLANTATION": "1935"},
            {"ANNEE PLANTATION": "1934"},
        ]
        const res = vieux();
        expect(res).toEqual({"ANNEE PLANTATION":"1934"});
    })
});

describe('vieuxdu16()', () => {
    it('Devrait retourner larbre le plus vieux du 16 eme', () => {
        arbres = [
            {"ANNEE PLANTATION": "1935", "ARRONDISSEMENT": "16"},
            {"ANNEE PLANTATION": "1934", "ARRONDISSEMENT": "16"},
        ]
        const res = vieux();
        expect(res).toEqual({"ANNEE PLANTATION": "1934"});
    })
});


