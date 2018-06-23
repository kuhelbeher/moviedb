import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage } from './actions';

const Toggle = props => (
  <div>
    {props.messageVisibility && <p>You will be seeing this on toggle</p>}
    <button onClick={props.toggleMessage}>Toggle me
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
