const Button = (props) => {
  const { img, name, style, imgS, btnPerent, fnc } = props;
  return (
    <div className="flex items-center font-poppins ">
      <div className={`${btnPerent} w-full `}>
        <button onClick={fnc} className={`inline-block ${style} `} style={{}}>
          {`${name}`}
          <img className={`inline-block ${imgS}`} src={img} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Button;
