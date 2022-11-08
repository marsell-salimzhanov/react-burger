import { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import pagesStyles from './pages.module.css';
import BurgerIngridients from '../components/burger-ingridients/burger-ingridients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import Modal from '../components/modal/modal.jsx';
import OrderDetails from '../components/order-details/order-details';
import {
  CLOSE_ORDER_DETAILS,
} from '../services/actions/order';


import {

  CLEAR_SELECTED_CONSTRUCTOR_INGRIDIENTS
} from '../services/actions/constructor';

function MainPage() {
  const dispatch = useDispatch();
  const { orderDetailsOpened } = useSelector(state => state.order);

  const closePopupOrder = useCallback(() => {
    dispatch({
      type: CLOSE_ORDER_DETAILS
    });
    dispatch({
      type: CLEAR_SELECTED_CONSTRUCTOR_INGRIDIENTS
    });

  }, [dispatch], shallowEqual);





  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className={`pt-10 mr-10 ${pagesStyles.main_container}`}>
          <BurgerIngridients />
        </div>
        <div className={`pt-25 ${pagesStyles.main_container}`}>
          <BurgerConstructor />
        </div>
      </DndProvider>
      <Modal title='' opened={orderDetailsOpened} onClose={closePopupOrder}>
        <OrderDetails />
      </Modal>
    </>

  );
}

export default MainPage;