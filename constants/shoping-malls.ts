import Location from 'models/location';

const SHOPPING_MALLS: Location[] = [
  {
    id: 0,
    name: '100 AM',
    coordinates: [103.84347073661, 1.27458821795426],
  },
  {
    id: 1,
    name: '600 @ Toa Payoh',
    coordinates: [103.850955458676, 1.33404171129955],
  },
  {
    id: 2,
    name: 'Anchorpoint',
    coordinates: [103.805607779399, 1.28893477974497],
  },
  {
    id: 3,
    name: 'Beauty World Centre',
    coordinates: [103.776539385678, 1.34241264188643],
  },
  {
    id: 4,
    name: 'Beauty World Plaza',
    coordinates: [103.776304121109, 1.34178799847019],
  },
  {
    id: 5,
    name: 'Bedok Point',
    coordinates: [103.947778439395, 1.33054849915481],
  },
  {
    id: 6,
    name: 'Causeway Point',
    coordinates: [103.786009973678, 1.43608867729912],
  },
  {
    id: 7,
    name: 'Century Square',
    coordinates: [103.943784812431, 1.35236113143548],
  },
  {
    id: 8,
    name: 'Change Alley',
    coordinates: [103.852544637414, 1.28412271103554],
  },
  {
    id: 9,
    name: 'City Square Mall',
    coordinates: [103.856780762986, 1.31147744952234],
  },
  {
    id: 11,
    name: 'CityLink Mall',
    coordinates: [103.854662968868, 1.29237860670957],
  },
  {
    id: 12,
    name: 'EastPoint Mall',
    coordinates: [103.953072338954, 1.3425864408894],
  },
  {
    id: 13,
    name: 'ERA APAC Centre',
    coordinates: [103.84944931493, 1.33168255024332],
  },
  {
    id: 14,
    name: 'FairPrice Hub',
    coordinates: [103.678392265337, 1.32539180665075],
  },
  {
    id: 15,
    name: 'Forum The Shopping Mall',
    coordinates: [103.82867554961, 1.30612522560717],
  },
  {
    id: 16,
    name: 'Fu Lu Shou Complex',
    coordinates: [103.854495182879, 1.3014529932479],
  },
  {
    id: 17,
    name: 'Holland Road Shopping Centre',
    coordinates: [103.795350439947, 1.31025541884853],
  },
  {
    id: 18,
    name: 'Holland Piazza',
    coordinates: [103.795246166084, 1.31064349551562],
  },
  {
    id: 19,
    name: 'Hougang 1',
    coordinates: [103.87945025083, 1.37566728348409],
  },
  {
    id: 20,
    name: 'Hougang Mall',
    coordinates: [103.893723857613, 1.37243678271743],
  },
  {
    id: 21,
    name: 'IMM',
    coordinates: [103.746734487309, 1.33489844010888],
  },
  {
    id: 22,
    name: 'Jem',
    coordinates: [103.743170428258, 1.33320021829132],
  },
  {
    id: 23,
    name: 'KINEX',
    coordinates: [103.894480526031, 1.31469213499495],
  },
  {
    id: 24,
    name: 'Leisure Park Kallang',
    coordinates: [103.876449175952, 1.30233745290722],
  },
  {
    id: 25,
    name: 'Lot One',
    coordinates: [103.745036167492, 1.38511154927984],
  },
  {
    id: 26,
    name: 'Marina Bay Link Mall',
    coordinates: [103.85347014858, 1.28046794331672],
  },
  {
    id: 27,
    name: 'Mustafa Centre',
    coordinates: [103.855299784017, 1.31008085318248],
  },
  {
    id: 29,
    name: 'nex',
    coordinates: [103.871861615443, 1.3506755212032],
  },
  {
    id: 30,
    name: 'Orchard Central',
    coordinates: [103.839692368177, 1.30072350356704],
  },
  {
    id: 31,
    name: 'Plaza Singapura',
    coordinates: [103.845067272666, 1.30082071769235],
  },
  {
    id: 32,
    name: 'Queensway Shopping Centre',
    coordinates: [103.803391140455, 1.2876179255874],
  },
  {
    id: 33,
    name: 'Rivervale Mall',
    coordinates: [103.904473070943, 1.39221732667769],
  },
  {
    id: 34,
    name: 'Rochester Mall',
    coordinates: [103.788446680148, 1.30540765569962],
  },
  {
    id: 35,
    name: 'Seletar Mall',
    coordinates: [103.87617162828, 1.39150192642807],
  },
  {
    id: 36,
    name: 'Sembawang Shopping Centre',
    coordinates: [103.824832416105, 1.4418532534675],
  },
  {
    id: 37,
    name: 'Sim Lim Square',
    coordinates: [103.852875622062, 1.30302298515261],
  },
  {
    id: 38,
    name: 'Sim Lim Tower',
    coordinates: [103.854639960929, 1.30381133018207],
  },
  {
    id: 39,
    name: 'Stamford House',
    coordinates: [103.850821336975, 1.29409146652972],
  },
  {
    id: 40,
    name: 'The CentrePoint',
    coordinates: [103.839813213648, 1.3019303071384],
  },
  {
    id: 41,
    name: 'The Majestic',
    coordinates: [103.843203365359, 1.28473141234245],
  },
  {
    id: 42,
    name: 'The Star Vista',
    coordinates: [103.788420274115, 1.30697044038323],
  },
  {
    id: 43,
    name: 'Tampines 1',
    coordinates: [103.942894547542, 1.35264348783407],
  },
  {
    id: 44,
    name: 'Tampines Mall',
    coordinates: [103.944696230083, 1.35258025197038],
  },
  {
    id: 45,
    name: 'Tekka Centre',
    coordinates: [103.850609985486, 1.30617773048079],
  },
  {
    id: 46,
    name: 'Thomson Plaza',
    coordinates: [103.830944960934, 1.35465019298911],
  },
  {
    id: 47,
    name: 'Upper Serangoon Shopping Centre',
    coordinates: [103.878828409594, 1.35348088326122],
  },
  {
    id: 48,
    name: 'VivoCity',
    coordinates: [103.821808620881, 1.26439468067256],
  },
  {
    id: 49,
    name: 'West Mall',
    coordinates: [103.749021976618, 1.35018916560505],
  },
  {
    id: 50,
    name: 'White Sands',
    coordinates: [103.949749226457, 1.37239898072243],
  },
  {
    id: 51,
    name: 'Wisma Geylang Serai',
    coordinates: [103.896747965908, 1.31646238412032],
  },
  {
    id: 52,
    name: 'Yew Tee Point',
    coordinates: [103.746662121143, 1.39705741516141],
  },
  {
    id: 53,
    name: '313@Somerset',
    coordinates: [103.837684350436, 1.30138510214714],
  },
  {
    id: 54,
    name: 'AMK Hub',
    coordinates: [103.848467911464, 1.36922321403001],
  },
  {
    id: 55,
    name: 'Alexandra Retail Centre',
    coordinates: [103.801399416665, 1.27414893629254],
  },
  {
    id: 56,
    name: 'Bedok Mall',
    coordinates: [103.92940545649, 1.32466897396909],
  },
  {
    id: 57,
    name: 'Bugis Junction',
    coordinates: [103.855482356252, 1.29901677414964],
  },
  {
    id: 58,
    name: 'Bugis+',
    coordinates: [103.854304640923, 1.29963881014497],
  },
  {
    id: 59,
    name: 'Bukit Panjang Plaza',
    coordinates: [103.764317068535, 1.37991650665222],
  },
  {
    id: 60,
    name: 'Capitol Singapore',
    coordinates: [103.851299277575, 1.29390281870928],
  },
  {
    id: 61,
    name: 'Changi City Point',
    coordinates: [103.962917615531, 1.33403637902708],
  },
  {
    id: 62,
    name: 'Chinatown Point',
    coordinates: [103.844942912343, 1.28526073702918],
  },
  {
    id: 64,
    name: 'Claymore Connect',
    coordinates: [103.828164396352, 1.30766860940267],
  },
  {
    id: 65,
    name: 'Clementi Mall',
    coordinates: [103.764570204717, 1.3154967542751],
  },
  {
    id: 66,
    name: 'Compass One',
    coordinates: [103.894980025383, 1.39209415594052],
  },
  {
    id: 67,
    name: 'Djitsun Mall Bedok',
    coordinates: [103.929604640137, 1.32605319910571],
  },
  {
    id: 68,
    name: 'Djitsun Mall',
    coordinates: [103.929604640137, 1.32605319910571],
  },
  {
    id: 69,
    name: 'Esplanade Mall',
    coordinates: [103.855665761541, 1.28950956232931],
  },
  {
    id: 70,
    name: 'Far East Plaza',
    coordinates: [103.833939963454, 1.30731112598868],
  },
  {
    id: 71,
    name: 'Funan',
    coordinates: [103.849984790048, 1.29124400604241],
  },
  {
    id: 72,
    name: 'Golden Mile Complex',
    coordinates: [103.865284424819, 1.30285776289789],
  },
  {
    id: 73,
    name: 'Great World',
    coordinates: [103.831928020443, 1.2931549290701],
  },
  {
    id: 74,
    name: 'HarbourFront Centre',
    coordinates: [103.820219045593, 1.26379682885331],
  },
  {
    id: 75,
    name: 'Hillion Mall',
    coordinates: [103.763022901683, 1.37849868060834],
  },
  {
    id: 76,
    name: 'ION Orchard',
    coordinates: [103.831888294023, 1.30404253406976],
  },
  {
    id: 77,
    name: 'International Plaza',
    coordinates: [103.845897843593, 1.27601222585222],
  },
  {
    id: 78,
    name: 'JCube',
    coordinates: [103.740191321438, 1.33323785085838],
  },
  {
    id: 79,
    name: 'Jewel Changi Airport',
    coordinates: [103.989670344538, 1.36033174518933],
  },
  {
    id: 80,
    name: 'Junction 8',
    coordinates: [103.848949711733, 1.35068626255041],
  },
  {
    id: 81,
    name: 'Junction 10',
    coordinates: [103.760041583169, 1.38060512473524],
  },
  {
    id: 82,
    name: 'Junction Nine',
    coordinates: [103.841600823354, 1.43303198215119],
  },
  {
    id: 83,
    name: 'Jurong Point',
    coordinates: [103.706685012926, 1.3394520043632],
  },
  {
    id: 84,
    name: 'Kallang Wave Mall',
    coordinates: [103.872750701661, 1.30384327182319],
  },
  {
    id: 85,
    name: 'Katong Shopping Centre',
    coordinates: [103.901040040135, 1.30382040183737],
  },
  {
    id: 86,
    name: 'Lucky Plaza',
    coordinates: [103.834005158524, 1.3044637897474],
  },
  {
    id: 87,
    name: 'Mandarin Gallery',
    coordinates: [103.836583965806, 1.30200471731963],
  },
  {
    id: 88,
    name: 'The Shoppes at Marina Bay Sands',
    coordinates: [103.858811937302, 1.28367214668306],
  },
  {
    id: 89,
    name: 'Marina Square',
    coordinates: [103.857623532359, 1.29103980256765],
  },
  {
    id: 90,
    name: 'Millenia Walk',
    coordinates: [103.859900233499, 1.29204605302049],
  },
  {
    id: 91,
    name: 'Ngee Ann City',
    coordinates: [103.834676124451, 1.30242417216784],
  },
  {
    id: 92,
    name: 'Northpoint City',
    coordinates: [103.836092100712, 1.42803585211784],
  },
  {
    id: 93,
    name: 'Novena Square',
    coordinates: [103.843976528625, 1.31983049912881],
  },
  {
    id: 94,
    name: 'One Raffles Place',
    coordinates: [103.850982346718, 1.28433994320248],
  },
  {
    id: 95,
    name: 'Orchard Gateway',
    coordinates: [103.839442780042, 1.30044325279546],
  },
  {
    id: 96,
    name: 'Orchard Towers',
    coordinates: [103.829217749325, 1.30684615299345],
  },
  {
    id: 97,
    name: 'PLQ Mall',
    coordinates: [103.892832205276, 1.31748231058356],
  },
  {
    id: 98,
    name: 'Palais Renaissance',
    coordinates: [103.829588045188, 1.30665484543191],
  },
  {
    id: 99,
    name: 'Parkway Parade',
    coordinates: [103.90528181445, 1.30108003311455],
  },
  {
    id: 100,
    name: 'Paya Lebar Square',
    coordinates: [103.892550598424, 1.31867575623015],
  },
  {
    id: 101,
    name: 'Peninsula Plaza',
    coordinates: [103.850804507292, 1.29232248414934],
  },
  {
    id: 102,
    name: "People's Park Centre",
    coordinates: [103.843868384078, 1.28579209527994],
  },
  {
    id: 103,
    name: "People's Park Complex",
    coordinates: [103.842584810783, 1.28412862636416],
  },
  {
    id: 104,
    name: 'Raffles City',
    coordinates: [103.853119904656, 1.29389357863312],
  },
  {
    id: 106,
    name: 'SingPost Centre',
    coordinates: [103.894767139006, 1.3188718443127],
  },
  {
    id: 107,
    name: 'South Beach',
    coordinates: [103.855976594659, 1.29517649071159],
  },
  {
    id: 108,
    name: 'Square 2',
    coordinates: [103.844331494859, 1.32061258625866],
  },
  {
    id: 109,
    name: 'Sun Plaza',
    coordinates: [103.819462102812, 1.44822653818275],
  },
  {
    id: 110,
    name: 'Suntec City Mall',
    coordinates: [103.858745530061, 1.29596992749652],
  },
  {
    id: 111,
    name: 'Tang Plaza',
    coordinates: [103.833236683852, 1.30483283007132],
  },
  {
    id: 112,
    name: 'Tekka Place',
    coordinates: [103.852122945247, 1.30465788351304],
  },
  {
    id: 113,
    name: 'The Concourse',
    coordinates: [103.862484057069, 1.30101092385674],
  },
  {
    id: 114,
    name: 'The Paragon',
    coordinates: [103.835844227627, 1.30394936355298],
  },
  {
    id: 115,
    name: 'Tiong Bahru Plaza',
    coordinates: [103.827158267789, 1.28647119992725],
  },
  {
    id: 116,
    name: 'United Square',
    coordinates: [103.843628771215, 1.31751171429199],
  },
  {
    id: 117,
    name: 'Valley Point',
    coordinates: [103.827124966831, 1.2930360423149],
  },
  {
    id: 118,
    name: 'Waterway Point',
    coordinates: [103.902238067127, 1.40642616289949],
  },
  {
    id: 119,
    name: 'West Coast Plaza',
    coordinates: [103.766092882107, 1.30374258287197],
  },
  {
    id: 120,
    name: 'Westgate',
    coordinates: [103.742870105512, 1.33428313049536],
  },
  {
    id: 121,
    name: 'Wheelock Place',
    coordinates: [103.830714231109, 1.3045363597328],
  },
  {
    id: 122,
    name: 'Wisma Atria',
    coordinates: [103.833189592785, 1.30369890679412],
  },
  {
    id: 123,
    name: 'Wisteria Mall',
    coordinates: [103.841236456898, 1.41799926284039],
  },
  {
    id: 124,
    name: 'i12 Katong',
    coordinates: [103.905043928938, 1.30522306203042],
  },
  {
    id: 125,
    name: '888 Plaza',
    coordinates: [103.795289911954, 1.43713052444868],
  },
  {
    id: 126,
    name: 'Admiralty Place',
    coordinates: [103.801706470491, 1.43938615380542],
  },
  {
    id: 127,
    name: 'Buangkok Square',
    coordinates: [103.881623070164, 1.38433426615655],
  },
  {
    id: 128,
    name: 'Canberra Plaza',
    coordinates: [103.83052345616, 1.44324523168314],
  },
  {
    id: 129,
    name: 'Dawson Place',
    coordinates: [103.810971835374, 1.29270252655148],
  },
  {
    id: 130,
    name: 'Depot Heights Shopping Centre',
    coordinates: [103.810298189643, 1.28096680729757],
  },
  {
    id: 131,
    name: 'Elias Mall',
    coordinates: [103.942281483161, 1.3779094539485],
  },
  {
    id: 132,
    name: 'Fajar Shopping Centre',
    coordinates: [103.770774778244, 1.38358020252976],
  },
  {
    id: 133,
    name: 'Gek Poh Shopping Centre',
    coordinates: [103.69773963001, 1.34874164662883],
  },
  {
    id: 134,
    name: 'Greenridge Shopping Centre',
    coordinates: [103.766235457752, 1.38541768689995],
  },
  {
    id: 135,
    name: 'Heartland Mall',
    coordinates: [103.885169070198, 1.35954450890401],
  },
  {
    id: 136,
    name: 'HDB Hub',
    coordinates: [103.849796100473, 1.3319945640368],
  },
  {
    id: 137,
    name: 'Limbang Shopping Centre',
    coordinates: [103.743611063324, 1.39222033136152],
  },
  {
    id: 138,
    name: 'Loyang Point',
    coordinates: [103.96461777629, 1.36700054076336],
  },
  {
    id: 139,
    name: 'Northshore Plaza',
    coordinates: [103.90213684712, 1.416849810947],
  },
  {
    id: 140,
    name: 'Oasis Terraces',
    coordinates: [103.913270565628, 1.40263460056252],
  },
  {
    id: 141,
    name: 'Our Tampines Hub',
    coordinates: [103.940848647333, 1.35310120216271],
  },
  {
    id: 142,
    name: 'Pasir Ris West Plaza',
    coordinates: [103.936207567321, 1.37976754317116],
  },
  {
    id: 143,
    name: 'Pioneer Mall',
    coordinates: [103.697020081587, 1.34159108725751],
  },
  {
    id: 144,
    name: 'Punggol Plaza',
    coordinates: [103.912976437583, 1.39418409438271],
  },
  {
    id: 145,
    name: 'Rivervale Plaza',
    coordinates: [103.901849634797, 1.385371516087],
  },
  {
    id: 146,
    name: 'Sunshine Place',
    coordinates: [103.739015486293, 1.37789727654674],
  },
  {
    id: 147,
    name: 'Taman Jurong Shopping Centre',
    coordinates: [103.720462024278, 1.33484487471259],
  },
  {
    id: 148,
    name: 'Tampines Mart',
    coordinates: [103.960042188281, 1.35436493799094],
  },
  {
    id: 149,
    name: 'Vista Point',
    coordinates: [103.793852610387, 1.43075765633744],
  },
  {
    id: 150,
    name: 'Woodlands Mart',
    coordinates: [103.798162285533, 1.44564787003157],
  },
  {
    id: 151,
    name: 'Woodlands North Plaza',
    coordinates: [103.790825824274, 1.4428457006918],
  },
  {
    id: 152,
    name: 'Yew Tee Square',
    coordinates: [103.747224809089, 1.39834776480802],
  },
  {
    id: 153,
    name: '321 Clementi',
    coordinates: [103.764960537008, 1.31202491824439],
  },
  {
    id: 154,
    name: 'Cathay Cineleisure Orchard',
    coordinates: [103.836444792111, 1.30149743442985],
  },
  {
    id: 155,
    name: 'GV Yishun',
    coordinates: [103.836473396124, 1.42991554202388],
  },
  {
    id: 156,
    name: 'The Cathay',
    coordinates: [103.847832003713, 1.29920226381603],
  },
  {
    id: 162,
    name: 'Liang Court',
    coordinates: [103.844547179775, 1.29065860407434],
  },
  {
    id: 163,
    name: 'Park Mall',
    coordinates: [103.8451131694873, 1.297930616663693],
  },
  {
    id: 165,
    name: 'Serangoon Plaza',
    coordinates: [103.855146819671, 1.31078075190145],
  },
  {
    id: 166,
    name: 'Shaw Tower',
    coordinates: [103.856743413489, 1.29628162147118],
  },
  {
    id: 167,
    name: 'Grantral Mall',
    coordinates: [103.765097562497, 1.31423131705905],
  },
  {
    id: 168,
    name: 'myVillage @ Serangoon',
    coordinates: [103.865041851733, 1.36516071264446],
  },
  {
    id: 169,
    name: 'Clarke Quay Central',
    coordinates: [103.84660942692958, 1.289025787855743],
  },
  {
    id: 170,
    name: 'Shaw House',
    coordinates: [103.831531920982, 1.30573060708011],
  },
  {
    id: 171,
    name: 'Shaw Centre',
    coordinates: [103.831775862586, 1.30607247455055],
  },
  {
    id: 172,
    name: "Fitzpatrick's",
    coordinates: [103.831775862586, 1.30607247455055],
  },
];
export default SHOPPING_MALLS;
