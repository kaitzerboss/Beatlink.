export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-xl", md: "text-2xl", lg: "text-4xl" };
  return (
    <span className={`${sizes[size]} font-black tracking-tight select-none`}>
      <span style={{ color: "#1DB954" }}>beat</span>
      <span style={{ color: "#ffffff" }}>link</span>
      <span style={{ color: "#1DB954" }}>.</span>
    </span>
  );
}
