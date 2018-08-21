import React, { Component } from 'react';

import IntroHeader from '../intro/intro_header/intro_header.js';
import InputBox from '../input_box/input_box.js'

class SignupImap extends Component {
    render() {
        return (
            <div className='signup-body'>
                <IntroHeader/>
                <form>
                    <InputBox/>
                    <InputBox/>
                </form>
            </div>
        )
    }
}

export default SignupImap;