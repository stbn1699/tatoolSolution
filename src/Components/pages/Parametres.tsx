import BDXSidebar from "@/Components/BDXSidebar";


function Parametres() {
    return(
        <div style={{display: 'flex'}}>
            <div style={{width: '35%'}}>
                <BDXSidebar activeBtn={4}/>
            </div>
            <div style={{width: '65%'}}>
                <p>Parametres</p>
            </div>
        </div>
    )
}

export default Parametres