import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import * as actions from "../store/actions";

class Header extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.authLogout());
  };

  render() {
    return (
      <header className="d-flex align-items-center justify-content-between">
        <h1 className="logo my-0 font-weight-normal h4">
          <Link to="/">Actuals Propogation</Link>
        </h1>

        {this.props.isAuthenticated && (
          <div className="navigation d-flex justify-content-end">
            <Nav>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.handleLogout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
