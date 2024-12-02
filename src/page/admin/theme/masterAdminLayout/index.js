import { memo } from 'react';



const MasterAdminLayout = ({ children }) => {
    return (
        <div>
            {children}

        </div>
    )
}


export default memo(MasterAdminLayout);