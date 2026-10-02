// React 18 doesn't know the `inert` attribute and drops `inert={true}`, so it
// has to be passed as a string. Switch to a plain `inert={boolean}` once the
// project is on React 19 (the installed @types/react already expect that).
export const inertProps = (isInert: boolean) =>
  (isInert ? { inert: "" } : {}) as { inert?: boolean };
