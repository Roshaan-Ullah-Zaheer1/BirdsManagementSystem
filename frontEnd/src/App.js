import React, { Component,useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/login/login";

import AllBirds from "./components/bird/AllBirds";
import CreateBird from "./components/bird/CreateBird";
import EditBird from "./components/bird/EditBird";
import ViewBird from "./components/bird/ViewBird";

import AllPair from "./components/pair/AllPair";
import AddPair from "./components/pair/AddPair";
import EditPair from "./components/pair/EditPair";
import ViewPair from "./components/pair/ViewPair";

import Cages from "./components/cages/cage";

import Daybook from "./components/daybook/daybook";
import DaybookAdd from "./components/daybook/daybookadd";
import DaybookEdit from "./components/daybook/daybookedit";
import DaybookView from "./components/daybook/daybookview";

import SoldBird from "./components/sales/sales";
import AddSold from "./components/sales/salesadd";
import EditSold from "./components/sales/salesedit";
import ViewSold from "./components/sales/salesview";

import PurchaseBird from "./components/purchases/purchases";
import AddPurchase from "./components/purchases/purchasesadd";
import EditPurchase from "./components/purchases/purchasesedit";
import ViewPurchase from "./components/purchases/purchasesview";

import ChicksPedigree from "./components/chicks/chickspedigree";
import ViewChicks from "./components/chicks/viewchicks";

import ProfitLoss from "./components/profitloss/profitloss";

import Genetic from "./components/genetic/genetic";


import cssFilesLoader from "./CssFilesLoader"
import logo from "./logo.png";
import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";

import Layout from "./components/layout/Layout";
const App =()=>{
    return (
      <Router>
        <cssFilesLoader>
              <Routes> 
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout><Dashboard /></Layout>} />
                <Route path="/birds" element={<Layout><AllBirds/></Layout>} />
                <Route path="/birds/create" element={<Layout><CreateBird/></Layout>} />
                <Route path="/birds/edit:id" element={<Layout><EditBird/></Layout>} />
                <Route path="/birds/view:id" element={<Layout><ViewBird /></Layout>} />
                
                <Route path="/pairs" element={<Layout><AllPair/></Layout>}/>
                <Route path="/pair/add" element={<Layout><AddPair/></Layout>}/>
                <Route path="/pair/edit:id" element={<Layout><EditPair/></Layout>}/>
                <Route path="/pair/view:id" element={<Layout><ViewPair/></Layout>} />

                <Route path="/cages" element={<Layout><Cages/></Layout>} />

                <Route path="/daybook" element={<Layout><Daybook/></Layout>} />
                <Route path="/daybook/add" element={<Layout><DaybookAdd/></Layout>} />
                <Route path="/daybook/edit:id" element={<Layout><DaybookEdit/></Layout>} />
                <Route path="/daybook/view:id" element={<Layout><DaybookView/></Layout>} />

                <Route path="/sales" element={<Layout><SoldBird/></Layout>} />
                <Route path="/sales/add" element={<Layout><AddSold/></Layout>} />
                <Route path="/sales/edit:id" element={<Layout><EditSold/></Layout>} />
                <Route path="/sales/view:id" element={<Layout><ViewSold/></Layout>} />

                <Route path="/purchases" element={<Layout><PurchaseBird/></Layout>} />
                <Route path="/purchases/add" element={<Layout><AddPurchase/></Layout>} />
                <Route path="/purchases/edit:id" element={<Layout><EditPurchase/></Layout>} />
                <Route path="/purchases/view:id" element={<Layout><ViewPurchase/></Layout>} />

                <Route path="/chicks" element={<Layout><ChicksPedigree/></Layout>} />
                <Route path="/chicks/view:id" element={<Layout><ViewChicks/></Layout>} />

                <Route path="/profitloss" element={<Layout><ProfitLoss/></Layout>} />

                <Route path="/genetic" element={<Layout><Genetic/></Layout>} />

                <Route path="/genetic" element={<Layout><Dashboard/></Layout>} />
              
              </Routes>
        </cssFilesLoader>
      </Router>
    );
}
export default App;