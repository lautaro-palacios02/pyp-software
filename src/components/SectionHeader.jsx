function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
