import { Form, Link, useActionData } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useSingup } from "../hooks/useSingup";
import Forminput from "../components/Forminput";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");

  return { name, email, image, password };
};

function Singup() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSingup();
  const actionData = useActionData();

  return (
    <div className="min-h-screen grid place-content-center w-full">
      <div className="mb-3">
        <form>
          <h1 className="font-bold text-3xl ">Sing up</h1>
        </form>
      </div>
      <div>
        <button
          onClick={signUpWithGoogle}
          type="button"
          className="btn btn-secondary  w-full"
        >
          <FcGoogle className="h-5 w-5" /> Singup
        </button>
      </div>
    </div>
  );
}

export default Singup;
