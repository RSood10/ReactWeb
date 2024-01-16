// import { useState, React } from "react";
// import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route element={<Body />}> */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// function HeaderwithButton() {
//   const [title, setTitle] = useState("My name is Raghav");
//   function change() {
//     setTitle("My name is " + Math.random());
//   }
//   return (
//     <div>
//       <button onClick={change}>click to change name</button>
//       <Header name={title}></Header>
//     </div>
//   );
// }

// const Header = React.memo((props) => {
//
// });
// function Header(props) {
//   // eslint-disable-next-line react/prop-types
//   return <div>{props.name}</div>;
// }

// eslint-disable-next-line react/display-name
// const Header = React.memo(function (props) {
//   // eslint-disable-next-line react/prop-types
//   return <div>{props.name}</div>;
// });
