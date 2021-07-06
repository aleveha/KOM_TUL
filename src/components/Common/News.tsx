import React, {useState} from 'react';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider
} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {toast} from "react-toastify";

export interface INews {
    id?: number,
    date: string,
    name: string,
    content: string
}

const News = (props: {
    news: INews[],
    isLoading: boolean,
    isLogged?: boolean,
    getAllNews?: () => void
}) => {
    return (
        <div className="newsBlocks">
            {props.isLoading ?
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 0"
                }}>
                    <CircularProgress size={50}/>
                </div> :
                props.news.map((elem, index) =>
                    <SeparateNews
                        elem={elem}
                        key={elem.id ? elem.id : index}
                        isLogged={props.isLogged}
                        getAllNews={props.getAllNews}
                    />
                )}
        </div>
    );
};

const SeparateNews = (props: {
    elem: INews,
    isLogged: boolean | undefined,
    getAllNews?: () => void
}) => {
    const {elem} = props;
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleDialogOpen = () => {
        setDialogOpen(!dialogOpen);
    }

    const handleDeleteNews = (value: INews) => {
        return new Promise(resolve => {
            fetch('https://www.kom.tul.cz/api/deleteNews', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: value.id, name: value.name}),
            })
                .then(response => response.json())
                .then(data => resolve(data));
        })
    }

    return (
        <div
            className="paper border newsBlock"
        >
            <div>
                <p>{elem.date}</p>
                <h3 className="bluePar">{elem.name}</h3>
                {elem.content.split(" ").length - 1 > 10 ?
                    <div>
                        <p>{elem.content.split(" ", 10).map((word, index) =>
                            <span key={index}> {word}</span>
                        )}<span>...</span></p>
                        <Button
                            onClick={handleDialogOpen}
                            variant="contained"
                            style={{margin: "1rem auto", color: "var(--blue)"}}
                            color="default"
                        >Vice info</Button>
                    </div> :
                    <p>{elem.content}</p>}
                {props.isLogged ?
                    <DeleteButton
                        elem={elem}
                        handleDeleteNews={handleDeleteNews}
                        getAllNews={props.getAllNews}
                    /> : null}
            </div>
            <Dialog open={dialogOpen} onClose={handleDialogOpen} className="dialog newsDialog">
                <DialogTitle>{elem.name}</DialogTitle>
                <Divider/>
                <DialogContent className="newsDialogContent">
                    <p>{elem.content}</p>
                    <p>{elem.date}</p>
                    {props.isLogged ?
                        <DeleteButton
                            elem={elem}
                            handleDeleteNews={handleDeleteNews}
                            getAllNews={props.getAllNews}
                        /> : null}
                </DialogContent>
                <Divider/>
                <DialogActions>
                    <Button
                        onClick={handleDialogOpen}
                        variant="contained"
                        style={{margin: "0.5rem", color: "var(--blue)"}}
                        color="default"
                    >Zavřít</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const DeleteButton = (props: {
    elem: INews,
    handleDeleteNews: (value: INews) => Promise<any>,
    getAllNews?: () => void
}) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const handleDialog = () => setOpenDialog(!openDialog);

    return (
        <div className="deleteButtonContainer">
            <Button
                style={{backgroundColor: "white", color: "var(--fiolet)"}}
                onClick={handleDialog}
            >
                <DeleteForeverIcon fontSize="small"/>
            </Button>
            <Dialog
                open={openDialog}
                onClose={handleDialog}
                className="dialog"
            >
                <DialogTitle>Chcete vymazat novinku?</DialogTitle>
                <DialogActions>
                    <Button
                        variant="contained"
                        style={{color: "var(--blue)"}}
                        onClick={() => {
                            props.handleDeleteNews(props.elem)
                                .then((res) => {
                                    if (typeof res === "boolean")
                                        toast.success("Vyhazeno");
                                    else
                                        toast.error("Neco se nepovedlo!")

                                    props.getAllNews !== undefined && props.getAllNews();
                                })
                        }}
                    >Ano</Button>
                    <Button
                        variant="contained"
                        style={{backgroundColor: "var(--fiolet)", color: "white"}}
                        onClick={handleDialog}
                    >Ne</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default News;