import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

interface CheckBoxProps {
  isSelected: boolean;
  onValueChange: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isSelected, onValueChange }) => {
  return (
    <AntDesign
      name={isSelected ? 'checkcircle' : 'checkcircleo'}
      size={24}
      color="black"
      onPress={onValueChange}
    />
  );
};

export default CheckBox;
