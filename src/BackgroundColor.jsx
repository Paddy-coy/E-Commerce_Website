const BackgroundColor = ({ children }) => {
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-start text-white">
      {children}
    </div>
  );
};

export default BackgroundColor;

