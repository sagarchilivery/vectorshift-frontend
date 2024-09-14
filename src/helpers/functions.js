// helper.functions.js

export const isValidJavaScriptVariable = (name) => {
  // Regular expression to match a valid JavaScript variable name
  const variableNamePattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  return variableNamePattern.test(name);
};
