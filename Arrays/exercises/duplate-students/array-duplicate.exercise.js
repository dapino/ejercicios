const students = [
    {
        "email": "melany.wijngaard@example.com",
        "gender": "female",
        "phone_number": "(727)-033-9347",
        "birthdate": 608022796,
        "location": {
            "street": "2431 predikherenkerkhof",
            "city": "staphorst",
            "state": "gelderland",
            "postcode": 64265
        },
        "username": "bigpeacock217",
        "password": "eagle",
        "first_name": "melany",
        "last_name": "wijngaard",
        "title": "miss",
        "picture": "women/70.jpg"
    },
    {
        "email": "nanna.pedersen@example.com",
        "gender": "female",
        "phone_number": "43672992",
        "birthdate": 591428535,
        "location": {
            "street": "2177 fåborgvej",
            "city": "aarhus",
            "state": "syddanmark",
            "postcode": 87547
        },
        "username": "purpleduck599",
        "password": "davids",
        "first_name": "nanna",
        "last_name": "pedersen",
        "title": "ms",
        "picture": "women/68.jpg"
    },
    {
        "email": "amelia.mercier@example.com",
        "gender": "female",
        "phone_number": "(168)-747-5950",
        "birthdate": 1132298571,
        "location": {
            "street": "7454 rue duquesne",
            "city": "echandens-denges",
            "state": "vaud",
            "postcode": 3811
        },
        "username": "whitefrog218",
        "password": "forest",
        "first_name": "amelia",
        "last_name": "mercier",
        "title": "madame",
        "picture": "women/91.jpg"
    },
    {
        "email": "sarah.oliver@example.com",
        "gender": "female",
        "phone_number": "0761-814-654",
        "birthdate": 1038915780,
        "location": {
            "street": "3503 manor road",
            "city": "manchester",
            "state": "highlands and islands",
            "postcode": "I30 5ZF"
        },
        "username": "purplebear893",
        "password": "boat",
        "first_name": "sarah",
        "last_name": "oliver",
        "title": "ms",
        "picture": "women/73.jpg"
    },
    {
        "email": "عسل.مرادی@example.com",
        "gender": "female",
        "phone_number": "0925-326-2063",
        "birthdate": 417058382,
        "location": {
            "street": "4981 شهید بهشتی",
            "city": "پاکدشت",
            "state": "مرکزی",
            "postcode": 68555
        },
        "username": "ticklishfish813",
        "password": "zaq12wsx",
        "first_name": "عسل",
        "last_name": "مرادی",
        "title": "mrs",
        "picture": "women/65.jpg"
    },
    {
        "email": "özkan.tekelioglu@example.com",
        "gender": "male",
        "phone_number": "(074)-376-7384",
        "birthdate": 616226885,
        "location": {
            "street": "2260 anafartalar cd",
            "city": "afyonkarahisar",
            "state": "amasya",
            "postcode": 31532
        },
        "username": "organiccat298",
        "password": "coventry",
        "first_name": "özkan",
        "last_name": "tekelioglu",
        "title": "mr",
        "picture": "men/69.jpg"
    },
    {
        "email": "angela.newman@example.com",
        "gender": "female",
        "phone_number": "081-718-3989",
        "birthdate": 479824115,
        "location": {
            "street": "3159 west street",
            "city": "celbridge",
            "state": "colorado",
            "postcode": 82776
        },
        "username": "smallgorilla567",
        "password": "1234567",
        "first_name": "angela",
        "last_name": "newman",
        "title": "mrs",
        "picture": "women/82.jpg"
    },
    {
        "email": "sarah.oliver@example.com",
        "gender": "female",
        "phone_number": "0761-814-654",
        "birthdate": 1038915780,
        "location": {
            "street": "3503 manor road",
            "city": "manchester",
            "state": "highlands and islands",
            "postcode": "I30 5ZF"
        },
        "username": "purplebear893",
        "password": "boat",
        "first_name": "sarah",
        "last_name": "oliver",
        "title": "ms",
        "picture": "women/73.jpg"
    },
    {
        "email": "buse.dagdas@example.com",
        "gender": "female",
        "phone_number": "(855)-841-4810",
        "birthdate": 1316736697,
        "location": {
            "street": "6428 anafartalar cd",
            "city": "malatya",
            "state": "mardin",
            "postcode": 28227
        },
        "username": "crazypeacock394",
        "password": "paulie",
        "first_name": "buse",
        "last_name": "dagdas",
        "title": "ms",
        "picture": "women/14.jpg"
    },
    {
        "email": "buse.dagdas@example.com",
        "gender": "female",
        "phone_number": "(855)-841-4810",
        "birthdate": 1316736697,
        "location": {
            "street": "6428 anafartalar cd",
            "city": "malatya",
            "state": "mardin",
            "postcode": 28227
        },
        "username": "crazypeacock394",
        "password": "paulie",
        "first_name": "buse",
        "last_name": "dagdas",
        "title": "ms",
        "picture": "women/14.jpg"
    },
    {
        "email": "judith.schmitz@example.com",
        "gender": "female",
        "phone_number": "0171-7824648",
        "birthdate": 1348121292,
        "location": {
            "street": "8227 römerstraße",
            "city": "mittweida",
            "state": "berlin",
            "postcode": 34006
        },
        "username": "smallcat785",
        "password": "prissy",
        "first_name": "judith",
        "last_name": "schmitz",
        "title": "miss",
        "picture": "women/49.jpg"
    },
    {
        "email": "hector.guerrero@example.com",
        "gender": "male",
        "phone_number": "696-963-949",
        "birthdate": 1040720948,
        "location": {
            "street": "5140 calle nebrija",
            "city": "alcobendas",
            "state": "navarra",
            "postcode": 56387
        },
        "username": "lazyleopard999",
        "password": "godfather",
        "first_name": "hector",
        "last_name": "guerrero",
        "title": "mr",
        "picture": "men/11.jpg"
    },
    {
        "email": "hector.guerrero@example.com",
        "gender": "male",
        "phone_number": "696-963-949",
        "birthdate": 1040720948,
        "location": {
            "street": "5140 calle nebrija",
            "city": "alcobendas",
            "state": "navarra",
            "postcode": 56387
        },
        "username": "lazyleopard999",
        "password": "godfather",
        "first_name": "hector",
        "last_name": "guerrero",
        "title": "mr",
        "picture": "men/11.jpg"
    }
]
