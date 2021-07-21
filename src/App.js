import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import less from 'less';

function App() {
  // window.less.options = {javascriptEnabled:true}
  // console.log(less)
  less.modifyVars({'primary-color':'lightgreen'})
  return (
    <div className="App">
     <Button>Test Color</Button>
    </div>
  );
}

export default App;
