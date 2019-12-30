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
          id: 1,
          linkUrl: 'bags'
        },
        {
          title: 'T-Shirts',
          imageUrl: `${window.location.origin}` + "/img/sweaters.png",
          id: 2,
          linkUrl:'shirts'
        },
        {
          title: 'accessories',
          imageUrl: `${window.location.origin}` + "/img/accessories.png",
          id: 3,
          linkUrl:'accessories'
        },
        {
          title: 'women',
          imageUrl: `${window.location.origin}` + "/img/women.png",
          size: 'large',
          id: 4,
          linkUrl:'women'
        },
        {
          title: 'men',
          imageUrl: `${window.location.origin}` + "/img/men.png",
          size: 'large',
          id: 5,
          linkUrl:'men'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size,linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;