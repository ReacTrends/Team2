import React from 'react';
import { faTags ,faExclamationTriangle,faUserCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Alerts.css";
const Alerts =()=>{
    return(
        <div className="d-flex justify-content-center ">
        <div className="p-3 m-4 col-example d-flex align-items-center cardAlerts">
            <div className="p-2">
            <FontAwesomeIcon icon={faTags } size="lg" />
            </div>
            <div className="text-left p-2"> 
                <h4> Open Alerts</h4>
                <h4>  200 </h4>
                
            </div>
        </div>
        <div className="p-3 m-4  col-example d-flex align-items-center cardAlerts">
            <div className="p-2">
            <FontAwesomeIcon icon={faTags } size="lg" />
            </div>
            <div className="text-left p-2"> 
                <h4> Closed Alerts</h4>
                <h4>  159 </h4>
                
            </div>
        </div>
        <div className="p-3 m-4  col-example d-flex align-items-center cardAlerts">
            <div className="p-2">
            <FontAwesomeIcon icon={faExclamationTriangle } size="lg" />
            </div>
            <div className="text-left p-2"> 
                <h4> Unassigned Alerts</h4>
                <h4>  20 </h4>
                
            </div>
        </div>
        <div className="p-3  m-4  col-example d-flex align-items-center cardAlerts">
            <div className="p-2">
            <FontAwesomeIcon icon={faUserCheck } size="lg" />
            </div>
            <div className="text-left p-2"> 
                <h4> Assigned Alerts</h4>
                <h4>  15 </h4>
                
            </div>
        </div>
      </div>
    );

}
export default Alerts;