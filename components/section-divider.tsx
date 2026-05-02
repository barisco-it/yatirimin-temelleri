interface Props {
  className?: string
}

export function SectionDivider({ className = "my-16" }: Props) {
  return <hr className={`w-full border-0 border-t border-border ${className}`} />
}
