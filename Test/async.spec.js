import { onGetPosts } from "../src/lib/index";
import mockFirebase from "./__mocks__/firestore"

global.firebase = mockFirebase();
console.log(firebase);
describe('test de onGetPosts', () => {
    it('debería ser una función', () => {
        expect(typeof onGetPosts).toBe('function');
    });

    it('debería retornar el console de datos y luego traer los post ',(done) => {
        // arrow function that consoles log
        const myCallback = (data) => {
            console.log(data);
            expect(data).toHaveLength(3);
            done();
            
        }
        onGetPosts(myCallback);
    });

});