export interface DownloadFile {
    id: number,
    shortName: string,
    name: string,
    format: string
}

const DownloadBD: DownloadFile[] = [
    { id: 1, name: "Kusovnik", shortName: "kusovnik", format: "doc" },
    { id: 2, name: "Výrobní postup - 1.část", shortName: "postup1", format: "doc" },
    { id: 3, name: "Výrobní postup - 2.část", shortName: "postup2", format: "doc" },
    { id: 6, name: "Technologie III - Obrábění  (příklady)", shortName: "tob_pr", format: "pdf" },
    { id: 7, name: "Technologie III - Obrábění (řezné podmínky - souhrn)", shortName: "tob_rp", format: "pdf" },
    { id: 15, name: "Technologie III - Obrábění (stroje)", shortName: "tob_stroje", format: "zip" },
    { id: 16, name: "Soustruhy s oběžným průměrem do 500 a 800 mm I.", shortName: "soustr1", format: "pdf" },
    { id: 17, name: "Soustruhy s oběžným průměrem do 500 a 800 mm II.", shortName: "soustr2", format: "pdf" },
    { id: 19, name: "Technologie III - Obrábění (skripta - doc. Dráb)", shortName: "tob_skr", format: "pdf" },
    { id: 25, name: "Technologie III - Obrábění (řezné podmínky - návrh)", shortName: "tob_nhrp", format: "pdf" },
    { id: 26, name: "Technologie III - Obrábění (desky)", shortName: "tob_desky", format: "zip" },
    { id: 27, name: "Technologie III - Obrábění (řezné podmínky - výsledky)", shortName: "tob_rpv", format: "zip" }
]

export default DownloadBD;