import BDXSidebar from "@/Components/BDXSidebar";


function Parametres() {
    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <BDXSidebar activeBtn={4}/>
            </div>
            <div className="contentWidth">
                <p>Parametres</p>
            </div>
        </div>
    )
}

export default Parametres