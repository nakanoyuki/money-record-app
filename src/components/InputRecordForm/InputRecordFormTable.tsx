import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Flex,
  Text,
} from "@chakra-ui/react";
import { auth } from "../../../lib/firebaseConfig";
import { addPaymentDateToFirebase } from "../../utils/addPaymentDateToFirebase";

const InputRecordFormTable = () => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [description, setDescription] = useState("");

  const currentDate = new Date();
  const getCurrentMonth = currentDate.getMonth() + 1;

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handlePaymentTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentType(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const paymentData = {
      date: date,
      amount: amount,
      type: type,
      category: category,
      paymentType: paymentType,
      description: description,
      uid: auth.currentUser?.uid,
    };

    addPaymentDateToFirebase(paymentData); // フォームデータをFirebaseに追加

    // フォームの入力をリセット
    setDate(new Date());
    setAmount("");
    setType("");
    setCategory("");
    setPaymentType("");
    setDescription("");
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background="gray.100"
        padding={8}
        rounded={6}
        w="80%"
        backgroundColor="white"
      >
        <Text fontSize="md">今月{getCurrentMonth}月の収支</Text>
        <form onSubmit={handleSubmit}>
          <Flex>
            <FormControl mb="4">
              <FormLabel>購入日時</FormLabel>
              <DatePicker selected={date} onChange={handleDateChange} />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>金額</FormLabel>
              <Input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="金額を入力してください"
              />
            </FormControl>
          </Flex>
          <Flex>
            <FormControl mb="4">
              <FormLabel>収支タイプ</FormLabel>
              <Select value={type} onChange={handleTypeChange}>
                <option value="expense">支出</option>
                <option value="income">収入</option>
              </Select>
            </FormControl>
            <FormControl mb="4">
              <FormLabel>カテゴリー</FormLabel>
              <Select value={category} onChange={handleCategoryChange}>
                <option value="交通費">交通費</option>
                <option value="日用品">日用品</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex>
            <FormControl mb="4">
              <FormLabel>支払い方法</FormLabel>
              <Select value={paymentType} onChange={handlePaymentTypeChange}>
                <option value="現金">現金</option>
                <option value="クレジット">クレジット</option>
                <option value="QRコード">QRコード</option>
              </Select>
            </FormControl>
            <FormControl mb="4">
              <FormLabel>説明</FormLabel>
              <Input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="説明を入力してください"
              />
            </FormControl>
          </Flex>

          <Button
            fontSize="lg"
            mt={4}
            w="100%"
            backgroundColor="#4169e1"
            color="white"
            type="submit"
          >
            送信
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default InputRecordFormTable;
