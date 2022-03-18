import AsyncStorage from "@react-native-async-storage/async-storage";

function isJson(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export const getLocal = async (key: string, initial = "") => {
  try {
    const value: any = await AsyncStorage.getItem(key);
    const jsonValue = isJson(value) ? JSON.parse(value) : value;
    return jsonValue || initial;
  } catch (err) {
    return "";
  }
};

export const setLocal = async (key: string, value: any) => {
  const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
  return true;
};
