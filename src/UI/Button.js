function Button(children) {
   return  <button type={children.type} className={`${children.styles} button`}>{children.title}</button>
}

export default Button;