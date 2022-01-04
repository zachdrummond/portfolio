// SUMMARY - Wraps each section in a container with a header
// PROPS - All come from a specific section
const Section = ({ id, grid, name, children }) => {
  return (
    <section className="my-5">
      <div id={id} className={`container text-center ${grid} border border-5 border-primary`}>
        {/* Adds < /> to each header */}
        <h1 className="mb-5">&lt;&nbsp;{name}&nbsp;/&gt;</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
