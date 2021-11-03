import { useState, useEffect } from "react";
import CategoryForm from "./CategoryForm";
import Image from 'next/image';

export default function AddCategoryButton(props) {   
    const [isClicked, setIsClicked] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (isUpdate) {
            const timer = setTimeout(() => {
                setIsUpdate(false);
                window.location.reload();
            }, 500);
            
        }
        //window.location.reload();
    }, [isUpdate])

    function handleUpdate(evt) {
        evt.preventDefault();
        setIsClicked(false);
        setIsUpdate(true);
    } 
    
    function handleCancelClick(evt) {
        evt.preventDefault();
        setIsClicked(false);
    }

    function checkIfClicked() {
        if (isClicked) {
            return (
                <CategoryForm
                    onCancelClick={(evt) => {handleCancelClick(evt)}}
                    onFormSubmit={(evt) => {handleUpdate(evt)}}
                />
            )
        } else {
            return (
                <button className="bg-yellow-600 rounded" onClick={() => setIsClicked(true)}><Image src="/addIcon.png" height="40" width="40"></Image></button>
            )
        }
    }

    return (
    <div>
      {checkIfClicked()}
    </div>
  )
}
