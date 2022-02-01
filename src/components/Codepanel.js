import React, { Component } from 'react';

class Codepanel extends Component {
    render() {
        const code=this.props.code;
        return (
            <div>
                <div className='problem-text'>
                    Problem
                </div>
                <div className='code-question'> 
                    {code.question}
                </div>
                <div>
                    <div className='sample-input-heading'>
                        Sample input 1
                    </div>
                    <div className='sample-input'>
                        {code.test1}
                    </div>
                    <div className='sample-output-heading'>
                        Sample output 1
                    </div>
                    <div className='sample-output'>
                        {code.answer1}
                    </div>
                </div>
                <div>
                    <div className='sample-input-heading'>
                        Sample input 2
                    </div>
                    <div className='sample-input'>
                        {code.test2}
                    </div>
                    <div className='sample-output-heading'>
                        Sample output 2
                    </div>
                    <div className='sample-output'>
                        {code.answer2}
                    </div>
                </div>


            </div>
        );
    }
}

export default Codepanel;