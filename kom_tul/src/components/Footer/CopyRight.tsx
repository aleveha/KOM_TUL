import * as React from 'react';
import '../../CSS/Footer.css';

interface IProps {

};

const CopyRight = (props: IProps) => {
    return (
        <div className="copyrightContent">
            <p>
                Copyright © 2020 Katedra obrábění a montáže FS TUL
            </p>
        </div>
    );
};

export default CopyRight;