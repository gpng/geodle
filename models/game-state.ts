import Guess from 'models/guess';
import Location from 'models/location';

export default interface GameState {
  guesses: Guess[];
  answer: Location;
  maxDistance: number;
  updatedDate: string;
}
