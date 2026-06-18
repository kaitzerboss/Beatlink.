export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-2xl", md: "text-3xl", lg: "text-5xl" };
  return (
    <span className={`${sizes[size]} font-black tracking-tight select-none`}>
      <span style={{ color: "#1DB954" }}>beat</span>
      <span style={{ color: "var(--text)" }}>link</span>
      <span style={{ color: "#1DB954" }}>.</span>
    </span>
  );
}
