import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'


const PublicOnlyRoute = ({Component}) => {
    const [isLogin, setisLogin] = useState(true);
    return !isLogin ? <Navigate to="/" /> : <Component />
}

export default PublicOnlyRoute