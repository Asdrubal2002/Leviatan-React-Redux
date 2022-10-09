import Layout from '../../hocs/Layout'
import { Navigate } from 'react-router'
import { connect } from 'react-redux'

import { useEffect  } from "react";

import {
    get_posts,
} from "../../redux/actions/posts";


const Social = ({
    isAuthenticated,
    get_posts,
    post

}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        get_posts()
    
    }, [])

    //  if (!isAuthenticated)
    //      return <Navigate to="/" />

    return (
        <Layout>
           regui
        </Layout>
    )
}

const mapStateToProps = state => ({
    post: state.Posts.post,

    isAuthenticated: state.Auth.isAuthenticated,
})

export default connect(mapStateToProps, {
    get_posts

})(Social)