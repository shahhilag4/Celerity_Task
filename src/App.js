import "./App.css";
import Header from "./component/header/Header";
import Header2 from "./component/header2/Header2";
import MainHeader from "./component/mainheader/MainHeader";
import Summary from "./component/summary/Summary";
import Services from "./component/services/Services";
import BookingSummary from "./component/bookingsummary/BookingSummary";
import City from "./component/summary/City";
import Progress from "./component/progress/Progress";
import Progress2 from "./component/progress2/Progress2";
import Button from "./component/bottom/Button";
import Bottom from "./component/bottom/Bottom";
import Listing from "./component/listings/listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainHeader />
              <Summary />
              <Services />
              <Bottom />
              <Button />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <>
              <Header2 />
              <Progress />
              <BookingSummary />
              <Button />
            </>
          }
        />
        <Route
          path="/listing"
          element={
            <>
              <Header />
              <Progress2 />
              <City />
              <Listing />
              <Button />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
