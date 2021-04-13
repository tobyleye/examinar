import * as React from "react";
import {
  CloseButton,
  Box,
  Heading,
  VStack,
  Textarea,
  Button,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";

function Option({ option, isAnswer, onChange, onDelete, selectAnswer }) {
  return (
    <Box>
      <Box
        bg="white"
        border="1px solid"
        display="grid"
        gridTemplateColumns="1fr auto auto"
        alignItems="center"
        borderColor="gray.300"
        gridColumnGap="5px"
      >
        <Box>
          <Input
            value={option}
            border="none"
            _focus={{
              border: "none",
            }}
            onChange={(e) => onChange(e.target.value)}
          />
        </Box>
        <IconButton
          colorScheme={isAnswer ? "green" : "gray"}
          my={1}
          icon={<CheckIcon />}
          onClick={selectAnswer}
        />
        <CloseButton
          flexShrink="0"
          bg="white"
          h="full"
          borderRadius="none"
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          onClick={onDelete}
          paddingLeft={5}
          paddingRight={5}
        />
      </Box>
    </Box>
  );
}

export default React.memo(function QuestionForm({ index, question, dispatch }) {
  const { options, correctAnswer } = question;
  function setQuestion(field, value) {
    dispatch({
      type: "setQuestion",
      index,
      field,
      value,
    });
  }
  function changeOption(value, optionIndex) {
    const copy = [...options];
    copy[optionIndex] = value;
    setQuestion("options", copy);
  }

  function deleteOption(optionIndex) {
    setQuestion(
      "options",
      options.filter((q, index) => index !== optionIndex)
    );
  }

  return (
    <Box bg="gray.100" py={8}>
      <Box width="70%" mx="auto">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Heading size="md">Question {index + 1}</Heading>
          <CloseButton />
        </Box>
        <Textarea
          bg="white"
          value={question.text}
          onChange={(e) => setQuestion("text", e.target.value)}
        />

        <Box mt={3}>
          <VStack alignItems="stretch" spacing={2}>
            {options.map((opt, index) => (
              <Option
                option={opt}
                key={index}
                isAnswer={!!correctAnswer && correctAnswer === opt}
                onChange={(val) => changeOption(val, index)}
                onDelete={() => deleteOption(index)}
                selectAnswer={() => setQuestion("correctAnswer", opt)}
              />
            ))}
          </VStack>
          <Box mt={2} textAlign="right">
            <Button
              variant="link"
              onClick={() =>
                setQuestion("options", question.options.concat(""))
              }
            >
              <Box color="blue" display="flex" alignItems="center">
                Add option <AddIcon ml={1} h={3} />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
