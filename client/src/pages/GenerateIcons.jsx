export default function GenerateIcons() {
  const colors_array = [
    {
      name: "Purple",
      color: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-600",
    },
    {
      name: "Fuchsia",
      color: "bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-fuchsia-700",
    },
    {
      name: "Pink",
      color: "bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700",
    },
    {
      name: "Rose",
      color: "bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700",
    },
    {
      name: "Violet",
      color: "bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700",
    },
    {
      name: "Indigo",
      color: "bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      name: "Blue",
      color: "bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      name: "Sky",
      color: "bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700",
    },
    {
      name: "Cyan",
      color: "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700",
    },
    {
      name: "Teal",
      color: "bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700",
    },
    {
      name: "Emerald",
      color: "bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700",
    },
    {
      name: "Lime",
      color: "bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700",
    },
    {
      name: "Yellow",
      color: "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700",
    },
    {
      name: "Amber",
      color: "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700",
    },
    {
      name: "Orange",
      color: "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700",
    },
    {
      name: "Red",
      color: "bg-gradient-to-r from-red-500 via-red-600 to-red-700",
    },
    {
      name: "Stone",
      color: "bg-gradient-to-r from-stone-800 via-stone-900 to-stone-950",
    },
    {
      name: "Zinc",
      color: "bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400",
    },
  ];

  // console.log(colors_array);

  return (
    <section className="">
      <div className="w-full flex flex-col justify-start">
        {/* text box */}
        <div className="max-w-2xl">
          <h1 className="text-lg lg:text-xl font-bold">
            Ignite the spellbinding journey
          </h1>
          <p className="mt-3 text-xs lg:text-sm text-gray-300">
            Where your imagination takes flight and your icons come alive with
            enchantment. Unleash the magic of creation and embark on an
            extraordinary visual adventure like never before.
          </p>
        </div>
        <form>
          {/* input box  */}
          <div className="w-full mt-10 flex flex-col max-w-2xl gap-3">
            <label className="text-sm">
              So, what do you want ? Enter your prompt.
            </label>
            <input
              type="text"
              placeholder="Ignite the AI's ingenuity with your input"
              className=" w-full flex rounded-[5px] mt-1 p-3 text-xs lg:text-sm placeholder:text-gray-400 bg-gray-800 outline-0 text-gray-100"
            />
          </div>
          {/* choose basic colors  */}
          <div className="w-full mt-10 max-w-2xl flex flex-col gap-3">
            <h1 className="text-sm">
              Select the color you want your icon to be
            </h1>

            <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
              {colors_array.map((item) => {
                return (
                  <button
                    className={`h-[4.8rem] md:h-24 w-[4.8rem] md:w-24 ${item.color} flex items-center justify-center rounded-lg border border-gray-300 border-opacity-10 shadow-md shadow-gray-950`}
                  >
                    <span
                      className={`${
                        item.name === "Zinc" ? "text-gray-900" : "text-gray-200"
                      } text-sm font-semibold`}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* choose style */}
          {/* generated icon field  */}
        </form>
      </div>
    </section>
  );
}
