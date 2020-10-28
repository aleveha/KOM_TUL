import * as React from 'react';
import {Link} from 'react-router-dom';
import Logo1 from "../../img/logotul1_01.png";
import Logo2 from "../../img/logotul_02.png";

const ContactsLine = () => {
    return (
        <div className="contactInfoContent padding">
            <div className="kom-logo-footer">
                <div className="kom-logo">
                    <Link to="/home" className="logoLink">
                        <img src={Logo1} alt="KatedraLogo"/>
                        <img src={Logo2} alt="KatedraLogo"/>
                    </Link>
                </div>
            </div>
            <div className="contactInformation">
                <div className="facultyName">
                    <div>
                        <p>Katedra obrábění a montáže</p>
                        <p>Fakulta strojní</p>
                        <p>Technická univerzita v Liberci</p>
                    </div>
                </div>
                <div className="addressAndContacts">
                    <div className="address">
                        <div>
                            <p className="secondText">Budova E - 4 patro</p>
                            <p className="secondText">Studentská 2</p>
                            <p className="secondText">461 17 Liberec 1</p>
                        </div>
                    </div>
                    <div className="contacts">
                        <div>
                            <p className="linkPar secondText"><a className="link" href="tel:+420485353361">+420 48 535
                                3361</a></p>
                            <p className="linkPar secondText"><a className="link"
                                                                 href="mailto:tereza.vrbova@tul.cz">tereza.vrbova@tul.cz</a>
                            </p>
                            <p className="linkPar secondText"><Link className="link" to="/home">www.kom.tul.cz</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialNetworks">
                <div className="TULLink TULMain">
                    <a href="http://www.tul.cz" target="_blank" rel="noreferrer noopener"></a>
                    <div className="logoComponent">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 141.74 141.73" width="61px" height="61px" style={{'float': 'left'}}>
                            <defs>
                                <path id="a1" d="M0 0h141.74v141.73H0z"></path>
                            </defs>
                            <clipPath id="b1">
                                <use xlinkHref="#a1" overflow="visible"></use>
                            </clipPath>
                            <path
                                d="M0 0v71.39h.03c.14 19.3 8.07 36.82 20.8 49.54 12.85 12.84 30.58 20.8 50.13 20.8h.01c19.53 0 37.22-7.96 50.03-20.79 12.69-12.74 20.57-30.25 20.72-49.55h.03V0H0zm7.31 70.86v-.01C7.32 53.38 14.47 37.49 26 25.97 37.39 14.61 53.05 7.52 70.29 7.34c-.02 5.82-.22 11.77-.52 17.27-.31 5.68-.74 11.23-1.2 16.58-.78 9.23-1.9 17.83-3.35 25.73-1.44 7.86-3.23 15.08-5.34 21.59-3.31 10.19-6.85 18.42-11.12 24.23-4.11 5.61-8.89 8.97-14.77 9.71-2.83-2.02-5.53-4.23-7.99-6.69-11.53-11.53-18.69-27.41-18.69-44.9m63.65 63.57h-.01c-12.87 0-24.85-3.9-34.88-10.52h69.78c-10.04 6.62-22.02 10.52-34.89 10.52m44.95-18.68c-2.45 2.45-5.15 4.67-7.98 6.69-5.85-.77-10.61-4.12-14.7-9.71-4.25-5.81-7.8-14.03-11.11-24.23-2.1-6.49-3.89-13.67-5.33-21.5-1.44-7.85-2.57-16.41-3.35-25.58-.4-4.65-.81-9.45-1.11-14.32-.32-4.93-.55-10-.61-15.17v-.01l-.02-4.6c17.21.2 32.83 7.27 44.19 18.63 11.53 11.52 18.7 27.41 18.7 44.88v.02c.01 17.5-7.15 33.38-18.68 44.9"
                                clipPath="url(#b1)" fill="#7b1f4f"></path>
                        </svg>
                        <div className="logoText">
                            <p className="firstLine">Technická univerzita v Liberci</p>
                            <div className="secondLine">
                                <p>www.tul.cz</p>
                                <div className="square"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="TULLink TULStrijni">
                    <a href="http://www.fs.tul.cz" target="_blank" rel="noopener noreferrer"></a>
                    <div className="logoComponent">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 141.74 141.73" width="61px" height="61px" style={{'float': 'left'}}>
                            <defs>
                                <path id="a1" d="M0 0h141.74v141.73H0z"></path>
                            </defs>
                            <clipPath id="b1">
                                <use xlinkHref="#a1" overflow="visible"></use>
                            </clipPath>
                            <path
                                d="M0 0v71.39h.03c.14 19.3 8.07 36.82 20.8 49.54 12.85 12.84 30.58 20.8 50.13 20.8h.01c19.53 0 37.22-7.96 50.03-20.79 12.69-12.74 20.57-30.25 20.72-49.55h.03V0H0zm7.31 70.86v-.01C7.32 53.38 14.47 37.49 26 25.97 37.39 14.61 53.05 7.52 70.29 7.34c-.02 5.82-.22 11.77-.52 17.27-.31 5.68-.74 11.23-1.2 16.58-.78 9.23-1.9 17.83-3.35 25.73-1.44 7.86-3.23 15.08-5.34 21.59-3.31 10.19-6.85 18.42-11.12 24.23-4.11 5.61-8.89 8.97-14.77 9.71-2.83-2.02-5.53-4.23-7.99-6.69-11.53-11.53-18.69-27.41-18.69-44.9m63.65 63.57h-.01c-12.87 0-24.85-3.9-34.88-10.52h69.78c-10.04 6.62-22.02 10.52-34.89 10.52m44.95-18.68c-2.45 2.45-5.15 4.67-7.98 6.69-5.85-.77-10.61-4.12-14.7-9.71-4.25-5.81-7.8-14.03-11.11-24.23-2.1-6.49-3.89-13.67-5.33-21.5-1.44-7.85-2.57-16.41-3.35-25.58-.4-4.65-.81-9.45-1.11-14.32-.32-4.93-.55-10-.61-15.17v-.01l-.02-4.6c17.21.2 32.83 7.27 44.19 18.63 11.53 11.52 18.7 27.41 18.7 44.88v.02c.01 17.5-7.15 33.38-18.68 44.9"
                                clipPath="url(#b1)" fill="#747476"></path>
                        </svg>
                        <div className="logoText">
                            <p className="firstLine">Technická univerzita v Liberci</p>
                            <div className="secondLine">
                                <p>Fakulta strojní</p>
                                <div className="square"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsLine;