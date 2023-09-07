import BDXSidebar from "@/Components/BDXSidebar";


function NouveauProduit() {
    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <BDXSidebar activeBtn={2}/>
            </div>
            <div className="contentWidth">
                <p>NouveauProduit</p>
            </div>
        </div>
    )
}

export default NouveauProduit