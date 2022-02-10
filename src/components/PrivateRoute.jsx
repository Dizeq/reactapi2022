import {Route, Navigate} from 'react-router-dom'
export default PrivateRoute;

const PrivateRoute = (props) => {
    return props.isAuthenticated ? (
        props.children
    ) : (
        <Navigate to="/login" />
    )
}
 