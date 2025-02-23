import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function MenuPage() {
  const { tableId } = useParams();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/menu/getDetails"
        );
        setMenu(response.data.menuItems);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMenu();
  }, []);
  return (
    <>
      <h1>Menu Item</h1>
      <main className="container">
        {menu &&
          menu.map((item, index) => {
            return (
              <div key={item._id + index} className="menu-item">
                <h4>{item.name}</h4>
                <img src={item.imageURL} />
                <button>Add to Cart</button>
              </div>
            );
          })}
      </main>
    </>
  );
}

export default MenuPage;
