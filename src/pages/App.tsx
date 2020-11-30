import React from 'react';
import Collapse from '../elements/Buttons/Collapse/Collapse';
import './App.scoped.scss';


class App extends React.Component {
  render = () => (
    <div className="mainDiv">
      <div className="centralDiv">
        <Collapse FirstBtnH4="Button1: ButtonText"
          FirstBtnH3="H3:Text 1"
          FirstBtnP="P:text"
          SecondBtnH4="Button2: ButtonText"
          SecondBtnH3="H3:Text 2"
          SecondBtnP="P:text 2"
        />
          <Collapse FirstBtnH4="Button3: ButtonText"
          FirstBtnH3="H3:Text 1"
          FirstBtnP="P:text"
          SecondBtnH4="Button4: ButtonText"
          SecondBtnH3="H3:Text 2"
          SecondBtnP="P:text 2"
        />
          <Collapse FirstBtnH4="Button5: ButtonText"
          FirstBtnH3="H3:Text 1"
          FirstBtnP="P:text"
          SecondBtnH4="Button6: ButtonText"
          SecondBtnH3="H3:Text 2"
          SecondBtnP="P:text 2"
        />
      </div>
    </div>
  );
}

export default App;
