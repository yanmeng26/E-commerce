const INITIAL_STATE = {
    sections: [
      {
        title: 'vegan',
        imageUrl: 'https://i.ibb.co/H20K6rZ/monstruo-estudio-l-Qy6m-HZ7f-Yk-unsplash.jpg',
        id: 1,
        linkUrl: 'shop/vegan'
      },
      {
        title: 'fruits',
        imageUrl: 'https://i.ibb.co/TRy5P9X/jannis-brandt-8manzos-DSGM-unsplash.jpg',
        id: 2,
        linkUrl: 'shop/fruits'
      },
      {
        title: 'cereals',
        imageUrl: 'https://i.ibb.co/x6G48CG/nyana-stoica-EV6-C1-Lj-H1-Lk-unsplash.jpg',
        id: 3,
        linkUrl: 'shop/cereals'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/k5zGD6C/christopher-campbell-k-FCdf-Lbu6z-A-unsplash.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/YXZFvFF/cihan-soysakal-Nu-Mp-JX6-Be-KY-unsplash.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;