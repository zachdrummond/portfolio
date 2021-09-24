const Section = ({id, name, children}) => {
  return (
    <section id={id} className="container mt-5 text-center">
      <h1>{name}</h1>
      {children}
    </section>
  );
};

export default Section;
