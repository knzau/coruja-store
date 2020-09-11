import React, { Component } from "react";
import axios from "axios";
import CustomButton from "../CustomButton/CustomButton";
import { ReactComponent as InstagramIcon } from "../../icons/icon-instagram.svg";
import "./InstagramButtonStyles.scss";

class InstagramButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {
        user: "ken_nzau",
      },
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `https://www.instagram.com/${this.props.username}/?__a=1`,
    })
      .then((response) => {
        this.setState({ user: response.data.graphql.user });
      })
      .catch((error) => {});
  }
  render() {
    if (this.state.user && this.props.username) {
      return (
        <a
          href={`https://www.instagram.com/${this.props.username}`}
          rel="noreferrer"
          class="Container"
        >
          <CustomButton>
            <div class="IconContainer">
              <InstagramIcon />
            </div>
            <div class="UserName">
              <div>Follow @{this.props.username}</div>
            </div>
          </CustomButton>
          <div class="Bubble">
            {this.state.user.edge_followed_by.count} followers
          </div>
        </a>
      );
    } else {
      return <div></div>;
    }
  }
}

export default InstagramButton;
