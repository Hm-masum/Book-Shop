const ButtonBig = ({ text }: any) => {
  return (
    <button
      type="submit"
      className="primary-bg font-semibold font-title w-full rounded-lg text-center py-3 text-white"
    >
      {text}
    </button>
  );
};

export default ButtonBig;
