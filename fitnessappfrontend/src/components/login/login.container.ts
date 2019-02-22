import { connect } from 'react-redux';
import { LoginComponent } from './login.component';
import { IState } from '../../redux/interfaces';
import { updateCredentials } from '../../redux/actions/session.action';
import { login } from '../../redux/actions/session.action';

const mapStateToProps = (state: IState) => {
    return {
        session: state.session
    };
}

const mapDispatchtoProps = {
    updateCredentials,
    login
};

export default connect(mapStateToProps, mapDispatchtoProps)(LoginComponent);