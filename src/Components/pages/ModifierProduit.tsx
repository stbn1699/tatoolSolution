import TatoolSidebar from "@/Components/TatoolSidebar";
import {modifyProducts} from "@/Components/utilities/databaseFunctions";
import {Logger} from "sass";

function ModifierProduit() {
    return(
        <div style={{display: 'flex'}}>
            <div className="sidebarWidth">
                <TatoolSidebar activeBtn={5}/>
            </div>
            <div className="contentWidth">
                {modifyProducts()}
            </div>
        </div>
    )
}

export default ModifierProduit