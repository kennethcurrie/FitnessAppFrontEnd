import { connect } from "react-redux";
import { ChuckNorrisComponent } from "./ChuckNorris.component";
import { IState } from "../../reducers";
import { buyJoke } from "../../actions/chuck-norris/ChuckNorris.actions";

const mapStateToProps = (state: IState) => {
  return {
    // clicks: state.clicker.clicks,
    chuckNorris: state.chuckNorris
  }
}

const mapDispatchToProps = {
  buyJoke,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisComponent);
