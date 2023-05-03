import React from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleInView = (inView, entry) => {
    if (inView) {
      controls.start("visible");
    }
  };

  return (
    <div className="bg-snow">
      <div className="container px-4 py-6 mx-auto xl:max-w-7xl lg:px-8 lg:py-14">
        {/* ... */}
        <InView as="div" onChange={handleInView} threshold={0.1}>
          <div className="flex flex-col">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                className="mt-6 space-y-3"
                initial="hidden"
                animate={controls}
                variants={fadeIn}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <FaqCard question={item.question} answer={item.answer} />
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </div>
  );
};

export default Faq;