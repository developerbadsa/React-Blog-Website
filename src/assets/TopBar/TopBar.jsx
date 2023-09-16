import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
  FaSearch
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="fixed w-full top-0 ">
      <div className="flex justify-between container mx-auto py-6">
        <div className="flex items-center gap-2 mx-4 px-3">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaPinterestSquare />
          <FaInstagramSquare />
        </div>
        <ul className="flex items-center gap-4 text-xl text-slate-500">
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="write.html">Write</a></li>
            <li><a href="logout.html">Logout</a></li>
        </ul>
        <div className="flex items-center">
            <img className="w-16" src="avatar.png" alt="" />
            <FaSearch  className="text-slate-400 ml-2 text-xl"/>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
