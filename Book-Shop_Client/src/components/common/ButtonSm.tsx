const ButtonSm = ({ text }: any) => {
  return (
    <button
      type="submit"
      className="border border-[#003060] hover:bg-[#003060] hover:text-white p-[6px] md:px-3 md:py-2 rounded-md md:font-semibold "
    >
      {text}
    </button>
  );
};

export default ButtonSm;
