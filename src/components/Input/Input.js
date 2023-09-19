import "./Input.css";
export default function Input({ className, value, onChange }) {
  return (
    <input className={className} value={value} onChange={onChange}></input>
  );
}
