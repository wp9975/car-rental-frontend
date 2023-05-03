import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Stats = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [startCountUp, setStartCountUp] = useState(Array(6).fill(false));

  const handleAnimationComplete = (index) => {
    setStartCountUp((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <section className="p-4 mx-auto my-4 rounded-md shadow-md max-w-screen-2xl">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Dlaczego my?</h2>
        <p className="mt-4 sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere
          libero harum sequi.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 m-8 md:grid-cols-3" ref={ref}>
        {[
          { title: "Flota ponad", subtitle: "samochodów", value: 200 },
          { title: "Ponad", subtitle: "zadowolonych klientów", value: 20000 },
          { title: "Biura w", subtitle: "miastach w Polsce", value: 9 },
          { title: "", subtitle: "Całodobowa obsługa", value: 24 },
          { title: "", subtitle: "Bezpłatne odwołanie rezerwacji", value: 0 },
          { title: "", subtitle: "Brak limitu kilometrów", value: 0 },
        ].map((stat, index) => (
          <motion.div
            className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
            key={index}
            custom={index}
            animate={controls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.1,
                  onComplete: () => handleAnimationComplete(i),
                },
              }),
            }}
          >
            <dt className="text-lg font-medium">{stat.title}</dt>

            <dd className="text-4xl font-extrabold md:text-5xl">
              {startCountUp[index] && (
                <CountUp end={stat.value} duration={2} />
              )}
            </dd>
            <dt className="order-last text-lg font-medium">{stat.subtitle}</dt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Stats;
           
