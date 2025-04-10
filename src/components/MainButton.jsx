export default function AddButton({buttonClass, action, aria, text, image, altImage, type = 'button'}){
    return (
        <button className={buttonClass} onClick={action} aria-label={aria} type={type}>
            <img src={image} alt={altImage} />
            {text}
        </button>
    );
}