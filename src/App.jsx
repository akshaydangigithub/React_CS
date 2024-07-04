// import React from "react";

// const App = () => {
//   const SubmitHandler = (e) => {
//     e.preventDefault();

//     const { name, email, phone } = e.target;

//     const user = {
//       name: name.value,
//       email: email.value,
//       phone: phone.value,
//     };

//     console.log(user);
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold mt-10 text-center">Form Handling</h1>

//       <form
//         className="mt-10 flex items-center justify-center flex-col"
//         onSubmit={SubmitHandler}
//       >
//         <input type="text" name="name" placeholder="Enter your name" />
//         <input type="email" name="email" placeholder="Enter your email" />
//         <input type="number" name="phone" placeholder="Enter your phone" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const SubmitHandler = (e) => {
//     e.preventDefault();

//     const user = {
//       name,
//       email,
//       phone,
//     };

//     console.log(user);
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold mt-10 text-center">Form Handling</h1>

//       <form
//         className="mt-10 flex items-center justify-center flex-col"
//         onSubmit={SubmitHandler}
//       >
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Enter your phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <>
      <h1 className="text-3xl font-bold mt-10 text-center">Form Handling</h1>

      <form
        className="mt-10 flex items-center justify-center"
        onSubmit={SubmitHandler}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
