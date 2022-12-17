export const formatSearchBarValue = (value: string) => {
  if (value.includes(" ")) {
    const arrayOfString = value.split(" ");
    const newValue = arrayOfString.join("").toLowerCase();

    return newValue;
  }

  const newValue = value.toLowerCase();

  return newValue;
};
