import { useState } from "react";
import "./index.css";
/*
TODO:
comment
add to github
create live demo on github
How to create nice github repos
make sure I understand what is going on
*/

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What is the theory that says that there is only the physical world, nothing beyond this world exists? ",
    answer: "Metaphysics"
  },
  {
    id: 7336,
    question: "Who is the existentialist that wrote Being and Nothingness?",
    answer: "Jean Paul Sarte"
  },
  {
    id: 8832,
    question: "What is the educational style that utilizes conversations wherein students are asked things that challenge their assumptions?",
    answer: "Socratic Method"
  },
  {
    id: 1297,
    question: "Which branch of philosophy focuses on art and the fundamental nature of things like beauty?",
    answer: "Aesthetics"
  },
  {
    id: 9103,
    question: "Which philosopher famously thought our consciousness originated in our mind, which existed separately from the physical body?",
    answer: "Rene Descartes"
  },
  {
    id: 2002,
    question:
      "Which philosophical branch is primarily concerned with issues relating to morality?",
    answer: "Ethics"
  }
];

function FlashCards() {
  //Set the state variable
  const [activeCard, setActive] = useState(null);

  //Use the state variable
  function handleCardClick(cardId){
    setActive(cardId !== activeCard ? cardId : null)
  }

  //On click pass the card id into the handleCard function
  //Set the value of activeCard to the id of the clicked card
  //For classname, if the card is set as the active card, apply the active className
  return(
    <div className="flashcards">
        {questions.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card.id)}
          className={card.id === activeCard ? "active" : ""}
          >
            <p>{card.id === activeCard ? card.answer : card.question}</p>
          </div>
        ))}
    </div>
  )
}

