import TatoolSidebar from "@/Components/TatoolSidebar";


function Menu() {

    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <TatoolSidebar activeBtn={1}/>
            </div>
            <div className="contentWidth">

            </div>
        </div>
    )
}

export default Menu