import { connect } from "react-redux"
import { updateListRate, sortrList, randomRating } from "../actions"
import CardGrid from "../components/CardGrid"

const mapStateToProps = state => ({
  CardsData: state.itemRate
})

const mapDispatchToProps = dispatch => ({
  updateList: (value, id) => {
    dispatch(updateListRate(value, id))
    dispatch(sortrList())
  },
  randomRatingButton: () => {
    dispatch(randomRating())    
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
