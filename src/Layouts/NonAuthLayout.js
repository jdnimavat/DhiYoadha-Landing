import React from 'react';
import withRouter from '../Components/Common/withRouter';

//redux
const NonAuthLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default withRouter(NonAuthLayout);