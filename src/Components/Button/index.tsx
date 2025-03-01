export const Button = ({
  title,
  style,
  action,
}: {
  title: string;
  action?: () => void;
  style?: string;
}) => {
  return (
    <button
      onClick={action}
      className={
        style
          ? style
          : "p-2 px-4 rounded-full justify-center items-center  bg-dark text-white"
      }
    >
      <p>{title}</p>
    </button>
  );
};
