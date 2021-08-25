import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ( {collections} ) => (
  <div className="collections-overview">
    {
      collections.map(collection => (
        <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
      ))
    }    
  </div>
)

const mapStateToProps = state => ({
  collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview);