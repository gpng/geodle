import axios from 'axios';
import Location from 'models/location';
import { to } from 'utils';

const getLocation = async (name: string, id: number): Promise<Location> => {
  const [err, res] = await to(
    axios.get(`https://developers.onemap.sg/commonapi/search`, {
      params: {
        searchVal: name,
        returnGeom: 'Y',
        getAddrDetails: 'N',
        pageNum: 1,
      },
    }),
  );
  if (err || !res?.data?.results?.length) {
    return null;
  }
  return {
    id,
    name,
    coordinates: [
      parseFloat(res.data.results[0].LONGITUDE),
      parseFloat(res.data.results[0].LATITUDE),
    ],
  };
};

export const getLocationsFromNames = async (names: string[]): Promise<Location[]> => {
  const locations: Location[] = [];
  for (let i = 0; i < names.length; i++) {
    const location = await getLocation(names[i], i);
    if (location) {
      locations.push(location);
      continue;
    }
    console.log('Location not found:', names[i]);
  }
  return locations;
};
