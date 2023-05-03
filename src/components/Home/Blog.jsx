import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import BlogCard from './subcomponents/BlogCard';

const Blog = () => {
  const controls = useAnimation();
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const handleInView = (inView, entry) => {
    if (inView) {
      controls.start('visible');
    }
  };

  return (
    <section className="max-w-screen-2xl my-4 mx-auto p-4 rounded-md shadow-md">
      <InView as="div" onChange={handleInView} threshold={0.1}>
        <div className="p-3 md:flex md:space-x-3">
          {[
            {
              imgSrc: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
              header: 'Wypadek, co dalej?',
              description: 'Etiam egestas fringilla enim, id convallis lectus laoreet at Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
            },
            {
              imgSrc: 'https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
              header: 'Najlepszy samochód na ferie',
              description: 'Etiam egestas fringilla enim, id convallis lectus laoreet at Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
            },
            {
              imgSrc: 'https://images.unsplash.com/photo-1629898168297-c868a0d70ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhdCUyMGJlbHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              header: 'Pasy bezpieczeństwa',
              description: 'Etiam egestas fringilla enim, id convallis lectus laoreet at Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.header}
              className="md:flex"
              custom={index * 0.1}
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <BlogCard
                imgSrc={item.imgSrc}
                header={item.header}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </InView>
    </section>
  );
};

export default Blog;
