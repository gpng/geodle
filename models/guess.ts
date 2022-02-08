import Location from 'models/location';

export default interface Guess {
  location: Location;
  bearing: number;
  distance: number;
  score: number;
  isCorrect: boolean;
}
