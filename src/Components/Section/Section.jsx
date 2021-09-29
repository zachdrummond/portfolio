// SUMMARY - Wraps each section in a container with a header
// PROPS - All come from a specific section
const Section = ({ id, name, children }) => {
  return (
    <section id={id} className="my-5">
      <div className="container text-center">
        {/* Adds < /> to each header */}
        <h1 className="mb-5">&lt;&nbsp;{name}&nbsp;/&gt;</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
