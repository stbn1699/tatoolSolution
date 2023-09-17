import BDXSidebar from "@/Components/TatoolSidebar";


function Parametres() {
    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <BDXSidebar activeBtn={4}/>
            </div>
            <div className="contentWidth">
                <p>Paramètres</p>
            </div>
        </div>
    )
}

export default Parametres