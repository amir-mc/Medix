import {  X } from "lucide-react";
import Image from "next/image";


const ImageEditor = ({
    onClose,
    PrviewImg,
    setting,
    setSetting,
  }: {
    onClose: () => void;
    PrviewImg: string;
    setting: {
      type: "original" | "wide" | "square";
      sensitive: boolean;
    };
    setSetting: React.Dispatch<
      React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
      }>
    >;
  }) => {
    const handleChangeSensitive = (sensitive: boolean) => {
        setSetting((prev) => ({ ...prev, sensitive }));
    };
    const handleChangeType = (type: "original" | "wide" | "square") => {
        setSetting((prev) => ({ ...prev, type }));
    };
    return (
        <div className=" fixed inset-0 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 w-full max-w-lg flex flex-col gap-6">
      

            <div className="flex items-center gap-8  justify-center">
              <X 
              onClick={onClose}
              />
              <h1 className="font-bold text-xl">Media Settings</h1>
            </div>
            <button className="py-2 px-4 rounded-full bg-white text-black font-bold" onClick={onClose}>
              Save
            </button>
      
        
          <div className="w-[300px] h-[300px] flex items-center">
            <Image
              src={PrviewImg}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                setting.type === "original"
                  ? "h-full object-contain"
                  : setting.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
          </div>
     
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleChangeType("original")}
              >
                <svg width={24} viewBox="0 0 24 24">
                  <path
                    className={
                      setting.type === "original"
                        ? "fill-iconBlue"
                        : "fill-[#e7e9ea]"
                    }
                    d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
                  />
                </svg>
                Original
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleChangeType("wide")}
              >
                <svg width={24} viewBox="0 0 24 24">
                  <path
                    className={
                      setting.type === "wide"
                        ? "fill-iconBlue"
                        : "fill-[#e7e9ea]"
                    }
                    d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"
                  />
                </svg>
                Wide
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleChangeType("square")}
              >
                <svg width={24} viewBox="0 0 24 24">
                  <path
                    className={
                      setting.type === "square"
                        ? "fill-iconBlue"
                        : "fill-[#e7e9ea]"
                    }
                    d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z"
                  />
                </svg>
                Square
              </div>
            </div>
            <div
              className={`cursor-pointer py-1 px-4 rounded-full text-black ${
                setting.sensitive ? "bg-red-500" : "bg-white"
              }`}
              onClick={() => handleChangeSensitive(!setting.sensitive)}
            >
              Sensitive
            </div>
          </div>
        </div>
      </div>
    );
  };
 
export default ImageEditor;