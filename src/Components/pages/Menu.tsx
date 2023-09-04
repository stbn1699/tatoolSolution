import BDXSidebar from "@/Components/BDXSidebar";


function Menu() {
    return(
        <div style={{display: 'flex'}}>
            <div style={{width: '35%'}}>
                <BDXSidebar activeBtn={1}/>
            </div>
            <div style={{width: '65%'}}>
                <p>Menu</p>
            </div>
        </div>
    )
}

export default Menu