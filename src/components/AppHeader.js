import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {
  // state
  const [modalOpen, setModalOpen] = useState(false);
  // const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  // const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();
  const updateFilter = (e) => {
    // setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status" onChange={updateFilter} value={filterStatus}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
