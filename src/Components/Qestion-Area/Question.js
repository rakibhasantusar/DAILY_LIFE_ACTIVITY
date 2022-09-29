import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h1>Question Area About React</h1>
            <h2>1.How does react work?</h2>

            <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface UI building called components.ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.It’s possible to have as many components as necessary without cluttering your code.</p>
            <hr />
            <h2>2.what is the difference between props and state in react?</h2>

            <p>
                The main difference is that state are private to a component and can be changed inside that component only while props are just static value and key for child component which is passed through parent component and can't be changed inside the child component
            </p>
            <hr />
            <h2>3.What does useeffect do without data fetching in react?</h2>
            <p>Earlier, we looked at how to express side effects that don’t require any cleanup. However, some effects do. For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak! Let’s compare how we can do it with classes and with Hooks.Hooks let us split the code based on what it is doing rather than a lifecycle method name. React will apply every effect used by the component, in the order they were specified.
            </p>
        </div>
    );
};

export default Question;