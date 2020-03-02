const Product = require('./models/product.model');

const loadTestData = async () => {

  const data = [
    {
      id: '1234a',
      tag: 'new',
      img: { src: '../../../images/prod07.jpg'},
      name: 'Apple MacBook Pro 13"',
      price: 2362.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '2234a',
      tag: 'new',
      img: { src: '../../../images/prod10.jpg'},
      name: 'DJI Mavic Mini',
      price: 589.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '3234a',
      tag: 'new',
      img: { src: '../../../images/prod09.jpg'},
      name: 'GoPro Hero 8 Black',
      price: 498.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '4234a',
      tag: '',
      img: { src: '../../../images/prod04.jpg'},
      name: 'Apple iPhone 11 Pro Max',
      price: 1689.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '5234a',
      tag: 'last one',
      img: { src: '../../../images/prod05.jpg'},
      name: 'DJI Mavic 2 Pro Combo',
      price: 1729.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '6234a',
      tag: '',
      img: { src: '../../../images/prod03.jpg'},
      name: 'Apple iMac 27" Retina',
      price: 1729.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '7234a',
      tag: 'sale',
      img: { src: '../../../images/prod01.jpg'},
      name: 'GoPro Hero 7 Black',
      price: 359.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '8234a',
      tag: '',
      img: { src: '../../../images/prod06.jpg'},
      name: 'DJI Phantom 4 Pro',
      price: 1765.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '9234a',
      tag: '',
      img: { src: '../../../images/prod11.jpg'},
      name: 'Apple iPhone 11 Pro',
      price: 1364.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '10234a',
      tag: '',
      img: { src: '../../../images/prod08.jpg'},
      name: 'DJI Osmo Action',
      price: 392.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '11234a',
      tag: '',
      img: { src: '../../../images/prod02.jpg'},
      name: 'GoPro Hero 7 Black Limited',
      price: 389.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
    {
      id: '122341',
      tag: '',
      img: { src: '../../../images/prod12.jpg'},
      name: 'GoPro Max',
      price: 629.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
      qty: 0,
    },
  ];

  try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No products. Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;