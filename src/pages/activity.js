import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestion } from '../actions/questions'
import Log from '../components/main/activity-log'
import QuestionInfo from '../components/main/QuestionInfo'

class Activity extends Component {

    componentWillMount() {
        this.props.fetchQuestion();
    }
    render() {
        return (
            <div>
                <Log />
                <QuestionInfo />
            </div>
        )
    }
}

export default connect(null, { fetchQuestion })(Activity)
