export default function Background() {
  const auroras = [
    { className: "-left-48 -top-56 h-[34rem] w-[34rem] sm:h-[46rem] sm:w-[46rem] lg:h-[60rem] lg:w-[60rem]", style: { "--drift-x": "120px", "--drift-y": "80px", "--rotate": "18deg", background: "radial-gradient(circle, rgba(16,185,129,0.34), transparent 68%)", animationDuration: "20s" } },
    { className: "right-[-18rem] top-24 h-[32rem] w-[32rem] sm:h-[44rem] sm:w-[44rem] lg:h-[56rem] lg:w-[56rem]", style: { "--drift-x": "-110px", "--drift-y": "100px", "--rotate": "-16deg", background: "radial-gradient(circle, rgba(45,212,191,0.26), transparent 70%)", animationDuration: "24s" } },
    { className: "bottom-[-24rem] left-1/3 h-[34rem] w-[34rem] sm:h-[48rem] sm:w-[48rem] lg:h-[62rem] lg:w-[62rem]", style: { "--drift-x": "90px", "--drift-y": "-120px", "--rotate": "12deg", background: "radial-gradient(circle, rgba(99,102,241,0.22), transparent 70%)", animationDuration: "28s" } },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020403]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:84px_84px] opacity-[0.09] [animation:grid-pan_24s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_50%_50%,transparent,rgba(0,0,0,0.7)_76%)]" />
      {auroras.map((aurora) => (
        <div key={aurora.className} className={`absolute rounded-full blur-[100px] sm:blur-[150px] [animation:aurora-drift_ease-in-out_infinite] ${aurora.className}`} style={aurora.style as React.CSSProperties} />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:120px_120px] [animation:twinkle_7s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent,rgba(0,0,0,0.76)_72%)]" />
    </div>
  );
}
