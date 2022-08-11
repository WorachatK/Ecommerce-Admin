import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((state)=>state.user.currentUser)
  console.log(user);
  const admin = true
  return (
    <BrowserRouter>
      {admin && (
        <>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          {user ? (
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/products" element={<ProductList />}/>
            <Route path="/product/:productId" element={<Product />}/>
            <Route path="/newproduct" element={<NewProduct />}/>
            <Route path="/login" element={<Navigate to="/" />}/>
          </Routes>
          ):(
            <Login/>
          )}
          
        </div>
      </>
      ) }
    </BrowserRouter>
  );
}

export default App;
