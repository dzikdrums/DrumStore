const Product = require('./models/product.model');

const loadTestData = async () => {
  const data = [
    {
      id: '1234a',
      tag: 'new',
      img: '../../../images/prod07.jpg',
      name: 'Gretsch Tamburina maple',
      price: 2362.99,
      category: 'drums',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 5,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '2234a',
      tag: 'new',
      img: '../../../images/prod10.jpg',
      name: 'Pearl Export MLX series',
      price: 589.99,
      category: 'drums',
      desc:
        'True beauty in this price range. With great history, made firstly in early 80s in Japan, designed to fit most genres, from jazz, folk music, to metal and really extreme sounds. Great in tuning, and pretty lightweight so really easy to travel with!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '3234a',
      tag: 'new',
      img: '../../../images/prod09.jpg',
      name: 'TAMA Starclassic Bubinga',
      price: 498.99,
      category: 'drums',
      desc:
        'The classic. The Legend. One and only Starclassic with a modern addition of exotic tree which adds a different flavour to well known sound! Love at first sight to every customer we had in our shop !',
      qty: 0,
      comments: [
        {
          rating: 5,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '4234a',
      tag: '',
      img: '../../../images/prod04.jpg',
      name: 'Tama STAR Japan edt',
      price: 1689.99,
      category: 'drums',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 3,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 2,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '5234a',
      tag: 'last one',
      img: '../../../images/prod05.jpg',
      name: 'Pearl MMX custom',
      price: 1729.99,
      category: 'drums',
      desc:
        'True beauty in this price range. With great history, made firstly in early 80s in Japan, designed to fit most genres, from jazz, folk music, to metal and really extreme sounds. Great in tuning, and pretty lightweight so really easy to travel with!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '6234a',
      tag: '',
      img: '../../../images/prod03.jpg',
      name: 'DW Export',
      price: 1729.99,
      category: 'drums',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 3,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 2,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '8234a',
      tag: '',
      img: '../../../images/prod06.jpg',
      name: 'Sonor Sparkle birch',
      price: 1765.99,
      category: 'drums',
      desc:
        'The classic. The Legend. One and only Starclassic with a modern addition of exotic tree which adds a different flavour to well known sound! Love at first sight to every customer we had in our shop !',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '9234a',
      tag: '',
      img: '../../../images/prod11.jpg',
      name: 'Ddrum Maple SC',
      price: 1364.99,
      category: 'drums',
      desc:
        'True beauty in this price range. With great history, made firstly in early 80s in Japan, designed to fit most genres, from jazz, folk music, to metal and really extreme sounds. Great in tuning, and pretty lightweight so really easy to travel with!',
      qty: 0,
      comments: [
        {
          rating: 5,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '10234a',
      tag: '',
      img: '../../../images/prod08.jpg',
      name: 'TAMA Starclass short shell',
      price: 392.99,
      category: 'drums',
      desc:
        'The classic. The Legend. One and only Starclassic with a modern addition of exotic tree which adds a different flavour to well known sound! Love at first sight to every customer we had in our shop !',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 3,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 2,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '11234a',
      tag: '',
      img: '../../../images/prod02.jpg',
      name: 'TAMA maple MLX',
      price: 389.99,
      category: 'drums',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '7234a',
      tag: 'sale',
      img: '../../../images/prod01.jpg',
      name: 'Gretsc MLX',
      price: 359.99,
      category: 'drums',
      desc:
        'The classic. The Legend. One and only Starclassic with a modern addition of exotic tree which adds a different flavour to well known sound! Love at first sight to every customer we had in our shop !',
      qty: 0,
      comments: [
        {
          rating: 5,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '12234a',
      tag: '',
      img: '../../../images/prod12.jpg',
      name: 'Sonor pro custom',
      price: 629.99,
      category: 'drums',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 3,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 2,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '1234b',
      tag: '',
      img: '../../../images/cymb1.jpg',
      name: 'Meinl HCS Crash',
      price: 320,
      category: 'cymbals',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '2234b',
      tag: '',
      img: '../../../images/cymb2.jpg',
      name: 'Turkish Zephyros Crash',
      price: 757,
      category: 'cymbals',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 5,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '3234b',
      tag: '',
      img: '../../../images/cymb3.jpg',
      name: 'Zildjian A EFX 16',
      price: 999,
      category: 'cymbals',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 3,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 2,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '4234b',
      tag: '',
      img: '../../../images/cymb4.jpg',
      name: 'Turkich Sirius crash 16',
      price: 662,
      category: 'cymbals',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '5234b',
      tag: '',
      img: '../../../images/cymb5.jpg',
      name: 'Meinl Byzance Jazz Thin Crash',
      price: 1177,
      category: 'cymbals',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 5,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    },
    {
      id: '6234b',
      tag: '',
      img: '../../../images/cymb5.jpg',
      name: 'Paiste 101 Crash 16',
      price: 1199,
      category: 'cymbals',
      desc:
        'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
      qty: 0,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z'
        },
        {
          rating: 3,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z'
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z'
        },
        {
          rating: 2,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z'
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z'
        }
      ]
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if (counter === 0) {
      console.log('No products. Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};

module.exports = loadTestData;
