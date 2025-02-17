const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-16">
      <p className="text-yellow-500 text-[20px] pb-4">{subHeading}</p>
      <h3 className="text-4xl font-semibold py-4  border-y-4 border-gray-300 uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
