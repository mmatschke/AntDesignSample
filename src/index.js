import React from "react";
import ReactDOM from "react-dom";
import { version, Button, Steps, Icon } from "antd";
import { DatePicker, message, AutoComplete, Affix } from "antd";
import "antd/dist/antd.css";
import "./index.css";

class App extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    message.info('Selected Date: ${date ? date.format("DD.MM.YYYY") : "None"}');
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    const dataSource = ["12345", "23456", "34567"];
    const Step = Steps.Step;

    return (
      <div className="App">
        <Affix offsetTop={this.state.top}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10
              });
            }}
          >
            Affix top
          </Button>
        </Affix>
        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
        </Steps>
        <p>Current antd version: {version}</p>
        <p>Please fork this codesandbox to reproduce your issue.</p>
        <p>请 fork 这个链接来重现你碰到的问题。</p>
        <div style={{ width: 400, margin: "300px auto" }}>
          <DatePicker onChange={this.handleChange} format="DD.MM.YYYY" />
          <div style={{ marginTop: 100 }}>
            Selected Date: {date ? date.format("DD.MM.YYYY") : "None"}
          </div>
          <div>
            <AutoComplete
              dataSource={dataSource}
              placeholder="Bitte auswählen"
              style={{ width: 200, margin: "100px auto" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
