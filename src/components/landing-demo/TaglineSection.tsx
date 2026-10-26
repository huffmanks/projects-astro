const TaglineSection = () => {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-10 px-10 py-16 sm:flex-row">
      <div className="flex items-center gap-3">
        <div className="h-0.5 w-6 bg-orange-400"></div>
        <div className="text-orange-400">Latest works</div>
      </div>
      <div className="text-center text-3xl font-bold sm:text-left">
        <div>Products that we</div>
        <div>build for solving problems</div>
      </div>
    </section>
  );
};

export default TaglineSection;
