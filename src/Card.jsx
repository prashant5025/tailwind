import React from "react";

const Card = () => {
  return (


      <div className="m-8 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"></svg>
          </span>
        </div>
        <h3 className="text-slate-800 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          iure inventore molestias fugit delectus aliquid consequuntur modi?
          Placeat tenetur voluptates eum veniam corrupti consequuntur esse iste
          quaerat doloremque ab ad eos soluta fugiat atque aliquid sequi saepe
          omnis distinctio ipsum ut rem, quidem dolore! Eum maxime et commodi
          dolores fugit.
        </p>
      </div>

    

  );
};

export default Card;
