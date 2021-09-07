const updatedEmail = (input) => {
  return { type: "EMAIL", text: input };
};
const updatedPass = (input) => {
  return { type: "PASSWORD", text: input };
};
export { updatedEmail, updatedPass };
