import Sidebar from "./Components/Sidebar";
import styled from 'styled-components'
import { BrowserRouter as Router, Switch as Switching, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <Switching>
        <Route path="/" exact><HomePage /></Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;
/* background-color: var(--background-dark-grey); */
`;

export default App;