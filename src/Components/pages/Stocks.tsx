import BDXSidebar from "@/Components/BDXSidebar";
import {selectProducts} from "@/Components/utilities/databaseFunctions";

function Stocks() {

    let viewList = true

    function changeView() {
        viewList = !viewList
    }

    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <BDXSidebar activeBtn={3}/>
            </div>
            <div className="contentWidth">
                {selectProducts({viewListProp: viewList})}
            </div>
        </div>
    )
}

export default Stocks