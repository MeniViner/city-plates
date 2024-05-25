const Restaurants  = [
  {
    id: 1,
    name: 'Moshiko Burger\'s',
    city: 'Herzliya',
    price: 100,
    main_image: 'https://images.unsplash.com/photo-1554306297-0c86e837d24b?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'Burger Restaurant',
    images: [
      'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    description: 'Welcome to Moshiko Burger\'s, where each bite is a flavor adventure! Our juicy, gourmet burgers are crafted with fresh, local ingredients and served with a smile. Join us for an unforgettable dining experience that satisfies every craving.',
    rating: 4.7
  },
  {
    id: 2,
    name: 'Sushi Zen',
    city: 'Haifa',
    price: 80,
    main_image: 'https://images.unsplash.com/photo-1607857531051-154c0e9cb36f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'Japanese',
    images: [
      'https://images.unsplash.com/photo-1562436356-11574662e477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN1c2hpJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN1c2hpJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1611762687807-7cdd09aef422?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3VzaGklMjByZXN0YXVyYW50fGVufDB8fDB8fHww'
    ],
    description: 'Experience the true essence of Japanese cuisine at Sushi Zen. Our skilled chefs prepare each dish with the freshest ingredients and utmost attention to detail.',
    rating: 3.5
  },
  {
    id: 3,
    name: 'Bistro Beaumont',
    city: 'Jerusalem',
    price: 120,
    main_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'French',
    images: [
      'https://images.unsplash.com/photo-1685633224457-4917c576f9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1lYXQlMjByZXN0YXVyYW50fGVufDB8fDB8fHww', 
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      'https://images.unsplash.com/photo-1633862330404-4a4246b90663?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYXQlMjBkaXNofGVufDB8fDB8fHww'
    ],
    description: 'Indulge in the flavors of France at Bistro Beaumont. Our cozy atmosphere and exquisite dishes will transport you to the streets of Paris.',
    rating: 2.8
  },
  {
    id: 4,
    name: 'Spice Palace',
    city: 'Sderot',
    price: 60,
    main_image: 'https://plus.unsplash.com/premium_photo-1669150852127-2435412047f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    kitchen: 'Indian',
    images: [
      'https://images.unsplash.com/photo-1548940740-204726a19be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZGlzaGVzfGVufDB8fDB8fHww', 
      'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZGlzaGVzfGVufDB8fDB8fHww', 
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZGlzaGVzfGVufDB8fDB8fHww'
    ],
    description: 'Experience the vibrant and aromatic flavors of India at Spice Palace. Our chefs masterfully blend spices to create authentic and unforgettable dishes.',
    rating: 1.6
  },
  {
    id: 5,
    name: 'El Mariachi',
    city: 'Haifa',
    price: 90,
    main_image: 'https://plus.unsplash.com/premium_photo-1661776616127-98bb4873b6ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'Mexican',
    images: [
      'https://plus.unsplash.com/premium_photo-1680118670507-81989641ec61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1leGljYW4lMjBjdWlzaW5lfGVufDB8fDB8fHww', 
      'https://images.unsplash.com/photo-1695088220737-9a6d901db8f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWV4aWNhbiUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D', 
      'https://images.unsplash.com/photo-1673298343885-af23f0fae167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fE1leGljYW4lMjBjdWlzaW5lfGVufDB8fDB8fHww'
    ],
    description: 'Step into the lively atmosphere of El Mariachi and savor the bold and flavorful dishes of Mexican cuisine. Our margaritas are the perfect accompaniment.',
    rating: 4.7
  },
  {
    id: 6,
    name: 'Bamboo Garden',
    city: 'Jerusalem',
    price: 75,
    main_image: 'https://images.unsplash.com/photo-1583475020831-fb4fbb497315?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'Chinese',
    images: [
      'https://plus.unsplash.com/premium_photo-1661600645707-ba72614adcb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpbmVzZSUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D', 
      'https://images.unsplash.com/photo-1544601284-7fe39c93d4d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpbmVzZSUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D', 
      'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENoaW5lc2UlMjBjdWlzaW5lfGVufDB8fDB8fHww'
    ],
    description: 'Discover the rich and diverse flavors of Chinese cuisine at Bamboo Garden. Our extensive menu offers something for every palate, from classic dishes to modern creations.',
    rating: 3.5
  },
  {
    id: 7,
    name: 'Café Terrasse',
    city: 'Tel Aviv',
    price: 110,
    main_image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'Mediterranean',
    images: [
      'https://plus.unsplash.com/premium_photo-1661761894768-3840ed396a14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1514134583630-250e42c36dbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    description: 'Escape to the Mediterranean at Café Terrasse. Our outdoor terrace and menu featuring fresh, seasonal ingredients will transport you to the sun-drenched shores of the Mediterranean.',
    rating: 2.8
  },
  {
    id: 8,
    name: 'Steakhouse 1892',
    city: 'Haifa',
    price: 150,
    main_image: 'https://images.unsplash.com/photo-1702741168115-cd3d9a682972?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'American',
    images: [
      'https://images.unsplash.com/photo-1630071074184-a879a29c51bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3RlYWtob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1622115837997-90c89ae689f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1644704265419-96ddaf628e71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN0ZWFraG91c2V8ZW58MHx8MHx8fDA%3D'
    ],
    description: 'Indulge in the finest cuts of meat at Steakhouse 1892. Our premium steaks are aged to perfection and grilled to your desired doneness, paired with impeccable service.',
    rating: 1.9
  },
  {
    id: 9,
    name: 'Ramen Chef',
    city: 'Holon',
    price: 360,
    main_image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'Japanese',
    images: [
      'https://plus.unsplash.com/premium_photo-1674149627459-a5921032934e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1600326145359-3a44909d1a39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhbWVufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1614649672633-cb78b332a9a9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    description: 'Ramen Chef offers handcrafted noodles and rich broths, bringing authentic Japanese flavors in a cozy, modern setting. Perfect for both ramen enthusiasts and newcomers.',
    rating: 2.9
  },
  {
    id: 10,
    name: 'Falafel King',
    city: 'Tel Aviv',
    price: 50,
    main_image: 'https://plus.unsplash.com/premium_photo-1663853052087-9d4f1d70d23e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    kitchen: 'Israeli',
    images: [
      'https://images.unsplash.com/photo-1593001869807-9b07543c8688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1627853585597-8cb6cc34548b?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1680990999782-ba7fe26e4d0b?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    description: 'Falafel King offers the best falafel in Tel Aviv with fresh, crispy balls and a variety of toppings. Perfect for a quick, delicious, and authentic Israeli meal.',
    rating: 3.8
  },
  {
    id: 11,
    name: 'Shawarma Hayad',
    city: 'Natania',
    price: 60,
    main_image: 'https://img.mako.co.il/2024/03/13/eretz_130324_shawarmaEXT_autoOrient_i.jpg',
    kitchen: 'Israeli',
    images: [
      'https://i.postimg.cc/Hs9Cx0cv/Hayad1-1716641948669.jpg', 
      'https://i.postimg.cc/7ZB81xNg/Hayad3-1716641963662.jpg', 
      'https://i.postimg.cc/FHFXJf0r/Hayad2-1716641928720.jpg'
    ],
    description: 'Shawarma Hayad: Where every bite feels like a high-five from the flavor gods. Come for the shawarma, stay for the laughter and extra napkins. Your taste buds will thank you!',    
    rating: 3.7
  }  
];

export default Restaurants 
