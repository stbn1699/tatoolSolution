import BDXSidebar from "@/Components/BDXSidebar";


function NouveauProduit() {
    return(
        <div style={{display: 'flex'}}>
            <div style={{width: '35%'}}>
                <BDXSidebar activeBtn={2}/>
            </div>
            <div style={{width: '65%'}}>
                <p>NouveauProduit</p>
            </div>
        </div>
    )
}

export default NouveauProduit