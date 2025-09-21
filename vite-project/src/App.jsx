import Profile from "./Profile";
import "./App.css";

function App() {
  const users = [
  {
    name: "Leanne Graham",
    role: "Software Engineer",
    avatarUrl: "https://api.dicebear.com/9.x/lorelei/svg?seed=1",
  },
  {
    name: "Ervin Howell",
    role: "Frontend Developer",
    avatarUrl: "https://api.dicebear.com/9.x/lorelei/svg?seed=2",
  },
  {
    name: "Clementine Bauch",
    role: "UI/UX Designer",
    avatarUrl: "https://api.dicebear.com/9.x/lorelei/svg?seed=3",
  },
  {
    name: "Patricia Lebsack",
    role: "Backend Developer",
    avatarUrl: "https://api.dicebear.com/9.x/lorelei/svg?seed=4",
  },
  {
    name: "Chelsey Dietrich",
    role: "DevOps Engineer",
    avatarUrl: "https://api.dicebear.com/9.x/lorelei/svg?seed=5",
  },
  {
    name: "Mrs. Dennis Schulist",
    role: "QA Engineer",
    avatarUrl: "https://api.dicebear.com/9.x/lorelei/svg?seed=6",
  },
  {
    name: "Kurtis Weissnat",
    role: "Product Manager",
    avatarUrl: "https://api.dicebear.com/9.x/lorelei/svg?seed=7",
  },
];


  return (
    <div className="App">
      <h1>User Profiles</h1>
      <div className="profiles-container">
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
