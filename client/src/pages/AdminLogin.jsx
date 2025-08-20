import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    // Get input values by name attribute
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (
      name === "tom" &&
      email === "tom@gmail.com" &&
      password === "1234"
    ) {
      // Save to state
      setIsAdmin(true);

      // Save to localStorage (persist after refresh)
      localStorage.setItem("isAdmin", "true");

      // Redirect to Bavin page
      navigate("/bavinProductPage");
    } else {
      alert("Invalid login details");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 bg-white shadow-md p-6 rounded-lg w-[300px]"
      >
        <h2 className="text-xl font-bold text-center mb-2">Admin Login</h2>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      {/* Optional logout button */}
      <button
        onClick={handleLogout}
        className="mt-4 text-red-500 underline"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminLogin;
