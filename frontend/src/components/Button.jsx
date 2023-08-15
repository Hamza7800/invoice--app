const Button = ({ ...args }) => {
  return (
    <button {...args} className={args.className}>
      {args.children}
    </button>
  );
};

export default Button;
