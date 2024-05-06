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
} from "@chakra-ui/react";

const InputRecordFormTable = () => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [description, setDescription] = useState("");

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setDate(new Date());
    setAmount("");
    setType("expense");
    setDescription("");
  };

  return (
    <Flex
      direction="column"
      padding={8}
      rounded={6}
      background="gray.100"
      backgroundColor="white"
    >
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
            <Select value={type} onChange={handleTypeChange}>
              <option value="">交通費</option>
              <option value="">日用品</option>
            </Select>
          </FormControl>
        </Flex>
        <Flex>
          <FormControl mb="4">
            <FormLabel>支払い方法</FormLabel>
            <Select value={type} onChange={handleTypeChange}>
              <option value="">現金</option>
              <option value="">クレジット</option>
              <option value="">マネー</option>
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
  );
};

export default InputRecordFormTable;
