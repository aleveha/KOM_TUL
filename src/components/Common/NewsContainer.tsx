import React, { FC, useContext, useState } from "react";
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
} from "@material-ui/core";
import { INews } from "../../apiConnection/types";
import LanguageContext from "../../context/LanguageContext";
import moment from "moment";

interface NewsContainerProps {
    news: INews[];
    isLoading: boolean;
}

const NewsContainer: FC<NewsContainerProps> = (props) => {
    const { news, isLoading } = props;

    return (
        <div className="newsBlocks">
            {isLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "2rem 0",
                    }}>
                    <CircularProgress size={50} />
                </div>
            ) : (
                news.map((elem) => (
                    <SeparatedNews elem={elem} key={elem.uuid} />
                ))
            )}
        </div>
    );
};

interface SeparatedNewsProps {
    elem: INews;
}

const SeparatedNews: FC<SeparatedNewsProps> = (props) => {
    const { elem } = props;
    const language = useContext(LanguageContext);
    const isCzech = language.value.toLocaleLowerCase() === "cz";
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const data = {
        date: moment(elem.date).format("DD.MM.YYYY"),
        name: isCzech ? elem.name_cz : elem.name_en,
        content: isCzech ? elem.content_cz : elem.content_en,
    };

    const handleFullTextOpen = () => {
        setDialogOpen(!dialogOpen);
    };

    return (
        <div className="paper border newsBlock">
            <div>
                <p>{data.date}</p>
                <h3 className="bluePar">{data.name}</h3>
                {data.content.split(" ").length - 1 > 10 ? (
                    <div>
                        <p>
                            {data.content
                                .split(" ", 10)
                                .join(" ")
                                .concat("...")}
                        </p>
                        <Button
                            onClick={handleFullTextOpen}
                            variant="contained"
                            style={{
                                margin: "1rem auto",
                                color: "var(--blue)",
                            }}
                            color="default">
                            Vice info
                        </Button>
                    </div>
                ) : (
                    <p>{data.content}</p>
                )}
            </div>
            <Dialog
                open={dialogOpen}
                onClose={handleFullTextOpen}
                className="dialog newsDialog">
                <DialogTitle>{data.name}</DialogTitle>
                <Divider />
                <DialogContent className="newsDialogContent">
                    <p>{data.content}</p>
                    <p>{data.date}</p>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button
                        onClick={handleFullTextOpen}
                        variant="contained"
                        style={{ margin: "0.5rem", color: "var(--blue)" }}
                        color="default">
                        Zavřít
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default NewsContainer;
