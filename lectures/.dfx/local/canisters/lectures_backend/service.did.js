export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'lettersCounter' : IDL.Func([IDL.Text], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
