import * as React from "react";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";

const CopyRight = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Divider />
            <div className="copyrightContent padding">
                <p>{t("footer.copyRight")}</p>
            </div>
        </div>
    );
};

export default CopyRight;
