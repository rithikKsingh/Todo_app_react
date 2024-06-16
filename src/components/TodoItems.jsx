const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <>
      {todoItems.map((items, index) => (
        <div className="container text-center" key={index}>
          <div className="row kg-row">
            <div className="col-6">{items.task}</div>
            <div className="col-4">{items.dueDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-success kg-button"
                onClick={() => onDeleteItem(items)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItems;
