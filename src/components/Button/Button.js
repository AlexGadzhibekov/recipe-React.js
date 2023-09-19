import "./Button.css";
export default function Button({ className, type, value }) {
  return (
    <button className={className} type={type}>
      {value}
    </button>
  );
}
