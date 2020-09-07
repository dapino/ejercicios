export const myFunction = (num) => {
  return num * 2
};

export const obtenerAlgo = (aquiVaElArray, caracteristica) => {
  //Esto es MDN el ejemplo de sintáxis const map1 = array1.map(x => x * 2);
  const arrCaracteristica = aquiVaElArray.map((persona) => {
    return persona[caracteristica];
  })
  return arrCaracteristica;
}

export const obtenerNombres = (aquiVaElArray) => {
  const arrName = aquiVaElArray.map((persona) => {
    return persona.name
  })
  aquiVaElArray.push('objNuevo')
  return arrName;
}

export const obtenerEdad = (aquiVaElArray) => {
  const arrAge = aquiVaElArray.map((persona) => {
    return persona.age
  })
  return arrAge;
}

export const onGetPosts = (callback) => firebase.firestore().collection('post').onSnapshot(callback);