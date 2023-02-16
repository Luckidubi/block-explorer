import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Account from "./pages/Account";
import BlockDetails from "./pages/BlockDetails";
import BlocksPage from "./pages/BlocksPage";
import Home from "./pages/Home";
import TransactionDetails from "./pages/TransactionDetails";
import TransactionsPage from "./pages/TransactionsPage";


function App() {


  return (
    <>
<Routes>
  <Route element={<Layout/>}>
<Route path="/" element={<Home/>}/>
<Route path="/account" element={<Account/>}/>
<Route path="/blocks" element={<BlocksPage/>}/>
<Route path="/txns/block/:id" element={<TransactionsPage/>}/>

<Route path="/blocks/:id" element={<BlockDetails/>}/>
<Route path="/txns/:id" element={<TransactionDetails/>}/>

  </Route>
</Routes>
    </>
  );
}

export default App;
