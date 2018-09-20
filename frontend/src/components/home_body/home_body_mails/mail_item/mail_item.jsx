import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './mail_item.css';

import PopupMail from '../../../popup_mail/popup_mail';

class MailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
        }
    }

    closePopup = () => {
        this.setState({
            popup: false,
        })
    }

    onPopup = () => {
        this.setState({
            popup: true,
        })
    }

    render() {
        const { mail, sent } = this.props;
        let whoSent = '';
        if(sent) {
            whoSent = 'mail-item-me'
        } else {
            whoSent = 'mail-item-other'
        }
        return (
            <div onClick={this.onPopup} className={whoSent}>
                <h2 className='mail-item-text'>Subject: {mail.subject}</h2>
                <h3 className='mail-item-text'>Text: {mail.text}</h3>
                {this.state.popup ? <PopupMail mail={mail} closePopup={this.closePopup} /> : null}
            </div>
        )
    }
}

MailItem.propTypes = {
    mail: PropTypes.object,
    index: PropTypes.number,
}

export default MailItem;