import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'bags',
          imageUrl: `${window.location.origin}` + "/img/bags.png",
          id: 1
        },
        {
          title: 'sweaters',
          imageUrl: `${window.location.origin}` + "/img/sweaters.png",
          id: 2
        },
        {
          title: 'accessories',
          imageUrl: `${window.location.origin}` + "/img/accessories.png",
          id: 3
        },
        {
          title: 'women',
          imageUrl: `${window.location.origin}` + "/img/women.png",
          size: 'large',
          id: 4
        },
        {
          title: 'men',
          imageUrl: `${window.location.origin}` + "/img/men.png",
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;