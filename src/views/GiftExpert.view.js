import { React, useState } from 'react';
import { UiAddCategory } from '../shared/components/ui/UiAddCategory.component';
import { GifGrid } from './../shared/components/gif/GifGrid.component';

export const ViewGiftExpert = () => {
  const [categories, setCategories] = useState([
    'One punch',
  ]);

  const onAddCategory = () => {
    // categories.push('valorant');
    // setCategories(categories);

    setCategories([...categories, 'valorant']); // no muta el estado
    console.log(categories);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <UiAddCategory setCategories={setCategories} />
      <hr></hr>

      <button onClick={onAddCategory}>Add</button>

      <ol>
        {categories.map((cat, i) => (
          // <li key={cat + i}>{cat}</li>
          <GifGrid key={cat + i} category={cat} />
        ))}
      </ol>
    </>
  );
};
