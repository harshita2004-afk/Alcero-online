// Signature brand element: thin rule with lotus accent
export default function SectionDivider({ label }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-12">
      {label && (
        <p className="text-xs uppercase tracking-[0.25em] text-rose font-medium font-body">
          {label}
        </p>
      )}
      <div className="section-divider w-full max-w-xs">
        <span className="text-rose text-sm select-none">✿</span>
      </div>
    </div>
  );
}
