import React, { FC, useState } from "react";
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { toast } from "react-toastify";
import * as api from "../../apiConnection";

export interface INews {
    id?: number;
    date: string;
    name: string;
    content: string;
}

interface NewsContainerProps {
    news: INews[];
    isLoading: boolean;
    isLogged?: boolean;
    getAllNews: () => void;
}

const NewsContainer: FC<NewsContainerProps> = (props) => {
    const { news, isLoading, isLogged, getAllNews } = props;

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
                news.map((elem, index) => (
                    <SeparatedNews
                        elem={elem}
                        key={elem.id ? elem.id : index}
                        isLogged={isLogged}
                        getAllNews={getAllNews}
                    />
                ))
            )}
        </div>
    );
};

interface SeparatedNewsProps {
    elem: INews;
    isLogged: boolean | undefined;
    getAllNews: () => void;
}

const SeparatedNews: FC<SeparatedNewsProps> = (props) => {
    const { elem, isLogged, getAllNews } = props;
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleDialogOpen = () => {
        setDialogOpen(!dialogOpen);
    };

    const handleDeleteNews = async (value: INews): Promise<boolean> => {
        return await api.deleteNews(value);
    };

    return (
        <div className="paper border newsBlock">
            <div>
                <p>{elem.date}</p>
                <h3 className="bluePar">{elem.name}</h3>
                {elem.content.split(" ").length - 1 > 10 ? (
                    <div>
                        <p>
                            {elem.content.split(" ", 10).map((word, index) => (
                                <span key={index}> {word}</span>
                            ))}
                            <span>...</span>
                        </p>
                        <Button
                            onClick={handleDialogOpen}
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
                    <p>{elem.content}</p>
                )}
                {isLogged ? (
                    <DeleteButton
                        elem={elem}
                        handleDeleteNews={handleDeleteNews}
                        getAllNews={props.getAllNews}
                    />
                ) : null}
            </div>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogOpen}
                className="dialog newsDialog">
                <DialogTitle>{elem.name}</DialogTitle>
                <Divider />
                <DialogContent className="newsDialogContent">
                    <p>{elem.content}</p>
                    <p>{elem.date}</p>
                    {isLogged ? (
                        <DeleteButton
                            elem={elem}
                            handleDeleteNews={handleDeleteNews}
                            getAllNews={getAllNews}
                        />
                    ) : null}
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button
                        onClick={handleDialogOpen}
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

interface DeleteButtonProps {
    elem: INews;
    handleDeleteNews: (value: INews) => Promise<boolean>;
    getAllNews: () => void;
}

const DeleteButton: FC<DeleteButtonProps> = (props) => {
    const { elem, handleDeleteNews, getAllNews } = props;
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleDialog = () => setOpenDialog(!openDialog);

    return (
        <div className="deleteButtonContainer">
            <Button
                style={{ backgroundColor: "white", color: "var(--fiolet)" }}
                onClick={handleDialog}>
                <DeleteForeverIcon fontSize="small" />
            </Button>
            <Dialog open={openDialog} onClose={handleDialog} className="dialog">
                <DialogTitle>Chcete vymazat novinku?</DialogTitle>
                <DialogActions>
                    <Button
                        variant="contained"
                        style={{ color: "var(--blue)" }}
                        onClick={() => {
                            handleDeleteNews(elem).then((res) => {
                                if (res) {
                                    toast.success("Vyhazeno");
                                } else {
                                    toast.error("Neco se nepovedlo!");
                                }

                                getAllNews();
                            });
                        }}>
                        Ano
                    </Button>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "var(--fiolet)",
                            color: "white",
                        }}
                        onClick={handleDialog}>
                        Ne
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default NewsContainer;
