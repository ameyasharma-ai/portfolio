import { useState } from 'react';

interface SubmitFormState {
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  isSuccess: boolean;
  message: string;
}

export function useSubmitForm(formId: string = "mnjllele") {
  const [state, setState] = useState<SubmitFormState>({
    isSubmitting: false,
    isSubmitSuccessful: false,
    isSuccess: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(prev => ({ ...prev, isSubmitting: true }));

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setState({
          isSubmitting: false,
          isSubmitSuccessful: true,
          isSuccess: true,
          message: "You're in — I’ll get back to you shortly.",
        });
        // CRITICAL FIX: Reset the form so Formspree accepts future unique submissions
        form.reset();
      } else {
        setState({
          isSubmitting: false,
          isSubmitSuccessful: true,
          isSuccess: false,
          message: data?.errors?.[0]?.message || "Something went wrong.",
        });
      }
    } catch {
      setState({
        isSubmitting: false,
        isSubmitSuccessful: true,
        isSuccess: false,
        message: "Network error. Please try again.",
      });
    }
  };

  const resetFormState = () => {
    setState({
      isSubmitting: false,
      isSubmitSuccessful: false,
      isSuccess: false,
      message: "",
    });
  };

  return {
    ...state,
    handleSubmit,
    resetFormState,
  };
}
