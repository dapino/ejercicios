// Sincronía (Paso a paso de un listado de cosas que tienen que pasar)

// Asincronía (Muchas cosas funcionando al mismo tiempo)

// Promesa (Una promesa resuelve algo asincrono, debe tener callbacks, 
// cuando hacen más de un callback CANCELEN! ) 


/*------ ¿Cómo hacer un huevito con yema blandita? -------*/

// 1. Tener un huevito ? siguiente :  ir a comprar
// 2. Calentar sartén antiadherente (Con aceitico/mantequilla/pam y una pizca de sal)
// 3. Romper el huevito (?)
// 4. Ponerlo en el sartén sin cáscara y sin estropear la yema.
// 5. Agregarle sal
// 6. Tapar el sartén
// 7. Esperar 3 minutos
// 8. Destapar, revisar y servir

const huevitoConCallbacks = (huevito = true, yemita = false) => {
	if(huevito) { 
		setTimeout(() => {
			console.log('Calentar sartén antiadherente con mantequilla');
			setTimeout(() => {
				console.log('Romper el huevito')	
				setTimeout(() => {
					console.log('Ponerlo en el sartén sin cáscara y sin estropear la yema');
					if (yemita){
							setTimeout(() => {
									console.log('Agregarle sal');
									setTimeout(() => {
											console.log('Tapar Sartén');
											setTimeout(() => {
													console.log('Esperar 3 minutos');
													setTimeout(() => {
															console.log('Destapar, revisar y servir');
													}, 1000);
											}, 3000);
									}, 1000);
							}, 1000);
					} else {
							console.log('Vamos a dárselo al hermano de Pau y llorar por no comer huevito');
							huevitoConCallbacks(true, true);
					} 
				}, 1000);
			}, 1000);
		}, 1000);	
	}
	console.log("Ir a comprar el huevito")	
}

huevitoConCallbacks(huevito, yemita);


// Aquí Creamos promesas,  pero no las vamos a invocar 
// De aquí lo importante es el new Promise que tiene 2 parametros el resolve y el reject

const siHayHuevitos = (huevito = true, tiempo = 1000) => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(huevito) {
				resolve("¡Sí, tenemos huevito!")
			}											
			reject(new Error("Se acabaron los huevitos"))
		}, tiempo)
	})
}

const calentarSarten = (tiempo = 1000) => {
	return new Promise ((resolve)=> {
		setTimeout(() => {
			resolve("Calentar el sartén")
		}, tiempo)
	})
}

const agregarSalecita = (tiempo = 500) => {
	return new Promise ((resolve)=> {
		setTimeout(() => {
			resolve("Quedó tranqui, ni muy salado ni sin sal :)")
		}, tiempo)
	})
}

const esperar = (time = 1000) => {
	return new Promise(resolve => setTimeout(resolve, time))
}
async function romperHuevito(esperar){
	try {
		await esperar();
		return "rompimos el huevito";
	} catch(error) {
		return error;
	}
}

const yemitaHuevito = (yemita= true, tiempo = 1000) => {
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(yemita) {
				resolve("¡Agregarle sal!")
			}											
			reject(new Error("Darselo al hermano de Pau"))
		}, tiempo)
	})
}


const cocinandoHuevito = () =>{
	siHayHuevitos()
	calentarSarten()
	romperHuevito(esperar)
	agregarSalecita()
}

//Aqui sin try and catch BY FRENTE UNIDO DE ALEJANDRAS - FUA
async function romperHuevitosinTryCatch(esperar){
	const funcionwaiteada = await esperar();
	return funcionwaiteada; //Sí en algún momento hay error, la función no va a ejecutarse y va a trabar todo, por eso se usa el catch
}


/* const taparSarten = () = {}

const esperarTresMinutos = () = {} */

// siHayHuevitos(false, 5000)
// 	.then((respuesta) => {
// 		console.log(respuesta)
// 	})
// .then(() => {
// 	
// })
// 	.catch(console.log)
	
// Promise.all([calentarSarten, romperHuevito]).then((respuestas) => {
// 	console.log(respuestas)
// })

// async 


