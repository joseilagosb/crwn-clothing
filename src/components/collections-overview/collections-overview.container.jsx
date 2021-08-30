import { connect } from "react-redux";
// import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = state => ({
  isLoading: selectIsCollectionFetching(state)
});

// const CollectionsOverviewContainer = compose(
//   connect(mapStateToProps),
//   WithSpinner
// )(CollectionsOverview);

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;