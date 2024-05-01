import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

type KeyboardType = "default" | "email-address" | "numeric" | "phone-pad";

interface InputFieldProps {
  label: string;
  type?: KeyboardType;
  placeholder: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "default",
  placeholder,
  onChangeText,
  isPassword = false,
}) => {
  const [value, setValue] = useState<string>("");
  const [isObscured, setObscured] = useState<boolean>(isPassword);

  const handleChangeText = (text: string) => {
    setValue(text);
    onChangeText(text);
  };

  const toggleObscured = () => {
    setObscured(!isObscured);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={type as KeyboardTypeOptions}
          secureTextEntry={isObscured}
          onChangeText={handleChangeText}
          value={value}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleObscured} style={styles.icon}>
            <MaterialIcons
              name={isObscured ? "visibility-off" : "visibility"}
              size={24}
              color="#888d"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    marginHorizontal: "auto",
  },
  label: {
    fontWeight: "700",
    color: "#444",
    fontSize: 17,
    marginBottom: 9,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#999",
    borderStyle: "solid",
    borderRadius: 6,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  icon: {
    padding: 8,
  },
});

export default InputField;
