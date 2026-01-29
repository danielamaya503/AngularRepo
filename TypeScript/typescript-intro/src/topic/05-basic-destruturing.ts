
interface AudioPlayer{
    audioVolume : number;
    songDuration : number;
    song : string;
    details : Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Daniel",
        year: 2026
    }
}
const song = "New Song"

//Destructuracion
const {
    song : anotherSound,
    details
    } = audioPlayer;

const {author} = details;

//LLAMAR A LA DESTRUCTURACION
console.log(`Song: ${song} y ${anotherSound} \n Authot: ${author}`);


//otra forma de destructuracion

const [, , trunk = `Not Found`] : string[] = [
    `Goku`, `Vegeta`
];

//const trunks = dragonball[1] || `No existe`;
//console.error(`Error: ${dragonball[1]}` || `No hay personajes`);

console.error(`Error: ${trunk}` || `No hay personajes`);








export {};