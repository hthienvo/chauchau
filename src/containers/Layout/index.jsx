/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NotificationSystem from 'rc-notification';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './sidebar/Sidebar';
import SidebarMobile from './topbar_with_navigation/sidebar_mobile/SidebarMobile';
import Customizer from './customizer/Customizer';
import { BasicNotification } from '../../shared/components/Notification';
import { changeMobileSidebarVisibility, changeSidebarVisibility } from '../../redux/actions/sidebarActions';
import { changeThemeToDark, changeThemeToLight } from '../../redux/actions/themeActions';
import { changeBorderRadius, toggleBoxShadow, toggleTopNavigation } from '../../redux/actions/customizerActions';
import { CustomizerProps, SidebarProps, ThemeProps } from '../../shared/prop-types/ReducerProps';

let notification = null;

const showNotification = () => {
  notification.notice({
    content: <BasicNotification
      title="👋 Welcome to the EasyDev!"
      message="You have successfully registered in the EasyDev. Now you can start to explore the dashboard
                interface with a bunch of components and applications. Enjoy!"
    />,
    duration: 5,
    closable: true,
    style: { top: 0, left: 'calc(100vw - 100%)' },
    className: 'right-up',
  });
};

class Layout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
    customizer: CustomizerProps.isRequired,
    theme: ThemeProps.isRequired,
  };

  componentDidMount() {
    NotificationSystem.newInstance({}, n => notification = n);
    setTimeout(() => showNotification(), 700);
  }

  componentWillUnmount() {
    notification.destroy();
  }

  changeSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    const { dispatch } = this.props;
    dispatch(changeThemeToLight());
  };

  toggleTopNavigation = () => {
    const { dispatch } = this.props;
    dispatch(toggleTopNavigation());
  };

  changeBorderRadius = () => {
    const { dispatch } = this.props;
    dispatch(changeBorderRadius());
  };

  toggleBoxShadow = () => {
    const { dispatch } = this.props;
    dispatch(toggleBoxShadow());
  };

  render() {
    const { customizer, sidebar, theme } = this.props;
    const layoutClass = classNames({
      layout: true,
      'layout--collapse': sidebar.collapse,
      'layout--top-navigation': customizer.topNavigation,
    });

    return (
      <div className={layoutClass}>
        <Customizer
          customizer={customizer}
          sidebar={sidebar}
          theme={theme}
          changeSidebarVisibility={this.changeSidebarVisibility}
          toggleTopNavigation={this.toggleTopNavigation}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
          changeBorderRadius={this.changeBorderRadius}
          toggleBoxShadow={this.toggleBoxShadow}
        />
        {customizer.topNavigation
          ? (
            <TopbarWithNavigation
              changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
            />
          )
          : (
            <Topbar
              changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
              changeSidebarVisibility={this.changeSidebarVisibility}
            />
          )
        }
        {customizer.topNavigation
          ? (
            <SidebarMobile
              sidebar={sidebar}
              changeToDark={this.changeToDark}
              changeToLight={this.changeToLight}
              changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
            />
          )
          : (
            <Sidebar
              sidebar={sidebar}
              changeToDark={this.changeToDark}
              changeToLight={this.changeToLight}
              changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
            />
          )
        }
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  customizer: state.customizer,
  sidebar: state.sidebar,
  theme: state.theme,
}))(Layout));
