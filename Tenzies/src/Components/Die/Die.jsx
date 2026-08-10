export default function Die(props) {
  return (
    <div>
      {props.isHeld ? (
        <button
          onClick={() => {
            props.hold(props.id);
          }}
          className="cursor-pointer flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-green-400 text-[26px] font-medium text-black shadow-[0_2px_2px_rgba(0,0,0,0.2)] transition hover:bg-gray-100 active:scale-95"
        >
          {props.value}
        </button>
      ) : (
        <button
          onClick={() => {
            props.hold(props.id);
          }}
          className="cursor-pointer flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-white text-[26px] font-medium text-black shadow-[0_2px_2px_rgba(0,0,0,0.2)] transition hover:bg-gray-100 active:scale-95"
        >
          {props.value}
        </button>
      )}
    </div>
  );
}
