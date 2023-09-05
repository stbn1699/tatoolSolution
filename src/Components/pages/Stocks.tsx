import BDXSidebar from "@/Components/BDXSidebar";
import {selectTest} from "@/Components/utilities/databaseFunctions";


function Stocks() {

    selectTest()

    return(
        <div style={{display: 'flex'}}>
            <div style={{width: '35%'}}>
                <BDXSidebar activeBtn={3}/>
            </div>
            <div style={{width: '65%'}}>
                <p>Stocks</p>
            </div>
        </div>
    )
}

export default Stocks