const story = [
  {
    prompt: "The Shrek rave starts in an hour, and even though you already kind of look like Shrek, you are nowhere near being Shrek. What do you do?",
    options: [
      {
        prompt: "Slather on the green paint",
        nextIndex: 1
      },
      {
        prompt: "Watch the movie Shrek",
        nextIndex: 2
      }
    ]
  },
  {
    prompt: "You have slathered on the green paint. The smell is different, more 'chemically' than you remember. You read the label. It says, 'Warning: If a drop of paint gets on your skin, head to the emergency room immediately. You could die.'",
    options: [
      {
        prompt: "Head to the emergancy room?",
        nextIndex: 3
      },
      {
        prompt: "Head to the rave?",
        nextIndex: 4
      }
    ]
  },
  {
    prompt: "You've already seen the movie Shrek many, many times. But it gets better everytime. So you watch it again, but you can't watch the first one without watching the second immediately after. You watch the second one, but you can't watch the second one without watching the third one immediately after. This continues. You miss the rave.",
    options: [
      {
        prompt: "Return",
        nextIndex: 0
      },  
    ]
  },
  {
    prompt: "You walk into the emergency room and notice other Shreks have made the same mistake. Some have broke character and are pretty friendly. Others are in the corner throwing up green. One of them wants to make conversation with you. What do you do?",
    options: [
      {
        prompt: "Ignore them. You're Shrek. You're an Ogrer, a loner, a rebel.",
        nextIndex: 5
      },
      {
        prompt: "In your heart of hearts, you know you're not really Shrek. You can talk to another person who has the same interests as you. It's ok. ",
        nextIndex: 6
      }
    ]
  },
  {
    prompt: "You don't know what that paint can was talking about. You feel great. You feel like Shrek. You feel better than Shrek. You throw up a little bit, but it's green like Shrek, so it's ok?",
    options: [
      {
        prompt: "Continue to Rave?",
        nextIndex: 7
      },
      {
        prompt: "Go to Hosptial?",
        nextIndex: 3
      }
    ]
  },
  {
    prompt: "They call your name. You wait on a hospital bed for over an hour. The doctor comes to see you but looks more annoyed that they have to deal with another person covered in green paint rather than happy to meet Shrek. They call for a nurse who spends the rest of the night scraping the green off you. You miss the Shrek Rave.",
    options: [
      {
        prompt: "Game Over",
        nextIndex: 0
      },
    ]  
  },

  {
    prompt: "You begin to talk to them, but you really wish you hadn't. You're not even sure if they like Shrek. The character, not the movie. They like Shrek. They go on about their Lord Farquaad fan fiction and the time they met John Lithgow at a Shrek expo and how he is taller and nicer than you'd expect in person or something. If you could go back to 30 minutes, you would?",
    options: [
      {
        prompt: "Keep Listening",
        nextIndex: 11
      },
      {
        prompt: "Go Back 30 minutes",
        nextIndex: 3
      } 
    ]  
  },

  {
    prompt: "You stop at a Taco Bell Cantina ® for a Mountain Dew ® because it's green just like Shrek. Before you walk in, you think you see Donkey in the distance. You only have time for one.",
    options: [
      {
        prompt: "Go to Donkey",
        nextIndex: 13
      },
      {
        prompt: "Get a Mountain Dew ® becasue it's green like Shrek",
        nextIndex: 14
      } 
    ]   
  },
  {
    prompt: "Prompt 9",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 15
      },
      {
        prompt: "Index 10",
        nextIndex: 16
      } 
    ]   
  },
  {
    prompt: "Prompt 10",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 17
      },
      {
        prompt: "Index 10",
        nextIndex: 18
      } 
    ]   
  },
  {
    prompt: "Prompt 11",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 19
      },
      {
        prompt: "Index 10",
        nextIndex: 20
      } 
    ]   
  },
  {
    prompt: ".....they continue. They are going through a divorce. Their wife is done with the expos, the Lord Farquaad fan fiction, and everything Shrek-related. He says his wife gave him an ultimatum, either her and the kids or Shrek. He chose Shrek. He goes on to say other than slathering himself in toxic paint he couldn't be happier. But he doesn't look very happy. If you could go back an hour would you?",
    options: [
      {
        prompt: "Keep listening",
        nextIndex: 21
      },
      {
        prompt: "Go back an hour",
        nextIndex: 3
      } 
    ]   
  },
  {
    prompt: "Prompt 13",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 23
      },
      {
        prompt: "Index 10",
        nextIndex: 24
      } 
    ]   
  },
  {
    prompt: "Prompt 14",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 25
      },
      {
        prompt: "Index 10",
        nextIndex: 26
      } 
    ]   
  },
  {
    prompt: "You get the largest cup and fill it with green like Shrek. An elderly person comes up to you and offers you an onion. Do you take it?",
    options: [
      {
        prompt: "Yes ogres are like onions",
        nextIndex: 27
      },
      {
        prompt: "Index 10",
        nextIndex: 28
      } 
    ]   
  },
  {
    prompt: "Prompt 16",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 29
      },
      {
        prompt: "Index 10",
        nextIndex: 30
      } 
    ]   
  },
  {
    prompt: "Prompt 17",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 31
      },
      {
        prompt: "Index 10",
        nextIndex: 32
      } 
    ]   
  },
  {
    prompt: "Prompt 18",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 33
      },
      {
        prompt: "Index 10",
        nextIndex: 34
      } 
    ]   
  },
  {
    prompt: "Prompt 19",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 20",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 21",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "..They continue. They say their grandmother or someone is sick and in hospice. They feel bad that they choose to go to the Shrek Rave rather than visit them and find it ironic that they ended up in the hospital anyway. They ask you if they can cry on your shoulder?",
    options: [
      {
        prompt: "Let this Shrek cry on your shoulders",
        nextIndex: 35
      },
      {
        prompt: "No you are cosplaying as Shrek an anti-social ogre who does not want strangers tears on their brown mini vest and tunic",
        nextIndex: 5
      } 
    ]   
  },
  {
    prompt: "Prompt 23",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 24",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 25",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 26",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 27",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 28",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 29",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 30",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 20",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 31",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 32",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 33",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 34",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "You let the sad Shrek cry on your shoulders. This Shrek's tears wash away the toxic paint from both your skin. With the power of this new and weird friendship, you are able to put your heads together and beeline it to the Shrek Rave.",
    options: [
      {
        prompt: "YOU WIN!",
        nextIndex: -1
      },
      // {
      //   prompt: "Index 10",
      //   nextIndex: 36
      // } 
    ]   
  },
  {
    prompt: "Prompt 36",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 37",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 38",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 39",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  {
    prompt: "Prompt 40",
    options: [
      {
        prompt: "Index 9",
        nextIndex: 35
      },
      {
        prompt: "Index 10",
        nextIndex: 36
      } 
    ]   
  },
  

]

export {
  story
}