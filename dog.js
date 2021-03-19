const divPerros = document.querySelector('.perros');
const perroIMG = document.createElement('img');

/* const numeroPerros = parseInt(prompt('Digite la cantidad de perros a mostrar')); */

const dogAPI = async (cantidadPerros = 4) => {
  try {
    /* Accedemos a las imagenes random del perro */
    const dogCantidad = await fetch(
      `https://dog.ceo/api/breeds/image/random/${cantidadPerros}`
    );
    const dataDog = await dogCantidad.json();

    /* Accedemos a la lista completa de los perros */
    const dogName = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const dataName = await dogName.json();

    Object.entries(dataName.message).forEach(listDogArray => {
      if (listDogArray[0] === 'hound') {
        console.log(listDogArray[1][6]);
        console.table(listDogArray[1]);
      }
    });

    /* Despliega perros de forma random con imagenes */
    dataDog.message.forEach(dogName => {
      /* Se pasa a una función que lo imprime en formato IMG */
      console.log(``);
      console.log(dogName);
      htmlImgPerro(dogName);
    });
  } catch (e) {
    console.log(e);
  }
};

const htmlImgPerro = imgPerros => {
  const clonPerros = perroIMG.cloneNode(true);
  clonPerros.src = imgPerros;
  divPerros.appendChild(clonPerros);
};

dogAPI(/* numeroPerros */);
