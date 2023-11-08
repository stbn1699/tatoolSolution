import TatoolSidebar from "@/Components/TatoolSidebar";
import {selectProducts} from "@/Components/utilities/databaseFunctions";
import {Logger} from "sass";

function Stocks() {
    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <TatoolSidebar activeBtn={3}/>
            </div>
            <div className="contentWidth">
                {selectProducts()}
            </div>
        </div>
    )
}

export default Stocks