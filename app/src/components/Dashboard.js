import * as React from "react";
import { Button, Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import QuestionForm from "./QuestionForm";

function reducer(state, { type, ...action }) {
  switch (type) {
    case "addNewQuestion":
      return {
        ...state,
        questions: state.questions.concat({
          text: "",
          options: [],
          correctAnswer: "",
        }),
      };
    case "setQuestion":
      const { index, field, value } = action;
      return {
        ...state,
        questions: state.questions.map((q, idx) =>
          idx === index ? { ...q, [field]: value } : q
        ),
      };
    default:
      return state;
  }
}

export default function Dashboard() {
  const [state, dispatch] = React.useReducer(reducer, { questions: [] });
  const { questions } = state;
  function addNewQuestion() {
    if (questions.length === 10) {
      alert(
        "Sorry you can only add up to 10 questions, to add more kindly consider becoming a premium member"
      );
      return;
    }
    dispatch({ type: "addNewQuestion" });
  }

  return (
    <Box pl={200}>
      <Sidebar width={200} />
      <Box px={8} pt={6}>
        <Topbar />
        <Box as="main" mt={10} pb={8}>
          <Box as="header">
            <Heading size="lg">Create a test</Heading>
            <Text color="gray.500">lorem ipsum....</Text>
          </Box>
          <Divider mb={10} mt={2} />

          <VStack spacing={4} alignItems="stretch" mb={5}>
            {state.questions.map((question, index) => (
              <QuestionForm
                key={index}
                index={index}
                question={question}
                dispatch={dispatch}
              />
            ))}
          </VStack>

          <Button
            onClick={addNewQuestion}
            py={6}
            colorScheme="blue"
            isFullWidth
          >
            Add question <AddIcon ml={2} h={4} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
