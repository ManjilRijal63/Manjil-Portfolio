type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500">
      {text}
    </button>
  );
}