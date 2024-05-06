import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Flex,
} from "@chakra-ui/react";
import { auth } from "../../../lib/firebaseConfig";
import {
  PaymentData,
  addPaymentDateToFirebase,
} from "../../utils/addPaymentDateToFirebase";
import { useForm, Controller } from "react-hook-form";

const InputRecordFormTable = () => {
  const currentDate = new Date();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<PaymentData>({
    defaultValues: {
      date: currentDate,
      amount: "0",
      type: "支出",
      category: "交通費",
      paymentType: "現金",
      description: "",
      uid: auth.currentUser?.uid,
    },
    // resolver: yupResolver(Registerschema),
  });

  const onSubmit = (paymentData: PaymentData) => {
    addPaymentDateToFirebase(paymentData);
    reset();
  };

  return (
    <Flex
      direction="column"
      background="gray.100"
      padding={8}
      rounded={6}
      backgroundColor="white"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <FormControl mb="4">
            <FormLabel>購入日時</FormLabel>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, value } }) => (
                <ReactDatePicker
                  onChange={onChange}
                  selected={value}
                  dateFormat="yyyy/MM/dd"
                  locale="ja"
                />
              )}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>金額</FormLabel>
            <Input
              {...register("amount")}
              placeholder="金額を入力してください"
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl mb="4">
            <FormLabel>収支タイプ</FormLabel>
            <Select {...register("type")}>
              <option value="支出">支出</option>
              <option value="収入">収入</option>
            </Select>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>カテゴリー</FormLabel>
            <Select {...register("category")}>
              <option value="交通費">交通費</option>
              <option value="日用品">日用品</option>
            </Select>
          </FormControl>
        </Flex>

        <Flex>
          <FormControl mb="4">
            <FormLabel>支払い方法</FormLabel>
            <Select {...register("paymentType")}>
              <option value="現金">現金</option>
              <option value="クレジット">クレジット</option>
              <option value="QRコード">QRコード</option>
            </Select>
          </FormControl>
          <FormControl mb="4">
            <FormLabel>説明</FormLabel>
            <Input
              type="text"
              {...register("description")}
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
