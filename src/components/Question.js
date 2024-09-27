import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import Options from './Options';

const Question = () => {
    const { questions, index } = useQuiz();
    const question = questions.at(index);

   
    if (!question) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} />
        </div>
    );
}

export default Question;
