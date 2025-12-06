export default function Footer() {
  return (
    <footer className="w-full py-6 mt-20 border-t border-cyan-500/10 bg-[#020812]/60 backdrop-blur-sm">
      <p className="text-center text-xs md:text-sm text-cyan-300/70">
        © {new Date().getFullYear()} Afreeda Asad. All Rights Reserved.
      </p>
    </footer>
  );
}
