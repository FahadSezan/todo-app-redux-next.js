import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  // state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('incomplete');
  // create dispatch method
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setStatus(todo.status);
    } else {
      setTitle('');
      setDescription('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  // function state
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description === '') {
      toast.error('Please enter a title and description');
      return;
    }
    if (title && description && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            description,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Task added successfully');
      }
      if (type === 'update') {
        if (
          todo.title !== title ||
          todo.description !== description ||
          todo.status !== status
        ) {
          dispatch(updateTodo({ ...todo, title, description, status }));
          toast.success('Task Updated successfully');
        } else {
          toast.error('No changes made');
          return;
        }
      }
      setModalOpen(false);
    }
  };
  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onKeyDown={() => setModalOpen(false)}
            onClick={() => setModalOpen(false)}
            role="button"
            tabIndex={0}
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {type === 'update' ? 'Update' : 'Add'} Todo
            </h1>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control form-control-lg shadow-none border-0 py-4 fs-4"
                id="title"
                placeholder="add your task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control form-control-lg shadow-none border-0 py-4 fs-4"
                id="description"
                placeholder="Write something"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              className="form-select w-100 form-control form-control-lg shadow-none border-0 py-4 fs-4"
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === 'update' ? 'Update' : 'Add'} Task
              </Button>
              <Button
                type="button"
                variant="secondary"
                onKeyDown={() => setModalOpen(false)}
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal;
