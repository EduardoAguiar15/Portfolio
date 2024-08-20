const ButtonProjects = ({ onClick, word, children }) => (
  <button onClick={onClick}>
    {children}
    {word}
  </button>
);
export default ButtonProjects;
