
import { useState, useEffect } from "react";
import { fetchCategories } from "../utils/api";

function MenuDropDown ({ setUserSelection }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      fetchCategories().then((cat) => {
          setCategories(cat);
      })
  }, [])

  function handleChange(event) {
    setUserSelection(event.target.value)
  }

  return (
    <form>
      <label>
        <select onChange={handleChange}>
          <option value="">All</option>
          {categories.map((category) => {
            return (
              <option key={category.slug} value={category.slug}>
                {category.slug}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
}

export default MenuDropDown;