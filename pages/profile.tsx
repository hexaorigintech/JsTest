import FormInput from '../components/FormInput';
import { FormEvent, useState } from 'react';

function getErrorMessage(input: string) {
  if (input.length > 0 && input.length < 5) return 'Minimum input length of 5 characters';
  return null;
}

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Pretending to send form data...', Object.fromEntries(new FormData(e.currentTarget).entries()));
  };

  return (
    <form className="max-w-screen-sm mx-auto m-6 p-3 space-y-3 border" onSubmit={submitForm}>
      <FormInput id="name" label="Name" onInput={setName} errorMessage={getErrorMessage(name)} />
      <FormInput id="email" label="Email" onInput={setEmail} errorMessage={getErrorMessage(email)} />
      <FormInput id="address" label="Address" onInput={setAddress} errorMessage={getErrorMessage(address)} />
      <FormInput id="country" label="Country" onInput={setCountry} errorMessage={getErrorMessage(country)} />
      <FormInput id="bio" label="About me" onInput={setBio} errorMessage={getErrorMessage(bio)} />
      <div className="text-center pt-4">
        <button type="submit" className="ml-auto border p-3">Save</button>
      </div>
    </form>
  )
}
