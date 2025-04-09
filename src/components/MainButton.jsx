import PlusIcon from "../assets/icons/plus.svg";

export default function AddButton({buttonClass, action, aria, text, image, altImage}){
    return (
        <button className={buttonClass} onClick={action} aria-label={aria} type="button">
            <img src={image} alt={altImage} />
            {text}
        </button>
    );
}