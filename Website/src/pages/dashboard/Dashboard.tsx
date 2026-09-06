//styles
import './Dashboard.css'
import {NumberRangeDisplay} from "../../components/DataDisplays/NumberRangeDisplay";
import {Card} from "../../components/Card";
import {ListDisplay} from "../../components/DataDisplays/ListDisplay";
import {mockErrorCodes} from "../../types/ErrorCodes";
import {SimpleDataList} from "../../components/DataDisplays/SimpleDataList";
import {mockDataList} from "../../types/DataList";
import {LineGraphDisplay} from "../../components/DataDisplays/LineGraphDisplay";

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <Card className="card-1" title={"Card 1"}>
                    <NumberRangeDisplay value={2450} unit={"rpm"} higherBound={8000} lowerBound={0}/>
                </Card>
                <Card className="card-2" title={"Card 2"}>
                    <NumberRangeDisplay value={2450} unit={"km/h"} higherBound={240} lowerBound={0}/>
                </Card>
                <Card className="card-3" title={"Card 3"}>
                    <NumberRangeDisplay value={2450} unit={"°C"} higherBound={150} lowerBound={0}/>
                </Card>

                <Card className="card-4" title={"Card 4"}>
                    <NumberRangeDisplay value={2450} unit={"V"} higherBound={20} lowerBound={0}/>
                </Card>


                <Card className="card-5" title={"Card 5"}>
                    <LineGraphDisplay width={100} height={100} />

                </Card>
                <Card className="card-6" title={"Card 6"}>
                    <SimpleDataList dataset={mockDataList} key={1} />

                </Card>
                <Card className="card-7" title={"Card 7"}>
                    <SimpleDataList dataset={mockDataList} key={1} />
                </Card>
                <Card className="card-8" title={"Card 8"}>
                    <ListDisplay dataset={mockErrorCodes} header={["Code", "Description", "State", "Timestamp"]}/>
                </Card>
            </div>
        </div>
    );
};

