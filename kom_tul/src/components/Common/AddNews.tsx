import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider} from "@material-ui/core";
import {VpnKey} from "@material-ui/icons";
import InputNewsForm from "./InputNewsForm";
import LoginForm, {IUser} from "./LoginForm";
import AddNewUser from "./AddNewUser";
import {useTranslation} from "react-i18next";

const AddNews = (props: {
    getAllNews: () => void,
    isLogged: boolean,
    setIsLogged: (value: boolean) => void
}) => {
    const {t} = useTranslation();
    const {isLogged, setIsLogged} = props;
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>({login: "", password: ""});
    const [addNewUser, setAddNewUser] = useState<boolean>(false);

    const handleDialogOpen = () => setOpenDialog(!openDialog);

    const handleNewUser = () => setAddNewUser(!addNewUser);

    return (
        <div className="addNews">
            <div>
                <Button
                    style={{backgroundColor: "white", color: "var(--fiolet)"}}
                    onClick={handleDialogOpen}
                >
                    <VpnKey/>
                </Button>
            </div>
            <Dialog open={openDialog} onClose={handleDialogOpen} className="dialog addNewsDialog">
                <DialogTitle>
                    {isLogged ?
                        t("main.news.addNews.title.admin") :
                        t("main.news.addNews.title.user")
                    }
                </DialogTitle>
                <Divider/>
                <DialogContent className="dialogContent">
                    {isLogged ?
                        (addNewUser ?
                            <AddNewUser
                                user={user}
                                setUser={setUser}
                                isLogged={isLogged}
                                setIsLogged={setIsLogged}
                                addNewUser={addNewUser}
                                setAddNewUser={setAddNewUser}
                            /> :
                            <InputNewsForm
                                getAllNews={props.getAllNews}
                            />) :
                        <LoginForm
                            user={user}
                            setUser={setUser}
                            isLogged={isLogged}
                            setIsLogged={setIsLogged}
                        />}
                </DialogContent>
                <Divider/>
                <DialogActions className="buttons">
                    {isLogged ?
                        <div>
                            <Button
                                onClick={handleNewUser}
                                variant="contained"
                                style={{margin: "0.5rem", color: "var(--blue)"}}
                                color="default"
                            >{addNewUser ? t("dialog.addNews") : t("dialog.addNewUser")}</Button>
                            <Button
                                onClick={() => {
                                    setIsLogged(false);
                                    setUser({login: "", password: ""});
                                }}
                                variant="contained"
                                style={{margin: "0.5rem", color: "var(--blue)"}}
                                color="default"
                            >{t("dialog.logOut")}</Button>
                        </div> : null}
                    <Button
                        onClick={handleDialogOpen}
                        variant="contained"
                        style={{margin: "0.5rem", color: "var(--blue)"}}
                        color="default"
                    >{t("dialog.close")}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddNews;