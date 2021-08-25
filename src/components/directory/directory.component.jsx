import React from 'react'
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

const Directory = ({directorySections}) => (
  <div className="directory-menu">
    {directorySections.map(({title, imageUrl, id, size, linkUrl}) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
    ))}
  </div>
)

const mapStateToProps = state => ({
  directorySections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);