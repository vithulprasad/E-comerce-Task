import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import User from "./Routes/user";
import Admin from "./Routes/admin";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
       <Toaster position="top-center" reverseOrder={false}/> 
      <Router>
       
        <Suspense fallback={<h1 className="al">loading.......</h1>}>
          <Routes>
            <Route path="/*" element={<User />} />
          </Routes>
        </Suspense>

  
        <Suspense fallback={<h1 className="al">loading......</h1>}>
          <Routes>
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
