import React from "react";

import './Collapse.scoped.scss';

interface CollapseProps {
  FirstBtnH4: string;
  FirstBtnH3: string;
  FirstBtnP: string;
  SecondBtnH4: string;
  SecondBtnH3: string;
  SecondBtnP: string;
}
interface CollapseState {
  FirstcollapsRotation: string;
  SecondcollapsRotation: string;
}

class Collapse extends React.Component<CollapseProps, CollapseState> {
  constructor(props: CollapseProps) {
    super(props)
    this.state = { FirstcollapsRotation: "none", SecondcollapsRotation: "none" }
  }
  expandFirst = (e: React.FocusEvent<HTMLElement>): void => {
    this.setState({ FirstcollapsRotation: "open", SecondcollapsRotation: "close" })
  }

  expandSecond = (e: React.FocusEvent<HTMLElement>): void => {
    this.setState({ FirstcollapsRotation: "close", SecondcollapsRotation: "open" })
  }

  resetAll = (e: React.FocusEvent<HTMLElement>): void => {
    this.setState({ FirstcollapsRotation: "none", SecondcollapsRotation: "none" })
  }

  render = () => (
    <div className="light">
      <div className="maindiv">
        <div className={this.state.FirstcollapsRotation}>
          <div className="hoverdiv">
            <button
              onFocus={(e: React.FocusEvent<HTMLElement>) => this.expandFirst(e)}
              onBlur={(e: React.FocusEvent<HTMLElement>) => this.resetAll(e)}>
              <h4>{this.props.FirstBtnH4}</h4>
              <h3>{this.props.FirstBtnH3}</h3>
              <p>{this.props.FirstBtnP}</p>
            </button>
          </div>
        </div>
        <div className={this.state.SecondcollapsRotation}>
          <div className="hoverdiv">
            <button
              onFocus={(e: React.FocusEvent<HTMLElement>) => this.expandSecond(e)}
              onBlur={(e: React.FocusEvent<HTMLElement>) => this.resetAll(e)}>
              <h4>{this.props.SecondBtnH4}</h4>
              <h3>{this.props.SecondBtnH3}</h3>
              <p>{this.props.SecondBtnP}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
