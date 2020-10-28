import * as React from 'react';
import Divider from '@material-ui/core/Divider';

const CopyRight = () => {
    return (
        <div>
            <Divider/>
            <div className="copyrightContent padding">
                <p>Copyright © 2020 Katedra obrábění a montáže FS TUL</p>
            </div>
        </div>
    );
};

export default CopyRight;