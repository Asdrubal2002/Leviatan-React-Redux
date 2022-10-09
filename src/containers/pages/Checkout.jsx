import Layout from '../../hocs/Layout'
import { Navigate } from 'react-router'
import { connect } from 'react-redux'

const Checkout = ({
  isAuthenticated,
 
}) => {

  if (!isAuthenticated)
    return <Navigate to="/" />

  return (
    <Layout>
      Checkout
    </Layout>
  )

}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,

})

export default connect(mapStateToProps, {

})(Checkout)