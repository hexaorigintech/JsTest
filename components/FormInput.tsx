type Props = {
  id: string,
  label: string,
  onInput: (input: string) => void,
  errorMessage?: string,
}

function wait(milliseconds: number) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {}
}
export default function FormInput({id, label, errorMessage, onInput}: Props) {
  // This component is a bit slow to render...
  // wait(25);

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="flex-1">{label}</label>
      <div className="flex-1">
        <input
          type="text"
          id={id}
          name={id}
          className="w-full border rounded p-2"
          onChange={(e) => onInput(e.currentTarget.value)}
        />
        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
}
