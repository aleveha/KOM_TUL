import * as React from "react";

const EmployeePhoto = (props: {src: string | undefined}) => {
    return(
        <img
            src={props.src}
            alt="Employee"
            style={{
                maxHeight: "350px"
            }}
        />
    );
}

export default EmployeePhoto;