import React from 'react';
import ChatBot from 'react-simple-chatbot';

function CustomChatbot(props) {
  const config = {
    width: '300px',
    height: '400px',
    floating: true
  }
  
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our shop.',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please type your name.',
      trigger: 'Waiting user input for name'
    },
    {
      id: 'Waiting user input for name',
      user: true,
      trigger: 'Asking option to eat'
    },
    {
      id: 'Asking option to eat',
      message: 'Hi, {previousValue}. Glad to know you !!',
      trigger: 'Done'
    },
    // {
    //   id: 'Displaying options to eat',
    //   options: [
    //     {
    //       value: 'pizza',
    //       label: 'Pizza',
    //       trigger: 'Asking for Tomatoes in Pizza'
    //     },
    //     {
    //       value: 'burger',
    //       label: 'Burger',
    //       trigger: 'Burger Not available'
    //     }
    //   ]
    // },
    {
      id: 'Done',
      message: 'Have a great day !!',
      end: true
    }
  ];
  
  return <ChatBot steps={steps} {...config } />
}

export default CustomChatbot;




// id: identifier of the current step. It can be a string or a number. But I will recommend string as it’s more descriptive and if we decided to add a step in between, we don’t have to change the numbering. Required for any step
// message: the message that will be displayed on the chat window once the step is called
// trigger: the id of the next step to be triggered. It can also be a function returning the id of the step to go next
// end: if true indicates that this step is the last
