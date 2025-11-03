import React, { Suspense } from "react";

import Login from "../components/Login/Login";

export default function LoginPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Login />
    </Suspense>
  );
}