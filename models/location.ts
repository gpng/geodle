export default interface Location {
  id: number;
  name: string;
  coordinates: [number, number];
  gmapsUrl?: string;
}
