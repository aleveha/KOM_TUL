import React, {useState} from 'react';
import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export interface INews {
    id: number,
    date: string,
    name: string,
    content: string
}

const News = (props: { news: INews[], isLoading: boolean }) => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleDialogOpen = () => {
        setDialogOpen(!dialogOpen);
    }

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
                props.news.map(elem =>
                    <div
                        className="paper border newsBlock"
                        key={props.news.indexOf(elem)}
                    >
                        <div>
                            <p>{elem.date}</p>
                            <h3 className="bluePar">{elem.name}</h3>
                            {elem.content.split(".").length - 1 > 2 ?
                                <div>
                                    <p>{elem.content.split(".", 2).map(sentence =>
                                        <span key={elem.content.indexOf(sentence)}> {sentence}.</span>
                                    )}<span>..</span></p>
                                    <Button
                                        onClick={handleDialogOpen}
                                        variant="contained"
                                        style={{margin: "1rem auto", color: "var(--blue)"}}
                                        color="default"
                                    >Vice info</Button>
                                </div> :
                                <p>{elem.content}</p>
                            }

                        </div>
                        <Dialog open={dialogOpen} onClose={handleDialogOpen} className="dialog newsDialog">
                            <DialogTitle>{elem.name}</DialogTitle>
                            <DialogContent>
                                <p>{elem.content}</p>
                                <p>{elem.date}</p>
                            </DialogContent>
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
                )}
        </div>
    );
};

export default News;