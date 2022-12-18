import React, { Component,useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";

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


import cssFilesLoader from "./CssFilesLoader"
import logo from "./logo.png";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import Dashboard from "./components/dashboard/Dashboard";

const App =()=>{
  const [toggle, setToggle ] = useState(false);
   // handleToggle = this.handleToggle.bind(this);


  const handleToggle=()=>{
    setToggle(!toggle);
  }

    return (
      <Router>
        <cssFilesLoader>
        <div className={toggle === true ? 'hold-transition sidebar-mini sidebar-collapse' :
        'hold-transition sidebar-mini'}>
            <div className="wrapper">
              <Navigation toggleHandler={handleToggle}/>
              <Routes>

                <Route path="/" element={<Dashboard />} />
           
                <Route path="/login" element={<Login />} />

                <Route path="/birds" element={<AllBirds/>} />
                <Route path="/birds/create" element={<CreateBird/>} />
                <Route path="/birds/edit" element={<EditBird/>} />
                <Route path="/birds/view" element={<ViewBird />} />
                
                <Route path="/pairs" element={<AllPair/>}/>
                <Route path="/add/pair" element={<AddPair/>}/>
                <Route path="/pair/edit" element={<EditPair/>}/>
                <Route path="/pair/view" element={<ViewPair/>} />

                <Route path="/cages" element={<Cages/>} />

                <Route path="/sales" element={<SoldBird/>} />
                <Route path="/sold/add" element={<AddSold/>} />
                <Route path="/sold/edit" element={<EditSold/>} />
                <Route path="/sold/view" element={<ViewSold/>} />

                <Route path="/purchases" element={<PurchaseBird/>} />
                <Route path="/purchases/add" element={<AddPurchase/>} />
                <Route path="/purchases/edit" element={<EditPurchase/>} />
                <Route path="/purchases/view" element={<ViewPurchase/>} />

                <Route path="/chicks" element={<ChicksPedigree/>} />
                <Route path="/view/chicks" element={<ViewChicks/>} />

                <Route path="/profitloss" element={<ProfitLoss/>} />
              
              </Routes>
            </div>
          </div>
        </cssFilesLoader>
      </Router>
    );
}
export default App;