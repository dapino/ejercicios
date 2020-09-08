const firestore = () => ({
    collection: (nameCollection) => ({
        onSnapshot: (callback) => {
            console.log('enter onsnapshot');
            const posts = [{ title: 'one' }, { title: 'two' }, { title: 'three' }];
            setTimeout(() => {
                callback(posts)
            }, 3000);

        },
    }),
});

const firebase = {
    firestore,
};

export default jest.fn(() => firebase);

/* const firestore = () => {
    return {
        collection: (nameCollection) => {
            return {
                doc: (newDocument) => {
                    return {
                        set: (objData) => {
                            return new Promise((resolve) => {
                                resolve('El post fue agregado')
                            })
                        }
                    }
                }
            }

        }
    }
}


const firebase = {
    firestore: firestore
}

export default jest.fn(() => {
    return firebase;
}) */