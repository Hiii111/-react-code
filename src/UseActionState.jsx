import React, { useActionState } from 'react';

// Action function jo form se call hoga
async function increment(prevState) {
  // 2 second ka delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const count = Number(prevState);
  return count + 1;
}

export default function UseActionState() {
  const [state, formAction, isPending] = useActionState(increment, 0);

  return (
    <form action={formAction}>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Updating...' : `Count: ${state}`}
      </button>
    </form>
  );
}