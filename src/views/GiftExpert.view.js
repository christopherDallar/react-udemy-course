import { React, useState } from 'react';
import { UiAddCategory } from '../shared/components/ui/UiAddCategory.component';
import { GifGrid } from './../shared/components/gif/GifGrid.component';

export const ViewGiftExpert = () => {
  const [categories, setCategories] = useState([
    'One punch',
  ]);

  const onAddCategory = (newCategory) => {
    // categories.push('valorant');
    // setCategories(categories);
    // console.log(categories);
    console.log(newCategory);
    setCategories([newCategory, ...categories]); // no muta el estado
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <UiAddCategory
        onNewCategory={(value) => onAddCategory(value)}
        // setCategories={setCategories}
      />
      <hr></hr>

      {/* <button onClick={onAddCategory}>Add</button> */}

      <ol>
        {categories.map((cat, i) => (
          // <li key={cat + i}>{cat}</li>
          <GifGrid key={cat + i} category={cat} />
        ))}
      </ol>
    </>
  );
};
