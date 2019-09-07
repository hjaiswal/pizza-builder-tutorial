import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to eat"
    },
    {
      id: "Asking options to eat",
      message: "Hi {previousValue}, Please click on what you want to eat!",
      trigger: "Displaying options to eat"
    },
    {
      id: "Displaying options to eat",
      options: [
        {
          value: "pizza",
          label: "Pizza",
          trigger: "Asking for Tomatoes in Pizza"
        },
        { value: "burger", label: "Burger", trigger: "Burger Not available" }
      ]
    },
    {
      id: "Burger Not available",
      message:
        "Sorry, We don't have burger available at the moment. Would you like to try our pizza?",
      trigger: "Asking for pizza after burger"
    },
    {
      id: "Asking for pizza after burger",
      options: [
        { value: true, label: "Yes", trigger: "Asking for Tomatoes in Pizza" },
        { value: false, label: "No", trigger: "Done" }
      ]
    },
    {
      id: "Asking for Tomatoes in Pizza",
      message: "Would you like to have tomatoes in your pizza",
      trigger: "Adding Tomatoes in Pizza"
    },
    {
      id: "Adding Tomatoes in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            props.eventHandler("tomato");
            return "Asking for Mushroom in Pizza";
          }
        },
        { value: false, label: "No", trigger: "Asking for Mushroom in Pizza" }
      ]
    },

    {
      id: "Asking for Mushroom in Pizza",
      message: "Would you like to have mushroom in your pizza",
      trigger: "Adding Mushroom in Pizza"
    },

    {
      id: "Adding Mushroom in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            props.eventHandler("mushroom");
            return "Asking for Corn in Pizza";
          }
        },
        { value: false, label: "No", trigger: "Asking for Corn in Pizza" }
      ]
    },
    {
      id: "Asking for Corn in Pizza",
      message: "Would you like to have corn in your pizza",
      trigger: "Adding Corn in Pizza"
    },

    {
      id: "Adding Corn in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            props.eventHandler("corn");
            return "Asking for Veggies in Pizza";
          }
        },
        { value: false, label: "No", trigger: "Asking for Veggies in Pizza" }
      ]
    },

    {
      id: "Asking for Veggies in Pizza",
      message: "Would you like to have veggies in your pizza",
      trigger: "Adding Veggies in Pizza"
    },

    {
      id: "Adding Veggies in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            props.eventHandler("veggie");
            return "Done";
          }
        },
        { value: false, label: "No", trigger: "Done" }
      ]
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
