import {
  HashRouter,
  NavLink, Outlet, Route,
  Routes,
  useParams
} from 'react-router-dom';
import './App.css';


const Home = () => <p>Home page</p>;
const Todo = () => <p>Todo page</p>;
const Login = () => <p>Login page</p>;
const Register = () => <p>Register page</p>;
const Error = () => <p>Error page</p>;
const Post = () => {
  return (
    <div>
      <h3>Post page</h3>
      <Outlet />
    </div>
  );
}


const PostId = () => {
  let params = useParams();
  return <p>Post ID: {params.userId}</p>;
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>Back</p>
          </NavLink>
          <NavLink to="/register">
            <p>Register page</p>
          </NavLink>
          <NavLink to="/login">
            <p>Login page</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo page</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post page</p>
          </NavLink>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Post" element={<Post />}>
            <Route path=":userId" element={<PostId />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
