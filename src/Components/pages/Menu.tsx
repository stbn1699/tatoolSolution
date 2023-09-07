import BDXSidebar from "@/Components/BDXSidebar";


function Menu() {

    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <BDXSidebar activeBtn={1}/>
            </div>
            <div className="contentWidth">

            </div>
        </div>
    )
}

export default Menu