import React from "react";

import FaqCard from "./subcomponents/FaqCard";

const data = [
  {
    id: 1,
    question: "Jakie dokumenty potrzebuję do wynajmu samochodu?",
    answer:
      "Aby wynająć samochód, potrzebujesz ważnego prawa jazdy oraz dowodu osobistego lub paszportu.",
  },
  {
    id: 2,
    question: "Jak długo mogę wypożyczyć samochód?",
    answer:
      "Okres wypożyczenia zależy od Twoich potrzeb. Oferujemy wynajem na godziny, dni, tygodnie i nawet miesiące.",
  },
  {
    id: 3,
    question: "Czy mogę zwrócić samochód w innej lokalizacji niż ta, w której go wynająłem?",
    answer:
      "Tak, oferujemy możliwość zwrotu samochodu w innej lokalizacji. Należy jednak pamiętać, że może to wiązać się z dodatkowymi kosztami. Prosimy o kontakt z naszym biurem obsługi klienta w celu uzyskania więcej informacji.",
  },
  {
    id: 4,
    question: "What features are included?",
    answer:
      "Etiam egestas fringilla enim, id convallis lectus laoreet at Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
  },
];

const Faq = () => {
  

  

  return (
    <div className="bg-snow">
      <div className="container px-4 py-6 mx-auto  xl:max-w-7xl lg:px-8 lg:py-14">
        <div className="text-center">
          <div className="mb-1 text-sm font-bold tracking-wider text-purple-700 uppercase">
            Odpowiadamy na
          </div>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Najczęściej zadawane pytania
          </h2>
        </div>

        <div className="flex flex-col">
          {data.map((item) => (
            <div key={item.id} className="mt-6 space-y-3">
                  <FaqCard question={item.question} answer={item.answer}/> 
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;
