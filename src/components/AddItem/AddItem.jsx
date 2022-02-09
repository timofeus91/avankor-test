import React, {useState} from "react";
import './AddItem.css';

const AddItem = ({addNewItemInState}) => {
    const [textForNewItem, setTextForNewItem] = useState('');

    const onSubmitTaskForm = (event) => {
        event.preventDefault();
        addNewItemInState(textForNewItem);
        setTextForNewItem('');

    };


    return (
        <section className="add-item">
            <form className="add-item__form" onSubmit={onSubmitTaskForm}>
                <input
                    type="text"
                    className="add-item__input"
                    placeholder="What else do you want to add?"
                    value={textForNewItem}
                    onChange={(e) => {
                        setTextForNewItem(e.target.value);
                    }}
                />
                <button type="submit" className="add-item__submit">Add new item</button>
            </form>
        </section>
    );
};

export default AddItem;
