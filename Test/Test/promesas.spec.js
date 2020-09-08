import { getCharacters } from '../promesas';


describe('Obtener personajes de Rick & Morty', () => {

    it('debería ser una función', () => {
        expect(typeof getCharacters).toBe('function');
    });

    it('Retorna los personajes de Rick & Morty con async', async () => {
        const url = 'https://rickandmortyapi.com/api/character';
        const data = await getCharacters(url)
        expect(data.results).toHaveLength(20)
    })

    it('Retorna los personajes de Rick & Morty', () => {
        const url = 'https://rickandmortyapi.com/api/character';
        return getCharacters(url).then(data => {
            // console.log(data.results);
            expect(data.results).toHaveLength(20)
        })
    })

    test('Falla cuando la url está mal escrita', () => {
        //expect.assertions(1);
        return getCharacters('holi').catch(e => {
            //console.log(e.message); //Network Error
            expect(e.message).toBe('Network Error')
        });
    });

    test('Retorna los personajes de Rick & Morty', () => {
        const url = 'https://rickandmortyapi.com/api/character';
        return expect(getCharacters(url)).resolves.toHaveProperty('results');
    });

    test.only('Falla cuando la url está mal escrita', () => {
        const myerror = new Error('Network Error');
        return expect(getCharacters('holi')).rejects.toEqual(myerror);
    });
})



/* test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
  }); */



