import './App.css';
import Header from './Headers/Header';
import Header2 from './Headers/Header2';
import DisplayIssues from './IssuesDisplay/DisplayIssues';
import FilterDesign from './IssuesDisplay/FilterDesign';
import TopIssue from './IssuesDisplay/TopIssue';
import NavbarGithub from './Navbar/NavbarGithub';

function App() {
  return (
    <div data-testid="main">
      <NavbarGithub/>
      <Header/>
      <Header2/>
      <FilterDesign/>
      <TopIssue/>
      <DisplayIssues/>
    </div>
  );
}

export default App;
