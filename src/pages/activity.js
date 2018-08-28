import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestion } from '../actions/questions'
import Log from '../components/main/activity-log'
import QuestionInfo from '../components/main/QuestionInfo'
import Loader from '../components/main/loader'
import SkipQuestion from '../components/main/SkipQuestion'

class Activity extends Component {

    componentWillMount() {
        this.props.fetchQuestion();
    }
    // showQuestion(question) {
    //     if (question === null) {
    //         return (
    //             <h3>processing data...</h3>
    //         )
    //     } else {
    //         return (
    //             <ul>
    //                 <li>answer :{question.answer}</li>
    //                 <li>id: {question.id}</li>
    //                 <li>description: {question.description}</li>
    //                 </ul>
    //         )
    //     }
    // }
    render() {
        console.log(this.props.question + "hahahhahahahha")
        return (
            <div>
                {this.props.question ? (
                    <div>
                    <Log />
                    <QuestionInfo
                        id={this.props.question.id}
                        description={this.props.question.description}
                        category={this.props.question.category} />
                </div>
                ) :
                <Loader />
            }

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
