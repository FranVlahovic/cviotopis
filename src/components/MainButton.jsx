export default function AddButton({buttonClass, action, aria, text, image, altImage, type = 'button', disabled}){
    return (
        <button className={buttonClass} onClick={action} aria-label={aria} type={type} disabled={disabled}>
            <img src={image} alt={altImage} />
            {text}
        </button>
    );
}