import BDXSidebar from "@/Components/BDXSidebar";
import {selectProducts} from "@/Components/utilities/databaseFunctions";
import {Logger} from "sass";

function Stocks() {
    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <BDXSidebar activeBtn={3}/>
            </div>
            <div className="contentWidth">
                {selectProducts()}
            </div>
        </div>
    )
}

export default Stocks