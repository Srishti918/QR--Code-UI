import "./App.css";
const App = () => {
  return (
    <div className="bg-slate-300">
    <div className="h-screen flex justify-center items-center max-w-sm mx-auto">
      <div className=" h-75 w-48 max-sm:w-78 max-sm:h-120 border-none border-slate-600 rounded-xl bg-white pt-1">
        <div className="h-47 w-47 max-sm:w-70 max-sm:h-70 mx-auto p-1.5 max-sm:pt-3">
          <img
            src="../images/image-qr-code.png"
            alt="qr-code"
            className="border-none rounded-lg "
          />
        </div>
        <div className="pl-3 pr-3 pb-3 pt-1 max-sm:p-5">
          <div>
            <div className="pl-2 pr-2">
              <p className=" text-[13px] max-sm:text-[22px] max-sm:leading-6 outfit-header text-center leading-4">
                Improve your front-end skills by building projects{" "}
              </p>
            </div>
            <div>
              <p className="pt-2 pl-1 pr-1 max-sm:p-4 max-sm:leading-5 text-center text-[9px] max-sm:text-[14px] text-slate-500 leading-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
