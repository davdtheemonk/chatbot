import { FiLoader } from "react-icons/fi";
export const Button = ({
  title,
  style,
  action,

  loading,
  icon,
  src,
}: {
  title: string;
  action?: () => void;
  style?: string;
  src?: string;
  loading?: boolean;
  icon?: string;
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
      {icon}
      {loading ? (
        <FiLoader className="w-4 h-4 animate-spin text-white" />
      ) : (
        <>
          {src && <img src={src} alt="auth-service" className="w-6 h-6" />}
          <p>{title}</p>
        </>
      )}
    </button>
  );
};
