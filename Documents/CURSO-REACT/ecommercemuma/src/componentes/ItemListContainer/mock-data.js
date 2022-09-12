import arcoirisfoto from '../Fotos/arcoiris.jpg'
import cubonordico from '../Fotos/cubonordico.jpg'
import mordilloazulliso from '../Fotos/mordilloazulliso.jpg'
import babitas from '../Fotos/babitasx2.jpg'
import conejo from '../Fotos/conejorosa.jpg'
import pelota from '../Fotos/pelota-azul-animalitos.jpg'


const data = [
    {
        id: 1,
        name: 'Arcoiris Waldorf',
        categoria: 'arcoiris',
        description: 'Arcoiris de Madera pintado a mano en tonos pastel.',
        price: 2400,
        image: arcoirisfoto,
        stock: 5

    },
    { 
        id: 2,
        name: 'Babitas',
        categoria: 'babitas',
        description: 'De toalla y algodón, estampadas o de tusor. Miden 23*32 cm aproximadamente. Producto lavable.',
        price: 1300,
        image: babitas,
        stock: 4
        

    },
    {
        id: 3,
        name: 'Conejito de Apego',
        categoria: 'conejos',
        description: 'De telas de algodón, rellenos de vellón, cascabeles y con argolla de madera natural. Producto lavable.',
        price: 900,
        image: conejo,
        stock: 10

    },
    {
        id: 4,
        name: 'Cubo Sensorial',
        categoria: 'cubos',
        description: ' Su tamaño es de 12*12 cm aprox. De distintas telas, rellenos de vellón, con cuentas y argollas de madera (consultar por opción sin ellas) y cascabeles en su interior. Producto lavable.',
        price: 2400,
        image: cubonordico,
        stock: 10

    },
    {
        id: 5,
        name: 'Mordillos',
        categoria: 'mordillos',
        description: 'Argolla de madera natural de 6 cm de diámetro con telas de algodón y toalla.',
        price: 400,
        image: mordilloazulliso,
        stock: 8

    },
    {
        id: 6,
        name: 'Pelota Montessori',
        categoria: 'pelotas',
        description: 'Es de 15 cm de diámetro, de tela, rellena de vellón y con cascabeles en su interior. Producto lavable.',
        price: 1000,
        image: pelota,
        stock: 8

    },
];
export default data;