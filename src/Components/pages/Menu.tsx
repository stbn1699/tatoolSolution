import BDXSidebar from "@/Components/BDXSidebar";
import {selectTest} from "@/Components/utilities/databaseFunctions";


function Menu() {

    return(
        <div style={{display: 'flex'}}>
            <div style={{width: '35%'}}>
                <BDXSidebar activeBtn={1}/>
            </div>
            <div style={{width: '65%'}}>

            </div>
        </div>
    )
}

export default Menu