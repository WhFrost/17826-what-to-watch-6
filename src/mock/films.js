import {nanoid} from "nanoid";
import {getRandomInteger, getRandomItem} from "../common";
import {COUNT_FILMS, MAX_STARS} from "../const";

const names = [
  `The Grand Budapest Hotel`,
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Johnny English`,
  `Revenant`,
  `What We Do in the Shadows`,
  `We need to talk about Kevi`,
  `Aviator`
];
const colors = [`white`, `lightblue`, `lightgrey`, `lightyellow`, `light`, `peachpuff`, `lightseagreen`];
const videos = [
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
];
const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const getDescription = () => {
  return getRandomItem(DESCRIPTION);
};
const DIRECTORS = [
  `Steven Spielberg`,
  `Martin Scorsese`,
  `Alfred Hitchcock`,
  `Stanley Kubrick`,
  `Francis Ford Coppola`,
  `Woody Allen`,
  `Billy Wilder`,
  `John Huston`,
  `Peter Jackson`
];
const STARS = [
  `Johnny Depp`,
  `Al Pacino`,
  `Robert De Niro`,
  `Kevin Spacey`,
  `Denzel Washington`,
  `Russell Crowe`,
  `Brad Pitt`,
  `Angelina Jolie`,
  `Leonardo DiCaprio`,
  `Tom Cruise`,
  `John Travolta`,
  `Arnold Schwarzenegger`,
  `Sylvester Stallone`,
  `Kate Winslet`,
  `Christian Bale`,
];
const getStars = () => {
  return getRandomItem(STARS);
};
const GENRES = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

const getFilm = () => {
  const randomDescription = new Array(getRandomInteger(1, DESCRIPTION.length)).fill().map(getDescription);
  const randomStars = new Array(getRandomInteger(1, MAX_STARS)).fill().map(getStars);
  const duration = getRandomInteger(60, 180);
  const getFormatDuration = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time % 60);
    const seconds = Math.floor(minutes / 60);
    if (hours < 1) {
      return minutes + `:` + seconds;
    }
    return hours + `:` + minutes + `:` + seconds;
  };

  return {
    id: nanoid(),
    name: getRandomItem(names),
    posterImage: `http://picsum.photos/280/175?r=${Math.random()}`,
    previewImage: `http://picsum.photos/280/175?r=${Math.random()}`,
    backgroundImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    backgroundColor: getRandomItem(colors),
    videoLink: getRandomItem(videos),
    previewVideoLink: getRandomItem(videos),
    description: randomDescription,
    rating: getRandomInteger(0, 100) / 10,
    scoresCount: getRandomInteger(0, 500),
    director: getRandomItem(DIRECTORS),
    starring: randomStars,
    runtime: getFormatDuration(duration),
    genre: getRandomItem(GENRES),
    released: getRandomInteger(1990, 2021),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};

const films = new Array(COUNT_FILMS).fill().map(getFilm);

export {
  DESCRIPTION,
  DIRECTORS,
  films
};
