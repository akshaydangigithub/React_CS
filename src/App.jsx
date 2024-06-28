// import React, { useState } from "react";

// const App = () => {
//   const [list, setList] = useState(["Akshay", "Nikhil", "Avinash", "Manav"]);

//   let listRendring = list.map((list, index)=>{
//     return (
//       <li key={index}>
//        {index+1}. {list}
//       </li>
//     )
//   })

//   return (
//     <>
//       <main className="p-10">
//         <h1 className="font-bold text-3xl">List Rendring</h1>

//         <ul className="m-10">
//          {listRendring}
//         </ul>
//       </main>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [list, setList] = useState([
//     {
//       id: "101",
//       name: "Akshay",
//     },
//     {
//       id: "102",
//       name: "Abhinav",
//     },
//     {
//       id: "103",
//       name: "Akash",
//     },
//   ]);

//   console.log(list);

//   return (
//     <>
//       <main className="p-10">
//         <h1 className="font-bold text-3xl">List Rendring</h1>

//         <ul className="m-10">
//           {list.map((list, index) => (
//             <li key={index}>
//              {list.id}. {list.name}
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      toast.error("Name is required !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    if (email === "") {
      toast.error("Email is required !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    console.log(name, email);
  };

  return (
    <main className="p-10">
      <h1 className="font-bold text-3xl">Form Validation</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default App;
