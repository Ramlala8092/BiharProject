function SectionTitle({
  title,
  subtitle
}) {

  return (

    <div className="text-center mb-10">

      <p className="text-green-700 font-bold uppercase tracking-widest text-sm">
        Explore Bihar
      </p>

      <h2 className="text-3xl md:text-4xl font-black mt-2">
        {title}
      </h2>

      {subtitle && (

        <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
          {subtitle}
        </p>

      )}

    </div>

  );
}

export default SectionTitle;