// SUMMARY - Wraps each section in a container with a header
// PROPS - All come from a specific section
const Section = ({ id, grid, name, children }) => {
  return (
    <section id={id} className="py-4">
      <div className={`container text-center ${grid}`}>
        {/* Adds < /> to each header */}
        <h1 className="mb-4">{name}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;