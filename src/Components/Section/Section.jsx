const Section = ({id, name, children}) => {
  return (
    <section id={id} className="container my-5 text-center">
      <h1 className="mb-5">{name}</h1>
      {children}
    </section>
  );
};

export default Section;
