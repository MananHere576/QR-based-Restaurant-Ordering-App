import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Actions/action";

function MenuPage() {
  const { tableId } = useParams();
  const [menu, setMenu] = useState([]);

  const dispatch = useDispatch();

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

  const handleAddToItem = (event, item) => {
    dispatch(addItemToCart(tableId, item));
  };
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
                <button onClick={(event) => handleAddToItem(event, item)}>
                  Add to Cart
                </button>
              </div>
            );
          })}
      </main>
    </>
  );
}

export default MenuPage;
