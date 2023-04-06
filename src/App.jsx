import { useRef, useState } from "react";
import backspace from "./assets/backspace.png";
import png from "./assets/Virtual Urdu Keyboard.png";

function App() {
  const [word, setWord] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [select, setSelect] = useState(false);
  const input = useRef(null);

  const handleMouseDown = () => {
    setWord(word.slice(0, word.length - 1));
    const timeId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setWord((word) => word.slice(0, word.length - 1));
      }, 50);
      setIntervalId(intervalId);
    }, 500);

    setTimeoutId(timeId);
  };

  const handleMouseUp = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeout(null);
    }
  };

  const download = () => {
    const text = input.current.value;

    if (text.length > 0) {
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      console.log(url);
      var link = document.createElement("a");
      link.download = "Virtual-Urdu-Keyboard.txt";
      link.href = url;
      link.click();

      URL.revokeObjectURL(url);
    } else {
      alert("Please type something in order to save it.");
    }
  };

  const selectAll = () => {
    input.current.select();
    setSelect(true);
  };

  const copy = () => {
    select
      ? navigator.clipboard
          .writeText(input.current.value)
          .then(() => console.log("Text copied to clipboard"))
          .catch((err) => console.error("Error copying text", err))
      : "";
  };

  return (
    <>
      <div className="flex flex-col gap-16 pt-12 sm:gap-10 sm:p-3">
        <nav className="flex justify-center items-center">
          <a href="/">
            <img
              src={png}
              alt="Virtual Urdu Keyboard"
              className="w-[200px] sm:w-[300px] md:w-[350px] m-auto rounded-2xl"
            />
          </a>
        </nav>
        <main className="h-full flex flex-col items-center justify-center gap-3 sm:gap-4 ">
          <section className="w-[96vw] sm:w-[93vw] flex gap-1 sm:gap-4 text-white px-2">
            <button
              className="bg-zinc-800 border-2 border-zinc-700 text-white rounded-lg  px-2 sm:px-5 py-1 text-sm sm:text-xl uppercase font-semibold hover:shadow-xl duration-200"
              onClick={selectAll}
            >
              Select All
            </button>
            <button
              className="bg-zinc-800 border-2 border-zinc-700 text-white rounded-lg  px-2 sm:px-5 py-1 text-sm sm:text-xl uppercase font-semibold hover:shadow-xl duration-200"
              onClick={copy}
            >
              Copy
            </button>
            <button
              className="bg-zinc-800 border-2 border-zinc-700 text-white rounded-lg  px-2 sm:px-5 py-1 text-sm sm:text-xl uppercase font-semibold hover:shadow-xl duration-200"
              onClick={() => setWord("")}
            >
              Clear All
            </button>
            <button
              className="flex flex-row justify-center gap-1 items-center bg-zinc-800 border-2 border-zinc-700 text-white rounded-lg  px-2 sm:px-5 py-1 text-sm sm:text-xl uppercase font-semibold hover:shadow-xl duration-200"
              onClick={download}
            >
              Save text <span class="material-symbols-outlined">download</span>
            </button>
          </section>
          <section className="w-[96vw] sm:w-[93vw] border border-zinc-400 px-2 py-3 rounded-md bg-zinc-200">
            <textarea
              type="text"
              ref={input}
              className="border border-[#808080] px-6 py-3 min-h-[60px] text-lg sm:text-xl md:text-2xl text-right w-full rounded-lg focus:outline-none my-1"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />

            <div className="flex flex-col gap-[3px] sm:gap-[4px] sm:text-xl md:text-2xl w-full">
              <ul className="flex flex-row-reverse gap-[2px] sm:gap-[3px] md:gap-[4px]">
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <img
                    src={backspace}
                    alt="back"
                    className="w-[16px] h-[16px] sm:w-[26px] md:w-[35px] sm:h-[26px] md:h-[35px]"
                  />
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  آ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ا
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ب
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  پ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ت
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ٹ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ث
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ج
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  چ
                </li>
              </ul>
              <ul className="flex flex-row-reverse gap-[2px] sm:gap-[3px] md:gap-[4px]">
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ھ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ح
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  خ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  د
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ڈ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ذ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ر
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ڑ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ز
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ژ
                </li>
              </ul>
              <ul className="flex flex-row-reverse gap-[2px] sm:gap-[3px] md:gap-[4px]">
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + "\n");
                  }}
                >
                  Enter
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  س
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ش
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ص
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ض
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ط
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ظ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ع
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  غ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ف
                </li>
              </ul>
              <ul className="flex flex-row-reverse gap-[2px] sm:gap-[3px] md:gap-[4px]">
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ق
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ک
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  گ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ل
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  م
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ن
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  و
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ہ
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ی
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ے
                </li>
              </ul>
              <ul className="flex flex-row-reverse gap-[2px] sm:gap-[3px] md:gap-[4px]">
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  .
                </li>
                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ،
                </li>

                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  -
                </li>
                <li
                  className="space p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  {" "}
                </li>

                <li
                  className="p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ؟
                </li>
                <li
                  className="text-2xl p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  َ
                </li>
                <li
                  className="text-2xl p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ِ
                </li>
                <li
                  className="text-2xl p-1 sm:p-2 md:p-3 lg:p-4"
                  onClick={(e) => {
                    setWord(word + e.target.innerHTML);
                  }}
                >
                  ُ
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
      <footer className="m-auto flex items-center justify-center mt-4">
        <a
          href="https://hamdan-k.me"
          className="mx-1 hover:underline duration-300"
        >
          &#169;Hamdan-Khan
        </a>
        <a
          href="https://github.com/Hamdan-Khan/virtual-urdu-keyboard"
          className="mx-1 flex hover:font-medium items-center justify-center duration-300"
        >
          <span class="material-symbols-outlined mb-1">star</span>Star this repo
        </a>
      </footer>
    </>
  );
}

export default App;
