import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./routes/Header";
import View from "./routes/View";
import Add from "./routes/Add";
import PageNotFound from "./routes/PageNotFound";
import Item from "./routes/Item";
import Edit from "./routes/Edit";
import ItemDefault from "./routes/ItemDefault";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";

function App() {
  return (
    <ProductProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/view" element={<View />}>
              <Route index element={<ItemDefault />} />
              <Route path=":id" element={<Item />} />
              <Route path=":id/:edit" element={<Edit />} />
            </Route>
            <Route path="/add" element={<Add />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </ProductProvider>
  );
}

export default App;
