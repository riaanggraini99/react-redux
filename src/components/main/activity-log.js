import React, { Component } from 'react'

export default class ActivityLog extends Component {
    render() {
        return (
            <div className="activity-log">
                <div className="row">
                    <div className="col-md-6">
                        <div className="correct-answer">
                            Correct Answers: 0
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="total-questions">
                            Total questions: 0

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
