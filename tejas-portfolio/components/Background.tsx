"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      {/* Aurora 1 */}
      <div
        className="absolute -top-64 -left-40 w-[1100px] h-[1100px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.28) 0%, transparent 70%)",
          animation: "aurora1 18s ease-in-out infinite",
        }}
      />

      {/* Aurora 2 */}
      <div
        className="absolute top-20 right-[-250px] w-[900px] h-[900px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
          animation: "aurora2 22s ease-in-out infinite",
        }}
      />

      {/* Aurora 3 */}
      <div
        className="absolute bottom-[-300px] left-1/4 w-[1000px] h-[1000px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          animation: "aurora3 24s ease-in-out infinite",
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 noise opacity-[0.03]" />

      {/* Stars */}
      <div className="stars" />

    </div>
  );
}