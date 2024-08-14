import { Component } from "react";
import EnhancedTable from "./table";

class MyPlantDatabase extends Component {
    render() {
        return (
            <div>
                <div className="MyPlantDatabase">
                    <p>my plant database</p>
                </div>
                <div className="container">
                    <EnhancedTable />
                </div>
            </div>
        )
    }
}

export default MyPlantDatabase;