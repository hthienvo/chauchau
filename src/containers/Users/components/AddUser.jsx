import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const background = `${process.env.PUBLIC_URL}/img/user/adduser.png`;

const AddUser = ({ onClick }) => (
  <div className="user__adduser" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <Row>

        <form className="form quote-form" onSubmit={onClick}>
          <Col offset={6} md={6}>
            <div className="form__form-group">
              <span className="form__form-group-label">ID</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">First Name</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Middle Name</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>

            <div className="form__form-group">

              <span className="form__form-group-label">Last Name</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>
          </Col>
          <Col offset={6} md={6}>

            <div className="form__form-group">
              <span className="form__form-group-label">Email</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Address</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Role Enum</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Phone Number</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <AccountOutlineIcon />
                </div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>
          </Col>
          
          <Link className="btn btn-primary account__btn account__btn--small" to="/pages/one">Add User</Link>

        </form>
      </Row>
    </Container>
  </div>
);

AddUser.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'quote_form',
})(AddUser);
