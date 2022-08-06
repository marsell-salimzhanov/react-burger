import React, { useState } from 'react';
import burgerIngridientsStyles from './burger-ingridients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../utils/data.js';

function BurgerIngridients() {
  const [current, setCurrent] = useState('one');

  return (
    <>
      <h2 className='text text_type_main-large'>
        Соберите бургер
      </h2>
      <div className={`mt-5 ${burgerIngridientsStyles.tab}`}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Напитки
        </Tab>
      </div>
      <div className={`mt-10 ${burgerIngridientsStyles.items}`}>
        <p className='text text_type_main-medium mb-6'>Булки</p>
        <div className={`pl-4 pr-4 ${burgerIngridientsStyles.grid_container}`}>
          {
            data.filter(item => item.type === 'bun')
              .map((i) => (
                <div key={i._id} className={burgerIngridientsStyles.grid_element}>
                  <img src={i.image} />
                  <Counter count={1} size="default" />
                  <div className={burgerIngridientsStyles.item_price}>
                    <p className='mt-1 mb-1 mr-2'>{i.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className={`text text_type_main-default ${burgerIngridientsStyles.item_name}`}>{i.name}</p>
                </div>
              )
              )
          }
        </div>
        <p className='text text_type_main-medium mb-6 mt-10'>Соусы</p>
        <div className={`pl-4 pr-4 ${burgerIngridientsStyles.grid_container}`}>
          {
            data.filter(item => item.type === 'sauce')
              .map((i) => (
                <div key={i._id} className={burgerIngridientsStyles.grid_element}>
                  <img src={i.image} />
                  <Counter count={1} size="default" />
                  <div className={burgerIngridientsStyles.item_price}>
                    <p className='mt-1 mb-1 mr-2'>{i.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className={`text text_type_main-default ${burgerIngridientsStyles.item_name}`}>{i.name}</p>
                </div>
              )
              )
          }
        </div>
      </div>
    </>

  );
}

export default BurgerIngridients;