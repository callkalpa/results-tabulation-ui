import React, {useContext} from 'react';
import './App.css';
import NavBar from "./components/navbar/Navbar";
import { Route} from "react-router-dom";
import CE201 from "./components/CE201/CE201";
import PRE28A from "./components/PRE28A/PRE28A";
import PRE28AEntry from "./components/PRE28A/PRE28AEntry";
import PRE21 from "./components/invalid-ballots/PRE21";
import PRE21Entry from "./components/invalid-ballots/PRE21Entry";
import PRE21PVEntry from "./components/invalid-ballots/postal-votes/PRE21PVEntry";
import PRE21PV from "./components/invalid-ballots/postal-votes/PRE21PV";
import PRE41 from "./components/partywise-count/PRE41";
import PRE41PV from "./components/partywise-count/postal-votes/PRE41PV";
import PRE41PVEntry from "./components/partywise-count/postal-votes/PRE41PVEntry";
import PRE34CO from "./components/preferences/PRE34CO";
import PRE34COEntry from "./components/preferences/PRE34COEntry";
import PRE34COPV from "./components/preferences/postal-votes/PRE34COPV";
import PRE34COPVEntry from "./components/preferences/postal-votes/PRE34COPVEntry";
import CE201Entry from "./components/CE201/CE201Entry";
import PRE28Entry from "./components/PRE28/PRE28Entry";
import PRE28 from "./components/PRE28/PRE28";
import ReportsEntry from "./components/report/ReportsEntry";
import Home from "./components/home/Home";
import HomeSelection from "./components/home/HomeSelection";
import HomeElection from "./components/home/HomeElection";
import CE201PV from "./components/CE201/postal-votes/CE201PV";
import CE201PVEntry from "./components/CE201/postal-votes/CE201PVEntry";
import PRE41Report from "./components/partywise-count/PRE41Report";
import ReportView from "./components/report/ReportView";
import CE201Report from "./components/CE201/CE201Report";
import {AuthContext} from "./contexts";
import {Redirect, Switch} from "react-router";
import {AppConfig} from "./configs";
import {ProtectedRoute} from "./components/protected-route";
import PRE41New from "./components/partywise-count/PRE41New";
import CE201New from "./components/CE201/CE201New";

const appConfig = new AppConfig();

function App() {
    // const {signIn, signOut} = useContext(AuthContext);
    return (
        <div>
            <NavBar/>
            <Switch>

                <Redirect exact path="/" to="/Election"/>

                {/*<Redirect exact path="/" to={ appConfig.loginPath }/>*/}
                {/*<Route path={ appConfig.loginPath } render={ () => {*/}
                {/*    signIn();*/}
                {/*    return null;*/}
                {/*} }/>*/}
                {/*<Route path={ appConfig.logoutPath } render={ () => {*/}
                {/*    signOut();*/}
                {/*    return null;*/}
                {/*} }/>*/}

                <Route exact path="/Election" component={ HomeElection }/>
                <Route exact path="/Home" component={ Home }/>
                <Route exact path="/Main" component={ HomeSelection }/>

                <Route exact path="/ReportsEntry" component={ ReportsEntry }/>
                <Route exact path="/ReportView/:tallySheetId/:tallySheetVersionId" component={ ReportView }/>

                <Route exact path="/CE201" component={ CE201 }/>
                <Route exact path="/CE201-Entry/:name/:name2/:countingId" component={ CE201Entry }/>
                <Route path="/CE201Entry/:tallySheetId/:tallySheetVersionId" component={ CE201New }/>
                <Route exact path="/CE201Report/:tallySheetId/:tallySheetVersionId" component={ CE201Report }/>

                <Route exact path="/PRE21" component={ PRE21 }/>
                <Route exact path="/PRE21-Entry/:name/:name2" component={ PRE21Entry }/>

                <Route exact path="/PRE34CO" component={ PRE34CO }/>
                <Route exact path="/PRE34CO-Entry" component={ PRE34COEntry }/>

                <Route exact path="/PRE28" component={ PRE28 }/>
                <Route path="/PRE28-Entry/:name" component={ PRE28Entry }/>

                <Route exact path="/PRE41" component={ PRE41 }/>
                <Route path="/PRE41Entry/:tallySheetId/:tallySheetVersionId" component={ PRE41New }/>
                <Route exact path="/PRE41Report/:tallySheetId/:tallySheetVersionId/" component={ PRE41Report }/>

                <Route exact path="/PRE28A" component={ PRE28A }/>
                <Route path="/PRE28A-Entry/:name" component={ PRE28AEntry }/>

                <Route exact path="/PRE21PV" component={ PRE21PV }/>
                <Route exact path="/PRE21PV-Entry/:name/:name2" component={ PRE21PVEntry }/>

                <Route exact path="/PRE41PV" component={ PRE41PV }/>
                <Route exact path="/PRE41PVEntry/:tallySheetId/:tallySheetVersionId" component={ PRE41PVEntry }/>

                <Route exact path="/CE201PV" component={ CE201PV }/>
                <Route exact path="/CE201PVEntry/:tallySheetId/:tallySheetVersionId" component={ CE201PVEntry }/>

                <Route exact path="/PRE34COPV" component={ PRE34COPV }/>
                <Route exact path="/PRE34COPV-Entry" component={ PRE34COPVEntry }/>
            </Switch>
        </div>
    );
}
export default App;
