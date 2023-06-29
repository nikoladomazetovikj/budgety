function Button({ title, styles, onClick }) {
   return (
       <button type="button" className={`${styles} button`} onClick={onClick}>
          {title}
       </button>
   );
}

export default Button;
