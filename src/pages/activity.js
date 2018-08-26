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
        console.log('transformed state : ' + this.props.question)
        return (
            <div>
                <Log />
                <QuestionInfo />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        question: state.questions.question
    }
}

export default connect(mapStateToProps, { fetchQuestion })(Activity)
