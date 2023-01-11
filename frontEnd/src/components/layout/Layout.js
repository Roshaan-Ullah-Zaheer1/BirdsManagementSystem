import { useState } from 'react';
import Navigation from "./Navigation";
import ProtectedRoute from "./../../util/ProtectedRoute";

const Layout = (props) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (<ProtectedRoute><div className={toggle === true ? 'hold-transition sidebar-mini sidebar-collapse' :
        'hold-transition sidebar-mini'}>
        <div className="wrapper">
            <Navigation toggleHandler={handleToggle} />
            {props.children}
        </div>
    </div></ProtectedRoute>);
}

export default Layout;