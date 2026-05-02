export default function PageHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-16 animate-fade-up animate-fill-both">
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-mono font-medium tracking-[0.15em] uppercase rounded-full border border-[#00e5ff]/30 text-[#00e5ff] bg-[#00e5ff]/5 mb-4">
          {tag}
        </span>
      )}
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-navy-900 dark:text-cream-50 leading-tight mb-5">
        {title}
      </h1>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-base md:text-lg text-navy-500 dark:text-cream-200/50 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#00e5ff]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#00e5ff]" />
      </div>
    </div>
  );
}